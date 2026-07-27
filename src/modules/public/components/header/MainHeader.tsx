"use client";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import ThemeToggle from "./ThemeToggle";

const MainHeader = () => {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Search */}
        <div className="hidden flex-1 px-6 lg:block">
          <SearchBar />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <WishlistButton />

          <CartButton />

          <UserMenu />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t p-4 lg:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default MainHeader;