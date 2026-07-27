import type { HeroSlide, TrustCard, ProductItem, CustomerRating } from "./hero.types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "🔥 Limited Time Offer",
    title: "Discover The Latest Electronics",
    description:
      "Upgrade your lifestyle with premium gadgets, smartphones, laptops, and accessories at unbeatable prices.",
    image: "/images/hero/hero-01.png",
    primaryButton: {
      label: "Shop Now",
      href: "/products",
    },
    secondaryButton: {
      label: "View Deals",
      href: "/deals",
    },
  },
  {
    id: 2,
    badge: "✨ New Arrival",
    title: "Premium Fashion Collection",
    description:
      "Explore the newest fashion trends with exclusive collections for men, women, and kids.",
    image: "/images/hero/hero-02.png",
    primaryButton: {
      label: "Explore",
      href: "/products",
    },
    secondaryButton: {
      label: "New Collection",
      href: "/collections",
    },
  },
  {
    id: 3,
    badge: "⚡ Mega Sale",
    title: "Up To 50% Off On Top Brands",
    description:
      "Save big on your favorite brands with limited-time offers and fast nationwide delivery.",
    image: "/images/hero/hero-03.png",
    primaryButton: {
      label: "Shop Sale",
      href: "/sale",
    },
    secondaryButton: {
      label: "Browse Brands",
      href: "/brands",
    },
  },
];

// Trust Cards Data
export const trustCards: TrustCard[] = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free delivery on orders over $99",
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    description: "100% secure checkout & payment",
  },
  {
    icon: "↩",
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    description: "Round-the-clock customer care",
  },
];

// Product Showcase Items
export const productShowcase: ProductItem[] = [
  {
    id: "laptop",
    name: "Laptop",
    icon: "💻",
    position: "center",
    size: "large",
  },
  {
    id: "phone",
    name: "Phone",
    icon: "📱",
    position: "top-right",
    rotate: "rotate-12",
    size: "medium",
  },
  {
    id: "watch",
    name: "Watch",
    icon: "⌚",
    position: "bottom-right",
    rotate: "-rotate-6",
    size: "small",
  },
  {
    id: "earbuds",
    name: "Earbuds",
    icon: "🎧",
    position: "bottom-left",
    rotate: "rotate-6",
    size: "small",
  },
];

// Customer Rating Data
export const customerRating: CustomerRating = {
  count: "50K+",
  rating: 4.8,
  reviews: "Happy Customers",
  avatars: [
    "/images/hero/hero-01.png",
    "/images/hero/hero-02.png",
    "/images/hero/hero-03.png",
  ],
};
