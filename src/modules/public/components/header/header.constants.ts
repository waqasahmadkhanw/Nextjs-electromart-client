/**
 * Header Constants
 * -------------------------------------------------------
 * Contains reusable constants for the Public Header.
 * Do NOT store business logic here.
 */

export const HEADER = {
  HEIGHT: 80,
  MOBILE_BREAKPOINT: 1024,
  SEARCH_PLACEHOLDER: "Search products...",
  STICKY: true,
} as const;

export const HEADER_ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  CATEGORIES: "/categories",
  ABOUT: "/about",
  CONTACT: "/contact",
  FAQ: "/faq",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  CART: "/cart",
  WISHLIST: "/wishlist",
  NOTIFICATIONS: "/notifications",
} as const;

export const TOP_BAR = {
  PHONE: "+1 (234) 567-890",
  EMAIL: "support@example.com",
  SHIPPING_MESSAGE: "Free Shipping on Orders Over $99",
} as const;

export const SEARCH = {
  MIN_QUERY_LENGTH: 2,
  MAX_QUERY_LENGTH: 100,
  DEBOUNCE_DELAY: 300,
} as const;

export const BADGE = {
  MAX_COUNT: 99,
  OVERFLOW_LABEL: "99+",
} as const;