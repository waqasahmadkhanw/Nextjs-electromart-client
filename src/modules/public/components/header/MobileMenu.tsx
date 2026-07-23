"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigationLinks } from "./header.data";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Open Menu"
        className="rounded-md p-2 transition hover:bg-muted"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeMenu}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 bg-background shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close Menu"
            className="rounded-md p-2 transition hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;