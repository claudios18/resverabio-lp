// Types for the Resverabio Landing Page

export interface ProductVariant {
  id: string;
  name: string;
  label: string;
  color: string;
  isActive?: boolean;
}

export interface NutritionInfo {
  portion: string;
  servingsPerContainer: string;
  values: NutritionValue[];
}

export interface NutritionValue {
  nutrient: string;
  amount: string;
  dailyValue?: string;
}

export interface BenefitSection {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  content: string[];
  imageUrl?: string;
  layout: 'left' | 'right' | 'center';
}

export interface ComparisonProduct {
  id: string;
  name: string;
  variants: string[];
  proteinPerServing: string;
  features: string[];
  isNew?: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
  variants: ProductVariant[];
  highlights: string[];
}
