/**
 * Categories Data
 * Eight product categories displayed in the Shop by Categories section.
 */

import type { CategoryItem } from "./categories.types";

export const categories: CategoryItem[] = [
  { icon: "💻", name: "Laptops", productCount: 245, slug: "laptops" },
  { icon: "📱", name: "Smartphones", productCount: 430, slug: "smartphones" },
  { icon: "⌚", name: "Smart Watches", productCount: 110, slug: "watches" },
  { icon: "🎧", name: "Headphones", productCount: 320, slug: "headphones" },
  { icon: "📷", name: "Cameras", productCount: 120, slug: "cameras" },
  { icon: "🎮", name: "Gaming", productCount: 210, slug: "gaming" },
  { icon: "🖥️", name: "Monitors", productCount: 90, slug: "monitors" },
  { icon: "⌨️", name: "Accessories", productCount: 180, slug: "accessories" },
];

