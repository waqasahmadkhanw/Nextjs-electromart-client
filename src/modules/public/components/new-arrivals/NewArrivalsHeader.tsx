"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CategoryTabs from "./CategoryTabs";
import type { CategoryTab } from "./new-arrivals.types";

interface NewArrivalsHeaderProps {
  activeTab: CategoryTab;
  onTabChange: (tab: CategoryTab) => void;
}

const tabs: { id: CategoryTab; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "electronics", label: "Electronics" },
  { id: "audio", label: "Audio" },
  { id: "gaming", label: "Gaming" },
  { id: "fashion", label: "Fashion" },
];

const NewArrivalsHeader = ({ activeTab, onTabChange }: NewArrivalsHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left: Badge + Title + Description */}
      <div>
        <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600">
          ✨ New Arrivals
        </span>
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Fresh Products Just Added
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Discover the latest collections.
        </p>

        {/* Tabs */}
        <div className="mt-4">
          <CategoryTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>

      {/* Right: View All */}
      <Link
        href="/products?sort=newest"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-sm"
      >
        View All
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default NewArrivalsHeader;

