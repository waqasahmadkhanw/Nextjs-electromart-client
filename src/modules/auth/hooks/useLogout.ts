import { useCallback } from "react";

import { useAppDispatch } from "@/shared/store";

import { useLogoutMutation } from "../mutations";
import { clearAuth } from "../store";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const mutation = useLogoutMutation();

  const logout = useCallback(async () => {
    try {
      await mutation.mutateAsync();
    } finally {
      dispatch(clearAuth());
    }
  }, [dispatch, mutation]);

  return {
    logout,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};

export default useLogout;