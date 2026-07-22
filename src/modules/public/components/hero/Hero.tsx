"use client";

import HeroSlider from "./02.HeroSlider";
import HeroBanner from "./07.HeroBanner";

const Hero = () => {
  return (
    <section
      className="w-full bg-background py-6 lg:py-10"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
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