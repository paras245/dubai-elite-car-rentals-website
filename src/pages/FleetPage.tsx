import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageShell } from '../components/layout/PageShell';
import { carsData, fleetCategories } from '../data/cars';
import { useLanguage } from '../context/LanguageContext';
import { formatPriceAED } from '../lib/utils';
import { CarCategory } from '../types/car';
import {
  Search,
  Filter,
  Gauge,
  Zap,
  Users,
  Settings,
  Shield,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../data/site.config';

export const FleetPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, isRtl } = useLanguage();

  const selectedCategory = searchParams.get('category') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'power'>('featured');

  const filteredCars = useMemo(() => {
    return carsData.filter((car) => {
      const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'price-desc') return b.pricePerDay - a.pricePerDay;
      if (sortBy === 'power') return b.horsepower - a.horsepower;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleCategorySelect = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <PageShell
      title="The Royal & Supercar Fleet"
      arabicTitle="الأسطول الملكي والسيارات الخارقة"
      description="Browse our curated lineup of 150+ hypercars, supercars, luxury sedans, and executive SUVs in Dubai."
      arabicDescription="تصفح تشكيلتنا الفاخرة التي تضم أكثر من 150 سيارة هايبركار وسوبركار وسيارات سيدان ودفع رباعي فاخرة في دبي."
      breadcrumbs={[{ label: 'Fleet', arabicLabel: 'الأسطول' }]}
    >
      {/* Category Segmented Tabs & Filters */}
      <div className="space-y-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Live Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('Search Ferrari, Bugatti, Rolls-Royce...', 'ابحث عن فيراري، بوغاتي، رولز رويس...')}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 whitespace-nowrap">{t('Sort by:', 'ترتيب حسب:')}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer"
            >
              <option value="featured" className="bg-neutral-900">{t('Featured First', 'المميزة أولاً')}</option>
              <option value="price-asc" className="bg-neutral-900">{t('Price: Low to High', 'السعر: من الأقل للأعلى')}</option>
              <option value="price-desc" className="bg-neutral-900">{t('Price: High to Low', 'السعر: من الأعلى للأقل')}</option>
              <option value="power" className="bg-neutral-900">{t('Horsepower (HP)', 'قوة المحرك (حصان)')}</option>
            </select>
          </div>
        </div>

        {/* Category Pills (Functional buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'glass-panel text-neutral-300 hover:text-white'
            }`}
          >
            {t('All Fleet (150+)', 'كافة السيارات (150+)')}
          </button>
          {fleetCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#D4AF37] text-black font-semibold'
                  : 'glass-panel text-neutral-300 hover:text-white'
              }`}
            >
              {t(cat.name, cat.arabicName)}
            </button>
          ))}
        </div>
      </div>

      {/* Cars Grid */}
      {filteredCars.length === 0 ? (
        <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5">
          <p className="text-neutral-400 text-sm">
            {t('No vehicles matched your search query. Please try another filter.', 'لم يتم العثور على سيارات تطابق بحثك. يرجى تجربة فلتر آخر.')}
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              handleCategorySelect('all');
            }}
            className="mt-4 px-4 py-2 bg-[#D4AF37] text-black text-xs font-semibold rounded-lg"
          >
            {t('Reset Filters', 'إعادة ضبط الفلاتر')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all flex flex-col group"
            >
              {/* Image & Price Overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur text-[11px] text-[#D4AF37] font-semibold">
                  {car.brand}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-white">
                      {formatPriceAED(car.pricePerDay)}
                    </span>
                    <span className="text-xs text-neutral-400 font-normal"> / {t('day', 'يوم')}</span>
                  </div>
                  <div className="text-[11px] text-neutral-300 bg-white/10 backdrop-blur px-2 py-0.5 rounded">
                    {formatPriceAED(car.pricePerWeek)} / {t('week', 'أسبوع')}
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {car.description}
                  </p>
                </div>

                {/* Specs Bar */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/10 text-[11px] text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{car.horsepower} HP</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{car.zeroTo100}s (0-100)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{car.seats} {t('Seats', 'مقاعد')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <Link
                    to={`/car/${car.slug}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t('View Specs', 'المواصفات')}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20renting%20the%20${encodeURIComponent(
                      car.name
                    )}%20in%20Dubai.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${car.name} on WhatsApp`}
                    className="p-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageShell>
  );
};
