"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Grid2X2, ChevronDown } from "lucide-react";
import { useState } from "react";

import CategoryMenu from "./CategoryMenu";
import { navigationLinks } from "./header.data";

const Navbar = () => {
  const pathname = usePathname();
  const [showCategories, setShowCategories] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
      className="border-b border-border bg-background shadow-sm"
    >
      <div className="mx-auto flex h-12 lg:h-14 max-w-7xl items-center justify-between px-3 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Browse Categories - Desktop */}
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              <Grid2X2 className="h-5 w-5" />
              <span>Browse Categories</span>
              <motion.span
                animate={{ rotate: showCategories ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {showCategories && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-border bg-background p-2 shadow-xl"
                >
                  <CategoryMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navigationLinks.slice(0, 6).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
                {link.badge && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-white"
                  >
                    {link.badge}
                  </motion.span>
                )}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1.25 left-2 right-2 h-0.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <span className="mx-1 h-5 w-px bg-border" />

          {/* Utility Links: About, FAQ, Orders, Contact */}
          {navigationLinks.slice(6).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground/70 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Categories Button */}
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary lg:hidden"
          aria-label="Browse Categories"
        >
          <Grid2X2 className="h-5 w-5" />
          <span className="text-xs">Categories</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

