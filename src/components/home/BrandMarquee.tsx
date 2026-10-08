import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BrandLogos } from './BrandLogos';

export const BrandMarquee: React.FC = () => {
  const { t } = useLanguage();

  const brandKeys = [
    { key: 'Bugatti', name: 'Bugatti' },
    { key: 'Ferrari', name: 'Ferrari' },
    { key: 'Lamborghini', name: 'Lamborghini' },
    { key: 'RollsRoyce', name: 'Rolls-Royce' },
    { key: 'Bentley', name: 'Bentley' },
    { key: 'Porsche', name: 'Porsche' },
    { key: 'McLaren', name: 'McLaren' },
    { key: 'MercedesAMG', name: 'Mercedes-AMG' },
    { key: 'AstonMartin', name: 'Aston Martin' },
    { key: 'Koenigsegg', name: 'Koenigsegg' },
    { key: 'Maybach', name: 'Maybach' },
    { key: 'Pagani', name: 'Pagani' },
  ];

  // Two identical sets in a single continuous flex container for mathematical perfection
  const combinedBrands = [...brandKeys, ...brandKeys];

  return (
    <section aria-label="Our Prestige Automotive Partners & Fleet" className="py-10 bg-[#060606] border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[11px] font-semibold tracking-widest text-[#D4AF37] uppercase">
          {t('Our Prestige Automotive Partners & Fleet', 'شركاء الأسطول والماركات العالمية المعتمدة')}
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#060606] via-[#060606]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#060606] via-[#060606]/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous uninterrupted track */}
        <div className="marquee-track items-center py-2">
          {combinedBrands.map((item, index) => {
            const LogoComponent = BrandLogos[item.key];
            if (!LogoComponent) return null;
            return (
              <div
                key={index}
                className="flex items-center justify-center px-8 sm:px-12 text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105 shrink-0 cursor-pointer"
                title={item.name}
              >
                <LogoComponent className="h-7 sm:h-9 w-auto max-w-[130px]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
