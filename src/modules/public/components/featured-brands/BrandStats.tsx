"use client";

interface BrandStatsProps {
  productCount: number;
  startingPrice: number;
}

const BrandStats = ({ productCount, startingPrice }: BrandStatsProps) => {
  return (
    <div className="mb-4 space-y-1">
      <p className="text-xs text-gray-400">
        {productCount.toLocaleString()}+ Products
      </p>
      <p className="text-sm font-semibold text-gray-900">
        From ${startingPrice}
      </p>
    </div>
  );
};

export default BrandStats;

