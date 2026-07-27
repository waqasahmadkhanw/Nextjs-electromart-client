/**
 * Shop by Categories Types
 */

export interface CategoryItem {
  icon: string;
  name: string;
  productCount: number;
  slug: string;
}

export interface CategoryCardProps {
  icon: string;
  name: string;
  productCount: number;
  slug: string;
  index: number;
}

