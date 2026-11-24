import { X, Sun, Plane, ShieldCheck, Check, ArrowRight, Star, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DestinationModal({ isOpen, onClose, destination, onBook }) {
  const { t, lang } = useLanguage();

  if (!isOpen || !destination) return null;

  return (
    <div className="fixed inset-0 z-[125] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative bg-navy-900 border border-white/15 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header photo */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={destination.image}
            alt={t(destination.name)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-navy-950/70 hover:bg-navy-950 text-white/80 hover:text-white p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>

          {/* Country title & flag */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl">{destination.flag}</span>
              <span className="bg-red-500 text-white font-bold text-xs px-2.5 py-0.5 rounded-full">
                {destination.discount}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-gold-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {t(destination.savings)}
              </span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl">
              {t(destination.name)}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            {t(destination.description)}
          </p>

          {/* Quick info grid */}
          <div className="grid grid-cols-3 gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-gold-400 text-xs mb-1">
                <Sun size={14} />
                <span>{t({ ru: 'Погода', en: 'Weather' })}</span>
              </div>
              <div className="font-heading font-bold text-white text-sm">{destination.temp}</div>
            </div>

            <div className="border-x border-white/10 px-2">
              <div className="flex items-center justify-center gap-1 text-gold-400 text-xs mb-1">
                <Plane size={14} />
                <span>{t({ ru: 'Перелёт', en: 'Flight' })}</span>
              </div>
              <div className="font-heading font-bold text-white text-xs truncate">
                {t(destination.flight)}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-gold-400 text-xs mb-1">
                <ShieldCheck size={14} />
                <span>{t({ ru: 'Виза', en: 'Visa' })}</span>
              </div>
              <div className="font-heading font-bold text-white text-xs truncate">
                {t(destination.visa)}
              </div>
            </div>
          </div>

          {/* Top Resorts */}
          {destination.bestResorts && (
            <div>
              <h4 className="font-heading font-bold text-sm text-gold-400 uppercase tracking-wider mb-2.5">
                {t({ ru: 'Популярные курорты:', en: 'Top Popular Resorts:' })}
              </h4>
              <div className="flex flex-wrap gap-2">
                {destination.bestResorts.map((resort, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 hover:bg-white/15 text-white/90 text-xs px-3 py-1.5 rounded-xl border border-white/10 font-medium"
                  >
                    📍 {resort}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing & Booking CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-sm line-through">
                  {t(destination.originalPrice)}
                </span>
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-0.5 rounded-md">
                  {destination.discount}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-gold-400">
                {t(destination.offerPrice)}
                <span className="text-xs font-normal text-white/50 ml-1.5">
                  {t({ ru: '/чел. (все включено)', en: '/pers. (all incl.)' })}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBook({
                  hotel: `${t(destination.name)} — Спецпредложение`,
                  location: t(destination.description),
                  price: t(destination.offerPrice),
                  nights: 7,
                  mealPlan: 'Все включено (AI)',
                  image: destination.image,
                });
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold px-7 py-3.5 rounded-2xl transition-all shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 text-sm"
            >
              {t({ ru: 'Забронировать по акции', en: 'Book This Special Offer' })}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
