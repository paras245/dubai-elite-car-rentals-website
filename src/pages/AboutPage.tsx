import React from 'react';
import { PageShell } from '../components/layout/PageShell';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site.config';
import { SocialIcons } from '../components/shared/SocialIcons';
import { Award, Clock, Users, Globe, MessageCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageShell
      title="About Dubai Elite"
      arabicTitle="عن أسطول دبي إيليت الفاخر"
      description="Born in Dubai to redefine ultra-luxury mobility across the United Arab Emirates with an immaculate private collection."
      arabicDescription="انطلقت الشركة من دبي لترتقي بمعايير الفخامة والسرعة في دولة الإمارات عبر أسطول سيارات خارقة استثنائي."
      breadcrumbs={[{ label: 'About', arabicLabel: 'من نحن' }]}
    >
      <div className="space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              {t('Our Heritage & Vision', 'رؤيتنا وتاريخنا')}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {t('Uncompromising Luxury for the World’s Most Discerning Drivers', 'فخامة مطلقة لأرقى العملاء وقادة العالم')}
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {t(
                "Dubai is a city defined by architectural brilliance and soaring ambition. At Dubai Elite Car Rentals, we match this grand spirit by offering the world's finest stable of hypercars, supercars, and presidential saloons.",
                "تتميز دبي بكونها عاصمة الطموح والإنجازات المعمارية الاستثنائية. ونحن في دبي إيليت نواكب هذه الروح بتقديم أفضل وأندر أسطول سيارات خارقة وفارهة في العالم."
              )}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t(
                "Whether you require a Bugatti Chiron for a weekend in Palm Jumeirah or a fleet of chauffeur-driven Rolls-Royce Phantoms for an international summit, our white-glove team guarantees flawless execution.",
                "سواء كنت ترغب في قيادة بوغاتي شيرون لعطلة نهاية أسبوع ساحرة أو استئجار أسطول من سيارات رولز رويس مع سائقين محترفين لقمة أعمال، فريقنا يضمن لك تجربة لا تشوبها شائبة."
              )}
            </p>
          </div>

          <div className="glass-panel-gold rounded-3xl p-8 border border-[#D4AF37]/35 space-y-6 shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-white">
              {t('Key Milestones & Guarantees', 'أرقام وإنجازات الأسطول')}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">150+</div>
                <div className="text-xs text-neutral-400 mt-1">{t('Exotic Cars Owned', 'سيارة فارهة مملوكة بالكامل')}</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">12,500+</div>
                <div className="text-xs text-neutral-400 mt-1">{t('VIP Rentals Completed', 'حجز VIP تم تنفيذه')}</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">100%</div>
                <div className="text-xs text-neutral-400 mt-1">{t('RTA Commercial Licensure', 'ترخيص رسمي معتمد')}</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">60 Min</div>
                <div className="text-xs text-neutral-400 mt-1">{t('Average UAE Delivery', 'متوسط سرعة التوصيل')}</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('Instant WhatsApp VIP Inquiry', 'تواصل فوري عبر واتساب')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Engineering & Founder Section with Colorful Social Profiles */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              {t('Executive Architecture', 'الهندسة والتطوير التقني')}
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {siteConfig.founder.name}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {t(
                "Digital architecture and customer experience engineered by Paras Panchal, focusing on zero-latency booking workflows, high-precision telemetry, and seamless bilingual Arabic/English interfaces.",
                "تم تصميم البنية البرمجية وتجربة المستخدم الرقمية المتكاملة بواسطة باراس بانتشال، مع التركيز على سرعة الحجز والواجهات ثنائية اللغة المتوافقة مع أحدث تقنيات الويب."
              )}
            </p>
            <div className="pt-2">
              <SocialIcons size="md" />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
