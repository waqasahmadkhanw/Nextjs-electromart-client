"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";
import type { CategoryTab } from "./best-selling.types";

interface BestSellingHeaderProps {
  activeTab: CategoryTab;
  onTabChange: (tab: CategoryTab) => void;
}

const tabs: { id: CategoryTab; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "electronics", label: "Electronics" },
  { id: "gaming", label: "Gaming" },
  { id: "audio", label: "Audio" },
  { id: "accessories", label: "Accessories" },
];

const BestSellingHeader = ({ activeTab, onTabChange }: BestSellingHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left: Badge + Title + Description */}
      <div>
        <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-600">
          ⭐ Best Sellers
        </span>
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Our Most Popular Products
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Discover the products customers love the most.
        </p>

          {/* Tabs */}
          <div className="mt-4">
            <CategoryTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
          </div>
        </div>

      {/* Right: View All - desktop */}
      <Link
        href="/products"
        className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
      >
        View All
        <ArrowRight className="h-4 w-4" />
      </Link>

      {/* Mobile View All */}
      <Link
        href="/products"
        className="sm:hidden inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
      >
        View All
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
};

export default BestSellingHeader;

