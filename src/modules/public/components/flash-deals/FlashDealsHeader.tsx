"use client";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

interface FlashDealsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

const FlashDealsHeader = ({ onPrev, onNext }: FlashDealsHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4">
      {/* Top row: Badge + Title + Countdown */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div>
            <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-600">
              ⚡ Limited Time
            </span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Flash Deals
            </h2>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Today&apos;s Best Deals</p>
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-4">
            <div className="inline-flex items-center gap-1 rounded-xl bg-gray-50 px-3 py-2">
              <span className="text-xs font-semibold text-gray-600">Ends In</span>
              <CountdownTimer />
            </div>
          </div>
        </div>

        {/* Right: Navigation Arrows + View All - desktop only */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
              aria-label="Previous deals"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={onNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
              aria-label="Next deals"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <Link
            href="/deals"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Mobile arrows + view all */}
      <div className="flex items-center justify-between sm:hidden">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onPrev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
            aria-label="Previous deals"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onNext}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
            aria-label="Next deals"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <Link
          href="/deals"
          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default FlashDealsHeader;

