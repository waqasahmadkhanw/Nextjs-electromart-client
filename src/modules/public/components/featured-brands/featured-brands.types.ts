/**
 * Featured Brands Types
 */

export interface Brand {
  id: string;
  name: string;
  logo: string;
  productCount: number;
  startingPrice: number;
  slug: string;
  gradient?: string;
  featured?: boolean;
  discount?: string;
  tagline?: string;
  description?: string;
  categories?: string[];
}

export interface FeaturedBrandsSectionProps {
  featuredBrand: Brand;
  brands: Brand[];
}

