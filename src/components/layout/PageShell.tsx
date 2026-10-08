import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppFab } from '../shared/WhatsAppFab';
import { SEO } from '../shared/SEO';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PageShellProps {
  title: string;
  arabicTitle?: string;
  description: string;
  arabicDescription?: string;
  breadcrumbs?: Array<{ label: string; arabicLabel?: string; path?: string }>;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  arabicTitle,
  description,
  arabicDescription,
  breadcrumbs,
  children,
}) => {
  const { isRtl, t } = useLanguage();
  const displayTitle = arabicTitle ? t(title, arabicTitle) : title;
  const displayDesc = arabicDescription ? t(description, arabicDescription) : description;

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <SEO title={`${displayTitle} | Dubai Elite Car Rentals`} description={displayDesc} />
      <Header />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Editorial Sub-Page Header */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                <Link to="/" className="hover:text-white transition-colors">
                  {t('Home', 'الرئيسية')}
                </Link>
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    <ChevronRight className={`w-3.5 h-3.5 text-neutral-600 ${isRtl ? 'rotate-180' : ''}`} />
                    {crumb.path ? (
                      <Link to={crumb.path} className="hover:text-white transition-colors">
                        {crumb.arabicLabel ? t(crumb.label, crumb.arabicLabel) : crumb.label}
                      </Link>
                    ) : (
                      <span className="text-[#D4AF37]">
                        {crumb.arabicLabel ? t(crumb.label, crumb.arabicLabel) : crumb.label}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            <div className="max-w-3xl space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {displayTitle}
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
                {displayDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {children}
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};
