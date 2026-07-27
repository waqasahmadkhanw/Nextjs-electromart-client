import type { NewsletterData, NewsletterSocialLink } from "./newsletter.types";

export const newsletterData: NewsletterData = {
  badge: "✨ Join Our Community",
  title: "Subscribe & Save",
  description:
    "Be the first to know about new arrivals, exclusive offers, and product updates.",
  benefits: [
    { icon: "✓", label: "Exclusive Discounts" },
    { icon: "✓", label: "Early Access" },
    { icon: "✓", label: "Product Updates" },
    { icon: "✓", label: "Weekly Offers" },
  ],
  placeholder: "Enter your email address",
  buttonLabel: "Subscribe",
  privacyNote:
    "🔒 We respect your privacy. No spam. Unsubscribe anytime.",
  trustInfo: "Join 50,000+ smart shoppers",
  stats: [
    { value: "50K+", label: "Subscribers", icon: "👥" },
    { value: "4.9", label: "Rating", icon: "⭐" },
    { value: "100+", label: "Exclusive Deals Monthly", icon: "🎁" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://facebook.com", icon: "F" },
    { name: "Instagram", href: "https://instagram.com", icon: "I" },
    { name: "YouTube", href: "https://youtube.com", icon: "Y" },
    { name: "X", href: "https://x.com", icon: "X" },
    { name: "TikTok", href: "https://tiktok.com", icon: "T" },
  ],
};

