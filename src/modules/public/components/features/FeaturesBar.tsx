"use client";

import { features } from "./features.data";
import FeatureGrid from "./FeatureGrid";

const FeaturesBar = () => {
  return (
    <section
      className="w-full bg-white px-4 py-8 sm:py-10 lg:py-12 dark:bg-gray-950"
      aria-label="Store features and trust badges"
    >
      <div className="mx-auto max-w-7xl">
        <FeatureGrid items={features} />
      </div>
    </section>
  );
};

export default FeaturesBar;

