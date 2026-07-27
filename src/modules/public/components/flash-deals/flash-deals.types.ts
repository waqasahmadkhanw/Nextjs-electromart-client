/**
 * Flash Deals Section Types
 */

export interface FlashDealProduct {
  id: string;
  brand: string;
  name: string;
  image: string;
  discountPercent: number;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  stockRemaining: number;
  totalStock: number;
}

export interface FlashDealCardProps {
  product: FlashDealProduct;
  index: number;
}

