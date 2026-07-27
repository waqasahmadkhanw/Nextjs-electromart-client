/**
 * Best Selling Products Types
 */

export interface BestSellingProduct {
  id: string;
  brand: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice?: number;
  isSale?: boolean;
  colors: string[];
  category: "featured" | "electronics" | "gaming" | "audio" | "accessories";
}

export interface BestSellingCardProps {
  product: BestSellingProduct;
  index: number;
}

export type CategoryTab = "featured" | "electronics" | "gaming" | "audio" | "accessories";

