import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-navy-900 to-navy-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80"
          alt="Tropical beach"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          {t(hero.title)}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t(hero.subtitle)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#search"
             className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl shadow-gold-500/30 hover:scale-105">
            {t(hero.ctaSearch)}
          </a>
          <a href="#quiz"
             className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105">
            {t(hero.ctaQuiz)}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  );
}
