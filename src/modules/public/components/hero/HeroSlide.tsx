"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroActions from "./HeroActions";
import type { HeroSlide as HeroSlideType } from "./hero.types";

interface HeroSlideProps {
  slide: HeroSlideType;
}

const HeroSlide = ({ slide }: HeroSlideProps) => {
  return (
    <article className="grid min-h-105 grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 lg:min-h-130">
      {/* Left Content */}
      <div className="space-y-6">
        <HeroContent
          badge={slide.badge}
          title={slide.title}
          description={slide.description}
        />

        <HeroActions
          primaryLabel={slide.primaryButton.label}
          primaryHref={slide.primaryButton.href}
          secondaryLabel={slide.secondaryButton?.label}
          secondaryHref={slide.secondaryButton?.href}
        />
      </div>

      {/* Right Image */}
      <a
        href={slide.primaryButton.href}
        className="flex items-center justify-center"
      >
        <HeroImage
          src={slide.image}
          alt={slide.title}
          priority
        />
      </a>
    </article>
  );
};

export default HeroSlide;

