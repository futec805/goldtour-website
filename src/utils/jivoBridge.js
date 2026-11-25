// ============================================================
// jivoBridge.js — Routes website booking, callback, quiz, and
// contact form submissions directly into the agency Jivo app.
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

function buildCustomData({ source, phone, preferredContact, tourSummary, customFields }) {
  const cards = [];
  if (source) cards.push({ title: 'Источник заявки', content: source });
  if (tourSummary) cards.push({ title: 'Выбранный тур', content: tourSummary });
  if (phone) cards.push({ title: 'Телефон', content: phone });
  if (preferredContact) cards.push({ title: 'Способ связи', content: preferredContact });
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

  try {
    if (typeof api.setContactInfo === 'function') {
      api.setContactInfo({
        name: safeName,
        email: safeEmail,
        phone: safePhone,
        description: fullText,
      });
    }
  } catch (e) {
    console.warn('Jivo setContactInfo failed:', e);
  }

  const mode = typeof api.chatMode === 'function' ? api.chatMode() : 'offline';

  if (mode === 'offline' && typeof api.sendOfflineMessage === 'function') {
    try {
      const res = api.sendOfflineMessage({
        name: safeName,
        email: safeEmail,
        phone: safePhone,
        description: source || 'Заявка с сайта Золотой тур',
        message: fullText,
      });
      return { delivered: res?.result === 'ok', mode: 'offline', result: res };
    } catch (e) {
      console.warn('Jivo sendOfflineMessage failed:', e);
    }
  }

  // Online mode (or fallback if offline send wasn't available):
  // Open live chat window with all visitor details & tour context pre-attached.
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
  preferredContact = '',
  tourSummary = '',
  message = '',
  customFields = [],
}) {
  const safeName = (name || '').trim() || 'Клиент с сайта';
  const safePhone = (phone || '').trim();
  const safeEmail = (email || '').trim() || FALLBACK_EMAIL;

  const lines = [
    `[${source}]`,
    `Имя: ${safeName}`,
    safePhone ? `Телефон: ${safePhone}` : null,
    email && email.trim() ? `Email: ${email.trim()}` : null,
    preferredContact ? `Предпочтительный способ связи: ${preferredContact}` : null,
    tourSummary ? `Тур / Направление: ${tourSummary}` : null,
    message ? `Сообщение: ${message}` : null,
  ].filter(Boolean);

  const fullText = lines.join('\n');
  const customCards = buildCustomData({ source, phone: safePhone, preferredContact, tourSummary, customFields });

  const payload = { safeName, safeEmail, safePhone, source, fullText, customCards };

  if (typeof window !== 'undefined' && window.jivo_api) {
    const outcome = dispatchToJivoApi(payload);
    return { ...outcome, formattedMessage: fullText };
  }

  // Script still loading — queue to send as soon as Jivo finishes initializing
  pendingLead = payload;
  return { delivered: true, mode: 'queued', formattedMessage: fullText };
}
