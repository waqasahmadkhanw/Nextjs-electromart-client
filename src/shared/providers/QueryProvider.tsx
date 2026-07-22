"use client";

/**
 * -------------------------------------------------------
 * File: shared/providers/QueryProvider.tsx
 * Description:
 * Global TanStack Query Provider.
 * -------------------------------------------------------
 */

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/shared/config/queryClient";

interface QueryProviderProps {
  children: ReactNode;
}

export default function QueryProvider({
  children,
}: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}