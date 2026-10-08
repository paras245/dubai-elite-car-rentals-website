import React from 'react';

// Precision SVG brand logos for world-class automotive manufacturers
export const BrandLogos: Record<string, React.FC<{ className?: string }>> = {
  // 1. Bugatti EB Crest & Wordmark
  Bugatti: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 120 40" fill="currentColor" className={className} aria-label="Bugatti logo">
      <ellipse cx="60" cy="20" rx="56" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* 60 pearls around oval */}
      <circle cx="60" cy="3" r="1" />
      <circle cx="75" cy="4" r="1" />
      <circle cx="90" cy="8" r="1" />
      <circle cx="102" cy="14" r="1" />
      <circle cx="110" cy="20" r="1" />
      <circle cx="102" cy="26" r="1" />
      <circle cx="90" cy="32" r="1" />
      <circle cx="75" cy="36" r="1" />
      <circle cx="60" cy="37" r="1" />
      <circle cx="45" cy="36" r="1" />
      <circle cx="30" cy="32" r="1" />
      <circle cx="18" cy="26" r="1" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="14" r="1" />
      <circle cx="30" cy="8" r="1" />
      <circle cx="45" cy="4" r="1" />
      {/* EB Monogram in center */}
      <text x="60" y="24" textAnchor="middle" fontSize="13" fontWeight="900" letterSpacing="3" fontFamily="sans-serif">
        BUGATTI
      </text>
    </svg>
  ),

  // 2. Ferrari Prancing Horse & Wordmark
  Ferrari: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 110 40" fill="currentColor" className={className} aria-label="Ferrari logo">
      {/* Prancing Horse Silhouette */}
      <path d="M22 6c.5 1.5-.2 2.5-1 3.5 1 .2 2.5 0 3-1 .5 2-1 4-2.5 5 1.5 1 3.5.5 4.5-.5-1 2.5-3 4-5 4.5 1 2 2.5 3.5 4 4.5-2 .5-4-.5-5.5-2 .2 2.5.5 4.5 2 6-2-.2-3.5-1.5-4-3-.5 2.5-1 4.5-2 6.5-1-1.5-1.5-3.5-1.5-5.5-1.5 2-2.5 3.5-4 4.5 1-2 1.5-4 1.5-6-2 1.5-4 2-5.5 1.5 1.5-1.5 3-2.5 4-4-2 0-3.5-1-4.5-2.5 2-.2 3.5-.8 4.5-2-1.5-1.5-2-3.5-1.5-5.5 1.5 1 2.5 2 4 2.5-.2-2 .8-3.5 2-4.5-1-1-1-2.5 0-3.5 1.5.5 2.5 1.5 3.5 2.5z" />
      {/* Ferrari Long F Script */}
      <path d="M38 12h58v2.5H45v20h-4.5V12z" />
      <text x="70" y="25" textAnchor="middle" fontSize="12" fontWeight="800" letterSpacing="3" fontFamily="serif">
        ERRARI
      </text>
    </svg>
  ),

  // 3. Lamborghini Raging Bull Shield
  Lamborghini: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 120 40" fill="currentColor" className={className} aria-label="Lamborghini logo">
      {/* Shield Outline */}
      <path d="M12 8l14-4 14 4v16c0 8-14 12-14 12S12 32 12 24V8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Bull Head inside shield */}
      <path d="M26 14l-4 3 1.5 4 2.5-1.5 2.5 1.5 1.5-4-4-3zm-6 2l-2-2 3-1 2 2-3 1zm12 0l-3-1 2-2 3 1-2 2z" />
      {/* Wordmark */}
      <text x="78" y="24" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="2.5" fontFamily="sans-serif">
        LAMBORGHINI
      </text>
    </svg>
  ),

  // 4. Rolls-Royce Interlocking RR & Monogram
  RollsRoyce: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 120 40" fill="currentColor" className={className} aria-label="Rolls-Royce logo">
      {/* Rectangular Badge */}
      <rect x="8" y="5" width="22" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* RR Interlocking letters */}
      <text x="17" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="serif">R</text>
      <text x="21" y="27" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="serif">R</text>
      {/* Wordmark */}
      <text x="75" y="19" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="serif">
        ROLLS-ROYCE
      </text>
      <text x="75" y="29" textAnchor="middle" fontSize="6.5" fontWeight="500" letterSpacing="4" fontFamily="sans-serif">
        MOTOR CARS
      </text>
    </svg>
  ),

  // 5. Bentley Winged 'B'
  Bentley: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 120 40" fill="currentColor" className={className} aria-label="Bentley logo">
      {/* Left Wing */}
      <path d="M10 20c8-6 20-8 30-2-8 5-18 6-30 2zM15 23c6-3 16-4 22-1-6 3-14 4-22 1z" />
      {/* Right Wing */}
      <path d="M110 20c-8-6-20-8-30-2 8 5 18 6 30 2zM105 23c-6-3-16-4-22-1 6 3 14 4 22 1z" />
      {/* Center Oval with B */}
      <circle cx="60" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="25" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="serif">
        B
      </text>
    </svg>
  ),

  // 6. Porsche Crest & Clean Wordmark
  Porsche: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 110 40" fill="currentColor" className={className} aria-label="Porsche logo">
      {/* Porsche Crest */}
      <path d="M12 8l10-3 10 3v14c0 7-10 12-10 12S12 29 12 22V8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 11v20M12 18h20M12 25h20" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <circle cx="22" cy="21" r="2.5" />
      {/* Strict Wordmark */}
      <text x="68" y="24" textAnchor="middle" fontSize="13" fontWeight="900" letterSpacing="3.5" fontFamily="sans-serif">
        PORSCHE
      </text>
    </svg>
  ),

  // 7. McLaren Speedmark & Wordmark
  McLaren: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 115 40" fill="currentColor" className={className} aria-label="McLaren logo">
      {/* Speedmark Chevron */}
      <path d="M96 14c4 2 10 5 10 9s-6 7-12 5c-3-1-5-3-5-3s4 1 7 0 6-3 6-5-4-4-6-6z" fill="#E53E3E" />
      {/* Modern Wordmark */}
      <text x="50" y="25" textAnchor="middle" fontSize="15" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">
        McLaren
      </text>
    </svg>
  ),

  // 8. Mercedes-AMG Star and Emblem
  MercedesAMG: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 125 40" fill="currentColor" className={className} aria-label="Mercedes-AMG logo">
      {/* Mercedes Star */}
      <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 7l3 12 10 4-11 3-2 11-2-11-11-3 10-4z" />
      {/* AMG Italic Wordmark */}
      <g transform="skewX(-14)">
        <text x="75" y="25" textAnchor="middle" fontSize="14" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">
          ///AMG
        </text>
      </g>
    </svg>
  ),

  // 9. Aston Martin Wings
  AstonMartin: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 130 40" fill="currentColor" className={className} aria-label="Aston Martin logo">
      {/* Wing left */}
      <path d="M8 22c15-8 32-8 44-1-8 4-24 5-44 1z" />
      {/* Wing right */}
      <path d="M122 22c-15-8-32-8-44-1 8 4 24 5 44 1z" />
      {/* Center Bar */}
      <rect x="36" y="15" width="58" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="65" y="23" textAnchor="middle" fontSize="6.5" fontWeight="bold" letterSpacing="1.5" fontFamily="sans-serif">
        ASTON MARTIN
      </text>
    </svg>
  ),

  // 10. Koenigsegg Ghost & Crest
  Koenigsegg: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 130 40" fill="currentColor" className={className} aria-label="Koenigsegg logo">
      {/* Ghost Shield Silhouette */}
      <path d="M14 9l11-4 11 4v14c0 7-11 11-11 11S14 30 14 23V9z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="21" cy="18" r="1.5" />
      <circle cx="29" cy="18" r="1.5" />
      <path d="M21 24q4 3 8 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
      {/* Wordmark */}
      <text x="80" y="24" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="2.5" fontFamily="sans-serif">
        KOENIGSEGG
      </text>
    </svg>
  ),

  // 11. Maybach Double-M
  Maybach: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 115 40" fill="currentColor" className={className} aria-label="Maybach logo">
      {/* Curved Triangle / Shield */}
      <path d="M12 9c8-2 16-2 24 0 0 14-8 23-12 25-4-2-12-11-12-25z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Double M Monogram */}
      <text x="24" y="23" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="sans-serif">M</text>
      <text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="900" fontFamily="sans-serif">M</text>
      {/* Wordmark */}
      <text x="72" y="24" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="3" fontFamily="serif">
        MAYBACH
      </text>
    </svg>
  ),

  // 12. Pagani Insignia
  Pagani: ({ className = 'h-8' }) => (
    <svg viewBox="0 0 110 40" fill="currentColor" className={className} aria-label="Pagani logo">
      <ellipse cx="22" cy="20" rx="14" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 23l7-10 7 10h-14z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="22" cy="19" r="1.5" />
      <text x="68" y="25" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing="3" fontFamily="sans-serif">
        PAGANI
      </text>
    </svg>
  ),
};
