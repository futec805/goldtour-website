import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Users, Moon, Sparkles, Filter, Check, Plane, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

const BASE = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : '/';

const SAMPLE_RESULTS = [
  {
    id: 1,
    hotel: 'Pickalbatros Dana Beach Resort 5★',
    country: 'Египет',
    countryEn: 'Egypt',
    resort: 'Хургада (Hurghada)',
    stars: 5,
    mealPlan: 'Все включено (AI)',
    departure: 'Нижний Новгород (GOJ)',
    departureEn: 'Nizhny Novgorod (GOJ)',
    dates: '12 – 19 дек (7 ночей)',
    datesEn: 'Dec 12 – 19 (7 nights)',
    nights: 7,
    price: '54 800 ₽',
    oldPrice: '72 000 ₽',
    operator: 'Coral Travel',
    image: `${BASE}images/destinations/egypt.jpg`,
    tags: ['Первая линия', 'Собственный пляж', 'Песчаный вход']
  },
  {
    id: 2,
    hotel: 'Rixos Downtown Antalya 5★',
    country: 'Турция',
    countryEn: 'Turkey',
    resort: 'Анталья (Antalya)',
    stars: 5,
    mealPlan: 'Ультра все включено (UAI)',
    departure: 'Нижний Новгород (GOJ)',
    departureEn: 'Nizhny Novgorod (GOJ)',
    dates: '15 – 24 дек (9 ночей)',
    datesEn: 'Dec 15 – 24 (9 nights)',
    nights: 9,
    price: '68 400 ₽',
    oldPrice: '89 000 ₽',
    operator: 'Anex Tour',
    image: `${BASE}images/destinations/turkey.jpg`,
    tags: ['Подогреваемый бассейн', 'Премиум сервис']
  },
  {
    id: 3,
    hotel: 'Fairmont Fujairah Beach Resort 5★',
    country: 'ОАЭ',
    countryEn: 'UAE',
    resort: 'Фуджейра (Fujairah)',
    stars: 5,
    mealPlan: 'Завтрак + ужин (HB)',
    departure: 'Москва (SVO)',
    departureEn: 'Moscow (SVO)',
    dates: '10 – 17 дек (7 ночей)',
    datesEn: 'Dec 10 – 17 (7 nights)',
    nights: 7,
    price: '79 500 ₽',
    oldPrice: '105 000 ₽',
    operator: 'Pegas Touristik',
    image: `${BASE}images/destinations/uae.jpg`,
    tags: ['Оманский залив', 'Горный пейзаж']
  },
  {
    id: 4,
    hotel: 'Centara Grand Beach Resort Phuket 5★',
    country: 'Таиланд',
    countryEn: 'Thailand',
    resort: 'Пхукет, Карон (Phuket)',
    stars: 5,
    mealPlan: 'Завтраки (BB)',
    departure: 'Москва (DME)',
    departureEn: 'Moscow (DME)',
    dates: '18 – 28 дек (10 ночей)',
    datesEn: 'Dec 18 – 28 (10 nights)',
    nights: 10,
    price: '98 000 ₽',
    oldPrice: '135 000 ₽',
    operator: 'Fun&Sun',
    image: `${BASE}images/destinations/thailand.jpg`,
    tags: ['Пляж Карон', 'Аквапарк для детей']
  },
  {
    id: 5,
    hotel: 'Sun Siyam Olhuveli Maldives 4★+',
    country: 'Мальдивы',
    countryEn: 'Maldives',
    resort: 'Южный Мале Атолл (Male)',
    stars: 5,
    mealPlan: 'Полный пансион (FB)',
    departure: 'Москва (SVO)',
    departureEn: 'Moscow (SVO)',
    dates: '14 – 21 дек (7 ночей)',
    datesEn: 'Dec 14 – 21 (7 nights)',
    nights: 7,
    price: '148 000 ₽',
    oldPrice: '195 000 ₽',
    operator: 'Biblio Globus',
    image: `${BASE}images/destinations/maldives.jpg`,
    tags: ['Водные виллы', 'Скоростной катер']
  },
  {
    id: 6,
    hotel: 'Grand Muthu Cayo Guillermo 5★',
    country: 'Куба',
    countryEn: 'Cuba',
    resort: 'Кайо-Гильермо (Cayo Guillermo)',
    stars: 5,
    mealPlan: 'Все включено (AI)',
    departure: 'Москва (SVO)',
    departureEn: 'Moscow (SVO)',
    dates: '11 – 22 дек (11 ночей)',
    datesEn: 'Dec 11 – 22 (11 nights)',
    nights: 11,
    price: '118 000 ₽',
    oldPrice: '150 000 ₽',
    operator: 'Pegas Touristik',
    image: `${BASE}images/destinations/cuba.jpg`,
    tags: ['Белоснежный песок', 'Карибское море']
  }
];

