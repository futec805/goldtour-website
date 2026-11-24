import { X, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function LegalModal({ isOpen, onClose, type = 'privacy' }) {
  const { t } = useLanguage();
  const { legal } = siteContent;

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t(legal.privacyTitle) : t(legal.fz152Title);
  const content = isPrivacy ? t(legal.privacyText) : t(legal.fz152Text);

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="relative bg-navy-900 border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] flex flex-col"
           onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400">
              <Shield size={22} />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
              {title}
            </h3>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white p-1 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto pr-2 space-y-4 text-white/70 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
          {content}
        </div>

        <div className="pt-4 mt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-6 py-2 rounded-full text-xs sm:text-sm transition-colors"
          >
            {t({ ru: 'Понятно / Закрыть', en: 'Understood / Close' })}
          </button>
        </div>
      </div>
    </div>
  );
}
