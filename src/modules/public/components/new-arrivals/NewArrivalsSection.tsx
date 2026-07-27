"use client";

import { useState } from "react";
import { newArrivalProducts } from "./new-arrivals.data";
import NewArrivalsHeader from "./NewArrivalsHeader";
import FeaturedBanner from "./FeaturedBanner";
import ProductGrid from "./ProductGrid";
import ExploreMoreButton from "./ExploreMoreButton";
import type { CategoryTab } from "./new-arrivals.types";

const NewArrivalsSection = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>("featured");

  const filteredProducts =
    activeTab === "featured"
      ? newArrivalProducts
      : newArrivalProducts.filter((p) => p.category === activeTab);

  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="New arrivals"
    >
      <div className="mx-auto max-w-7xl">
        <NewArrivalsHeader activeTab={activeTab} onTabChange={setActiveTab} />
        <FeaturedBanner />
        <ProductGrid products={filteredProducts} />
        <ExploreMoreButton />
      </div>
    </section>
  );
};

export default NewArrivalsSection;

