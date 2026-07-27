"use client";

import { BadgeCheck } from "lucide-react";

const VerifiedBadge = () => {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-semibold text-green-700">
      <BadgeCheck className="h-3 w-3" />
      Verified Purchase
    </span>
  );
};

export default VerifiedBadge;
