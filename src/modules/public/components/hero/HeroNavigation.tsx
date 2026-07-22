"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const HeroNavigation = ({
  onPrevious,
  onNext,
}: HeroNavigationProps) => {
  return (
    <>
      {/* Previous Button */}
      <button
        type="button"
        aria-label="Previous Slide"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        aria-label="Next Slide"
        onClick={onNext}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  );
};

export default HeroNavigation;