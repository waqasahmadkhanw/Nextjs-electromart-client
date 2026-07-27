"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart, ShoppingCart, Grid2X2, ChevronRight } from "lucide-react";

import { navigationLinks } from "./header.data";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const drawerVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="flex items-center justify-between border-b border-border bg-background/95 backdrop-blur-sm px-3 py-2.5 lg:hidden">
        {/* Left: Hamburger */}
        <motion.button
          type="button"
          onClick={toggleMenu}
          aria-label="Open Menu"
          whileTap={{ scale: 0.9 }}
          className="rounded-md p-2 transition hover:bg-muted"
        >
          <Menu className="h-6 w-6" />
        </motion.button>

        {/* Center: Logo */}
        <Link href="/" className="text-base font-bold text-primary">
          ElectroMart
        </Link>

        {/* Right: Theme Toggle, Search, Wishlist, Cart */}
        <div className="flex items-center gap-0.5">
          {/* Theme Toggle for mobile */}
          <ThemeToggle />

          <motion.button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
            whileTap={{ scale: 0.9 }}
            className="rounded-md p-2 transition hover:bg-muted"
          >
            <Search className="h-5 w-5" />
          </motion.button>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative rounded-md p-2 transition hover:bg-muted"
          >
            <Heart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[8px] font-semibold text-white">
              0
            </span>
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative rounded-md p-2 transition hover:bg-muted"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[8px] font-semibold text-white">
              3
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar (toggleable) */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border px-3 pb-3 lg:hidden"
          >
            <SearchBar showCategories={false} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-background shadow-2xl lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Grid2X2 className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-base font-semibold">Menu</h2>
              </div>
              <motion.button
                type="button"
                onClick={closeMenu}
                aria-label="Close Menu"
                whileTap={{ scale: 0.9 }}
                className="rounded-md p-2 transition hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {/* Browse Categories */}
              <motion.div
                variants={linkVariants}
                custom={0}
                initial="closed"
                animate="open"
                className="mb-3 rounded-xl bg-linear-to-r from-blue-50 to-indigo-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Grid2X2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-gray-900">Browse Categories</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </motion.div>

              {/* Navigation Links */}
              <div className="space-y-0.5">
                {navigationLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    variants={linkVariants}
                    custom={i + 1}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase leading-none text-white"
                        >
                          {link.badge}
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="border-t border-border p-4">
              <p className="text-center text-xs text-muted-foreground">
                © 2024 ElectroMart. All rights reserved.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

