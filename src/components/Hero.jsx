import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

const BASE = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : '/';

const HERO_SLIDES = [
  {
    id: 'maldives',
    flag: '🇲🇻',
    title: { ru: 'Мальдивы', en: 'Maldives' },
    caption: { ru: 'Бирюзовые лагуны и водные виллы', en: 'Turquoise lagoons & water villas' },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80',
    thumb: `${BASE}images/destinations/maldives.jpg`,
    fallback: `${BASE}images/destinations/maldives.jpg`,
  },
  {
    id: 'turkey',
    flag: '🇹🇷',
    title: { ru: 'Турция', en: 'Turkey' },
    caption: { ru: 'Анталья, Кемер и «Ультра всё включено»', en: 'Antalya, Kemer & Ultra All-Inclusive' },
    image: `${BASE}images/destinations/turkey.jpg?v=2`,
    thumb: `${BASE}images/destinations/turkey.jpg?v=2`,
    fallback: `${BASE}images/destinations/turkey.jpg?v=2`,
  },
  {
    id: 'uae',
    flag: '🇦🇪',
    title: { ru: 'ОАЭ', en: 'UAE' },
    caption: { ru: 'Персидский залив и роскошь Дубая', en: 'Persian Gulf beaches & Dubai luxury' },
    image: `${BASE}images/destinations/uae.jpg`,
    thumb: `${BASE}images/destinations/uae.jpg`,
    fallback: `${BASE}images/destinations/uae.jpg`,
  },
  {
    id: 'thailand',
    flag: '🇹🇭',
    title: { ru: 'Таиланд', en: 'Thailand' },
    caption: { ru: 'Тропические бухты Пхукета и Краби', en: 'Tropical bays of Phuket & Krabi' },
    image: `${BASE}images/destinations/thailand.jpg`,
    thumb: `${BASE}images/destinations/thailand.jpg`,
    fallback: `${BASE}images/destinations/thailand.jpg`,
  },
  {
    id: 'egypt',
    flag: '🇪🇬',
    title: { ru: 'Египет', en: 'Egypt' },
    caption: { ru: 'Красное море и коралловые рифы круглый год', en: 'Red Sea & coral reefs year-round' },
    image: `${BASE}images/destinations/egypt.jpg?v=2`,
    thumb: `${BASE}images/destinations/egypt.jpg?v=2`,
    fallback: `${BASE}images/destinations/egypt.jpg?v=2`,
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-teal-950 via-navy-900 to-navy-950">
      {/* Crossfading Background Photo Slideshow */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={t(slide.title)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms, 6000ms' }}
            onError={(e) => {
              if (e.currentTarget.src !== slide.fallback) {
                e.currentTarget.src = slide.fallback;
              }
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950/95" />
      </div>

      {/* Main Center Copy */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-16 sm:pt-20 pb-8 my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs sm:text-sm font-medium mb-5 shadow-lg">
          <MapPin size={14} className="text-gold-400 shrink-0" />
          <span>{activeSlide.flag} {t(activeSlide.title)} — {t(activeSlide.caption)}</span>
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-lg">
          {t(hero.title)}
        </h1>
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-9 leading-relaxed drop-shadow">
          {t(hero.subtitle)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#search"
             className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl shadow-gold-500/30 hover:scale-105">
            {t(hero.ctaSearch)}
          </a>
          <a href="#quiz"
             className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold-400 bg-navy-950/30 backdrop-blur-sm text-white hover:text-gold-400 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105">
            {t(hero.ctaQuiz)}
          </a>
        </div>
      </div>

      {/* Multi-Photo Gallery Strip */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-24 sm:pb-28">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {t({ ru: 'Популярные курорты — нажмите на фото', en: 'Featured Resorts — Click to Preview' })}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 text-white hover:text-navy-950 backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 text-white hover:text-navy-950 backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative h-24 sm:h-28 rounded-2xl overflow-hidden text-left transition-all duration-300 border ${
                  isActive
                    ? 'ring-2 ring-gold-400 border-gold-400 scale-[1.03] shadow-xl shadow-gold-500/20'
                    : 'border-white/20 opacity-80 hover:opacity-100 hover:border-white/50'
                }`}
              >
                <img
                  src={slide.thumb}
                  alt={t(slide.title)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-heading font-bold text-white truncate">
                    {slide.flag} {t(slide.title)}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold-400 shadow-sm shadow-gold-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown size={24} className="text-white/50" />
      </div>
    </section>
  );
}
