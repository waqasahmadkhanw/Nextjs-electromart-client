"use client";

import { useState } from "react";

import HeroSlide from "./03.HeroSlide";


"use client";

import Image from "next/image";
import Link from "next/link";

import HeroContent from "./04.HeroContent";
import HeroImage from "./05.HeroImage";
import HeroActions from "./06.HeroActions";
import type { HeroSlide as HeroSlideType } from "./12.hero.types";

interface HeroSlideProps {
  slide: HeroSlideType;
}

const HeroSlide = ({ slide }: HeroSlideProps) => {
  return (
    <article className="grid min-h-[420px] grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 lg:min-h-[520px]">
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
          secondaryLabel={slide.secondaryButton.label}
          secondaryHref={slide.secondaryButton.href}
        />
      </div>

      {/* Right Image */}
      <Link
        href={slide.primaryButton.href}
        className="flex items-center justify-center"
      >
        <HeroImage
          src={slide.image}
          alt={slide.title}
          priority
        />
      </Link>
    </article>
  );
};

export default HeroSlide;