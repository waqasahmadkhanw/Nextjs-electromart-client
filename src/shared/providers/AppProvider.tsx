"use client";

/**
 * -------------------------------------------------------
 * File: shared/providers/AppProvider.tsx
 * Description:
 * Root application provider.
 * Composes all global providers in a single place.
 * -------------------------------------------------------
 */

import { ReactNode } from "react";

import QueryProvider from "./QueryProvider";
import ReduxProvider from "./ReduxProvider";
import ThemeProvider from "./ThemeProvider";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}