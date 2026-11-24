import { useState } from 'react';
import { Flame, Clock, Moon, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function HotTours({ onSelectTour }) {
  const { t } = useLanguage();
  const { hotTours } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: { ru: 'Все горящие туры', en: 'All Hot Deals' } },
    { id: 'egypt', label: { ru: 'Египет 🇪🇬', en: 'Egypt 🇪🇬' } },
    { id: 'turkey', label: { ru: 'Турция 🇹🇷', en: 'Turkey 🇹🇷' } },
    { id: 'uae', label: { ru: 'ОАЭ 🇦🇪', en: 'UAE 🇦🇪' } },
  ];

  const filteredItems = hotTours.items.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'egypt') return item.hotel.includes('Makadi') || t(item.location).includes('Египет') || t(item.location).includes('Egypt');
    if (selectedCategory === 'turkey') return item.hotel.includes('Belek') || t(item.location).includes('Турция') || t(item.location).includes('Turkey');
    if (selectedCategory === 'uae') return item.hotel.includes('Palm') || t(item.location).includes('ОАЭ') || t(item.location).includes('UAE');
    return true;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Flame size={16} />
            {t(hotTours.sectionTitle)}
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {t({ ru: 'Горящие путёвки с вылетом в ближайшие дни', en: 'Last-Minute Deals Departing in Next Days' })}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            {t(hotTours.sectionSubtitle)}
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-red-500 text-white shadow-md shadow-red-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t(c.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Hot Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((tour, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-red-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    src={tour.image}
                    alt={tour.hotel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

                  {/* Discount badge */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white font-black text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-red-500/40 animate-pulse">
                    <Flame size={13} /> {tour.discount}
                  </div>

                  {/* Meal plan badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    {tour.mealPlan === 'AI' ? t(hotTours.allInclusive) : (tour.mealPlan === 'UAI' ? 'Ultra All Inclusive' : tour.mealPlan)}
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-xs text-gold-300 font-semibold flex items-center gap-1 mb-0.5">
                      <Clock size={12} /> {t({ ru: 'Вылет через 3–5 дней', en: 'Departs in 3–5 days' })}
                    </div>
                    <div className="text-sm font-semibold">{t(tour.location)}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2 group-hover:text-red-500 transition-colors">
                    {tour.hotel}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                    <span className="flex items-center gap-1 font-medium">
                      <Moon size={14} className="text-gold-500" /> {tour.nights} {t(hotTours.nights)}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-emerald-700">
                      <ShieldCheck size={14} className="text-emerald-500" /> {t({ ru: 'Прямой перелёт', en: 'Direct flight' })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing & Booking CTA */}
              <div className="p-6 pt-0">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-slate-400 line-through block font-medium">
                      {tour.oldPrice}
                    </span>
                    <div className="text-2xl font-heading font-black text-navy-950">
                      {tour.price}
                      <span className="text-xs font-normal text-slate-400 ml-1">
                        {t(hotTours.perPerson)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectTour && onSelectTour(tour)}
                    className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-white font-bold text-xs py-3 px-5 rounded-2xl transition-all shadow-md shadow-red-500/20 flex items-center gap-1.5 hover:scale-105"
                  >
                    {t(hotTours.bookNow)}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
