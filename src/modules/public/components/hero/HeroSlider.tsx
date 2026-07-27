"use client";

import HeroNavigation from "./HeroNavigation";
import HeroIndicators from "./HeroIndicators";
import { HERO_SLIDES } from "./hero.data";
import { useState } from "react";
import HeroSlide from "./HeroSlide";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = HERO_SLIDES.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-transparent">
      <HeroSlide slide={HERO_SLIDES[currentSlide]} />

      <HeroNavigation
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <HeroIndicators
        total={totalSlides}
        current={currentSlide}
        onChange={handleSlideChange}
      />
    </div>
  );
};

export default HeroSlider;
