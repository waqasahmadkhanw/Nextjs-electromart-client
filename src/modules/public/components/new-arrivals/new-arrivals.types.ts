/**
 * New Arrivals Types
 */

export interface NewArrivalProduct {
  id: string;
  brand: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice?: number;
  isNew: boolean;
  colors: string[];
  category: "featured" | "electronics" | "audio" | "gaming" | "fashion";
}

export interface NewArrivalCardProps {
  product: NewArrivalProduct;
  index: number;
}

export type CategoryTab = "featured" | "electronics" | "audio" | "gaming" | "fashion";

