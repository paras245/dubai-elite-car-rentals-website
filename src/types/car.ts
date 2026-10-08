export type CarCategory =
  | 'hypercars'
  | 'supercars'
  | 'luxury-sedans'
  | 'luxury-suvs'
  | 'convertibles'
  | 'electric'
  | 'economy'
  | 'chauffeur-vans';

export interface Car {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: CarCategory;
  year: number;
  images: string[];
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  seats: number;
  doors: number;
  transmission: 'Automatic' | 'Dual-Clutch' | 'Manual';
  fuel: 'Petrol' | 'Hybrid' | 'Electric' | 'Diesel';
  engine: string;
  horsepower: number;
  topSpeedKmh: number;
  zeroTo100: number;
  mileageLimitPerDay: number;
  extraKmFee: number;
  deposit: number;
  features: string[];
  insurance: {
    type: string;
    excess: number;
    includes: string[];
  };
  description: string;
  tags: string[];
  featured: boolean;
  available: boolean;
}

export interface CategoryInfo {
  id: CarCategory;
  name: string;
  arabicName: string;
  description: string;
  arabicDescription: string;
  startingPrice: number;
  count: number;
}
