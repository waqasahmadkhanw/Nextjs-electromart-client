/**
 * Promotional Banners Data
 * One large banner + two smaller banners for promotional campaigns.
 */

export interface PromoBanner {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  gradient: string;
  productEmoji: string;
  size: "large" | "small";
}

export const promoBanners: PromoBanner[] = [
  {
    id: "summer-sale",
    badge: "🔥 Summer Sale",
    title: "Up to 70% OFF",
    description: "Shop the latest products with huge discounts on premium electronics & accessories.",
    ctaLabel: "Shop Now",
    ctaHref: "/sale",
    gradient: "from-blue-600 via-blue-700 to-purple-700",
    productEmoji: "🎧",
    size: "large",
  },
  {
    id: "new-arrivals",
    badge: "✨ New Arrivals",
    title: "Shop Latest",
    description: "Discover fresh styles and trending products.",
    ctaLabel: "Explore",
    ctaHref: "/new-arrivals",
    gradient: "from-emerald-500 to-teal-600",
    productEmoji: "📱",
    size: "small",
  },
  {
    id: "free-shipping",
    badge: "🎁 Free Shipping",
    title: "Limited Offer",
    description: "Free delivery on all orders over $50.",
    ctaLabel: "Learn More",
    ctaHref: "/shipping",
    gradient: "from-amber-500 to-orange-600",
    productEmoji: "🚚",
    size: "small",
  },
];

