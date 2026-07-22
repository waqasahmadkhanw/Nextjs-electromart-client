import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useIsAuthenticated } from "./useIsAuthenticated";

export interface UseGuestGuardOptions {
  redirectTo?: string;
}

export const useGuestGuard = ({
  redirectTo = "/dashboard",
}: UseGuestGuardOptions = {}) => {
  const router = useRouter();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, redirectTo, router]);

  return {
    isGuest: !isAuthenticated,
    isAuthenticated,
  };
};

export default useGuestGuard;