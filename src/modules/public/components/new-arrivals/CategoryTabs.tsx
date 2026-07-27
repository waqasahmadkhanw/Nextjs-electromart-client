"use client";

import { motion } from "framer-motion";
import type { CategoryTab } from "./new-arrivals.types";

interface CategoryTabsProps {
  tabs: { id: CategoryTab; label: string }[];
  activeTab: CategoryTab;
  onTabChange: (tab: CategoryTab) => void;
}

const CategoryTabs = ({ tabs, activeTab, onTabChange }: CategoryTabsProps) => {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1 hide-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative shrink-0 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 ${
            activeTab === tab.id
              ? "text-indigo-600"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeNewArrivalTab"
              className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-indigo-600"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;

