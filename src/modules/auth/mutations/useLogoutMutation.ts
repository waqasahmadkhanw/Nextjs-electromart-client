'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { logout } from '../services';
import type { ApiResponse } from '@/shared/types';

/**
 * Logout Mutation
 *
 * Flow:
 * Component
 *   ↓
 * useLogout()
 *   ↓
 * useLogoutMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useLogoutMutation = (): UseMutationResult<
  ApiResponse,
  Error,
  void
> => {
  return useMutation<ApiResponse, Error, void>({
    mutationFn: logout,
  });
};

export default useLogoutMutation;