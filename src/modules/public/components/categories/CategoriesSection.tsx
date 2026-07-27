"use client";

import { categories } from "./categories.data";
import SectionHeader from "./SectionHeader";
import CategoriesGrid from "./CategoriesGrid";

const CategoriesSection = () => {
  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="Shop by category"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="🏷️ Popular Categories"
          title="Shop by Categories"
          description="Find everything you need in one place"
          viewAllHref="/categories"
        />
        <CategoriesGrid items={categories} />
      </div>
    </section>
  );
};

export default CategoriesSection;

