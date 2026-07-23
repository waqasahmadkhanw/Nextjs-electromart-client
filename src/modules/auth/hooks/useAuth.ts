import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/store";

import { logout } from "../store";
import { useCurrentUser } from "./useCurrentUser";
import { useIsAuthenticated } from "./useIsAuthenticated";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useCurrentUser();
  const isAuthenticated = useIsAuthenticated();

  const authState = useAppSelector(
    (state) => state.auth
  );

  const isLoading = authState.status === "loading";
  const accessToken = authState.accessToken;
  const refreshToken = authState.refreshToken;

  const handleLogout = () => {
    dispatch(logout());
  };

  return useMemo(
    () => ({
      user,
      accessToken,
      refreshToken,
      isAuthenticated,
      isLoading,
      logout: handleLogout,
    }),
    [
      user,
      accessToken,
      refreshToken,
      isAuthenticated,
      isLoading,
    ]
  );
};

export default useAuth;
