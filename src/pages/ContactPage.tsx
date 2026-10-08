import React, { useState } from 'react';
import { PageShell } from '../components/layout/PageShell';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site.config';
import { SocialIcons } from '../components/shared/SocialIcons';
import {
  Phone,
  Mail,
  MessageCircle,
  Car,
  Clock,
  Zap,
} from 'lucide-react';
import { fleetCategories } from '../data/cars';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  // Interactive WhatsApp detail generator
  const [selectedCar, setSelectedCar] = useState('Bugatti Chiron Super Sport');
  const [customerName, setCustomerName] = useState('');
  const [duration, setDuration] = useState('3 Days');
  const [deliveryLocation, setDeliveryLocation] = useState('Dubai International Airport (DXB)');

  const buildWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Hello Dubai Elite VIP Concierge,\n\n` +
      `I would like to inquire about booking a vehicle:\n` +
      `• Name: ${customerName || 'VIP Client'}\n` +
      `• Vehicle: ${selectedCar}\n` +
      `• Duration: ${duration}\n` +
      `• Delivery Location: ${deliveryLocation}\n\n` +
      `Please provide immediate availability and pricing.`
    );
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <PageShell
      title="Contact VIP Concierge"
      arabicTitle="تواصل مع الكونسيرج الملكي VIP"
      description="Instant 24/7 direct communication via WhatsApp and direct VIP hotline. No bureaucratic forms."
      arabicDescription="تواصل فوري ومباشر على مدار الساعة عبر واتساب والخط الساخن بدون استمارات معقدة."
      breadcrumbs={[{ label: 'Contact', arabicLabel: 'اتصل بنا' }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Left Column: Direct WhatsApp Booking Builder */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>{t('Primary Instant Contact Medium', 'وسيلة التواصل الفورية المباشرة')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {t('Connect Directly via WhatsApp', 'تواصل مباشرة عبر واتساب VIP')}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                {t(
                  'Skip paperwork and get instantaneous confirmation. Select your preferences below to launch a pre-filled direct WhatsApp message to our fleet manager.',
                  'تخطى النماذج الورقية واحصل على تأكيد فوري لحجزك. حدد السيارة المطلوبة وأرسل طلبك بنقرة واحدة عبر واتساب.'
                )}
              </p>
            </div>

            {/* Interactive WhatsApp Dispatch Builder */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                  {t('Your Name / Title', 'اسمك أو صفتك')}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t('e.g. Sheikh Ahmed / Mr. Alexander', 'مثال: السيد أحمد / كبار الشخصيات')}
                  className="w-full bg-[#121212] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                    {t('Desired Vehicle', 'السيارة المطلوبة')}
                  </label>
                  <select
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                    className="w-full bg-[#121212] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
                  >
                    <option value="Bugatti Chiron Super Sport">Bugatti Chiron Super Sport</option>
                    <option value="Ferrari SF90 Stradale">Ferrari SF90 Stradale</option>
                    <option value="Lamborghini Revuelto V12">Lamborghini Revuelto V12</option>
                    <option value="Rolls-Royce Phantom Series II">Rolls-Royce Phantom</option>
                    <option value="Rolls-Royce Cullinan Black Badge">Rolls-Royce Cullinan</option>
                    <option value="Lamborghini Urus Performante">Lamborghini Urus</option>
                    <option value="Ferrari F8 Spider">Ferrari F8 Spider</option>
                    <option value="Mercedes-AMG G63 G-Wagon">Mercedes G63 AMG</option>
                    <option value="Porsche 911 GT3 RS">Porsche 911 GT3 RS</option>
                    <option value="Mercedes-Maybach S680 V12">Mercedes-Maybach S680</option>
                    <option value="Mercedes V-Class VIP Starlight">Mercedes V-Class VIP</option>
                    <option value="Tesla Model S Plaid">Tesla Model S Plaid</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                    {t('Rental Duration', 'مدة الاستئجار')}
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-[#121212] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
                  >
                    <option value="1 Day (24 Hours)">1 Day (24 Hours)</option>
                    <option value="3 Days (Weekend)">3 Days (Weekend Package)</option>
                    <option value="1 Week (7 Days)">1 Week (Discounted)</option>
                    <option value="1 Month (Extended Lease)">1 Month (VIP Extended)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                  {t('Delivery Location in UAE', 'موقع التسليم في الإمارات')}
                </label>
                <select
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="w-full bg-[#121212] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
                >
                  <option value="Dubai International Airport (DXB)">Dubai International Airport (DXB)</option>
                  <option value="Downtown Dubai & Burj Khalifa">Downtown Dubai & Burj Khalifa</option>
                  <option value="Dubai Marina / JBR Hotel">Dubai Marina / JBR Hotel</option>
                  <option value="Palm Jumeirah Private Villa">Palm Jumeirah Private Villa</option>
                  <option value="Al Maktoum Airport (DWC)">Al Maktoum Airport (DWC)</option>
                  <option value="Abu Dhabi VIP Delivery">Abu Dhabi VIP Delivery</option>
                </select>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] text-black font-bold text-sm hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/30 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('Launch WhatsApp VIP Chat with Details', 'إرسال التفاصيل مباشرة عبر واتساب')}</span>
                </a>
                <p className="text-[11px] text-neutral-400 text-center mt-2">
                  {t('Sends prefilled details directly to', 'يتم إرسال التفاصيل مباشرة إلى')}: <strong className="text-white">{siteConfig.contact.whatsappDisplay}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Channels & Colorful Social Profiles */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Direct Communication Box */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5">
            <h3 className="font-serif text-xl font-bold text-white">
              {t('Direct VIP Channels', 'قنوات التواصل المباشرة')}
            </h3>

            <div className="space-y-4 text-xs">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#25D366] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-black flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">{t('WhatsApp VIP Concierge', 'واتساب كونسيرج')}</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                    {siteConfig.contact.whatsappDisplay}
                  </div>
                </div>
              </a>

              {/* Phone Hotline Card */}
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-black flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">{t('Direct Telephone Line', 'الخط الهاتفي المباشر')}</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#EA4335] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EA4335] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">{t('Official Inquiries Email', 'البريد الرسمي')}</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#EA4335] transition-colors">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Coverage note */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span>{t(siteConfig.contact.serviceArea, siteConfig.contact.arabicServiceArea)}</span>
            </div>
          </div>

          {/* COLORFUL Profile & Engineering Social Links Card */}
          {/* User request: "plus icon for github and youtuve nd other seems white add color ful icon not those plain whites" */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {t('Profile & Engineering Lead', 'ملف المهندس والمطور')}
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  {siteConfig.founder.name}
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                PP
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {t(
                'Explore the founder profile, open-source repositories, video productions, and engineering showcases on official platforms:',
                'تفضل بزيارة الملف الشخصي الرسمي، وقنوات الفيديو، والمستودعات البرمجية للمطور:'
              )}
            </p>

            {/* Colorful Social Icons Component */}
            <div className="pt-1">
              <SocialIcons size="lg" />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
