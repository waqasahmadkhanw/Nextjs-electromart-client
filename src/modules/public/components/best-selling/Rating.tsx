"use client";

import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviewCount: number;
}

const Rating = ({ rating, reviewCount }: RatingProps) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i <= Math.round(rating)
            ? "fill-amber-400 text-amber-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    );
  }

  const formatCount = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1).replace(".0", "")}k`;
    return String(count);
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">{stars}</div>
      <span className="text-xs font-medium text-gray-500">
        {rating} ({formatCount(reviewCount)})
      </span>
    </div>
  );
};

export default Rating;

