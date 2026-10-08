import React from 'react';
import { Link } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <PageShell
      title="404 — Page Not Found"
      arabicTitle="404 — الصفحة غير موجودة"
      description="The requested page could not be located in the Dubai Elite registry."
      arabicDescription="تعذر العثور على الصفحة المطلوبة في سجلات دبي إيليت."
    >
      <div className="py-20 text-center max-w-lg mx-auto space-y-6">
        <div className="text-6xl font-serif font-bold text-[#D4AF37]">404</div>
        <h2 className="text-2xl font-bold text-white">
          {t('Destination Not Found', 'الوجهة غير متوفرة')}
        </h2>
        <p className="text-sm text-neutral-400">
          {t(
            'The link you followed may be expired or the vehicle may have relocated. Explore our active supercar collection.',
            'قد يكون الرابط غير متاح أو تم تحديث بيانات السيارة. تصفح أسطول سياراتنا الحالي.'
          )}
        </p>
        <div>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs hover:bg-[#E8CF72] transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            <span>{t('Return to Fleet', 'العودة إلى الأسطول')}</span>
          </Link>
        </div>
      </div>
    </PageShell>
  );
};
