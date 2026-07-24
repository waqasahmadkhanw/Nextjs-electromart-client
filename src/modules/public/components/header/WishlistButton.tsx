"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

interface WishlistButtonProps {
  itemCount?: number;
}

const WishlistButton = ({
  itemCount = 0,
}: WishlistButtonProps) => {
  return (
    <Link
      href="/wishlist"
      aria-label="Wishlist"
      className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background transition-all duration-200 hover:border-primary hover:bg-muted"
    >
      <Heart className="h-5 w-5" />

      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Link>
  );
};

export default WishlistButton;

