import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { siteConfig } from '../../data/site.config';
import { useLanguage } from '../../context/LanguageContext';
import { SocialIcons } from '../shared/SocialIcons';
import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRtl, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t('Home', 'الرئيسية'), path: '/' },
    { label: t('Fleet', 'الأسطول'), path: '/fleet' },
    { label: t('Services', 'الخدمات'), path: '/services' },
    { label: t('About', 'عن الشركة'), path: '/about' },
    { label: t('Contact', 'اتصل بنا'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/85 via-black/35 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Zone 1: Brand Logo */}
            <Link
              to="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
            >
              <img src={logoImg} alt="Dubai Elite" className="h-10 sm:h-12 object-contain drop-shadow-md group-hover:brightness-110 transition-all" />
            </Link>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                      isActive
                        ? 'text-[#D4AF37]'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Language, WhatsApp, Call & Mobile Menu) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="Switch Language"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-neutral-200 hover:text-white transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              {/* WhatsApp VIP Button (Desktop) */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Dubai%20Elite%20Rentals,%20I%20would%20like%20to%20inquire%20about%20luxury%20car%20rental.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#25D366] text-black hover:brightness-105 text-xs font-semibold transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t('WhatsApp VIP', 'واتساب VIP')}</span>
              </a>

              {/* Quick Call */}
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                aria-label="Call concierge"
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs hover:bg-[#E8CF72] transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Mobile Drawer Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden p-2 rounded-xl border border-white/15 bg-white/5 text-neutral-200 hover:text-white hover:bg-white/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 border-b border-white/10 flex items-center justify-between ${
                    isActive ? 'text-[#D4AF37] font-bold' : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-neutral-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </Link>
              );
            })}
          </div>

          {/* Quick Actions in Mobile Drawer */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#25D366] text-black font-bold text-sm shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('Chat with VIP Concierge on WhatsApp', 'محادثة فورية عبر واتساب')}</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t('Call 24/7 Hotline', 'اتصال هاتفي مباشر')}</span>
            </a>
          </div>

          {/* COLORFUL Social Icons in Mobile Drawer */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="text-xs text-neutral-400 mb-2">
              {t('Engineered by', 'تطوير وتصميم')} <strong className="text-white">{siteConfig.founder.name}</strong>
            </div>
            <SocialIcons size="md" />
          </div>
        </div>
      )}
    </>
  );
};
