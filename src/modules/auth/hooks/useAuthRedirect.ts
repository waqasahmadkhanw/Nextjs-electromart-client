"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useIsAuthenticated } from "./useIsAuthenticated";

interface UseAuthRedirectOptions {
  authenticatedRedirect?: string;
  unauthenticatedRedirect?: string;
}

export const useAuthRedirect = ({
  authenticatedRedirect,
  unauthenticatedRedirect,
}: UseAuthRedirectOptions = {}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (
      isAuthenticated &&
      authenticatedRedirect &&
      pathname !== authenticatedRedirect
    ) {
      router.replace(authenticatedRedirect);
      return;
    }

    if (
      !isAuthenticated &&
      unauthenticatedRedirect &&
      pathname !== unauthenticatedRedirect
    ) {
      router.replace(unauthenticatedRedirect);
    }
  }, [
    authenticatedRedirect,
    unauthenticatedRedirect,
    isAuthenticated,
    pathname,
    router,
  ]);

  return {
    isAuthenticated,
  };
};

export default useAuthRedirect;