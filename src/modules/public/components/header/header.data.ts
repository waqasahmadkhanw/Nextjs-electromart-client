import type {
  CategoryItem,
  CurrencyOption,
  LanguageOption,
  NavigationItem,
  UserMenuItem,
} from "./header.types";

/**
 * ==========================================
 * Navigation
 * ==========================================
 */

export const navigationLinks: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "products",
    label: "Products",
    href: "/shop",
  },
  {
    id: "categories",
    label: "Categories",
    href: "/categories",
  },
  {
    id: "deals",
    label: "Deals",
    href: "/deals",
    badge: "HOT",
  },
  {
    id: "brands",
    label: "Brands",
    href: "/brands",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    href: "/wishlist",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "faq",
    label: "FAQ",
    href: "/faq",
  },
  {
    id: "orders",
    label: "Orders",
    href: "/orders",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

/**
 * ==========================================
 * Categories
 * ==========================================
 */

export const categoryLinks: CategoryItem[] = [
  {
    id: "electronics",
    label: "Electronics",
    href: "/categories/electronics",
  },
  {
    id: "fashion",
    label: "Fashion",
    href: "/categories/fashion",
  },
  {
    id: "home-living",
    label: "Home & Living",
    href: "/categories/home-living",
  },
  {
    id: "beauty",
    label: "Beauty",
    href: "/categories/beauty",
  },
  {
    id: "sports",
    label: "Sports",
    href: "/categories/sports",
  },
];

/**
 * ==========================================
 * Languages
 * ==========================================
 */

export const languages: LanguageOption[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Urdu",
    value: "ur",
  },
];

/**
 * ==========================================
 * Currencies
 * ==========================================
 */

export const currencies: CurrencyOption[] = [
  {
    label: "US Dollar",
    value: "USD",
    symbol: "$",
  },
  {
    label: "Pakistani Rupee",
    value: "PKR",
    symbol: "₨",
  },
];

/**
 * ==========================================
 * User Menu
 * ==========================================
 */

export const userMenuItems: UserMenuItem[] = [
  {
    label: "My Profile",
    href: "/profile",
  },
  {
    label: "My Orders",
    href: "/orders",
  },
  {
    label: "Settings",
    href: "/settings",
  },
];