import { Send, MessageCircle, Phone, Mail, Shield, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenLegal }) {
  const { t } = useLanguage();
  const { footer, company, nav } = siteContent;

  const quickLinks = [
    { label: t(nav.search), href: '#search' },
    { label: t(nav.quiz), href: '#quiz' },
    { label: t(nav.destinations), href: '#destinations' },
    { label: t(nav.services), href: '#services' },
    { label: t(nav.reviews), href: '#reviews' },
    { label: t(nav.contacts), href: '#contacts' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="Золотой тур" 
                className="h-12 sm:h-14 w-auto object-contain bg-white/5 p-1 rounded-lg" 
              />
              <div>
                <span className="font-heading font-bold text-xl text-white block leading-tight">
                  {t(company.name)}
                </span>
                <span className="text-[11px] text-gold-400 font-medium">
                  {t({ ru: 'Нижний Новгород & Кстово', en: 'Nizhny Novgorod & Kstovo' })}
                </span>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              {t({
                ru: 'Официальный поиск и бронирование пляжных туров по 80+ туроператорам. Гарантия лучшей цены и поддержка персонального менеджера 24/7.',
                en: 'Official beach tour booking across 80+ tour operators. Best price guarantee and 24/7 personal travel manager support.'
              })}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <Shield size={14} className="text-gold-400" />
              <span>{t({ ru: 'Реестр турагентов РФ', en: 'Unified Travel Agent Registry RF' })}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gold-400 mb-4">
              {t({ ru: 'Навигация', en: 'Navigation' })}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold-500/50">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Contacts */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gold-400 mb-4">
              {t({ ru: 'Контакты', en: 'Contacts' })}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-gold-400 transition-colors font-medium"
              >
                <Phone size={15} className="text-gold-400" /> {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-gold-400 transition-colors font-medium"
              >
                <Mail size={15} className="text-gold-400" /> {company.email}
              </a>
              <div className="flex items-start gap-2.5 text-white/60 leading-relaxed">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{t(company.address)}</span>
              </div>
            </div>
          </div>

          {/* Direct Messengers */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gold-400 mb-4">
              {t({ ru: 'Связь 24/7', en: '24/7 Messengers' })}
            </h4>
            <p className="text-white/50 text-xs mb-3">
              {t({
                ru: 'Задайте любой вопрос или запросите подборку в мессенджере прямо сейчас:',
                en: 'Ask any questions or request a custom tour selection in messengers right now:'
              })}
            </p>
            <div className="space-y-2.5">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/40 text-white/80 hover:text-green-300 p-2.5 rounded-xl transition-all text-xs font-medium"
              >
                <MessageCircle size={16} className="text-green-400" /> WhatsApp Direct Chat
              </a>
              <a
                href={company.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/5 hover:bg-sky-600/20 border border-white/10 hover:border-sky-500/40 text-white/80 hover:text-sky-300 p-2.5 rounded-xl transition-all text-xs font-medium"
              >
                <Send size={16} className="text-sky-400" /> Telegram Channel & Bot
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-6 pb-4">
          <p className="text-white/40 text-[11px] leading-relaxed text-center sm:text-left">
            {t(footer.disclaimer)}
          </p>
        </div>

        {/* Bottom bar with legal modals */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p className="text-center sm:text-left">
            {t(footer.copyright)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-gold-400 transition-colors underline-offset-4 hover:underline"
            >
              {t(footer.privacy)}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('fz152')}
              className="hover:text-gold-400 transition-colors underline-offset-4 hover:underline"
            >
              {t(footer.personalData)}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
