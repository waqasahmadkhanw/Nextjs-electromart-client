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
    <div className="flex items-center gap-2">
      {/* Previous Button */}
      <button
        type="button"
        aria-label="Previous Slide"
        onClick={onPrevious}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 active:scale-95"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        aria-label="Next Slide"
        onClick={onNext}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 active:scale-95"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default HeroNavigation;
