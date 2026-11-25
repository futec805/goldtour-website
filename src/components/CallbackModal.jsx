import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import { sendLeadToJivo } from '../utils/jivoBridge';

export default function CallbackModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const { callbackModal, company } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [jivoResult, setJivoResult] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setJivoResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = sendLeadToJivo({
      source: 'Заказ обратного звонка',
      name,
      phone,
      preferredContact: 'Обратный звонок',
      message: 'Прошу перезвонить по поводу подбора тура.',
    });
    setJivoResult(res);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setJivoResult(null);
      onClose();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
         onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-navy-900 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl"
           onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Phone size={28} className="text-navy-950" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {t(callbackModal.title)}
              </h3>
              <p className="text-white/60 text-sm">{t(callbackModal.subtitle)}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder={t(callbackModal.namePlaceholder)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                required />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder={t(callbackModal.phonePlaceholder)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                required />
              <button type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3 rounded-full transition-all shadow-lg shadow-gold-500/20">
                {t(callbackModal.submitButton)}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-white text-lg font-medium mb-4">{t(callbackModal.successMessage)}</p>
            {jivoResult?.formattedMessage && (
              <a
                href={`${company.whatsappUrl}?text=${encodeURIComponent(jivoResult.formattedMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle size={14} />
                {t({ ru: 'Дублировать в WhatsApp', en: 'Also send via WhatsApp' })}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
