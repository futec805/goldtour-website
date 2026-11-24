import { ShieldCheck, MessageCircle, Award, CircleDollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

const iconMap = {
  ShieldCheck,
  BadgeRussianRuble: CircleDollarSign,
  MessageCircle,
  Award,
};

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const { whyChooseUs } = siteContent;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {t(whyChooseUs.sectionTitle)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyChooseUs.items.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={i}
                   className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-gold-500/20 transition-all">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Icon size={24} className="text-navy-950" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-950 mb-1">{t(item.title)}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{t(item.description)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
