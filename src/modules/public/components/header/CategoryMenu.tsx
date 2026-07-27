"use client";

import Link from "next/link";

import { categoryLinks } from "./header.data";

const CategoryMenu = () => {
  return (
    <ul className="space-y-1">
      {categoryLinks.map((category) => (
        <li key={category.id}>
          <Link
            href={category.href}
            className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <span>{category.label}</span>
            {category.count && (
              <span className="text-xs text-muted-foreground">
                {category.count}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryMenu;

