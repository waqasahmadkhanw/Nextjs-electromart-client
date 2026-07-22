/**
 * -------------------------------------------------------
 * File: shared/config/queryClient.ts
 * Description:
 * Global TanStack Query configuration.
 * Used throughout the application via QueryProvider.
 * -------------------------------------------------------
 */

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data freshness
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes

      // Network behavior
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,

      // UX
      networkMode: "online",
    },

    mutations: {
      retry: 1,
      networkMode: "online",
    },
  },
});

export default queryClient;