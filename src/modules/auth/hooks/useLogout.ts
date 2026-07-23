import { useCallback } from "react";

import { useAppDispatch } from "@/shared/store";

import { useLogoutMutation } from "../mutations";
import { logout } from "../store";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const mutation = useLogoutMutation();

  const handleLogout = useCallback(async () => {
    try {
      await mutation.mutateAsync();
    } finally {
      dispatch(logout());
    }
  }, [dispatch, mutation]);

  return {
    logout: handleLogout,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};

export default useLogout;
