"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useIsAuthenticated } from "./useIsAuthenticated";

export interface UseAuthGuardOptions {
  redirectTo?: string;
}

export const useAuthGuard = ({
  redirectTo = "/login",
}: UseAuthGuardOptions = {}) => {
  const router = useRouter();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, redirectTo, router]);

  return {
    isAuthenticated,
    isProtected: isAuthenticated,
  };
};

export default useAuthGuard;