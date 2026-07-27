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
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        {primaryLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>

      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
};

export default HeroActions;