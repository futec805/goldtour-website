import { Plane, Hotel, PlaneTakeoff, FileCheck, Ship, Map, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

const iconMap = { Plane, Hotel, PlaneTakeoff, FileCheck, Ship, Map };

export default function Services({ onSelectTour }) {
  const { t } = useLanguage();
  const { services } = siteContent;

  return (
    <section id="services" className="scroll-mt-20 py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Briefcase size={16} />
            {t(services.sectionTitle)}
          </div>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(services.sectionSubtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((svc, i) => {
            const Icon = iconMap[svc.icon] || Briefcase;
            return (
              <div key={i}
                   onClick={() => onSelectTour && onSelectTour({
                     name: svc.title,
                     description: svc.description,
                     price: { ru: 'По запросу', en: 'On request' },
                   })}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       e.preventDefault();
                       onSelectTour && onSelectTour({
                         name: svc.title,
                         description: svc.description,
                         price: { ru: 'По запросу', en: 'On request' },
                       });
                     }
                   }}
                   className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-navy-950" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-gold-400 transition-colors">{t(svc.title)}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{t(svc.description)}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/80 group-hover:text-gold-400 transition-colors">
                  <span>{t({ ru: 'Оставить заявку', en: 'Request Service' })}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
