"use client";

import Image from "next/image";
import HeroSlider from "./HeroSlider";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-6 lg:py-10"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/banners/banner-01.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Very subtle dark overlay - just enough to soften the image */}
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/10 to-black/5" />
        {/* Subtle theme color overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background/10 to-secondary/5" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Hero Slider */}
          <div className="lg:col-span-8">
            <HeroSlider />
          </div>

          {/* Promotional Banner */}
          <div className="lg:col-span-4">
            <HeroBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

