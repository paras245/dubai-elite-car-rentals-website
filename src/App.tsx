import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { useLenis } from './hooks/useLenis';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { FleetPage } from './pages/FleetPage';
import { CarDetailPage } from './pages/CarDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CategoryRedirect } from './pages/CategoryRedirect';

function AppContent() {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/car/:slug" element={<CarDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Category shortcuts */}
        <Route path="/hypercars" element={<CategoryRedirect />} />
        <Route path="/sports-cars" element={<CategoryRedirect />} />
        <Route path="/luxury-cars" element={<CategoryRedirect />} />
        <Route path="/suvs" element={<CategoryRedirect />} />
        <Route path="/convertibles" element={<CategoryRedirect />} />
        <Route path="/electric-cars" element={<CategoryRedirect />} />
        <Route path="/economy-cars" element={<CategoryRedirect />} />
        <Route path="/chauffeur-services" element={<CategoryRedirect />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
