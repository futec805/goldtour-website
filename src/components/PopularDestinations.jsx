import { useState, useMemo, useRef, useEffect } from 'react';
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
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { countryGuideData } from '../data/countryGuideData';

export default function PopularDestinations({ onSelectTour }) {
  const { lang, t } = useLanguage();
  
  // Selected Country ID (defaults to 'turkey' so user immediately sees rich content, or null if clicked close)
  const [selectedCountryId, setSelectedCountryId] = useState('turkey');
  
  // Showcase reference for smooth scrolling when a country box is clicked
  const showcaseRef = useRef(null);

  // Active country object
  const activeCountry = useMemo(() => {
    if (!selectedCountryId) return null;
    return countryGuideData.find(c => c.id === selectedCountryId) || null;
  }, [selectedCountryId]);

  const handleSelectCountry = (countryId) => {
    setSelectedCountryId(countryId);
    setTimeout(() => {
      if (showcaseRef.current) {
        showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleBookCity = (city, countryName) => {
    if (onSelectTour) {
      onSelectTour({
        hotel: `${t(city.name)} Resort & Spa`,
        country: countryName,
        city: t(city.name),
        price: city.priceFrom,
        originalPrice: null,
        nights: '7–10',
        meal: lang === 'ru' ? 'Всё включено / Завтраки' : 'All-Inclusive / Breakfast'
      });
    }
  };

  return (
    <section id="destinations" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
            <Globe2 size={14} className="text-gold-600" />
            <span>
              {lang === 'ru' ? 'Популярные направления' : 'Popular Destinations'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-950 mb-3">
            {lang === 'ru' ? 'Куда поехать отдыхать: страны и города' : 'Where to Travel: Countries & Famous Cities'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'ru' 
              ? 'Нажмите на любую страну, чтобы посмотреть её фотогалерею, узнать подробности, а также исследовать знаменитые города и главные достопримечательности.'
              : 'Click any country below to see scenic photo galleries, country details, famous cities, and top tourist sights.'}
          </p>
        </div>

        {/* ========================================================= */}
        {/* SMALL BOXES WITH PHOTO GRID (10 Countries)               */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {countryGuideData.map((country) => {
            const isSelected = country.id === selectedCountryId;
            return (
              <div
                key={country.id}
                onClick={() => handleSelectCountry(country.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-300 shadow-sm hover:shadow-xl relative flex flex-col ${
                  isSelected 
                    ? 'ring-2 ring-gold-500 border-gold-500 shadow-md scale-[1.02]' 
                    : 'border-slate-200 hover:border-gold-400 hover:-translate-y-1'
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
                  
                  {/* Flag badge top-left */}
                  <span className="absolute top-2 left-2 text-xl drop-shadow">
                    {country.flag}
                  </span>

                  {/* Price badge top-right */}
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-black/60 text-gold-400 backdrop-blur-md">
                    {lang === 'ru' ? `от ${country.priceFrom}` : `from ${country.priceFrom}`}
                  </span>
                </div>

                {/* Country title & click hint */}
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

                  <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-gold-500 text-navy-950' : 'bg-slate-100 text-slate-400 group-hover:bg-gold-50 group-hover:text-gold-600'
                  }`}>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* EXPANDED COUNTRY & CITIES SHOWCASE                        */}
        {/* ========================================================= */}
        {activeCountry && (
          <div 
            ref={showcaseRef}
            className="bg-white rounded-3xl border-2 border-gold-500/40 shadow-xl overflow-hidden animate-fadeIn transition-all duration-300"
          >
            {/* Country Header & Info Banner */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCountryId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                title={lang === 'ru' ? 'Закрыть' : 'Close'}
              >
                <X size={20} />
              </button>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl">{activeCountry.flag}</span>
                    <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white">
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
                <div className="flex flex-row lg:flex-col gap-3 text-xs w-full lg:w-auto flex-shrink-0">
                  <div className="flex-1 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-400 block text-[11px]">{lang === 'ru' ? 'Время перелета:' : 'Flight time:'}</span>
                    <strong className="text-white text-sm">✈ {t(activeCountry.flightTime)}</strong>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                    <span className="text-slate-400 block text-[11px]">{lang === 'ru' ? 'Лучший сезон:' : 'Best season:'}</span>
                    <strong className="text-white text-sm">☀️ {t(activeCountry.bestSeason)}</strong>
                  </div>
                </div>
              </div>

              {/* SEVERAL IMAGES OF THAT COUNTRY */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gold-400 uppercase tracking-wider">
                  <Camera size={14} />
                  <span>{lang === 'ru' ? `Фотографии страны: ${t(activeCountry.name)}` : `Photos of ${t(activeCountry.name)}`}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {activeCountry.countryPhotos.map((photoUrl, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 shadow-sm bg-black/40 group"
                    >
                      <img 
                        src={photoUrl} 
                        alt={t(activeCountry.name)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* BELOW THAT: SEVERAL FAMOUS CITIES OF THAT COUNTRY         */}
            {/* ========================================================= */}
            <div className="p-6 sm:p-8 bg-white">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Compass size={20} className="text-gold-500" />
                  <h4 className="font-heading font-bold text-xl sm:text-2xl text-navy-950">
                    {lang === 'ru' ? `Знаменитые города: ${t(activeCountry.name)}` : `Famous Cities in ${t(activeCountry.name)}`}
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {activeCountry.cities.length} {lang === 'ru' ? 'направления' : 'destinations'}
                </span>
              </div>

              {/* List of Famous Cities */}
              <div className="space-y-8">
                {activeCountry.cities.map((city, cIdx) => (
                  <div
                    key={city.id}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: City Photo & Gallery (5 cols) */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                          <img
                            src={city.image}
                            alt={t(city.name)}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20" />
                          
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                              {t(city.tag)}
                            </span>
                            <span className="px-2.5 py-1 rounded bg-amber-500 text-navy-950 text-xs font-bold shadow">
                              {city.temp}
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <h5 className="font-heading font-bold text-xl sm:text-2xl text-white">
                              {t(city.name)}
                            </h5>
                            <span className="text-xs text-slate-300">
                              ✈ {t(city.flight)}
                            </span>
                          </div>
                        </div>

                        {/* Additional City Photos */}
                        {city.photos && city.photos.length > 1 && (
                          <div className="grid grid-cols-2 gap-2">
                            {city.photos.map((ph, phIdx) => (
                              <div key={phIdx} className="h-20 rounded-lg overflow-hidden border border-slate-200">
                                <img src={ph} alt="" className="w-full h-full object-cover" loading="lazy" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: City Details, Top Sights & Booking Button (7 cols) */}
                      <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h5 className="font-heading font-bold text-xl text-navy-950">
                              {t(city.name)}
                            </h5>
                            <div className="text-right">
                              <span className="text-[11px] text-slate-500 block">{lang === 'ru' ? 'Стоимость туров' : 'Tour prices'}</span>
                              <span className="text-gold-600 font-bold text-lg font-heading">
                                {lang === 'ru' ? `от ${city.priceFrom}` : `from ${city.priceFrom}`}
                              </span>
                            </div>
                          </div>

                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                            {t(city.desc)}
                          </p>

                          {/* Top Tourist Sights of That City */}
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950 uppercase tracking-wider mb-2.5">
                              <Sparkles size={14} className="text-gold-500" />
                              <span>{lang === 'ru' ? 'Главные достопримечательности города' : 'Top Tourist Sites'}</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {city.attractions.map((att, aIdx) => (
                                <div
                                  key={aIdx}
                                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-gold-400 transition-colors"
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="w-5 h-5 rounded-full bg-gold-500/15 text-gold-700 font-bold text-[11px] flex items-center justify-center flex-shrink-0">
                                      {aIdx + 1}
                                    </span>
                                    <h6 className="font-semibold text-xs text-navy-950 truncate">
                                      {t(att.name)}
                                    </h6>
                                  </div>
                                  <p className="text-[11px] text-slate-600 leading-snug">
                                    {t(att.desc)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Book Tour CTA Button */}
                        <div className="pt-2">
                          <button
                            onClick={() => handleBookCity(city, t(activeCountry.name))}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-navy-950 to-navy-900 hover:from-gold-600 hover:to-gold-500 text-gold-400 hover:text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
                          >
                            <span>{lang === 'ru' ? `Подобрать тур в ${t(city.name)} от ${city.priceFrom}` : `Book Tour to ${t(city.name)} from ${city.priceFrom}`}</span>
                            <ArrowRight size={15} />
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
