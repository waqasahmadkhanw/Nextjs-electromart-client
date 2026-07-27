/**
 * Features Bar Data
 * Five trust-building feature cards displayed below the Hero section.
 */

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export const features: FeatureItem[] = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free delivery on eligible orders",
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    description: "100% encrypted checkout",
  },
  {
    icon: "💳",
    title: "Easy Payment",
    description: "Multiple payment options",
  },
  {
    icon: "↩",
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: "✔️",
    title: "Genuine Products",
    description: "100% original brands",
  },
];

