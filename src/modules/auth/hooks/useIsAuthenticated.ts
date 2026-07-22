import { useMemo } from "react";

import { useAppSelector } from "@/shared/store";

import { selectAccessToken, selectIsAuthenticated } from "../store";

export const useIsAuthenticated = (): boolean => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const accessToken = useAppSelector(selectAccessToken);

  return useMemo(
    () => Boolean(isAuthenticated && accessToken),
    [isAuthenticated, accessToken]
  );
};

export default useIsAuthenticated;