"use client";

/**
 * -------------------------------------------------------
 * File: shared/providers/ThemeProvider.tsx
 * Description:
 * Global theme provider using next-themes.
 * Supports Light, Dark, and System themes.
 * -------------------------------------------------------
 */

import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="nextjs-theme"
    >
      {children}
    </NextThemesProvider>
  );
}