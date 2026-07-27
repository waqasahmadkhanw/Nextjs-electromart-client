"use client";

interface DealBadgeProps {
  discountPercent: number;
}

const DealBadge = ({ discountPercent }: DealBadgeProps) => {
  return (
    <div className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
      -{discountPercent}%
    </div>
  );
};

export default DealBadge;

