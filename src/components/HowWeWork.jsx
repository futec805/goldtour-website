import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function HowWeWork() {
  const { t } = useLanguage();
  const { howWeWork } = siteContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {t(howWeWork.sectionTitle)}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            {t(howWeWork.sectionSubtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howWeWork.steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {i < howWeWork.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-200" />
              )}
              <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                <span className="font-heading font-black text-xl text-navy-950">{step.number}</span>
              </div>
              <h3 className="font-heading font-bold text-navy-950 mb-2">{t(step.title)}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t(step.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
