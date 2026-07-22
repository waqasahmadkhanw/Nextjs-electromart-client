"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ChevronDown, LogOut, Settings, ShoppingBag } from "lucide-react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 transition hover:bg-gray-100"
        aria-label="User Menu"
      >
        <User className="h-5 w-5" />
        <span className="hidden text-sm font-medium lg:block">
          My Account
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          {/* User Info */}
          <div className="border-b p-4">
            <p className="text-sm font-semibold text-gray-900">
              Welcome Back
            </p>
            <p className="text-xs text-gray-500">
              Sign in to manage your account.
            </p>
          </div>

          {/* Menu */}
          <nav className="p-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition hover:bg-gray-100"
            >
              <User className="h-4 w-4" />
              My Profile
            </Link>

            <Link
              href="/orders"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition hover:bg-gray-100"
            >
              <ShoppingBag className="h-4 w-4" />
              My Orders
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition hover:bg-gray-100"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>

            <hr className="my-2" />

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default UserMenu;