export default function TourSearch({ onSelectTour }) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('tourvisor'); // Default to Tourvisor engine
  const [departure, setDeparture] = useState('nn');
  const [destination, setDestination] = useState('all');
  const [nights, setNights] = useState('7-10');
  const [travelers, setTravelers] = useState('2');
  const [meal, setMeal] = useState('all');
  const [searching, setSearching] = useState(false);
  const [filteredResults, setFilteredResults] = useState(SAMPLE_RESULTS);

  const containerRef = useRef(null);

  // Filter logic
  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      let res = SAMPLE_RESULTS;
      if (destination !== 'all') {
        res = res.filter(item => 
          item.country.toLowerCase() === destination.toLowerCase() || 
          item.countryEn.toLowerCase() === destination.toLowerCase()
        );
      }
      if (departure === 'nn') {
        // prioritize NN flights or show matching
        res = res.filter(item => item.departure.includes('Нижний Новгород') || destination !== 'all');
      }
      setFilteredResults(res.length > 0 ? res : SAMPLE_RESULTS.slice(0, 3));
      setSearching(false);
    }, 450);
  };

  // Tourvisor script embed & dynamic module loader
  useEffect(() => {
    const triggerTourvisor = () => {
      if (window.TV && typeof window.TV.loadModules === 'function') {
        try {
          window.TV.loadModules();
        } catch (err) {
          console.warn('TV.loadModules warning:', err);
        }
      }
    };

    // If script already loaded in head
    triggerTourvisor();

    // Check periodically for 6 seconds until TV is ready and modules render
    const interval = setInterval(triggerTourvisor, 500);
    const timeout = setTimeout(() => clearInterval(interval), 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeTab]);

  return (
    <section id="search" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Search size={16} />
            {t(siteContent.nav.search)}
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {t({ ru: 'Поиск туров по 80+ туроператорам', en: 'Search Tours Across 80+ Tour Operators' })}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            {t({
              ru: 'Сравните актуальные цены от ведущих операторов России с прямыми вылетами',
              en: 'Compare live tour prices from top Russian operators with direct flights'
            })}
          </p>

          {/* Mode switch pills */}
          <div className="flex justify-center mt-6">
            <div className="bg-slate-200/80 p-1 rounded-full flex gap-1">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'interactive'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {t({ ru: '⚡ Быстрый онлайн поиск', en: '⚡ Fast Live Search' })}
              </button>
              <button
                onClick={() => setActiveTab('tourvisor')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'tourvisor'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {t({ ru: '🌐 Модуль Турвизор (PRO)', en: '🌐 Tourvisor Engine (PRO)' })}
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Interactive Search Filter Bar */}
        {activeTab === 'interactive' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Departure City */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Plane size={14} className="text-gold-500" />
                    {t({ ru: 'Город вылета', en: 'Departure City' })}
                  </label>
                  <select
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-navy-900 font-medium focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  >
                    <option value="nn">Нижний Новгород (GOJ)</option>
                    <option value="mow">Москва (все аэропорты)</option>
                    <option value="kzn">Казань (KZN)</option>
                  </select>
                </div>

                {/* Destination Country */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin size={14} className="text-gold-500" />
                    {t({ ru: 'Страна отдыха', en: 'Destination' })}
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-navy-900 font-medium focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  >
                    <option value="all">{t({ ru: 'Все направления', en: 'All Destinations' })}</option>
                    <option value="Египет">Египет 🇪🇬 (Egypt)</option>
                    <option value="Турция">Турция 🇹🇷 (Turkey)</option>
                    <option value="ОАЭ">ОАЭ 🇦🇪 (UAE)</option>
                    <option value="Таиланд">Таиланд 🇹🇭 (Thailand)</option>
                    <option value="Мальдивы">Мальдивы 🇲🇻 (Maldives)</option>
                    <option value="Куба">Куба 🇨🇺 (Cuba)</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Moon size={14} className="text-gold-500" />
                    {t({ ru: 'Ночей', en: 'Duration (Nights)' })}
                  </label>
                  <select
                    value={nights}
                    onChange={(e) => setNights(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-navy-900 font-medium focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  >
                    <option value="6-8">6 – 8 ночей</option>
                    <option value="7-10">7 – 10 ночей</option>
                    <option value="11-14">11 – 14 ночей</option>
                  </select>
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users size={14} className="text-gold-500" />
                    {t({ ru: 'Туристы', en: 'Travelers' })}
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-navy-900 font-medium focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
                  >
                    <option value="2">2 взрослых (2 Adults)</option>
                    <option value="1">1 взрослый (1 Adult)</option>
                    <option value="2+1">2 взр. + 1 ребёнок (Family)</option>
                    <option value="2+2">2 взр. + 2 детей (Family+)</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    disabled={searching}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3 px-4 rounded-xl shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-60"
                  >
                    <Search size={18} />
                    {searching ? t({ ru: 'Поиск...', en: 'Searching...' }) : t({ ru: 'Найти туры', en: 'Find Tours' })}
                  </button>
                </div>
              </div>

              {/* Quick filter pills */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">{t({ ru: 'Питание:', en: 'Meal Plan:' })}</span>
                {['all', 'AI', 'UAI', 'HB'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMeal(m)}
                    className={`px-3 py-1.5 rounded-full border transition-colors ${
                      meal === m
                        ? 'bg-navy-900 border-navy-900 text-white font-semibold'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {m === 'all' ? t({ ru: 'Любое питание', en: 'Any meal' }) : m}
                  </button>
                ))}
                <span className="ml-auto text-slate-400 text-xs hidden md:inline">
                  {t({ ru: 'Прямые чартеры от проверенных туроператоров', en: 'Direct charters from verified operators' })}
                </span>
              </div>
            </div>

            {/* Results Grid */}
            <div>
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-heading font-bold text-lg text-navy-950">
                  {t({ ru: 'Найдено предложений:', en: 'Tours Found:' })} <span className="text-gold-600 font-black">{filteredResults.length}</span>
                </h3>
                <span className="text-xs text-slate-500">
                  {t({ ru: 'Цены включают перелёт, проживание, трансфер и страховку', en: 'Includes flight, hotel, transfer & medical insurance' })}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-gold-400/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Photo container */}
                      <div className="relative h-48 overflow-hidden bg-slate-800">
                        <img
                          src={tour.image}
                          alt={tour.hotel}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                        {/* Top badges */}
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          <span className="bg-navy-950/80 backdrop-blur-md text-gold-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Star size={12} className="fill-gold-400" /> {tour.stars}★
                          </span>
                          <span className="bg-white/90 backdrop-blur-md text-navy-900 text-xs font-semibold px-2 py-1 rounded-full">
                            {tour.operator}
                          </span>
                        </div>

                        {/* Bottom country & resort */}
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="text-xs uppercase tracking-wider text-gold-300 font-bold">
                            {lang === 'ru' ? tour.country : tour.countryEn}
                          </div>
                          <div className="text-sm font-semibold truncate">{tour.resort}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h4 className="font-heading font-bold text-navy-950 text-base mb-2 group-hover:text-gold-600 transition-colors line-clamp-1">
                          {tour.hotel}
                        </h4>

                        <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Plane size={13} className="text-gold-500 shrink-0" />
                            <span>{lang === 'ru' ? tour.departure : tour.departureEn}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={13} className="text-gold-500 shrink-0" />
                            <span>{lang === 'ru' ? tour.dates : tour.datesEn}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Moon size={13} className="text-gold-500 shrink-0" />
                            <span className="font-semibold text-emerald-700">{tour.mealPlan}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tour.tags.map((tag, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] px-2 py-0.5 rounded-md font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing & CTA */}
                    <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                      <div className="flex items-end justify-between pt-3">
                        <div>
                          <span className="text-xs text-slate-400 line-through block">{tour.oldPrice}</span>
                          <div className="text-xl font-heading font-black text-navy-950">
                            {tour.price}
                            <span className="text-[11px] font-normal text-slate-400 ml-1">
                              {t({ ru: '/чел.', en: '/pers.' })}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectTour && onSelectTour(tour)}
                          className="bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                        >
                          {t({ ru: 'Забронировать', en: 'Book Tour' })}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Tourvisor Engine (Official Live Tourvisor Modules) */}
        {activeTab === 'tourvisor' && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 min-h-[450px]">
            {/* Tourvisor Official Modules Container */}
            <div className="tourvisor-wrapper min-h-[350px]">
              {/* Tourvisor Main Search Form */}
              <div className="tv-search-form tv-moduleid-9975387"></div>

              {/* Tourvisor Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6 pt-6 border-t border-slate-100">
                <div className="tv-free-button tv-moduleid-9987923"></div>
                <div className="tv-free-button tv-moduleid-9987903"></div>
                <div className="tv-free-button tv-moduleid-9988202"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
