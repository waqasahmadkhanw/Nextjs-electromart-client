"use client";

import { Heart } from "lucide-react";

const WishlistButton = () => {
  return (
    <div className="absolute right-3 top-3 z-10">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Add to wishlist"
      >
        <Heart className="h-3.5 w-3.5 text-gray-500 hover:text-red-500 transition-colors duration-200" />
      </button>
    </div>
  );
};

export default WishlistButton;

