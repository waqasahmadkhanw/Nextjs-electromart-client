"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import CategoryMenu from "./CategoryMenu";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "./header.data";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>

          {/* Desktop Categories */}
          <div className="hidden lg:block">
            <CategoryMenu />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Categories Button */}
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground lg:hidden"
          aria-label="Browse Categories"
        >
          <Menu className="h-5 w-5" />
          Categories
        </button>
      </div>
    </nav>
  );
};

export default Navbar;