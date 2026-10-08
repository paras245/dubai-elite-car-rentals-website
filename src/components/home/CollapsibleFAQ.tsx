import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../data/site.config';

interface FAQItem {
  question: string;
  arabicQuestion: string;
  answer: string;
  arabicAnswer: string;
}

export const CollapsibleFAQ: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      question: 'What documents are required to rent a supercar in Dubai?',
      arabicQuestion: 'ما هي المستندات المطلوبة لتأجير سيارة خارقة في دبي؟',
      answer: 'For UAE tourists: Passport, entry visa with stamp, and valid home-country or international driver’s license. For UAE residents: Valid Emirates ID and UAE driving license. The entire verification is completed instantly via WhatsApp in 5 minutes.',
      arabicAnswer: 'لزوار دبي: جواز السفر، تأشيرة الدخول، ورخصة القيادة الدولية أو المحلية المعتمدة. للمقيمين: الهوية الإماراتية ورخصة القيادة سارية المفعول. يتم التحقق بالكامل عبر واتساب خلال 5 دقائق فقط.',
    },
    {
      question: 'How does WhatsApp VIP direct booking and door-to-door delivery work?',
      arabicQuestion: 'كيف تعمل خدمة الحجز المباشر عبر واتساب والتوصيل حتى باب المنزل؟',
      answer: 'Simply tap our WhatsApp concierge button. Send your dates, preferred supercar, and location in Dubai. Our team verifies your vehicle, prepares the digital contract, and delivers your car polished and fueled directly to your hotel, villa, or airport terminal within 60 minutes.',
      arabicAnswer: 'اضغط على زر واتساب للتواصل مع الكونسيرج، وحدد تواريخ الحجز والسيارة وموقع الاستلام. نقوم بتأكيد الحجز وتجهيز العقد وتوصيل السيارة مغسولة وممتلئة بالوقود إلى موقعك خلال 60 دقيقة.',
    },
    {
      question: 'Is there a zero security deposit option available?',
      arabicQuestion: 'هل تتوفر باقات استئجار بدون دفع مبلغ تأمين؟',
      answer: 'Yes! We offer zero security deposit packages on select luxury vehicles when opting for our Full Comprehensive Platinum Coverage. Standard deposits (when applicable) are fully refunded to your card within 14 to 21 business days after Salik toll clearance.',
      arabicAnswer: 'نعم! نقدم باقات حجز بدون مبلغ تأمين لسيارات مختارة عند اختيار باقة التأمين الشامل البلاتيني. التأمينات المستردة العادية تُعاد بالكامل خلال 14 إلى 21 يوم عمل بعد تسوية رسوم سالك.',
    },
    {
      question: 'Can you deliver the supercar directly to Dubai International Airport (DXB)?',
      arabicQuestion: 'هل يمكن تسليم السيارة فوراً عند مبنى مطار دبي الدولي (DXB)؟',
      answer: 'Absolutely. We provide white-glove delivery to DXB Terminal 1, 2, 3, and private jet FBO lounges (Al Maktoum DWC & ExecuJet). A designated concierge will await your flight landing with your vehicle ready at the VIP curb.',
      arabicAnswer: 'بالتأكيد. نقدم خدمة الاستقبال الملكي في مباني مطار دبي (1 و2 و3) وصالات الطيران الخاص (DWC وExecuJet)، حيث ينتظر مندوبنا هبوط طائرتك لتسليمك المفاتيح مباشرة.',
    },
    {
      question: 'What is the daily mileage limit and Salik toll system?',
      arabicQuestion: 'ما هو الحد اليومي للكيلومترات وكيف تُحسب رسوم بوابات سالك؟',
      answer: 'Most supercars include 200–250 km per day (unlimited packages also available upon request). Salik toll gates in Dubai cost 5 AED per gate crossing and are conveniently itemized upon return without any markups.',
      arabicAnswer: 'معظم السيارات الخارقة تتضمن 200 إلى 250 كم يومياً (مع إمكانية طلب باقات الكيلومترات المفتوحة). رسوم سالك تبلغ 5 دراهم للبوابة ويتم حسابها بدقة وشفافية عند تسليم السيارة.',
    },
    {
      question: 'Can I request a professional chauffeur with the vehicle?',
      arabicQuestion: 'هل يمكن حجز سائق خاص ومحترف مع السيارة؟',
      answer: 'Yes. We provide certified, multilingual executive chauffeurs for Rolls-Royce, Maybach, and VIP Mercedes V-Class vans. Ideal for corporate summits, wedding VIPs, and luxury city tours.',
      arabicAnswer: 'نعم، نوفر سائقين محترفين يجيدون عدة لغات لسيارات رولز رويس ومايباخ وفانات مرسيدس VIP، وهي مثالية لرحلات الأعمال والمناسبات الخاصة وجولات المدينة.',
    },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section aria-label="Frequently Asked Questions" className="py-16 sm:py-24 bg-[#0B0B0B] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>{t('Frequently Asked Questions', 'الأسئلة الأكثر شيوعاً')}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {t('Everything You Need To Know', 'كل ما تحتاج لمعرفته حول التأجير الملكي')}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            {t(
              'Clear, transparent terms with no fine print. Have a specific request? Our WhatsApp concierge is online 24/7.',
              'شروط واضحة ومباشرة بدون تعقيدات. لأي استفسار إضافي، فريق الواتساب متواجد لخدمتك على مدار الساعة.'
            )}
          </p>
        </div>

        {/* Collapsible Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border transition-all duration-300 overflow-hidden bg-white/[0.02]"
                style={{
                  borderColor: isOpen ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span className="font-medium text-sm sm:text-base text-white">
                    {t(faq.question, faq.arabicQuestion)}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-black border-[#D4AF37]' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 bg-black/40 animate-in fade-in duration-200">
                    {t(faq.answer, faq.arabicAnswer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Help Link */}
        <div className="mt-10 p-5 rounded-2xl glass-panel-gold border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">
              {t('Have more questions about our fleet?', 'لديك استفسار خاص عن أي سيارة؟')}
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">
              {t('Connect directly with our fleet manager on WhatsApp.', 'تحدث مباشرة مع مدير الأسطول عبر واتساب للحصول على إجابة فورية.')}
            </div>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Dubai%20Elite,%20I%20have%20a%20question%20regarding%20car%20rental.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('Ask on WhatsApp', 'اسأل عبر واتساب')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
