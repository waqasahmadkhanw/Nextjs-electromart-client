"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import CurrencySwitcher from "./CurrencySwitcher";
import { languages, currencies } from "./header.data";

const MainHeader = () => {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const iconBtnClass =
    "relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-border bg-background transition-all duration-200 hover:border-primary hover:bg-muted hover:shadow-sm active:scale-95";

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      className="border-b border-border bg-background shadow-sm"
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Search - Desktop */}
        <div className="hidden flex-1 px-4 lg:block">
          <SearchBar />
        </div>

        {/* Mobile Search Toggle */}
        <button
          type="button"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          aria-label="Toggle search"
          className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-all hover:border-primary hover:bg-muted"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Theme Toggle */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher
              value={language}
              options={languages}
              onChange={setLanguage}
            />
          </div>

          {/* Currency Switcher */}
          <div className="hidden lg:block">
            <CurrencySwitcher
              value={currency}
              options={currencies}
              onChange={setCurrency}
            />
          </div>

          {/* Account */}
          <Link
            href="/account"
            aria-label="Account"
            className="hidden sm:flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-border bg-background transition-all hover:border-primary hover:bg-muted"
          >
            <User className="h-5 w-5" />
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist" aria-label="Wishlist" className={iconBtnClass}>
            <Heart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white shadow-sm">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link href="/cart" aria-label="Cart" className={iconBtnClass}>
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white shadow-sm">
              3
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar (expandable) */}
      <motion.div
        initial={false}
        animate={{
          height: mobileSearchOpen ? "auto" : 0,
          opacity: mobileSearchOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden border-b border-border lg:hidden"
      >
        <div className="px-3 pb-4 pt-2">
          <SearchBar showCategories={false} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainHeader;

