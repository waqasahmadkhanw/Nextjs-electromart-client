"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSlide from "./HeroSlide";
import HeroNavigation from "./HeroNavigation";
import HeroIndicators from "./HeroIndicators";
import HeroBackground from "./HeroBackground";
import { HERO_SLIDES } from "./hero.data";

const AUTO_PLAY_INTERVAL = 5000;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-transparent shadow-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background decorations with current slide image */}
      <HeroBackground imageSrc={HERO_SLIDES[currentSlide].image} />

      {/* Content */}
      <div className="relative z-10 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
        <AnimatePresence mode="wait">
          <HeroSlide key={HERO_SLIDES[currentSlide].id} slide={HERO_SLIDES[currentSlide]} />
        </AnimatePresence>
      </div>

      {/* Slider Navigation */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2 sm:px-8 lg:px-10">
        <HeroNavigation onPrevious={handlePrevious} onNext={handleNext} />
        <HeroIndicators
          total={totalSlides}
          current={currentSlide}
          onChange={handleSlideChange}
        />
      </div>
    </div>
  );
};

export default HeroSlider;
