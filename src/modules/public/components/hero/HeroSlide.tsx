"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroRating from "./HeroRating";
import HeroProducts from "./HeroProducts";
import TrustCards from "./TrustCards";
import type { HeroSlide as HeroSlideType } from "./hero.types";

interface HeroSlideProps {
  slide: HeroSlideType;
}

const HeroSlide = ({ slide }: HeroSlideProps) => {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-5 lg:gap-6"
    >
      {/* Left Content - col-span-5 */}
      <div className="flex flex-col justify-center gap-5 md:col-span-7 lg:col-span-5 order-1">
        <HeroContent
          badge={slide.badge}
          title={slide.title}
          description={slide.description}
        />
        <HeroButtons
          primaryLabel={slide.primaryButton.label}
          primaryHref={slide.primaryButton.href}
          secondaryLabel={slide.secondaryButton?.label}
          secondaryHref={slide.secondaryButton?.href}
        />
        <HeroRating />
      </div>

      {/* Center Content - Product Showcase */}
      <div className="flex items-center justify-center md:col-span-5 lg:col-span-4 order-3 md:order-2">
        <HeroProducts />
      </div>

      {/* Right Content - Trust Cards */}
      <div className="flex items-center md:col-span-12 lg:col-span-3 order-2 md:order-3">
        <TrustCards />
      </div>
    </motion.div>
  );
};

export default HeroSlide;
