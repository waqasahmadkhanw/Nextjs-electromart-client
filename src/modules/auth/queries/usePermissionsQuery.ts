import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { AUTH_QUERY_KEYS } from "../constants/auth.query-keys";

export const usePermissionsQuery = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.PERMISSIONS,
    queryFn: authService.getPermissions,
    staleTime: 1000 * 60 * 10,
  });
};