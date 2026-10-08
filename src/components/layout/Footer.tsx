import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  MessageCircle,
  Shield,
} from 'lucide-react';
import { siteConfig } from '../../data/site.config';
import { useLanguage } from '../../context/LanguageContext';
import { SocialIcons } from '../shared/SocialIcons';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-white/10 text-neutral-300 pt-16 pb-12 overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Profile Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Dubai Elite" className="h-14 object-contain drop-shadow-md" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {t(
                "Dubai's definitive ultra-luxury and exotic supercar rental agency. Providing white-glove VIP delivery to Burj Al Arab, Downtown hotels, private jet FBOs, and luxury villas across the UAE.",
                "الوكالة الرائدة والأكثر تميزاً في دبي لتأجير السيارات الفارهة والخارقة مع خدمة التوصيل الملكي الخاص في جميع أرجاء الإمارات."
              )}
            </p>

            {/* Profile Information & Colorful Social Icons */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-2.5 font-semibold">
                {t('Created & Engineered by', 'تصميم وتطوير بواسطة')} {siteConfig.founder.name}
              </div>
              <SocialIcons size="md" />
            </div>
          </div>

          {/* Col 2: Fleet Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              {t('Fleet Collections', 'فئات الأسطول')}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/fleet?category=hypercars" className="hover:text-[#D4AF37] transition-colors">
                  {t('Hypercars (Bugatti & SF90)', 'هايبركار (بوغاتي وفيراري)')}
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=supercars" className="hover:text-[#D4AF37] transition-colors">
                  {t('Supercars (Lamborghini & McLaren)', 'سوبركار (لامبورغيني وماكلارين)')}
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=luxury-sedans" className="hover:text-[#D4AF37] transition-colors">
                  {t('Rolls-Royce & Maybach Sedans', 'رولز رويس ومايباخ سيدان')}
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=luxury-suvs" className="hover:text-[#D4AF37] transition-colors">
                  {t('Luxury SUVs (Cullinan & Urus)', 'دفع رباعي فاخر (كولينان وأوروس)')}
                </Link>
              </li>
              <li>
                <Link to="/fleet?category=convertibles" className="hover:text-[#D4AF37] transition-colors">
                  {t('Exotic Convertibles', 'سيارات مكشوفة كابريوليه')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: VIP Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              {t('VIP Services', 'الخدمات الفاخرة')}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors">
                  {t('Chauffeur Driven Limousines', 'خدمة السائق الخاص والمدرّب')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors">
                  {t('Dubai Airport VIP Transfer', 'استقبال مطار دبي VIP')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors">
                  {t('Corporate & Delegation Fleets', 'أسطول المؤتمرات والوفود')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors">
                  {t('Monthly & Yearly Lease Plans', 'إيجار شهري وسنوي مخصص')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">
                  {t('About Dubai Elite', 'عن أسطول دبي إيليت')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct WhatsApp Medium & Fast Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              {t('24/7 VIP Concierge Contact', 'التواصل المباشر على مدار الساعة')}
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{t(siteConfig.contact.serviceArea, siteConfig.contact.arabicServiceArea)}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{t('Instant Response within 5 Minutes', 'استجابة فورية خلال 5 دقائق')}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA4335] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Dubai%20Elite,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('Chat Directly on WhatsApp', 'محادثة فورية عبر واتساب')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span>
              © 2026 {siteConfig.name}. {t('All Rights Reserved. Licensed by Dubai RTA.', 'جميع الحقوق محفوظة. مرخص من هيئة الطرق والمواصلات بدبي.')}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">
              {t('Portfolio', 'الملف الشخصي')}:{' '}
              <a
                href={siteConfig.socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                {siteConfig.founder.name}
              </a>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>{t('Top', 'للأعلى')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
