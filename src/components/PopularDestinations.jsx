import { useState, useMemo, useRef } from 'react';
import { 
  Globe2, 
  MapPin, 
  Plane, 
  Thermometer, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  X, 
  Camera, 
  Compass,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Languages,
  Waves,
  MessageCircle,
  Eye
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { countryGuideData } from '../data/countryGuideData';

export default function PopularDestinations({ onSelectTour }) {
  const { lang, t } = useLanguage();
  
  // Level 1: Selected Country ID
  const [selectedCountryId, setSelectedCountryId] = useState('turkey');
  
  // Level 2 -> 3: Selected City ID inside the country
  const [selectedCityId, setSelectedCityId] = useState('antalya');

  // Active enlarged photo for modal view (if user clicks any photo)
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // References for smooth scrolling
  const countryHubRef = useRef(null);
  const cityDetailRef = useRef(null);

  // Active country object
  const activeCountry = useMemo(() => {
    if (!selectedCountryId) return null;
    return countryGuideData.find(c => c.id === selectedCountryId) || countryGuideData[0];
  }, [selectedCountryId]);

  // Active city object
  const activeCity = useMemo(() => {
    if (!activeCountry) return null;
    return activeCountry.cities.find(c => c.id === selectedCityId) || activeCountry.cities[0];
  }, [activeCountry, selectedCityId]);

  const handleSelectCountry = (countryId) => {
    setSelectedCountryId(countryId);
    const country = countryGuideData.find(c => c.id === countryId);
    if (country && country.cities.length > 0) {
      setSelectedCityId(country.cities[0].id);
    } else {
      setSelectedCityId(null);
    }
    setTimeout(() => {
      if (countryHubRef.current) {
        countryHubRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSelectCity = (cityId) => {
    setSelectedCityId(cityId);
    setTimeout(() => {
      if (cityDetailRef.current) {
        cityDetailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const handleConsultation = (destinationName) => {
    if (onSelectTour) {
      onSelectTour({
        hotel: destinationName,
        country: t(activeCountry.name),
        city: activeCity ? t(activeCity.name) : '',
        price: 'По запросу',
        originalPrice: null,
        nights: '7–14',
        meal: lang === 'ru' ? 'Подбор индивидуального тура' : 'Custom travel itinerary'
      });
    }
  };

  return (
    <section id="destinations" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
            <Globe2 size={14} className="text-gold-600" />
            <span>
              {lang === 'ru' ? 'Интерактивный атлас путешествий' : 'Interactive Travel Atlas'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-950 mb-3">
            {lang === 'ru' ? 'Страны и знаменитые города' : 'Countries & Famous Cities'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'ru' 
              ? 'Выберите страну, чтобы узнать о ней и посмотреть фотографии, затем выберите любой знаменитый город для подробного знакомства с его пляжами и достопримечательностями.'
              : 'Select a country to explore overview and photos, then select any famous city to discover details and top sights.'}
          </p>
        </div>

        {/* ========================================================= */}
        {/* LEVEL 1: SMALL COUNTRY BOXES WITH PHOTO                   */}
        {/* ========================================================= */}
        <div className="mb-10">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-1 flex items-center justify-between">
            <span>{lang === 'ru' ? '1. Выберите страну' : '1. Choose a Country'}</span>
            <span className="text-[11px] text-slate-400">{countryGuideData.length} {lang === 'ru' ? 'стран' : 'countries'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {countryGuideData.map((country) => {
              const isSelected = country.id === selectedCountryId;
              return (
                <div
                  key={country.id}
                  onClick={() => handleSelectCountry(country.id)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-300 shadow-sm hover:shadow-lg relative flex flex-col ${
                    isSelected 
                      ? 'ring-2 ring-gold-500 border-gold-500 shadow-md scale-[1.02]' 
                      : 'border-slate-200 hover:border-gold-400 hover:-translate-y-0.5'
                  }`}
                >
                  {/* Photo box */}
                  <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-900">
                    <img
                      src={country.cardImage}
                      alt={t(country.name)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    
                    <span className="absolute top-2 left-2 text-xl drop-shadow">
                      {country.flag}
                    </span>

                    {isSelected && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-gold-500 text-navy-950 shadow">
                        ✓ {lang === 'ru' ? 'Выбрано' : 'Active'}
                      </span>
                    )}
                  </div>

                  {/* Country Name */}
                  <div className={`p-3 flex items-center justify-between transition-colors ${
                    isSelected ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'
                  }`}>
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm leading-tight">
                        {t(country.name)}
                      </h4>
                      <span className={`text-[10px] ${
                        isSelected ? 'text-gold-400' : 'text-slate-500'
                      }`}>
                        {country.cities.length} {lang === 'ru' ? 'городов' : 'cities'}
                      </span>
                    </div>

                    <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      isSelected ? 'bg-gold-500 text-navy-950' : 'bg-slate-100 text-slate-400 group-hover:bg-gold-50 group-hover:text-gold-600'
                    }`}>
                      <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* LEVEL 2: COUNTRY INFORMATION & SEVERAL COUNTRY PHOTOS     */}
        {/* ========================================================= */}
        {activeCountry && (
          <div 
            ref={countryHubRef}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12 animate-fadeIn transition-all duration-300"
          >
            {/* Country Info Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl">{activeCountry.flag}</span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      {t(activeCountry.name)}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                      {t(activeCountry.visa)}
                    </span>
                  </div>
                  <p className="text-gold-400 font-medium text-sm sm:text-base mb-2">
                    {t(activeCountry.tagline)}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                    {t(activeCountry.overview)}
                  </p>
                </div>

                {/* Country Quick Badges */}
                <div className="flex flex-row lg:flex-col gap-2.5 text-xs w-full lg:w-auto flex-shrink-0">
                  <div className="flex-1 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-400 block text-[10px]">{lang === 'ru' ? 'Перелет:' : 'Flights:'}</span>
                    <strong className="text-white text-xs">{t(activeCountry.flightTime)}</strong>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-400 block text-[10px]">{lang === 'ru' ? 'Сезон:' : 'Season:'}</span>
                    <strong className="text-white text-xs">☀️ {t(activeCountry.bestSeason)}</strong>
                  </div>
                </div>
              </div>

              {/* SEVERAL PHOTOS OF THAT COUNTRY */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
                    <Camera size={14} />
                    <span>{lang === 'ru' ? `Фотографии страны: ${t(activeCountry.name)}` : `Photos of ${t(activeCountry.name)}`}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {activeCountry.countryPhotos.length} {lang === 'ru' ? 'фото' : 'photos'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-3">
                  {activeCountry.countryPhotos.map((photoUrl, pIdx) => (
                    <div 
                      key={pIdx} 
                      onClick={() => setLightboxPhoto(photoUrl)}
                      className="cursor-pointer h-24 sm:h-32 rounded-xl overflow-hidden border border-white/10 shadow-sm bg-black/40 group relative"
                    >
                      <img 
                        src={photoUrl} 
                        alt={t(activeCountry.name)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye size={16} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* FAMOUS CITIES SELECTOR (BELOW COUNTRY INFORMATION)        */}
            {/* ========================================================= */}
            <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Compass size={18} className="text-gold-600" />
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-navy-950">
                    {lang === 'ru' ? `Знаменитые города ${t(activeCountry.name)}:` : `Famous Cities in ${t(activeCountry.name)}:`}
                  </h4>
                </div>
                <span className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Нажмите на город для просмотра' : 'Click a city to view details'}
                </span>
              </div>

              {/* City Selector Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {activeCountry.cities.map((city) => {
                  const isCityActive = activeCity && activeCity.id === city.id;
                  return (
                    <div
                      key={city.id}
                      onClick={() => handleSelectCity(city.id)}
                      className={`cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-200 shadow-sm hover:shadow-md ${
                        isCityActive
                          ? 'ring-2 ring-gold-500 border-gold-500 shadow-md scale-[1.01]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center p-3 gap-3">
                        <img 
                          src={city.image} 
                          alt={t(city.name)}
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          loading="lazy" 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h5 className="font-heading font-bold text-sm text-navy-950 truncate">
                              {t(city.name)}
                            </h5>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                              {city.temp}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {t(city.tag)}
                          </p>
                          <div className="flex items-center justify-between mt-1 text-[11px] text-gold-600 font-semibold">
                            <span>{isCityActive ? (lang === 'ru' ? '● Открыт' : '● Selected') : (lang === 'ru' ? 'Подробнее →' : 'View →')}</span>
                            <span className="text-slate-400 font-normal">✈ {t(city.flight)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ========================================================= */}
              {/* LEVEL 3: CITY DETAIL, SEVERAL PHOTOS & TOP SIGHTS         */}
              {/* ========================================================= */}
              {activeCity && (
                <div 
                  ref={cityDetailRef}
                  className="bg-white rounded-2xl border-2 border-gold-500/30 p-6 sm:p-8 shadow-md animate-fadeIn"
                >
                  {/* City Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold">
                          {t(activeCity.tag)}
                        </span>
                        <span className="text-xs text-slate-500">
                          ✈ {t(activeCity.flight)}
                        </span>
                        <span className="text-xs text-amber-600 font-bold">
                          ☀️ {activeCity.temp}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-2xl text-navy-950">
                        {t(activeCity.name)} ({t(activeCountry.name)})
                      </h4>
                    </div>

                    <button
                      onClick={() => handleConsultation(`${t(activeCountry.name)} — ${t(activeCity.name)}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-950 hover:bg-navy-900 text-gold-400 font-bold text-xs shadow-sm transition-all"
                    >
                      <MessageCircle size={14} />
                      <span>{lang === 'ru' ? `Узнать подробнее о ${t(activeCity.name)}` : `Inquire about ${t(activeCity.name)}`}</span>
                    </button>
                  </div>

                  {/* City Description */}
                  <div className="py-4">
                    <p className="text-slate-700 text-sm leading-relaxed max-w-4xl">
                      {t(activeCity.desc)}
                    </p>
                  </div>

                  {/* SEVERAL PHOTOS OF THAT CITY */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Camera size={14} className="text-gold-500" />
                        <span>{lang === 'ru' ? `Фотографии города ${t(activeCity.name)}:` : `Photos of ${t(activeCity.name)}:`}</span>
                      </div>
                      <span className="text-xs text-slate-400">
                        {activeCity.photos ? activeCity.photos.length : 1} {lang === 'ru' ? 'фото' : 'photos'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {(activeCity.photos || [activeCity.image]).map((photoUrl, phIdx) => (
                        <div
                          key={phIdx}
                          onClick={() => setLightboxPhoto(photoUrl)}
                          className="cursor-pointer h-36 sm:h-44 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-900"
                        >
                          <img 
                            src={photoUrl} 
                            alt={t(activeCity.name)} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Eye size={18} className="text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Beach Features if coastal */}
                  {activeCity.beachInfo && (
                    <div className="mb-6 p-4 rounded-xl bg-cyan-50/80 border border-cyan-200/80 text-cyan-950">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-800 mb-1">
                        <Waves size={14} />
                        <span>{lang === 'ru' ? 'Особенности пляжей и моря:' : 'Beach & Ocean Features:'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-cyan-900 leading-relaxed">
                        {t(activeCity.beachInfo)}
                      </p>
                    </div>
                  )}

                  {/* TOP TOURIST SIGHTS OF THAT CITY */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950 uppercase tracking-wider mb-3">
                      <Sparkles size={14} className="text-gold-500" />
                      <span>{lang === 'ru' ? `Главные достопримечательности города ${t(activeCity.name)}:` : `Top Tourist Sights in ${t(activeCity.name)}:`}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {activeCity.attractions.map((att, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-gold-400 hover:bg-white transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {aIdx + 1}
                            </span>
                            <h6 className="font-heading font-bold text-xs sm:text-sm text-navy-950 truncate">
                              {t(att.name)}
                            </h6>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {t(att.desc)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* FULL PHOTO LIGHTBOX PREVIEW MODAL                         */}
      {/* ========================================================= */}
      {lightboxPhoto && (
        <div 
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <button
            onClick={() => setLightboxPhoto(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={lightboxPhoto} 
              alt="Destination Photo" 
              className="w-full h-full object-contain max-h-[85vh]" 
            />
          </div>
        </div>
      )}

    </section>
  );
}
