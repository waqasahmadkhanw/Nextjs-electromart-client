import type { WhyChooseUsData } from "./why-choose-us.types";

export const whyChooseUsData: WhyChooseUsData = {
  badge: "🏆 Trusted Store",
  title: "Why Choose Us",
  description:
    "Everything you need for a secure and enjoyable shopping experience.",
  learnMoreHref: "/about",
  stats: [
    { value: "50K+", label: "Happy Customers", icon: "😊" },
    { value: "4.9", label: "Rating", icon: "⭐" },
    { value: "500+", label: "Brands", icon: "🏷️" },
    { value: "10+", label: "Years Experience", icon: "📅" },
  ],
  features: [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping on eligible orders.",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "100% encrypted checkout.",
    },
    {
      icon: "↩",
      title: "Easy Returns",
      description: "30-day return policy.",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description: "Round-the-clock customer care.",
    },
    {
      icon: "✔️",
      title: "Genuine Products",
      description: "100% original brands guaranteed.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Lightning-fast shipping worldwide.",
    },
  ],
  cta: {
    title: "Ready to upgrade your shopping experience?",
    buttonLabel: "Start Shopping",
    buttonHref: "/products",
  },
};

