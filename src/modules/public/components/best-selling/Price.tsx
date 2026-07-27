"use client";

interface PriceProps {
  currentPrice: number;
  originalPrice?: number;
}

const Price = ({ currentPrice, originalPrice }: PriceProps) => {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-lg font-bold text-gray-900">
        ${currentPrice.toLocaleString()}
      </span>
      {originalPrice && originalPrice > currentPrice && (
        <span className="text-sm text-gray-400 line-through">
          ${originalPrice.toLocaleString()}
        </span>
      )}
    </div>
  );
};

export default Price;

