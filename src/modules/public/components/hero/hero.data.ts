import type { HeroSlide } from "./12.hero.types";

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