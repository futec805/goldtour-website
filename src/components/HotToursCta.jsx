import { Flame, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function HotToursCta() {
  const { t } = useLanguage();
  const { hotToursCta, company } = siteContent;

  return (
    <section className="py-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/5" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold-500/5" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          <Flame size={16} />
          {t({ ru: 'Не пропустите выгодные предложения', en: "Don't miss the best deals" })}
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          {t(hotToursCta.title)}
        </h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          {t(hotToursCta.subtitle)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={company.telegramUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg">
            <Send size={18} /> {t(hotToursCta.telegramButton)}
          </a>
          <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg">
            <MessageCircle size={18} /> {t(hotToursCta.whatsappButton)}
          </a>
        </div>
      </div>
    </section>
  );
}
