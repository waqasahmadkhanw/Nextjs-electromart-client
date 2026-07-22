"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Grid2X2 } from "lucide-react";

import { categoryLinks } from "./header.data";

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        className="flex h-11 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium transition hover:bg-gray-50"
      >
        <Grid2X2 className="h-5 w-5" />

        <span>All Categories</span>

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
          <ul className="space-y-1">
            {categoryLinks.map((category) => (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm transition hover:bg-gray-100"
                >
                  <span>{category.label}</span>

                  {category.count && (
                    <span className="text-xs text-gray-500">
                      {category.count}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;