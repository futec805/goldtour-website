import { useState, useEffect } from 'react';
import { X, CheckCircle, Moon, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import { sendLeadToJivo } from '../utils/jivoBridge';

export default function BookingModal({ isOpen, onClose, tour }) {
  const { t } = useLanguage();
  const { bookingModal } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getTourTitle = () =>
    tour?.hotel ||
    (typeof tour?.name === 'object' ? t(tour.name) : tour?.name) ||
    t({ ru: 'Бронирование тура', en: 'Tour Booking' });

  const getTourPrice = () =>
    (tour && (typeof tour.price === 'object' ? t(tour.price) : tour.price || t(tour.priceFrom))) || 'По запросу';

  const handleSubmit = (e) => {
    e.preventDefault();
    const tourTitle = getTourTitle();
    const tourPrice = getTourPrice();

    const details = [
      tourTitle,
      tour?.country ? `Страна: ${tour.country}` : null,
      tour?.city ? `Город: ${tour.city}` : null,
      tour?.nights ? `${tour.nights} ночей` : null,
      tour?.mealPlan ? tour.mealPlan : null,
      `Цена: ${tourPrice}`,
    ]
      .filter(Boolean)
      .join(' | ');

    sendLeadToJivo({
      source: 'Заявка на бронирование тура',
      name,
      email,
      phone,
      tourSummary: details,
      message: `Прошу забронировать или подобрать тур: ${details}`,
      customFields: [
        { title: 'Отель / Направление', content: tourTitle },
        { title: 'Стоимость', content: tourPrice },
      ],
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative bg-navy-900 border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden"
           onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="inline-block bg-gold-500/20 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                {t(bookingModal.title)}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {tour?.hotel || (typeof tour?.name === 'object' ? t(tour.name) : tour?.name) || t({ ru: 'Бронирование тура', en: 'Tour Booking' })}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                {t(bookingModal.subtitle)}
              </p>
            </div>

            {/* Tour summary card */}
            {tour && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-semibold">
                    {typeof tour.location === 'object' ? t(tour.location) : (tour.location || (typeof tour.description === 'object' ? t(tour.description) : ''))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/60 mt-1">
                    {tour.nights && (
                      <span className="flex items-center gap-1">
                        <Moon size={12} className="text-gold-400" /> {tour.nights} {t({ ru: 'ночей', en: 'nights' })}
                      </span>
                    )}
                    {tour.mealPlan && (
                      <span className="flex items-center gap-1">
                        <Utensils size={12} className="text-gold-400" /> {tour.mealPlan}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/50">{t(bookingModal.priceLabel)}</div>
                  <div className="text-lg font-heading font-black text-gold-400">
                    {typeof tour.price === 'object' ? t(tour.price) : (tour.price || t(tour.priceFrom) || 'По запросу')}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(bookingModal.namePlaceholder)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t(bookingModal.phonePlaceholder)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t({ ru: 'E-mail (необязательно)', en: 'E-mail (optional)' })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 rounded-full transition-all shadow-lg shadow-gold-500/20 text-sm uppercase tracking-wide mt-2"
              >
                {t(bookingModal.submitButton)}
              </button>

              <p className="text-[11px] text-white/40 text-center">
                {t({
                  ru: 'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных (152-ФЗ)',
                  en: 'By clicking, you agree to personal data processing terms (152-FZ)'
                })}
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle size={56} className="text-green-400 mx-auto mb-4 animate-bounce" />
            <h4 className="text-xl font-heading font-bold text-white mb-2">
              {t({ ru: 'Заявка успешно отправлена!', en: 'Booking Request Submitted!' })}
            </h4>
            <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
              {t(bookingModal.successMessage)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
