import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, Navigation, Car, Bus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import { sendLeadToJivo } from '../utils/jivoBridge';

export default function ContactSection() {
  const { t } = useLanguage();
  const { contact, company } = siteContent;
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      sendLeadToJivo({
        source: 'Форма обратной связи (Контакты)',
        name: formData.name,
        phone: formData.phone,
        message: formData.message || 'Запрос консультации с сайта.',
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contacts" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <MapPin size={16} />
            {t(contact.sectionTitle)}
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3">
            {t({ ru: 'Ждём вас в нашем офисе и на связи онлайн', en: 'Visit Our Office or Connect Online' })}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base">
            {t(contact.sectionSubtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Office Info & Map Card */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">{t(contact.officeTitle)}</h3>
                  <p className="text-white/50 text-xs mt-0.5">
                    {t({ ru: 'Нижегородская область, Кстово / Нижний Новгород', en: 'Nizhny Novgorod Region, Kstovo' })}
                  </p>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t({ ru: 'Открыто сейчас', en: 'Open Now' })}
                </span>
              </div>

              {/* Contact rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{t(contact.phoneLabel)}</div>
                    <a href={`tel:${company.phone}`} className="text-white hover:text-gold-400 font-semibold text-sm transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{t(contact.emailLabel)}</div>
                    <a href={`mailto:${company.email}`} className="text-white hover:text-gold-400 font-semibold text-sm transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{t(contact.addressLabel)}</div>
                    <p className="text-white/90 text-sm font-medium">{t(company.address)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{t(contact.hoursLabel)}</div>
                    <p className="text-white/90 text-sm font-medium">{t(company.workingHours)}</p>
                  </div>
                </div>
              </div>

              {/* Direct messengers buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 rounded-2xl font-semibold text-sm transition-all shadow-lg shadow-green-600/20"
                >
                  <MessageCircle size={18} />
                  {t({ ru: 'Написать в WhatsApp', en: 'Message on WhatsApp' })}
                </a>
                <a
                  href={company.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-2xl font-semibold text-sm transition-all shadow-lg shadow-sky-500/20"
                >
                  <Send size={18} />
                  {t({ ru: 'Написать в Telegram', en: 'Message on Telegram' })}
                </a>
              </div>
            </div>

            {/* Interactive Office Map preview card */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 p-6 shadow-xl relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <Navigation size={16} className="text-gold-400" />
                  {t({ ru: 'Как добраться до офиса', en: 'How to Reach the Office' })}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://yandex.ru/maps/?text=Кстово+ул+Чванова+26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-navy-950 px-3 py-1.5 rounded-full font-semibold transition-colors"
                  >
                    Яндекс.Карты ↗
                  </a>
                  <a
                    href="https://2gis.ru/n_novgorod/search/Кстово+Чванова+26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-white/10 hover:bg-white text-white/70 hover:text-navy-950 px-3 py-1.5 rounded-full font-semibold transition-colors"
                  >
                    2ГИС ↗
                  </a>
                </div>
              </div>

              <div className="space-y-2 text-xs text-white/60 mb-4">
                <div className="flex items-center gap-2">
                  <Bus size={14} className="text-gold-400 shrink-0" />
                  <span>{t({ ru: 'Остановка «Улица Чванова» — 3 минуты пешком', en: 'Bus stop "Chvanova Street" — 3 min walk' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car size={14} className="text-gold-400 shrink-0" />
                  <span>{t({ ru: 'Бесплатная парковка прямо перед входом в агентство', en: 'Free parking directly in front of agency entrance' })}</span>
                </div>
              </div>

              {/* Map embed / preview */}
              <div className="h-44 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 relative">
                <iframe
                  title="Office Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=44.1850%2C56.1450%2C44.2050%2C56.1580&amp;layer=mapnik&amp;marker=56.1513%2C44.1956"
                  className="w-full h-full border-0 filter brightness-90 contrast-125"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-navy-950/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-gold-400 font-bold border border-white/10">
                  📍 Кстово, ул. Чванова, 26
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Question Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-1 block">
                  {t({ ru: 'Бесплатная консультация', en: 'Free Consultation' })}
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {t(contact.writeUs)}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm mt-1">
                  {t({
                    ru: 'Напишите нам, и мы ответим на все вопросы или подготовим индивидуальную подборку туров',
                    en: 'Send us a message and our managers will assist with any questions or custom tours'
                  })}
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-white/60 mb-1.5 font-medium">
                      {t({ ru: 'Ваше имя', en: 'Your Name' })} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder={t(contact.messagePlaceholder)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/60 mb-1.5 font-medium">
                      {t({ ru: 'Номер телефона', en: 'Phone Number' })} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder={t(contact.phonePlaceholder)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/60 mb-1.5 font-medium">
                      {t({ ru: 'Ваше пожелание или вопрос', en: 'Your Request or Question' })}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder={t(contact.textPlaceholder)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-gold-500/20 text-sm uppercase tracking-wider"
                  >
                    {t(contact.sendButton)}
                  </button>

                  <p className="text-[11px] text-white/40 text-center">
                    {t({
                      ru: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных (152-ФЗ РФ)',
                      en: 'By clicking, you agree to personal data processing terms (152-FZ RF)'
                    })}
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle size={56} className="text-green-400 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-heading font-bold text-white">
                    {t({ ru: 'Спасибо за ваше обращение!', en: 'Thank You for Reaching Out!' })}
                  </h4>
                  <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                    {t({
                      ru: 'Мы получили ваше сообщение. Дежурный менеджер турагентства свяжется с вами в течение 10–15 минут.',
                      en: 'We received your message. Our duty travel manager will contact you within 10–15 minutes.'
                    })}
                  </p>
                </div>
              )}
            </div>

            {/* Quick trust reassurance */}
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/40 flex items-center justify-between">
              <span>🔒 100% {t({ ru: 'Конфиденциально', en: 'Confidential' })}</span>
              <span>⚡ {t({ ru: 'Ответ в течение 15 минут', en: 'Reply in 15 mins' })}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
