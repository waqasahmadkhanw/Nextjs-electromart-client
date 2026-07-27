/**
 * Featured Brands Data
 * 8 brands with Apple as the featured hero banner brand.
 */

import type { Brand } from "./featured-brands.types";

export const featuredBrand: Brand = {
  id: "apple",
  name: "Apple",
  logo: "🍎",
  productCount: 320,
  startingPrice: 999,
  slug: "apple",
  featured: true,
  discount: "Up to 30% OFF",
  tagline: "Premium Technology",
  description: "Shop the latest Apple collection.",
  categories: ["Mac", "iPhone", "Watch", "AirPods"],
  gradient: "from-slate-900 to-blue-700",
};

export const brands: Brand[] = [
  {
    id: "samsung",
    name: "Samsung",
    logo: "📱",
    productCount: 250,
    startingPrice: 299,
    slug: "samsung",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: "sony",
    name: "Sony",
    logo: "🎧",
    productCount: 190,
    startingPrice: 149,
    slug: "sony",
    gradient: "from-gray-800 to-gray-600",
  },
  {
    id: "logitech",
    name: "Logitech",
    logo: "⌨️",
    productCount: 150,
    startingPrice: 49,
    slug: "logitech",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    id: "dell",
    name: "Dell",
    logo: "💻",
    productCount: 210,
    startingPrice: 699,
    slug: "dell",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: "asus",
    name: "ASUS",
    logo: "🎮",
    productCount: 180,
    startingPrice: 599,
    slug: "asus",
    gradient: "from-red-600 to-red-800",
  },
  {
    id: "garmin",
    name: "Garmin",
    logo: "⌚",
    productCount: 120,
    startingPrice: 249,
    slug: "garmin",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    id: "canon",
    name: "Canon",
    logo: "📷",
    productCount: 140,
    startingPrice: 449,
    slug: "canon",
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "💠",
    productCount: 170,
    startingPrice: 199,
    slug: "microsoft",
    gradient: "from-green-500 to-green-700",
  },
];

