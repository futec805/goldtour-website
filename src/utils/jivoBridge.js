// ============================================================
// jivoBridge.js — Instantly dispatches website booking, callback,
// quiz, and contact form messages into the agency Jivo app
// in both online (sendMessage) and offline (sendOfflineMessage) modes.
// ============================================================

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

function dispatchToJivoApi(payload) {
  const api = typeof window !== 'undefined' ? window.jivo_api : null;
  if (!api) return null;

  const { safeName, safeEmail, safePhone, source, fullText, customCards } = payload;

  try {
    if (typeof api.setCustomData === 'function' && customCards.length > 0) {
      api.setCustomData(customCards);
    }
  } catch (e) {
    console.warn('Jivo setCustomData failed:', e);
  }

  const mode = typeof api.chatMode === 'function' ? api.chatMode() : 'offline';

  if (mode === 'offline' && typeof api.sendOfflineMessage === 'function') {
    // Do NOT call setContactInfo right before sendOfflineMessage, because both invoke
    // sendApiIntroduce internally and Jivo rejects duplicate introductions in the same session.
    const offlinePayload = {
      name: safeName,
      email: safeEmail,
      description: source || 'Заявка с сайта Золотой тур',
      message: fullText,
    };
    if (safePhone) {
      offlinePayload.phone = safePhone;
    }

    try {
      let res = api.sendOfflineMessage(offlinePayload);
      if (res?.result !== 'ok' && offlinePayload.phone) {
        // Retry without phone field if phone formatting tripped Jivo's validator
        // (phone number is still included in message body).
        const { phone: _omitted, ...fallbackPayload } = offlinePayload;
        res = api.sendOfflineMessage(fallbackPayload);
      }
      return { delivered: res?.result === 'ok', mode: 'offline', result: res };
    } catch (e) {
      console.warn('Jivo sendOfflineMessage failed:', e);
    }
  }

  // Online mode: attach contact details and send the formatted message text
  // directly via jivo_api.sendMessage() so it reaches the manager app immediately.
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

  if (typeof api.sendMessage === 'function') {
    try {
      const res = api.sendMessage(fullText);
      if (res?.result === 'ok') {
        return { delivered: true, mode: 'online', result: res };
      }
    } catch (e) {
      console.warn('Jivo sendMessage failed:', e);
    }
  }

  try {
    if (typeof api.open === 'function') {
      api.open();
      return { delivered: true, mode: 'online', openedChat: true };
    }
  } catch (e) {
    console.warn('Jivo open failed:', e);
  }

  return { delivered: false, mode };
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

  const payload = { safeName, safeEmail, safePhone, source, fullText, customCards };

  if (typeof window !== 'undefined' && window.jivo_api) {
    const outcome = dispatchToJivoApi(payload);
    return { ...outcome, formattedMessage: fullText };
  }

  // Script still loading — queue to send as soon as Jivo finishes initializing
  pendingLead = payload;
  return { delivered: true, mode: 'queued', formattedMessage: fullText };
}
