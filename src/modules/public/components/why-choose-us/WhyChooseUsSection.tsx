"use client";

import { whyChooseUsData } from "./why-choose-us.data";
import WhyChooseUsHeader from "./WhyChooseUsHeader";
import StatisticsCard from "./StatisticsCard";
import FeaturesGrid from "./FeaturesGrid";
import BottomCTA from "./BottomCTA";

const WhyChooseUsSection = () => {
  const { badge, title, description, learnMoreHref, stats, features, cta } =
    whyChooseUsData;

  return (
    <section
      className="w-full bg-white px-4 py-16 sm:py-20 lg:py-24 dark:bg-gray-950"
      aria-label="Why choose us"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <WhyChooseUsHeader
          badge={badge}
          title={title}
          description={description}
          learnMoreHref={learnMoreHref}
        />

        {/* Main Content: Stats + Features */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Left: Statistics Card */}
          <StatisticsCard stats={stats} />

          {/* Right: Features Grid */}
          <FeaturesGrid features={features} />
        </div>

        {/* Bottom CTA */}
        <BottomCTA
          title={cta.title}
          buttonLabel={cta.buttonLabel}
          buttonHref={cta.buttonHref}
        />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

