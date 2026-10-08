import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { carsData } from '../data/cars';
import { useLanguage } from '../context/LanguageContext';
import { formatPriceAED } from '../../src/lib/utils';
import { siteConfig } from '../data/site.config';
import { SocialIcons } from '../components/shared/SocialIcons';
import {
  Gauge,
  Zap,
  Users,
  Shield,
  MessageCircle,
  Phone,
  CheckCircle2,
  Calendar,
  Fuel,
  Compass,
  Award,
  Mail,
} from 'lucide-react';

export const CarDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isRtl } = useLanguage();

  const car = carsData.find((c) => c.slug === slug) || carsData[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dubai Elite VIP Concierge,\n\nI want to book the ${car.name} (${car.year}).\n• Category: ${car.category}\n• Daily Rate: ${car.pricePerDay} AED\n\nPlease confirm availability and deliver to my location in UAE.`
  )}`;

  return (
    <PageShell
      title={`${car.name} (${car.year})`}
      arabicTitle={`${car.name} (${car.year})`}
      description={car.description}
      arabicDescription={car.description}
      breadcrumbs={[
        { label: 'Fleet', arabicLabel: 'الأسطول', path: '/fleet' },
        { label: car.name, arabicLabel: car.name },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Gallery & In-Depth Specs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Selected Image */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
            <img
              src={car.images[activeImageIndex]}
              alt={`${car.name} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur text-xs text-[#D4AF37] font-semibold">
              {car.brand} · {car.category.toUpperCase()}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-3">
            {car.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Detailed Specifications Grid */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider">
              {t('Performance & Technical Specifications', 'المواصفات الفنية والأداء')}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-neutral-400">{t('Horsepower', 'القوة الحصانية')}</div>
                <div className="text-sm font-bold text-white mt-0.5">{car.horsepower} HP</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-neutral-400">{t('0-100 km/h', 'التسارع 0-100')}</div>
                <div className="text-sm font-bold text-white mt-0.5">{car.zeroTo100} {t('sec', 'ثانية')}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-neutral-400">{t('Top Speed', 'السرعة القصوى')}</div>
                <div className="text-sm font-bold text-white mt-0.5">{car.topSpeedKmh} km/h</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-neutral-400">{t('Engine', 'المحرك')}</div>
                <div className="text-sm font-bold text-white mt-0.5 truncate">{car.engine}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-neutral-400">{t('Transmission', 'ناقل الحركة')}</div>
                <div className="text-sm font-bold text-white mt-0.5">{car.transmission}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-neutral-400">{t('Fuel Type', 'نوع الوقود')}</div>
                <div className="text-sm font-bold text-white mt-0.5">{car.fuel}</div>
              </div>
            </div>
          </div>

          {/* Included Features */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider">
              {t('Premium Features & Equipment', 'الميزات والمعدات الفاخرة')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              {car.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance & Terms */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('Insurance & Rental Terms', 'التأمين وشروط التأجير')}</span>
            </h3>
            <p className="text-xs text-neutral-400">
              {car.insurance.type} · {t('Security deposit:', 'مبلغ التأمين المسترد:')} {formatPriceAED(car.deposit)}
            </p>
            <div className="space-y-1 text-xs text-neutral-300 pt-1">
              {car.insurance.includes.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Direct VIP WhatsApp Contact Medium */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-gold rounded-3xl p-6 sm:p-7 border border-[#D4AF37]/35 shadow-2xl space-y-6">
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider">
                {t('Rental Rates in Dubai', 'أسعار الإيجار في دبي')}
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  {formatPriceAED(car.pricePerDay)}
                </span>
                <span className="text-xs text-neutral-400">/ {t('day', 'يوم')}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="text-neutral-400">{t('Weekly Rate', 'السعر الأسبوعي')}</div>
                <div className="font-semibold text-white mt-0.5">{formatPriceAED(car.pricePerWeek)}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="text-neutral-400">{t('Monthly Rate', 'السعر الشهري')}</div>
                <div className="font-semibold text-white mt-0.5">{formatPriceAED(car.pricePerMonth)}</div>
              </div>
            </div>

            {/* DIRECT WHATSAPP ACTION (No complex form) */}
            <div className="space-y-3 pt-2">
              <div className="text-xs text-neutral-300 font-medium">
                {t('Instant Direct Booking via WhatsApp Concierge', 'حجز مباشر فوري عبر كونسيرج واتساب')}
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl bg-[#25D366] text-black font-bold text-sm hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/30 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('Book This Car on WhatsApp', 'احجز هذه السيارة عبر واتساب')}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="w-full py-3 px-4 rounded-xl border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t('Call Concierge Hotline', 'اتصال بالخط الساخن')}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=Reservation%20Inquiry%20for%20${encodeURIComponent(car.name)}`}
                className="w-full py-3 px-4 rounded-xl border border-white/20 text-white hover:border-[#EA4335] hover:text-[#EA4335] text-xs font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Delivery Promise */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs text-neutral-300 space-y-1.5">
              <div className="text-[#D4AF37] font-semibold">{t('White-Glove VIP Delivery Included', 'خدمة التوصيل الملكي مشمولة')}</div>
              <div>{t('Free delivery to your hotel, villa or airport in Dubai within 60 minutes.', 'توصيل مجاني خلال 60 دقيقة في كافة أرجاء دبي.')}</div>
            </div>

            {/* Colorful Social Links */}
            <div className="pt-2">
              <div className="text-[11px] text-neutral-400 mb-2">{t('Founder Channels & Inquiries', 'قنوات المطور والاستفسارات')}:</div>
              <SocialIcons size="sm" />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
