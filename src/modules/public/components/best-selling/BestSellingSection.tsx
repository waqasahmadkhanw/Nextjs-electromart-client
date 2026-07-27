"use client";

import { useState } from "react";
import { bestSellingProducts } from "./best-selling.data";
import BestSellingHeader from "./BestSellingHeader";
import ProductGrid from "./ProductGrid";
import LoadMoreButton from "./LoadMoreButton";
import type { CategoryTab } from "./best-selling.types";

const BestSellingSection = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>("featured");

  const filteredProducts =
    activeTab === "featured"
      ? bestSellingProducts
      : bestSellingProducts.filter((p) => p.category === activeTab);

  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="Best selling products"
    >
      <div className="mx-auto max-w-7xl">
        <BestSellingHeader activeTab={activeTab} onTabChange={setActiveTab} />
        <ProductGrid products={filteredProducts} />
        <LoadMoreButton />
      </div>
    </section>
  );
};

export default BestSellingSection;
