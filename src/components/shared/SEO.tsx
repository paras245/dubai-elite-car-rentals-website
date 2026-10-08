import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Dubai Elite Car Rentals | Luxury & Supercar Hire UAE',
  description = "Dubai's premier luxury car rental service. Experience supercars, hypercars, and chauffeur luxury across the UAE.",
  canonical = 'https://dubai-elite-rentals.ae',
  ogImage = '/og-image.jpg',
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [title, description, language]);

  return null;
};
