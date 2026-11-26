// ============================================================
// jivoBridge.js — Dispatches website booking, callback, quiz, and
// contact leads to BOTH:
//   1. Email (goldtour2@yandex.ru via FormSubmit AJAX endpoint)
//   2. Live Jivo widget (CZr1VUWsXM) with WebSocket connection retries
// ============================================================

const TARGET_EMAIL = 'goldtour2@yandex.ru';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;
const FALLBACK_EMAIL = 'zayavka@goldtour-nn.ru';
let pendingLead = null;

if (typeof window !== 'undefined') {
  const prevCallback = window.jivo_onLoadCallback;
  window.jivo_onLoadCallback = function () {
    window.__jivoReady = true;
    if (typeof prevCallback === 'function') {
      try {
        prevCallback();
      } catch (e) {
        console.warn('Previous jivo_onLoadCallback error:', e);
      }
    }
    if (pendingLead) {
      const lead = pendingLead;
      pendingLead = null;
      dispatchToJivoApi(lead);
    }
  };
}

function buildCustomData({ source, phone, tourSummary, customFields }) {
  const cards = [];
  if (source) cards.push({ title: 'Источник заявки', content: source });
  if (tourSummary) cards.push({ title: 'Выбранный тур', content: tourSummary });
  if (phone) cards.push({ title: 'Телефон', content: phone });
  if (Array.isArray(customFields)) {
    customFields.forEach((item) => {
      if (item && item.content) {
        cards.push({ title: item.title || 'Детали', content: String(item.content) });
      }
    });
  }
  return cards;
}

function sendViaEmail({ source, safeName, email, safePhone, tourSummary, message, timestamp }) {
  if (typeof window === 'undefined' || typeof fetch !== 'function') return Promise.resolve(null);

  const payload = {
    _subject: `[Золотой тур] ${source} — ${safeName}`,
    _template: 'table',
    _captcha: 'false',
    Источник: source,
    Имя: safeName,
    Телефон: safePhone || 'Не указан',
    Email: email && email.trim() ? email.trim() : 'Не указан',
    'Тур / Детали': tourSummary || 'Не указано',
    Сообщение: message || 'Заявка с сайта Золотой тур',
    'Время (МСК)': timestamp,
  };

  if (email && email.trim()) {
    payload._replyto = email.trim();
  }

  return fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json().catch(() => ({ ok: res.ok })))
    .catch((err) => {
      console.warn('FormSubmit email dispatch failed:', err);
      return { ok: false, error: err?.message };
    });
}

function pushJivoMetadata(api, { safeName, safeEmail, safePhone, fullText, customCards }) {
  try {
    if (typeof api.setCustomData === 'function' && customCards.length > 0) {
      api.setCustomData(customCards);
    }
  } catch (e) {
    console.warn('Jivo setCustomData failed:', e);
  }

  try {
    if (typeof api.setContactInfo === 'function') {
      const contactPayload = {
        name: safeName,
        email: safeEmail,
        description: fullText,
      };
      if (safePhone) contactPayload.phone = safePhone;
      api.setContactInfo(contactPayload);
    }
  } catch (e) {
    console.warn('Jivo setContactInfo failed:', e);
  }
}

function dispatchToJivoApi(payload) {
  const api = typeof window !== 'undefined' ? window.jivo_api : null;
  if (!api) return null;

  const { safeName, safeEmail, safePhone, source, fullText, customCards } = payload;
  const mode = typeof api.chatMode === 'function' ? api.chatMode() : 'offline';

  if (mode === 'offline' && typeof api.sendOfflineMessage === 'function') {
    const offlinePayload = {
      name: safeName,
      email: safeEmail,
      description: source || 'Заявка с сайта Золотой тур',
      message: fullText,
    };
    if (safePhone) {
      offlinePayload.phone = safePhone;
    }

    const attemptOffline = () => {
      try {
        let res = api.sendOfflineMessage(offlinePayload);
        if (res?.result !== 'ok' && offlinePayload.phone) {
          const { phone: _omitted, ...fallbackPayload } = offlinePayload;
          res = api.sendOfflineMessage(fallbackPayload);
        }
        return res;
      } catch (e) {
        console.warn('Jivo sendOfflineMessage failed:', e);
        return null;
      }
    };

    try {
      if (typeof api.setCustomData === 'function' && customCards.length > 0) {
        api.setCustomData(customCards);
      }
    } catch (e) {
      console.warn('Jivo setCustomData failed:', e);
    }

    const res = attemptOffline();
    // Retry once after socket handshake if widget was closed before submit
    setTimeout(() => {
      try {
        if (typeof api.open === 'function' && (!res || res.result !== 'ok')) {
          api.open();
          setTimeout(attemptOffline, 1200);
        }
      } catch (e) {
        console.warn('Jivo offline retry error:', e);
      }
    }, 300);

    return { delivered: res?.result === 'ok', mode: 'offline', result: res };
  }

  // Online mode:
  // 1) Calling sendMessage() first forces Jivo's WebSocket to openConnect() asynchronously.
  // 2) Because setCustomData/setContactInfo drop events if called while WebSocket is still closed,
  //    send them now AND re-send after 1.5s & 3.5s once the WebSocket finishes handshaking.
  let messageResult = null;
  if (typeof api.sendMessage === 'function') {
    try {
      messageResult = api.sendMessage(fullText);
    } catch (e) {
      console.warn('Jivo sendMessage failed:', e);
    }
  }

  pushJivoMetadata(api, payload);
  setTimeout(() => pushJivoMetadata(api, payload), 1500);
  setTimeout(() => pushJivoMetadata(api, payload), 3500);

  return {
    delivered: messageResult?.result === 'ok',
    mode: 'online',
    result: messageResult,
  };
}

export function sendLeadToJivo({
  source = 'Сайт Золотой тур',
  name = '',
  email = '',
  phone = '',
  tourSummary = '',
  message = '',
  customFields = [],
}) {
  const safeName = (name || '').trim() || 'Клиент с сайта';
  const safePhone = (phone || '').trim();
  const safeEmail = (email || '').trim() || FALLBACK_EMAIL;
  const timestamp = new Date().toLocaleTimeString('ru-RU', {
    timeZone: 'Europe/Moscow',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const lines = [
    `[${source} • ${timestamp} МСК]`,
    `Имя: ${safeName}`,
    safePhone ? `Телефон: ${safePhone}` : null,
    email && email.trim() ? `Email: ${email.trim()}` : null,
    tourSummary ? `Тур / Направление: ${tourSummary}` : null,
    message ? `Сообщение: ${message}` : null,
  ].filter(Boolean);

  const fullText = lines.join('\n');
  const customCards = buildCustomData({ source, phone: safePhone, tourSummary, customFields });

  // 1. Always fire reliable HTTPS email POST to goldtour2@yandex.ru
  const emailPromise = sendViaEmail({
    source,
    safeName,
    email,
    safePhone,
    tourSummary,
    message,
    timestamp,
  });

  // 2. Also dispatch to Jivo live widget (with WebSocket connect retries)
  const payload = { safeName, safeEmail, safePhone, source, fullText, customCards };
  let jivoOutcome = null;

  if (typeof window !== 'undefined' && window.jivo_api) {
    jivoOutcome = dispatchToJivoApi(payload);
  } else {
    pendingLead = payload;
    jivoOutcome = { delivered: true, mode: 'queued' };
  }

  return { ...jivoOutcome, emailPromise, formattedMessage: fullText };
}
