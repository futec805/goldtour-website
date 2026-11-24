import { useState, useMemo } from 'react';
import { 
  Compass, 
  MapPin, 
  Plane, 
  Thermometer, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Camera
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { countryGuideData } from '../data/countryGuideData';

export default function CountryCityGuide({ onSelectTour }) {
  const { lang, t } = useLanguage();
  
  // Selected Country ID
  const [selectedCountryId, setSelectedCountryId] = useState('turkey');
  
  // Active City ID (for Desktop side-by-side view)
  const [activeCityId, setActiveCityId] = useState('antalya');

  // Expanded City IDs (for Mobile expanding cards)
  const [expandedMobileCity, setExpandedMobileCity] = useState('antalya');

  // Active photo index for city gallery
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Active country object
  const activeCountry = useMemo(() => {
    return countryGuideData.find(c => c.id === selectedCountryId) || countryGuideData[0];
  }, [selectedCountryId]);

  // Active city object
  const activeCity = useMemo(() => {
    return activeCountry.cities.find(c => c.id === activeCityId) || activeCountry.cities[0];
  }, [activeCountry, activeCityId]);

  // When switching countries, select the first city
  const handleSelectCountry = (id) => {
    setSelectedCountryId(id);
    const country = countryGuideData.find(c => c.id === id);
    if (country && country.cities.length > 0) {
      setActiveCityId(country.cities[0].id);
      setExpandedMobileCity(country.cities[0].id);
      setActivePhotoIdx(0);
    }
  };

  const handleSelectCityDesktop = (cityId) => {
    setActiveCityId(cityId);
    setActivePhotoIdx(0);
  };

  const handleToggleMobileCity = (cityId) => {
    setExpandedMobileCity(prev => prev === cityId ? null : cityId);
    setActivePhotoIdx(0);
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
              {lang === 'ru' ? 'Интерактивный путеводитель' : 'Interactive Travel Guide'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-950 mb-3">
            {lang === 'ru' ? 'Популярные страны и знаменитые города' : 'Top Countries & Famous Cities'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'ru' 
              ? 'Исследуйте ключевые города, смотрите фотографии, узнавайте главные достопримечательности и выбирайте лучшее направление для вашего отпуска.'
              : 'Explore iconic destinations, view high-res photos, discover top attractions, and choose the perfect getaway.'}
          </p>
        </div>

        {/* 10 Countries Horizontal Selector (Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {countryGuideData.map((country) => {
            const isSelected = country.id === selectedCountryId;
            return (
              <button
                key={country.id}
                onClick={() => handleSelectCountry(country.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-navy-900 to-navy-950 text-gold-400 shadow-md ring-2 ring-gold-500/50'
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
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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
        {/* DESKTOP LAYOUT (md & above): Side-by-Side Split View */}
        {/* ==================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (4 cols): City List */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>{lang === 'ru' ? 'Города и курорты' : 'Cities & Resorts'}</span>
              <span>{activeCountry.cities.length} {lang === 'ru' ? 'локации' : 'locations'}</span>
            </div>

            {activeCountry.cities.map((city) => {
              const isSelected = city.id === activeCityId;
              return (
                <div
                  key={city.id}
                  onClick={() => handleSelectCityDesktop(city.id)}
                  className={`group cursor-pointer rounded-xl p-3.5 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-navy-950 text-white border-gold-500 shadow-md ring-1 ring-gold-500/40'
                      : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={city.image} 
                      alt={t(city.name)}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className={`font-heading font-bold text-sm truncate ${
                          isSelected ? 'text-white' : 'text-navy-950'
                        }`}>
                          {t(city.name)}
                        </h4>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-gold-500/20 text-gold-400' : 'bg-gold-50 text-gold-700'
                        }`}>
                          {city.temp}
                        </span>
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {t(city.tag)}
                      </p>
                      <div className="flex items-center justify-between mt-1 text-[11px]">
                        <span className={isSelected ? 'text-slate-400' : 'text-slate-400'}>
                          ✈ {t(city.flight)}
                        </span>
                        <span className={`font-bold ${
                          isSelected ? 'text-gold-400' : 'text-gold-600'
                        }`}>
                          {lang === 'ru' ? `от ${city.priceFrom}` : `from ${city.priceFrom}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (8 cols): Showcase of Active City */}
          <div className="md:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Hero Image & Overlay */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src={activeCity.photos && activeCity.photos[activePhotoIdx] ? activeCity.photos[activePhotoIdx] : activeCity.image}
                alt={t(activeCity.name)}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-black/20" />
              
              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold">
                  <MapPin size={12} className="text-gold-400" />
                  {t(activeCountry.name)} • {t(activeCity.name)}
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-navy-950 text-xs font-bold shadow">
                    <Thermometer size={12} /> {activeCity.temp}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                    <Plane size={12} /> {t(activeCity.flight)}
                  </span>
                </div>
              </div>

              {/* Bottom Caption on Hero */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 mb-1">
                  {t(activeCity.tag)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {t(activeCity.name)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mt-1 max-w-2xl">
                  {t(activeCity.desc)}
                </p>
              </div>

              {/* Photo Thumbnails if multiple */}
              {activeCity.photos && activeCity.photos.length > 1 && (
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-lg">
                  {activeCity.photos.map((ph, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIdx(idx);
                      }}
                      className={`w-9 h-7 rounded overflow-hidden border-2 transition-all ${
                        activePhotoIdx === idx ? 'border-gold-400 scale-105' : 'border-white/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={ph} className="w-full h-full object-cover" alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Attractions & Booking Area */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-gold-500" />
                  <h4 className="font-heading font-bold text-base text-navy-950">
                    {lang === 'ru' ? `Главные достопримечательности: ${t(activeCity.name)}` : `Top Must-See Sights in ${t(activeCity.name)}`}
                  </h4>
                </div>
                <span className="text-xs text-slate-500">
                  {activeCity.attractions.length} {lang === 'ru' ? 'локации' : 'highlights'}
                </span>
              </div>

              {/* Attractions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {activeCity.attractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-gold-400/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-gold-500/10 text-gold-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <h5 className="font-semibold text-xs text-navy-950 leading-snug line-clamp-1">
                        {t(att.name)}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {t(att.desc)}
                    </p>
                  </div>
                ))}
              </div>

              {/* City Bottom CTA Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-navy-950 to-navy-900 text-white">
                <div>
                  <div className="text-xs text-slate-400">
                    {lang === 'ru' ? 'Стоимость пакетных туров в этот город' : 'Tour package prices to this city'}
                  </div>
                  <div className="text-lg font-bold text-gold-400">
                    {lang === 'ru' ? `от ${activeCity.priceFrom} / чел.` : `from ${activeCity.priceFrom} / person`}
                  </div>
                </div>

                <button
                  onClick={() => handleBookCity(activeCity)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-gold-500/20"
                >
                  <span>{lang === 'ru' ? `Подобрать тур в ${t(activeCity.name)}` : `Find Tours to ${t(activeCity.name)}`}</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ==================================================== */}
        {/* MOBILE LAYOUT (< md): Interactive Expanding Cards    */}
        {/* ==================================================== */}
        <div className="md:hidden space-y-4">
          {activeCountry.cities.map((city) => {
            const isExpanded = expandedMobileCity === city.id;
            return (
              <div
                key={city.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                {/* Header Card (Always Visible) */}
                <div 
                  onClick={() => handleToggleMobileCity(city.id)}
                  className="cursor-pointer relative h-44 overflow-hidden bg-slate-900"
                >
                  <img
                    src={city.image}
                    alt={t(city.name)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-black/20" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                      {t(city.tag)}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500 text-navy-950">
                      {city.temp}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <h4 className="font-heading font-bold text-lg">{t(city.name)}</h4>
                      <div className="text-xs text-gold-400 font-semibold mt-0.5">
                        {lang === 'ru' ? `от ${city.priceFrom}` : `from ${city.priceFrom}`} • ✈ {t(city.flight)}
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                      <span>{isExpanded ? (lang === 'ru' ? 'Свернуть' : 'Close') : (lang === 'ru' ? 'Подробнее' : 'Details')}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-4">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {t(city.desc)}
                    </p>

                    <div>
                      <div className="text-[11px] font-bold text-navy-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles size={13} className="text-gold-500" />
                        <span>{lang === 'ru' ? 'Главные достопримечательности' : 'Top Attractions'}</span>
                      </div>
                      <div className="space-y-2">
                        {city.attractions.map((att, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                            <div className="font-semibold text-navy-950 flex items-center gap-1.5">
                              <span className="text-gold-600 font-bold">{i + 1}.</span>
                              <span>{t(att.name)}</span>
                            </div>
                            <p className="text-[11px] text-slate-600 mt-1">
                              {t(att.desc)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookCity(city)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-gold-400 font-bold text-xs shadow-md"
                    >
                      <span>{lang === 'ru' ? `Подобрать тур в ${t(city.name)} от ${city.priceFrom}` : `Find Tours to ${t(city.name)} from ${city.priceFrom}`}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
