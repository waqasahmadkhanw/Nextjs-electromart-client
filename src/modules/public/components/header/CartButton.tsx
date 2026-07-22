"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  itemCount?: number;
}

const CartButton = ({
  itemCount = 0,
}: CartButtonProps) => {
  return (
    <Link
      href="/cart"
      aria-label="Shopping Cart"
      className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all hover:border-primary hover:bg-gray-50"
    >
      <ShoppingCart className="h-5 w-5" />

      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartButton;