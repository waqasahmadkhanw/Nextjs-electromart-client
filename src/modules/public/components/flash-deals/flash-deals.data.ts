/**
 * Flash Deals Data
 * Four promotional products with countdown timer.
 */

import type { FlashDealProduct } from "./flash-deals.types";

export const flashDealProducts: FlashDealProduct[] = [
  {
    id: "macbook-pro-m4",
    brand: "Apple",
    name: "MacBook Pro M4",
    image: "/images/hero/hero-01.png",
    discountPercent: 40,
    currentPrice: 1599,
    originalPrice: 799,
    rating: 4.9,
    reviewCount: 245,
    stockRemaining: 8,
    totalStock: 50,
  },
  {
    id: "galaxy-buds-pro",
    brand: "Samsung",
    name: "Galaxy Buds Pro",
    image: "/images/hero/hero-02.png",
    discountPercent: 25,
    currentPrice: 299,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: 189,
    stockRemaining: 15,
    totalStock: 50,
  },
  {
    id: "sony-wh1000xm5",
    brand: "Sony",
    name: "WH-1000XM5",
    image: "/images/hero/hero-03.png",
    discountPercent: 60,
    currentPrice: 99,
    originalPrice: 249,
    rating: 5.0,
    reviewCount: 312,
    stockRemaining: 3,
    totalStock: 50,
  },
  {
    id: "canon-eos-r5",
    brand: "Canon",
    name: "EOS R5 Camera",
    image: "/images/hero/hero-01.png",
    discountPercent: 30,
    currentPrice: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviewCount: 156,
    stockRemaining: 20,
    totalStock: 50,
  },
];

/** Countdown target: 24 hours from now */
export const getCountdownEndDate = (): Date => {
  const end = new Date();
  end.setHours(end.getHours() + 24);
  return end;
};

