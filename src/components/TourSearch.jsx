import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Users, Moon, Sparkles, Filter, Check, Plane, Star, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';
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
    tags: ['Водная вилла', 'Домашний риф']
  }
];

export default function TourSearch({ onSelectTour }) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('tourvisor'); // Default: Live Tourvisor Engine
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Quick Filter state for Tab 2
  const [departure, setDeparture] = useState('nn');
  const [destination, setDestination] = useState('all');
  const [nights, setNights] = useState('7-10');
  const [travelers, setTravelers] = useState('2');
  const [meal, setMeal] = useState('all');
  const [searching, setSearching] = useState(false);
  const [filteredResults, setFilteredResults] = useState(SAMPLE_RESULTS);

  // Check if running on registered production domain
  const isProductionDomain = typeof window !== 'undefined' && 
    (window.location.hostname === 'goldtour-nn.ru' || window.location.hostname === 'www.goldtour-nn.ru');

  // Trigger native TV modules when on registered domain
  useEffect(() => {
    if (isProductionDomain) {
      if (!document.getElementById('tv-init-script')) {
        const s = document.createElement('script');
        s.id = 'tv-init-script';
        s.src = 'https://tourvisor.ru/module/init.js';
        s.type = 'text/javascript';
        document.body.appendChild(s);
      } else if (window.TV && typeof window.TV.loadModules === 'function') {
        try {
          window.TV.loadModules();
        } catch (e) {
          console.warn('TV error:', e);
        }
      }
    }
  }, [activeTab, isProductionDomain]);

  // Filter logic for quick search
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
        res = res.filter(item => item.departure.includes('Нижний Новгород') || destination !== 'all');
      }
      setFilteredResults(res.length > 0 ? res : SAMPLE_RESULTS.slice(0, 3));
      setSearching(false);
    }, 450);
  };

  return (
    <section id="search" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Search size={16} />
            <span>{lang === 'ru' ? 'Поиск туров онлайн' : 'Live Tour Search'}</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {lang === 'ru' ? 'Поиск туров по 80+ туроператорам' : 'Search Tours Across 80+ Tour Operators'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            {lang === 'ru' 
              ? 'Официальный модуль поисковой системы «Турвизор» агентства «Золотой тур». Сравните актуальные цены туроператоров с прямыми вылетами из Нижнего Новгорода и Москвы.'
              : 'Official live Tourvisor booking engine for "Gold Tour". Real-time pricing streamed directly from 80+ tour operators with direct flights.'}
          </p>

          {/* Mode Switch Tabs */}
          <div className="flex justify-center mt-6">
            <div className="bg-slate-200/80 p-1 rounded-full flex gap-1 shadow-inner">
              <button
                onClick={() => setActiveTab('tourvisor')}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'tourvisor'
                    ? 'bg-navy-950 text-gold-400 shadow-md scale-105'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                <Sparkles size={14} className={activeTab === 'tourvisor' ? 'text-gold-400' : 'text-slate-400'} />
                <span>{lang === 'ru' ? '🌐 Модуль Турвизор (Live)' : '🌐 Tourvisor Engine (Live)'}</span>
              </button>
              <button
                onClick={() => setActiveTab('interactive')}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'interactive'
                    ? 'bg-navy-950 text-gold-400 shadow-md scale-105'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                <Filter size={14} className={activeTab === 'interactive' ? 'text-gold-400' : 'text-slate-400'} />
                <span>{lang === 'ru' ? '⚡ Быстрый каталог предложений' : '⚡ Quick Deals Catalog'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: LIVE TOURVISOR ENGINE                             */}
        {/* ======================================================== */}
        {activeTab === 'tourvisor' && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Top Engine Status Bar */}
            <div className="bg-gradient-to-r from-navy-950 to-navy-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-heading font-bold text-sm text-gold-400">
                  {lang === 'ru' ? 'Модуль поиска туров «Турвизор» • Золотой тур' : 'Tourvisor Live Search Engine • Gold Tour'}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-slate-300 hidden sm:inline-block">
                  ID: 223415
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <Plane size={13} className="text-gold-400" />
                  {lang === 'ru' ? 'Вылеты: Н.Новгород & Москва' : 'Flights: Nizhny Novgorod & Moscow'}
                </span>
                <a 
                  href="https://goldtour-nn.ru/podbor-tura" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 underline font-medium text-xs ml-2"
                >
                  <span>{lang === 'ru' ? 'Открыть в полном окне' : 'Full Window'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Tourvisor Engine: Native on goldtour-nn.ru, Component iframe on staging/GitHub */}
            {isProductionDomain ? (
              <div className="p-4 sm:p-6 min-h-[500px]">
                <div className="tv-search-form tv-moduleid-9975387"></div>
              </div>
            ) : (
              <div className="relative min-h-[750px] sm:min-h-[880px] w-full bg-white overflow-x-auto">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 p-6 text-center">
                    <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="font-heading font-bold text-navy-950 text-base mb-1">
                      {lang === 'ru' ? 'Загрузка системы поиска туров Турвизор...' : 'Loading live Tourvisor engine...'}
                    </p>
                    <p className="text-xs text-slate-500 max-w-sm">
                      {lang === 'ru' 
                        ? 'Подключение к базам данных 80+ туроператоров и проверка актуальных чартерных рейсов'
                        : 'Connecting to 80+ tour operators database and verifying real-time flight charters'}
                    </p>
                  </div>
                )}

                {/* Live Tourvisor Engine Component Frame (No Joomla templates/headers) */}
                <iframe
                  src="https://goldtour-nn.ru/podbor-tura?tmpl=component"
                  title="Tourvisor Live Search Engine"
                  className="w-full min-h-[820px] lg:min-h-[920px] border-0"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            )}

            {/* Bottom Support Banner */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span>
                {lang === 'ru' 
                  ? '💡 Нашли подходящий тур? Забронируйте онлайн или свяжитесь с менеджером «Золотой тур» по тел. +7 (960) 189-24-64'
                  : '💡 Found a tour? Book online or call Gold Tour manager directly at +7 (960) 189-24-64'}
              </span>
              <a 
                href={siteContent.company.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold whitespace-nowrap shadow-sm transition-all"
              >
                WhatsApp +7 (960) 189-24-64
              </a>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: QUICK DEALS CATALOG                               */}
        {/* ======================================================== */}
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
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {searching ? (
                      <div className="w-5 h-5 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Search size={16} />
                        {t({ ru: 'Найти туры', en: 'Search Deals' })}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.hotel}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tour.operator}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-xs text-slate-300">{tour.country} • {tour.resort}</div>
                      <h4 className="font-heading font-bold text-base truncate">{tour.hotel}</h4>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">{tour.departure}</div>
                      <div className="text-lg font-bold text-navy-950">{tour.price}</div>
                    </div>
                    <button
                      onClick={() => onSelectTour && onSelectTour(tour)}
                      className="px-4 py-2 rounded-xl bg-navy-950 text-gold-400 text-xs font-bold hover:bg-gold-500 hover:text-navy-950 transition-colors"
                    >
                      {t({ ru: 'Забронировать', en: 'Book' })}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
