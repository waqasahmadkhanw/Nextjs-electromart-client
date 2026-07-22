import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { AUTH_QUERY_KEYS } from "../constants/auth.constants";

export const useRolesQuery = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.ROLES,
    queryFn: authService.getRoles,
    staleTime: 1000 * 60 * 10,
  });
};