import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function TrustBar() {
  const { t } = useLanguage();
  const { trustBar } = siteContent;

  return (
    <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
      <div className="bg-navy-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {trustBar.items.map((item, i) => (
          <div key={i} className="text-center py-8 px-4">
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
