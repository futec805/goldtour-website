import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import CallbackModal from './CallbackModal';

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const { nav, company } = siteContent;

  const navItems = [
    { label: t(nav.search), href: '#search' },
    { label: t(nav.quiz), href: '#quiz' },
    { label: t(nav.destinations), href: '#destinations' },
    { label: t(nav.services), href: '#services' },
    { label: t(nav.reviews), href: '#reviews' },
    { label: t(nav.contacts), href: '#contacts' },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-navy-950 text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>{t(company.address)}</span>
            <span className="text-white/40">|</span>
            <span>{t(company.workingHours)}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href={company.telegramUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <Send size={14} /> Telegram
            </a>
            <a href={`tel:${company.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone size={14} /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 font-heading font-bold text-lg">
              ЗТ
            </div>
            <span className="font-heading font-bold text-xl text-white hidden sm:block">
              {t(siteContent.company.name)}
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}
                 className="text-sm text-white/80 hover:text-gold-400 transition-colors font-medium">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button onClick={toggleLang}
                    className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-gold-400 hover:border-gold-400 transition-all">
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
            <button onClick={() => setCallbackOpen(true)}
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-lg shadow-gold-500/20">
              <Phone size={16} />
              {t(nav.callback)}
            </button>
            <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-white/10 px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}
                 onClick={() => setMobileOpen(false)}
                 className="block text-white/80 hover:text-gold-400 transition-colors font-medium py-2">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer"
                 className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-full font-medium text-sm">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={company.telegramUrl} target="_blank" rel="noopener noreferrer"
                 className="flex-1 flex items-center justify-center gap-2 bg-sky-500 text-white py-2.5 rounded-full font-medium text-sm">
                <Send size={16} /> Telegram
              </a>
            </div>
            <button onClick={() => { setCallbackOpen(true); setMobileOpen(false); }}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold py-2.5 rounded-full">
              {t(nav.callback)}
            </button>
          </div>
        )}
      </header>

      <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}
