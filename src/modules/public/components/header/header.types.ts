/**
 * ============================================================
 * Header Types
 * ============================================================
 * Shared TypeScript types for the Public Header.
 * Keep only interfaces and type definitions here.
 */

/* ---------------------------------- */
/* Navigation */
/* ---------------------------------- */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  target?: "_self" | "_blank";
  disabled?: boolean;
}

/* ---------------------------------- */
/* Categories */
/* ---------------------------------- */

export interface CategoryItem {
  id: string;
  label: string;
  href: string;
  image?: string;
  count?: number;
}

/* ---------------------------------- */
/* Search */
/* ---------------------------------- */

export interface SearchSuggestion {
  id: string;
  title: string;
  href: string;
  image?: string;
  description?: string;
}

/* ---------------------------------- */
/* Language */
/* ---------------------------------- */

export interface LanguageOption {
  label: string;
  value: string;
}

/* ---------------------------------- */
/* Currency */
/* ---------------------------------- */

export interface CurrencyOption {
  label: string;
  value: string;
  symbol: string;
}

/* ---------------------------------- */
/* User */
/* ---------------------------------- */

export interface UserMenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

/* ---------------------------------- */
/* Badges */
/* ---------------------------------- */

export interface HeaderBadgeProps {
  count?: number;
}

/* ---------------------------------- */
/* SearchBar */
/* ---------------------------------- */

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (keyword: string) => void;
}

/* ---------------------------------- */
/* Header */
/* ---------------------------------- */

export interface HeaderProps {
  className?: string;
}