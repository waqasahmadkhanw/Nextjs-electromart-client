"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (keyword: string) => void;
}

const SearchBar = ({
  placeholder = "Search products...",
  onSearch,
}: SearchBarProps) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = keyword.trim();

    if (!value) return;

    onSearch?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-12 w-full items-center overflow-hidden rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary"
    >
      <input
        type="search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder={placeholder}
        aria-label="Search"
        className="h-full flex-1 bg-transparent px-4 text-sm outline-none"
      />

      <button
        type="submit"
        aria-label="Search"
        className="flex h-full w-14 items-center justify-center border-l border-border transition-colors hover:bg-muted"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;