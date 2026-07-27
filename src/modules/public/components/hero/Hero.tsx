"use client";

import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="relative w-full px-4 py-2 lg:py-4"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
