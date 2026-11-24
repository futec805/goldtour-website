import { useState, useMemo, useRef } from 'react';
import { 
  Compass, 
  MapPin, 
  Plane, 
  Thermometer, 
  Calendar, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  X,
  Camera,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { countryGuideData } from '../data/countryGuideData';

export default function CountryCityGuide({ onSelectTour }) {
  const { lang, t } = useLanguage();
  const drawerRef = useRef(null);
  
  // Selected Country ID
  const [selectedCountryId, setSelectedCountryId] = useState('turkey');
  
  // Expanded City ID (null if closed)
  const [expandedCityId, setExpandedCityId] = useState('antalya');

  // Active photo index inside expanded city
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Active country object
  const activeCountry = useMemo(() => {
    return countryGuideData.find(c => c.id === selectedCountryId) || countryGuideData[0];
  }, [selectedCountryId]);

  // Expanded city object
  const expandedCity = useMemo(() => {
    if (!expandedCityId) return null;
    return activeCountry.cities.find(c => c.id === expandedCityId) || null;
  }, [activeCountry, expandedCityId]);

  // When switching countries, select first city by default
  const handleSelectCountry = (id) => {
    setSelectedCountryId(id);
    const country = countryGuideData.find(c => c.id === id);
    if (country && country.cities.length > 0) {
      setExpandedCityId(country.cities[0].id);
      setActivePhotoIdx(0);
    } else {
      setExpandedCityId(null);
    }
  };

  const handleToggleCity = (cityId) => {
    if (expandedCityId === cityId) {
      setExpandedCityId(null);
    } else {
      setExpandedCityId(cityId);
      setActivePhotoIdx(0);
      // Smooth scroll into view if on smaller screens
      setTimeout(() => {
        if (drawerRef.current) {
          drawerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  const handleBookCity = (city) => {
    if (onSelectTour) {
      onSelectTour({
        hotel: `${t(city.name)} Resort & Spa`,
        country: t(activeCountry.name),
        city: t(city.name),
        price: city.priceFrom,
        originalPrice: null,
        nights: '7–10',
        meal: lang === 'ru' ? 'Всё включено / Завтраки' : 'All-Inclusive / Breakfast'
      });
    }
  };

  return (
    <section id="guide" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
            <Compass size={14} className="text-gold-600" />
            <span>
              {lang === 'ru' ? 'Интерактивный путеводитель по странам' : 'Interactive Destination Guide'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-950 mb-3">
            {lang === 'ru' ? 'Популярные страны и знаменитые города' : 'Top Countries & Famous Cities'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'ru' 
              ? 'Выберите страну, нажмите на любой город, чтобы открыть его достопримечательности, фотогалерею и лучшие цены на туры.'
              : 'Select a country and click any city card to expand top attractions, scenic photo galleries, and tour packages.'}
          </p>
        </div>

        {/* 10 Countries Horizontal Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar scroll-smooth">
          {countryGuideData.map((country) => {
            const isSelected = country.id === selectedCountryId;
            return (
              <button
                key={country.id}
                onClick={() => handleSelectCountry(country.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-navy-900 to-navy-950 text-gold-400 shadow-md ring-2 ring-gold-500/50 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:text-navy-950 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-base">{country.flag}</span>
                <span>{t(country.name)}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-gold-500/20 text-gold-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {country.cities.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Country Quick Info Banner */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">{activeCountry.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-950">
                  {t(activeCountry.name)}
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                  {t(activeCountry.visa)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {t(activeCountry.tagline)}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-600 border-t md:border-t-0 pt-3 md:pt-0 w-full md:w-auto">
            <div className="flex items-center gap-1.5">
              <Plane size={14} className="text-navy-600" />
              <span>{lang === 'ru' ? 'Перелёт:' : 'Flight:'} <strong>{t(activeCountry.flightTime)}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-navy-600" />
              <span>{lang === 'ru' ? 'Сезон:' : 'Season:'} <strong>{t(activeCountry.bestSeason)}</strong></span>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* OPTION 1: CITY CARDS GRID                            */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {activeCountry.cities.map((city) => {
            const isExpanded = expandedCityId === city.id;
            return (
              <div
                key={city.id}
                onClick={() => handleToggleCity(city.id)}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-xl ${
                  isExpanded 
                    ? 'ring-2 ring-gold-500 border-gold-500 shadow-lg -translate-y-1' 
                    : 'border-slate-200 hover:border-gold-400 hover:-translate-y-1'
                }`}
              >
                {/* City Card Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={city.image}
                    alt={t(city.name)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-black/25" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md">
                      {t(city.tag)}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500 text-navy-950 shadow">
                      {city.temp}
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-heading font-bold text-xl text-white">
                      {t(city.name)}
                    </h4>
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span className="text-slate-300">✈ {t(city.flight)}</span>
                      <span className="text-gold-400 font-bold text-sm">
                        {lang === 'ru' ? `от ${city.priceFrom}` : `from ${city.priceFrom}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Action Bar */}
                <div className={`p-4 flex items-center justify-between transition-colors ${
                  isExpanded ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'
                }`}>
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <Sparkles size={14} className={isExpanded ? 'text-gold-400' : 'text-gold-600'} />
                    <span className={isExpanded ? 'text-slate-200' : 'text-slate-600'}>
                      {city.attractions.length} {lang === 'ru' ? 'достопримечательности' : 'top sights'}
                    </span>
                  </div>

                  <div className={`flex items-center gap-1 text-xs font-bold ${
                    isExpanded ? 'text-gold-400' : 'text-navy-950 group-hover:text-gold-600'
                  }`}>
                    <span>{isExpanded ? (lang === 'ru' ? 'Скрыть' : 'Hide') : (lang === 'ru' ? 'Достопримечательности' : 'View Sights')}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* EXPANDED CITY DRAWER (Appears right under the grid)  */}
        {/* ==================================================== */}
        {expandedCity && (
          <div 
            ref={drawerRef}
            className="bg-white rounded-3xl border-2 border-gold-500/50 shadow-2xl p-6 sm:p-8 animate-fadeIn transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setExpandedCityId(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy-950 transition-colors"
              title={lang === 'ru' ? 'Закрыть' : 'Close'}
            >
              <X size={18} />
            </button>

            {/* City Title and Summary */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold">
                    {t(expandedCity.tag)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    ✈ {t(expandedCity.flight)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
                    ☀️ {expandedCity.temp}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-950">
                  {t(expandedCity.name)} — {lang === 'ru' ? 'Путеводитель и топ места' : 'City Guide & Sights'}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                  {t(expandedCity.desc)}
                </p>
              </div>

              {/* Price & Book CTA in Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                <div className="lg:text-right">
                  <div className="text-xs text-slate-500">{lang === 'ru' ? 'Туры от туроператоров' : 'Packages from'}</div>
                  <div className="text-xl sm:text-2xl font-bold text-navy-950 font-heading">
                    {lang === 'ru' ? `от ${expandedCity.priceFrom}` : `from ${expandedCity.priceFrom}`}
                  </div>
                </div>
                <button
                  onClick={() => handleBookCity(expandedCity)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-sm shadow-lg shadow-gold-500/25 transition-all"
                >
                  <span>{lang === 'ru' ? `Подобрать тур в ${t(expandedCity.name)}` : `Book Tour to ${t(expandedCity.name)}`}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Attractions Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-gold-500" />
                <h4 className="font-heading font-bold text-lg sm:text-xl text-navy-950">
                  {lang === 'ru' ? `Главные достопримечательности ${t(expandedCity.name)}` : `Top Attractions & Highlights in ${t(expandedCity.name)}`}
                </h4>
              </div>

              {/* Sights 3-column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {expandedCity.attractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-gold-400 hover:bg-white transition-all shadow-sm group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 font-bold text-xs flex items-center justify-center shadow-sm">
                        {idx + 1}
                      </span>
                      <h5 className="font-heading font-bold text-sm text-navy-950 leading-snug group-hover:text-gold-600 transition-colors">
                        {t(att.name)}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(att.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery Bar */}
            {expandedCity.photos && expandedCity.photos.length > 1 && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Camera size={14} className="text-gold-500" />
                  <span>{lang === 'ru' ? 'Фотогалерея локации' : 'Location Photo Gallery'}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {expandedCity.photos.map((photo, i) => (
                    <div key={i} className="h-28 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                      <img src={photo} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Inquire Bar */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Check size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">
                    {lang === 'ru' ? `Понравился ${t(expandedCity.name)}?` : `Interested in ${t(expandedCity.name)}?`}
                  </div>
                  <div className="text-xs text-slate-300">
                    {lang === 'ru' 
                      ? 'Наши менеджеры подберут отель, прямой рейс и оформят поездку без скрытых доплат.'
                      : 'Our managers will select verified hotels, flights, and complete your reservation.'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleBookCity(expandedCity)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all"
              >
                {lang === 'ru' ? 'Получить консультацию и расчет' : 'Get Consultation & Price Quote'}
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
