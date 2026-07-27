"use client";

import { useState } from "react";
import { flashDealProducts } from "./flash-deals.data";
import FlashDealsHeader from "./FlashDealsHeader";
import ProductSlider from "./ProductSlider";

const FlashDealsSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(Math.ceil(flashDealProducts.length / 4) - 1, prev + 1)
    );
  };

  return (
    <section
      className="w-full bg-white px-4 py-12 sm:py-16 lg:py-20 dark:bg-gray-950"
      aria-label="Flash deals"
    >
      <div className="mx-auto max-w-7xl">
        <FlashDealsHeader onPrev={handlePrev} onNext={handleNext} />
        <ProductSlider products={flashDealProducts} />
      </div>
    </section>
  );
};

export default FlashDealsSection;

