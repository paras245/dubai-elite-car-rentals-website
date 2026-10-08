import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Car as CarIcon,
  Search,
  ArrowRight,
  Shield,
  Clock,
  Compass,
} from 'lucide-react';
import { heroSlides } from '../../data/images';
import { fleetCategories } from '../../data/cars';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isRtl, t } = useLanguage();
  const navigate = useNavigate();

  // Quick booking form state
  const [location, setLocation] = useState('Dubai International Airport (DXB)');
  const [category, setCategory] = useState('hypercars');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const next = new Date();
    next.setDate(next.getDate() + 4);
    return next.toISOString().split('T')[0];
  });

  // Smooth automatic slide change without any chevron or bead indicators
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/fleet?category=${category}&location=${encodeURIComponent(location)}&pickup=${pickupDate}&return=${returnDate}`
    );
  };

  return (
    <section
      aria-label="Hero Showcase"
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0A0A0A] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Slides - Responsive Scaling & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out"
                style={{
                  transform: isActive ? 'scale(1.05)' : 'scale(1.0)',
                }}
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-10 w-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Collection Kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
            <span>{t(heroSlides[currentSlide].badge, heroSlides[currentSlide].arabicBadge)}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Dubai UAE Exclusive', 'دبي، الإمارات العربية المتحدة')}</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            {t(heroSlides[currentSlide].title, heroSlides[currentSlide].arabicTitle)}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-200/95 max-w-2xl leading-relaxed">
            {t(heroSlides[currentSlide].subtitle, heroSlides[currentSlide].arabicSubtitle)}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              to="/fleet"
              className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#A8862A] text-black font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#D4AF37]/20 flex items-center gap-2 group cursor-pointer"
            >
              <span>{t('Rent Now', 'احجز الآن')}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>

            <Link
              to="/fleet"
              className="px-6 sm:px-8 py-3 rounded-xl glass-panel text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 active:scale-95 transition-all text-xs sm:text-sm font-medium cursor-pointer"
            >
              <span>{t('Explore Full Fleet', 'تصفح كافة السيارات')}</span>
            </Link>
          </div>

          {/* Clean Trust Highlights */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('Zero Security Deposit Option', 'حجز بدون تأمين متاح')}</span>
            </div>
            <span className="hidden sm:inline text-neutral-600" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('60-Min Airport Delivery', 'توصيل خلال 60 دقيقة')}</span>
            </div>
            <span className="hidden sm:inline text-neutral-600" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('VIP Chauffeurs & Concierge', 'سائقون VIP مؤهلون')}</span>
            </div>
          </div>
        </div>

        {/* Quick-Booking Search Bar - Fully Responsive Form */}
        <div className="mt-8 sm:mt-10 w-full max-w-5xl">
          <form
            onSubmit={handleQuickSearch}
            className="glass-panel-gold rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 shadow-2xl backdrop-blur-xl border border-[#D4AF37]/30"
          >
            {/* Location */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('Pickup Location', 'موقع الاستلام')}</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#121212] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
              >
                <option value="Dubai International Airport (DXB)">
                  Dubai Intl Airport (DXB)
                </option>
                <option value="Downtown Dubai & Burj Khalifa">
                  Downtown Dubai & Burj Khalifa
                </option>
                <option value="Dubai Marina & JBR">
                  Dubai Marina & JBR
                </option>
                <option value="Palm Jumeirah Resort">
                  Palm Jumeirah
                </option>
                <option value="Al Maktoum Airport (DWC)">
                  Al Maktoum Airport (DWC)
                </option>
                <option value="Abu Dhabi VIP Delivery">
                  Abu Dhabi VIP Delivery
                </option>
              </select>
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium flex items-center gap-1">
                <CarIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('Car Category', 'فئة السيارة')}</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#121212] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
              >
                {fleetCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {t(cat.name, cat.arabicName)}
                  </option>
                ))}
              </select>
            </div>

            {/* Pickup Date */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('Pickup Date', 'تاريخ الاستلام')}</span>
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-[#121212] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Return Date */}
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t('Return Date', 'تاريخ الإرجاع')}</span>
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-[#121212] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#A8862A] text-black font-semibold text-xs hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer h-[42px]"
              >
                <Search className="w-4 h-4" />
                <span>{t('Search Available Cars', 'بحث في المتوفر')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
