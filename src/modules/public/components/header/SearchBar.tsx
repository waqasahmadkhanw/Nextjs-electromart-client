"use client";

import { FormEvent, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (keyword: string) => void;
  showCategories?: boolean;
}

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
];

const SearchBar = ({
  placeholder = "Search products, brands, categories...",
  onSearch,
  showCategories = true,
}: SearchBarProps) => {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = keyword.trim();
    if (!value) return;
    onSearch?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-11 sm:h-12 w-full items-center overflow-hidden rounded-full border border-border bg-background shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1 transition-all duration-200"
    >
      {/* Categories Dropdown */}
      {showCategories && (
        <div className="relative hidden sm:block">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex h-11 sm:h-12 items-center gap-1.5 border-r border-border px-3 sm:px-4 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            {selectedCategory}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
          </button>
          {showDropdown && (
            <div className="absolute left-0 top-full z-50 mt-1 w-44 sm:w-48 rounded-lg border border-border bg-background py-1 shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowDropdown(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-xs transition-colors hover:bg-muted ${
                    selectedCategory === cat ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Search Input */}
      <input
        type="search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder={placeholder}
        aria-label="Search"
        className="h-full flex-1 bg-transparent px-3 sm:px-4 text-xs sm:text-sm outline-none placeholder:text-muted-foreground/60"
      />

      {/* Search Button */}
      <button
        type="submit"
        aria-label="Search"
        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-95 mr-1 shrink-0"
      >
        <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </button>
    </form>
  );
};

export default SearchBar;

