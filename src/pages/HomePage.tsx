import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { BrandMarquee } from '../components/home/BrandMarquee';
import { CollapsibleFAQ } from '../components/home/CollapsibleFAQ';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFab } from '../components/shared/WhatsAppFab';
import { SEO } from '../components/shared/SEO';
import { fleetCategories, carsData } from '../data/cars';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Gauge,
  Zap,
  Users,
  MessageCircle,
  Phone,
  ChevronRight,
  Shield,
  Key,
  Award,
  Clock,
} from 'lucide-react';
import { formatPriceAED } from '../lib/utils';
import { siteConfig } from '../data/site.config';

export const HomePage: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const navigate = useNavigate();

  const featuredCars = carsData.filter((c) => c.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
      <SEO />
      <Header />

      <main className="flex-1">
        {/* Full-Screen Cinematic Hero */}
        <Hero />

        {/* CONTINUOUS LOOPING AUTOMOTIVE PARTNER SVG MARQUEE */}
        <BrandMarquee />

        {/* CLEAN LUXURY TRUST BAR */}
        <section className="border-b border-white/10 bg-[#0A0A0A] py-8 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <Shield className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {t('Fully Insured Fleet', 'تأمين شامل متكامل')}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {t('Zero excess option available', 'خيار تأمين شامل بدون خصم')}
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <Key className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {t('Free UAE VIP Delivery', 'توصيل مجاني في الإمارات')}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {t('Hotels, airports & luxury villas', 'للمطارات والفنادق والفلل الخاصة')}
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <Award className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {t('Transparent Pricing', 'أسعار واضحة ومباشرة')}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {t('No hidden fees or surprise markups', 'بدون أي رسوم خفية أو إضافات')}
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <Clock className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {t('24/7 VIP Concierge', 'خدمة كونسيرج 24 ساعة')}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {t('Dedicated personal manager', 'مدير حجوزات مخصص لك')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURATED FLEET CATEGORIES WITH HIGH-RES PHOTOGRAPHIC BACKGROUNDS */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2 flex items-center gap-2">
                  <span>{t('Curated Categories', 'التصنيفات المختارة')}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-400 font-normal">{t('150+ Vehicles in Fleet', 'أكثر من 150 سيارة')}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {t('The Sovereign Garage of Dubai', 'المرآب الملكي الأرقى في دبي')}
                </h2>
              </div>
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors group"
              >
                <span>{t('View All 150+ Vehicles', 'عرض جميع الـ 150+ سيارة')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
            </div>

            {/* Photographic Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {fleetCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/fleet?category=${category.id}`}
                  className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/15 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl flex flex-col justify-between p-6"
                >
                  {/* Real Photographic Background Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Scrim for Outstanding Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 group-hover:via-black/45 transition-colors" />

                  {/* Top Badge: Vehicle Count & Starting Price */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur border border-white/10 text-white font-medium">
                      {category.count} {t('Vehicles', 'سيارة')}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/90 text-black font-bold">
                      {t('From', 'من')} {formatPriceAED(category.startingPrice)}
                    </span>
                  </div>

                  {/* Bottom Content: Title & Description */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {t(category.name, category.arabicName)}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {t(category.description, category.arabicDescription)}
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                      <span>{t('Explore Collection', 'استكشف التشكيلة')}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED SUPERCARS SHOWCASE */}
        <section className="py-16 sm:py-24 bg-[#0A0A0A] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                  {t('The Signature Showcase', 'السيارات المميزة الحصرية')}
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {t('Pinnacle Velocity & Prestige', 'قمة السرعة والهيبة في شوارع دبي')}
                </h2>
              </div>
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>{t('View All Supercars', 'عرض كل السيارات الخارقة')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredCars.slice(0, 6).map((car) => (
                <div
                  key={car.id}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/15 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col group shadow-xl"
                >
                  {/* Photo Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                      {car.brand}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur text-[11px] font-mono text-white">
                      {car.horsepower} HP
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
                      <div>
                        <span className="text-xl font-bold text-white font-serif">
                          {formatPriceAED(car.pricePerDay)}
                        </span>
                        <span className="text-xs text-neutral-300"> / {t('day', 'يوم')}</span>
                      </div>
                      <span className="text-[11px] text-neutral-300 bg-black/60 backdrop-blur px-2 py-0.5 rounded">
                        0-100: {car.zeroTo100}s
                      </span>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-[#111111]/80">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                        {car.description}
                      </p>
                    </div>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/10 text-[11px] text-neutral-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{car.topSpeedKmh} km/h</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{car.seats} {t('Seats', 'مقاعد')}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        to={`/car/${car.slug}`}
                        className="flex-1 py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{t('View Details', 'عرض التفاصيل')}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                      </Link>

                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                          `Hi, I want to reserve the ${car.name} in Dubai. Please send rate and availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Inquire about ${car.name} on WhatsApp`}
                        className="p-2.5 rounded-xl bg-[#25D366] text-black hover:brightness-105 transition-all shadow-md shadow-[#25D366]/20"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE DUBAI ELITE */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                {t('The Dubai Elite Standard', 'معايير دبي إيليت الفائقة')}
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {t('Crafted for Royalty, Celebrities & Visionaries', 'مصممة للرؤساء والمشاهير وقادة المستقبل')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-2xl p-7 border border-white/10 space-y-4">
                <Key className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  {t('White-Glove VIP Delivery', 'توصيل ملكي فوري')}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {t(
                    'Whether you arrive via private jet at DXB or stay at the Burj Al Arab, our uniformed team delivers your supercar fully fueled and polished.',
                    'سواء كنت قادماً بطائرتك الخاصة إلى المطار أو مقيماً في برج العرب، يسلمك فريقنا السيارة بكامل وقودها وتلميعها الفاخر.'
                  )}
                </p>
              </div>

              <div className="glass-panel rounded-2xl p-7 border border-white/10 space-y-4">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  {t('Zero Hidden Fees Guarantee', 'ضمان الشفافية المطلقة')}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {t(
                    'Every rental contract includes comprehensive insurance options, honest Salik toll accounting, and guaranteed prompt security deposit release.',
                    'كافة عقود التأجير تتضمن خيارات تأمين شاملة واضحة، واحتساب دقيق لرسوم سالك، واسترداد فوري لمبلغ التأمين.'
                  )}
                </p>
              </div>

              <div className="glass-panel rounded-2xl p-7 border border-white/10 space-y-4">
                <Clock className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  {t('Round-The-Clock Concierge', 'كونسيرج خاص على مدار الساعة')}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {t(
                    'Direct access to an executive account manager for route recommendations, emergency roadside support, and VIP Dubai restaurant reservations.',
                    'تواصل مباشر وفوري مع مدير حسابك الخاص لترشيحات أروع وجهات القيادة والدعم الفوري على الطرقات.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COLLAPSIBLE FAQ ACCORDION SECTION */}
        <CollapsibleFAQ />

        {/* DIRECT WHATSAPP VIP CALL TO ACTION */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#141414] via-[#1c170d] to-[#141414] border-t border-[#D4AF37]/35 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {t('Ready To Command Dubai’s Roads?', 'هل أنت مستعد لقيادة أفضل سيارات العالم؟')}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              {t(
                'Connect directly with our fleet manager via WhatsApp for guaranteed 60-minute delivery to your hotel, villa or airport in Dubai.',
                'تواصل مباشرة مع مدير الأسطول عبر واتساب لتأكيد الحجز الفوري مع خدمة التوصيل خلال 60 دقيقة في أي مكان داخل دبي.'
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Dubai%20Elite,%20I%20would%20like%20to%20book%20a%20car%20now.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:brightness-105 active:scale-95 transition-all shadow-xl shadow-[#25D366]/25 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t('Instant WhatsApp VIP Booking', 'حجز فوري عبر واتساب VIP')}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="px-8 py-3.5 rounded-xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t('Direct Hotline', 'الخط المباشر')}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};
