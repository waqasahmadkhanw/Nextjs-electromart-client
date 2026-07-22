export const FOOTER_LINKS = {
  company: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],

  support: [
    {
      label: "Help Center",
      href: "/help",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Shipping",
      href: "/shipping",
    },
    {
      label: "Returns",
      href: "/returns",
    },
  ],

  legal: [
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Cookie Policy",
      href: "/cookies",
    },
  ],
} as const;


export const FOOTER_SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
  },
] as const;


export const FOOTER_CONTACT = {
  address: "123 Business Street, New York, NY",
  phone: "+1 123 456 7890",
  email: "support@example.com",
  workingHours: "Mon - Fri | 9:00 AM - 6:00 PM",
} as const;


export const FOOTER_PAYMENT_METHODS = [
  {
    name: "Visa",
    icon: "/images/payments/visa.svg",
  },
  {
    name: "Mastercard",
    icon: "/images/payments/mastercard.svg",
  },
  {
    name: "PayPal",
    icon: "/images/payments/paypal.svg",
  },
  {
    name: "Stripe",
    icon: "/images/payments/stripe.svg",
  },
] as const;