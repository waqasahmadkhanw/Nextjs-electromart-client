"use client";

import { Heart, Scale, Eye } from "lucide-react";

const ProductActions = () => {
  return (
    <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Add to wishlist"
      >
        <Heart className="h-3.5 w-3.5 text-gray-500 hover:text-red-500" />
      </button>
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Add to compare"
      >
        <Scale className="h-3.5 w-3.5 text-gray-500 hover:text-blue-600" />
      </button>
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Quick view"
      >
        <Eye className="h-3.5 w-3.5 text-gray-500 hover:text-blue-600" />
      </button>
    </div>
  );
};

export default ProductActions;

