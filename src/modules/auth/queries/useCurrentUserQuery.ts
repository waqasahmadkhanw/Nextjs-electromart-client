import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { AUTH_QUERY_KEYS } from "../constants/auth.constants";

export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.CURRENT_USER,
    queryFn: authService.getCurrentUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};