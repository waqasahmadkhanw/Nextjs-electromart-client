"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export interface SearchSuggestion {
  id: string;
  title: string;
  href: string;
}

interface SearchSuggestionsProps {
  suggestions: SearchSuggestion[];
  isLoading?: boolean;
  isVisible?: boolean;
  onSelect?: () => void;
}

const SearchSuggestions = ({
  suggestions,
  isLoading = false,
  isVisible = false,
  onSelect,
}: SearchSuggestionsProps) => {
  if (!isVisible) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
      {isLoading ? (
        <div className="p-4 text-center text-sm text-gray-500">
          Searching...
        </div>
      ) : suggestions.length > 0 ? (
        <ul className="max-h-96 overflow-y-auto py-2">
          {suggestions.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={onSelect}
                className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-gray-100"
              >
                <Search className="h-4 w-4 text-gray-400" />

                <span className="text-sm text-gray-700">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-center text-sm text-gray-500">
          No results found.
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;