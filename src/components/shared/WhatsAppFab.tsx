import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/site.config';
import { useLanguage } from '../../context/LanguageContext';

export const WhatsAppFab: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const message = encodeURIComponent(
    'Hello Dubai Elite Rentals, I would like to inquire about booking a luxury vehicle in Dubai.'
  );

  return (
    <aside
      aria-label="Contact options"
      className={`fixed bottom-6 z-40 ${isRtl ? 'left-6' : 'right-6'}`}
    >
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp VIP Booking Concierge"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-black shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        {/* Subtle pulsating ping badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>

        <MessageCircle className="w-7 h-7 text-black transition-transform group-hover:rotate-6" />

        {/* Hover tooltip label */}
        <span
          className={`absolute whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-neutral-900 border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl ${
            isRtl ? 'left-16' : 'right-16'
          }`}
        >
          {t('VIP WhatsApp Concierge', 'خدمة كونسيرج واتساب VIP')}
        </span>
      </a>
    </aside>
  );
};
