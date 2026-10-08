import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site.config';
import { Shield, Plane, Building2, Calendar, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Plane className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Airport VIP Transfers & FBO Service',
      arabicTitle: 'استقبال كبار الشخصيات من المطار والطيران الخاص',
      description: 'Direct tarmac or terminal greeting at Dubai International (DXB) and Al Maktoum (DWC) with luggage porterage and chilled refreshments.',
      arabicDescription: 'استقبال فوري عند بوابة الوصول أو مدرج الطيران الخاص في مطار دبي (DXB) وآل مكتوم (DWC) مع خدمة نقل الأمتعة والمشروبات المنعشة.',
      price: 'From 800 AED',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Chauffeur Driven Limousine Service',
      arabicTitle: 'خدمة السائق الخاص المحترف',
      description: 'RTA-licensed, multilingual executive drivers clad in dark suits for business itineraries, luxury shopping tours, and private gala events.',
      arabicDescription: 'سائقون مؤهلون ومرخصون يجيدون عدة لغات بالزي الرسمي الكامل لرحلات العمل والتسوق الفاخر والمناسبات الرسمية.',
      price: 'From 1,200 AED / 8 Hours',
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Corporate & Delegation Fleets',
      arabicTitle: 'أسطول الشركات والمؤتمرات الدولية',
      description: 'Fleet coordination for summits, tech expos (GITEX, COP), visiting executive boards, and royal high-commission delegations.',
      arabicDescription: 'تنسيق متكامل للأساطيل الفارهة للمؤتمرات والمعارض العالمية مثل جيتكس والوفود الرسمية رفيعة المستوى.',
      price: 'Bespoke Corporate Accounts',
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#D4AF37]" />,
      title: 'Monthly & Long-Term Supercar Lease',
      arabicTitle: 'عقود الإيجار الشهري والسنوي المميزة',
      description: 'Substantial savings (up to 40% discount) with monthly vehicle swap privileges, complimentary periodic maintenance, and replacement vehicles.',
      arabicDescription: 'توفير استثنائي يصل إلى 40% مع إمكانية تبديل السيارة شهرياً والصيانة الدورية المجانية وسيارة بديلة فورية.',
      price: 'From 9,000 AED / Month',
    },
  ];

  return (
    <PageShell
      title="Bespoke Concierge & VIP Services"
      arabicTitle="خدمات الكونسيرج وكبار الشخصيات"
      description="Beyond exceptional supercars: experience seamless private aviation transfers, multilingual executive chauffeurs, and corporate leasing."
      arabicDescription="أكثر من مجرد سيارات خارقة: نقدم خدمات الاستقبال في الطيران الخاص، سائقين محترفين، وتأجير طويل الأمد للشركات."
      breadcrumbs={[{ label: 'Services', arabicLabel: 'الخدمات' }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                {srv.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {t(srv.title, srv.arabicTitle)}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {t(srv.description, srv.arabicDescription)}
              </p>
              <div className="text-xs font-semibold text-[#D4AF37]">
                {srv.price}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(
                  srv.title
                )}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] text-black text-xs font-semibold text-center hover:brightness-105 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('Book via WhatsApp', 'حجز عبر واتساب')}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="p-2.5 rounded-xl border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all"
                aria-label="Call concierge"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
};
