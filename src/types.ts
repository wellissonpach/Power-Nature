export interface ProductPack {
  id: string;
  name: string;
  subtitle: string;
  units: number;
  originalPrice: number;
  price: number;
  installmentText: string;
  badge?: string;
  popular?: boolean;
  savings?: string;
  shippingFree?: boolean;
}

export interface NutritionItem {
  nutrient: string;
  amountPerServing: string;
  dailyValuePercent: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: string;
  image: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  headline: string;
  subtitle: string;
  category: string;
  categoryBadge: string;
  weight: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  keyIngredients: string[];
  mainBenefit: string;
  status: 'active' | 'coming_soon';
  badge?: string;
  href: string;
  packs?: ProductPack[];
  nutritionTable?: NutritionItem[];
}

export interface IngredientItem {
  id: string;
  name: string;
  scientificOrType?: string;
  origin: string;
  role?: string;
  benefits?: string[];
  description: string;
  badge: string;
  image: string;
}

export interface BrandPillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  essenceTitle: string;
  essenceText: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappContact: string;
  supportEmail: string;
}

export interface OrderBumpConfig {
  name: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  description: string;
  image?: string;
  checkoutUrlWithBump: string;
}

export interface ProductConfig {
  name: string;
  fullName: string;
  tagline: string;
  category: string;
  weight: string;
  servings: string;
  price: number;
  priceFormatted: string;
  originalPriceFormatted?: string;
  checkoutUrl: string;
  orderBump?: OrderBumpConfig;
  instagramHandle: string;
  instagramUrl: string;
  whatsappContact?: string;
  supportEmail?: string;
  highlights: string[];
  suggestedUse: string;
  storageInfo: string;
  ingredientsText: string;
  allergenWarning: string;
  packs: ProductPack[];
  nutritionTable: NutritionItem[];
}
