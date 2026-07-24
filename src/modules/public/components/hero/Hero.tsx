"use client";

import HeroSlider from "./HeroSlider";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-linear-to-br from-primary/5 via-background to-secondary/5 py-6 lg:py-10"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

        {/* Decorative blurred circle - top right */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        {/* Decorative blurred circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        {/* Subtle floating dot pattern */}
        <div className="absolute right-1/4 top-1/4 h-2 w-2 rounded-full bg-primary/20" />
        <div className="absolute bottom-1/3 left-1/3 h-1.5 w-1.5 rounded-full bg-secondary/20" />
        <div className="absolute right-1/3 top-2/3 h-1 w-1 rounded-full bg-primary/15" />
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

