import { useState } from 'react';
import { MapPin, ArrowRight, Sun, Heart, Sparkles, Plane, ShieldCheck, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import DestinationModal from './DestinationModal';

export default function Destinations({ onSelectTour }) {
  const { t, lang } = useLanguage();
  const { destinations } = siteContent;
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState({});
  const [inspectDestination, setInspectDestination] = useState(null);

  const filters = [
    { id: 'all', label: { ru: 'Все курорты', en: 'All Resorts' } },
    { id: 'beach', label: { ru: 'Пляжный релакс 🏖️', en: 'Beach & Sun 🏖️' } },
    { id: 'family', label: { ru: 'Семьям с детьми 👨‍👩‍👧', en: 'Family Friendly 👨‍👩‍👧' } },
    { id: 'luxury', label: { ru: 'Премиум & VIP 👑', en: 'Luxury & VIP 👑' } },
    { id: 'exotic', label: { ru: 'Экзотика 🌴', en: 'Exotic Escapes 🌴' } },
  ];

  const filteredItems = destinations.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="destinations" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <MapPin size={16} />
            {t(destinations.sectionTitle)}
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {t({ ru: 'Куда поехать отдыхать в 2024–2025 году', en: 'Where to Travel in 2024–2025' })}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
            {t(destinations.sectionSubtitle)}
          </p>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-7">
            {filters.map((f) => {
              const count = f.id === 'all' 
                ? destinations.items.length 
                : destinations.items.filter(item => item.category === f.id).length;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeFilter === f.id
                      ? 'bg-navy-900 text-white shadow-lg shadow-navy-950/20 scale-105'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-gold-400 hover:text-navy-900 shadow-sm'
                  }`}
                >
                  <span>{t(f.label)}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    activeFilter === f.id ? 'bg-gold-500 text-navy-950' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dest) => {
            const isFav = !!favorites[dest.id];
            return (
              <div
                key={dest.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo container with zoom effect */}
                <div className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer"
                     onClick={() => setInspectDestination(dest)}>
                  <img
                    src={dest.image}
                    alt={t(dest.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-2xl filter drop-shadow">{dest.flag}</span>
                      <span className="bg-red-500 text-white font-black text-xs px-2.5 py-1 rounded-full shadow-md shadow-red-500/30 flex items-center gap-1">
                        {dest.discount}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => toggleFavorite(e, dest.id)}
                        className={`p-2 rounded-full backdrop-blur-md transition-all ${
                          isFav
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40'
                            : 'bg-navy-950/60 text-white/80 hover:text-white hover:bg-navy-950/90'
                        }`}
                        title="Add to favorites"
                      >
                        <Heart size={15} className={isFav ? 'fill-white' : ''} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setInspectDestination(dest);
                        }}
                        className="bg-navy-950/60 hover:bg-navy-950/90 text-white/90 p-2 rounded-full backdrop-blur-md transition-colors"
                        title="Quick View"
                      >
                        <Eye size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Climate & Flight pills on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/10 font-medium">
                      <Sun size={13} className="text-gold-400" />
                      <span>{dest.temp}</span>
                    </div>
                    <div className="bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/10 font-medium">
                      <Plane size={13} className="text-gold-400" />
                      <span>{t(dest.flight)}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3
                        onClick={() => setInspectDestination(dest)}
                        className="font-heading font-black text-xl text-navy-950 group-hover:text-gold-600 transition-colors cursor-pointer"
                      >
                        {t(dest.name)}
                      </h3>
                      <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
                        {t(dest.savings)}
                      </span>
                    </div>

                    <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                      {t(dest.description)}
                    </p>

                    {/* Popular Resorts list */}
                    {dest.bestResorts && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {dest.bestResorts.map((r, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-600 text-[11px] px-2 py-0.5 rounded-md font-medium"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing Block with Original vs Offer Price */}
                  <div className="pt-3 border-t border-slate-100 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 line-through font-medium">
                          {t(dest.originalPrice)}
                        </span>
                        <span className="text-[10px] bg-red-100 text-red-600 font-bold px-1.5 py-0.2 rounded">
                          {dest.discount}
                        </span>
                      </div>
                      <div className="text-2xl font-heading font-black text-navy-950">
                        {t(dest.offerPrice)}
                        <span className="text-[11px] font-normal text-slate-400 ml-1">
                          {t({ ru: '/чел.', en: '/pers.' })}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        onSelectTour &&
                        onSelectTour({
                          hotel: `${t(dest.name)} — Пакетный тур со скидкой`,
                          location: t(dest.description),
                          price: t(dest.offerPrice),
                          oldPrice: t(dest.originalPrice),
                          nights: 7,
                          mealPlan: 'Все включено (AI)',
                          image: dest.image,
                        })
                      }
                      className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md shadow-gold-500/20 flex items-center gap-1.5 hover:scale-105"
                    >
                      {t({ ru: 'Забронировать', en: 'Book Offer' })}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick View Modal */}
        <DestinationModal
          isOpen={!!inspectDestination}
          onClose={() => setInspectDestination(null)}
          destination={inspectDestination}
          onBook={(tour) => {
            setInspectDestination(null);
            if (onSelectTour) onSelectTour(tour);
          }}
        />
      </div>
    </section>
  );
}
