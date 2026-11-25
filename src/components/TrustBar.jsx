import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function TrustBar() {
  const { t } = useLanguage();
  const { trustBar } = siteContent;

  return (
    <section className="relative -mt-14 z-20 max-w-5xl mx-auto px-4">
      <div className="bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {trustBar.items.map((item, i) => (
          <div key={i} className="text-center py-6 sm:py-8 px-4 hover:bg-white/[0.03] transition-colors">
            <div className="text-3xl sm:text-4xl font-heading font-black text-gold-400 mb-1">
              {item.number}
            </div>
            <div className="text-sm text-white/60">{t(item.label)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
