"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroActionsProps {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const HeroActions = ({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: HeroActionsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
      >
        {primaryLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>

      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-md active:scale-95"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
};

export default HeroActions;
