import heroSkyline from '../assets/images/hero_dubai_skyline_supercar_1791452628009.jpg';
import heroMarina from '../assets/images/hero_dubai_marina_lamborghini_1791452637453.jpg';
import heroRolls from '../assets/images/hero_rolls_royce_burj_al_arab_1791452646435.jpg';
import heroDesert from '../assets/images/hero_bugatti_chiron_desert_1791452658582.jpg';

// Category photographic assets
import catHypercars from '../assets/images/cat_hypercars_1791453586273.jpg';
import catSupercars from '../assets/images/cat_supercars_1791453602920.jpg';
import catSedans from '../assets/images/cat_luxury_sedans_1791453623933.jpg';
import catSuvs from '../assets/images/cat_luxury_suvs_1791453636864.jpg';
import catConvertibles from '../assets/images/cat_convertibles_1791453649918.jpg';
import catElectric from '../assets/images/cat_electric_luxury_1791453665419.jpg';

export {
  heroSkyline,
  heroMarina,
  heroRolls,
  heroDesert,
  catHypercars,
  catSupercars,
  catSedans,
  catSuvs,
  catConvertibles,
  catElectric,
};

export const heroSlides = [
  {
    id: 'hero-1',
    title: 'Experience Dubai In Ultimate Luxury',
    arabicTitle: 'عش تجربة دبي بأعلى درجات الفخامة المطلقة',
    subtitle: 'Prestige supercars, bespoke chauffeur service & door-to-door VIP delivery anywhere in the UAE.',
    arabicSubtitle: 'أحدث السيارات الفارهة والخارقة مع خدمة التوصيل المباشر في أي مكان داخل الإمارات.',
    image: heroSkyline,
    alt: 'Golden Ferrari supercar with Burj Khalifa Dubai skyline',
    badge: 'Downtown Dubai Collection',
    arabicBadge: 'تشكيلة داون تاون دبي',
  },
  {
    id: 'hero-2',
    title: 'V12 Symphony Along Dubai Marina',
    arabicTitle: 'سيمفونية محركات V12 على ضفاف مارينا دبي',
    subtitle: 'From the Lamborghini Revuelto to the Aventador SVJ. Feel the raw Italian exhilaration.',
    arabicSubtitle: 'من لامبورغيني ريفويلتو إلى أفينتادور SVJ. استشعر إثارة القوة الإيطالية الخارقة.',
    image: heroMarina,
    alt: 'Matte black Lamborghini supercar on Dubai Marina waterfront',
    badge: 'Dubai Marina Supercars',
    arabicBadge: 'سيارات مارينا دبي الرياضية',
  },
  {
    id: 'hero-3',
    title: 'The Sovereign Standard of Rolls-Royce',
    arabicTitle: 'قمة الرفاهية والسيادة مع رولز رويس',
    subtitle: 'Unrivaled prestige for business leaders, royal delegations, and unforgettable five-star evenings.',
    arabicSubtitle: 'مكانة لا تضاهى لرجال الأعمال، الوفود الخاصة، والأمسيات الفاخرة ذات الخمس نجوم.',
    image: heroRolls,
    alt: 'Two-tone Rolls-Royce Phantom near Burj Al Arab',
    badge: 'Presidential & Chauffeur Series',
    arabicBadge: 'الفئة الرئاسية مع سائق خاص',
  },
  {
    id: 'hero-4',
    title: 'Unleash 1,600 HP In The Arabian Dunes',
    arabicTitle: 'أطلق العنان لـ 1,600 حصان في رمال الصحراء الذهبية',
    subtitle: 'Experience Bugatti Chiron and Koenigsegg hypercars on Dubai’s world-famous endless desert highways.',
    arabicSubtitle: 'خض تجربة بوغاتي شيرون وكوينيجسيج على أروع الطرق الصحراوية المفتوحة في دبي.',
    image: heroDesert,
    alt: 'Bugatti Chiron hypercar on scenic Dubai desert highway',
    badge: 'Hypercar Vanguard',
    arabicBadge: 'نخبة الهايبركار العالمية',
  },
];

export const categoryImagesMap: Record<string, string> = {
  hypercars: catHypercars,
  supercars: catSupercars,
  'luxury-sedans': catSedans,
  'luxury-suvs': catSuvs,
  convertibles: catConvertibles,
  electric: catElectric,
  economy: heroSkyline,
  'chauffeur-vans': catSedans,
};
