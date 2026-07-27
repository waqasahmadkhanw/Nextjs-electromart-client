"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroButtonsProps {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const HeroButtons = ({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: HeroButtonsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 md:px-7 md:py-3.5"
      >
        {primaryLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>

      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-md active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-700 md:px-7 md:py-3.5"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
};

export default HeroButtons;
