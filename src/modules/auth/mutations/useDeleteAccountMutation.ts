'use client';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { deleteAccount } from '../services';
import type {
  DeleteAccountRequest,
  DeleteAccountResponse,
} from '../types';

/**
 * Delete Account Mutation
 *
 * Flow:
 * Component
 *   ↓
 * useDeleteAccount()
 *   ↓
 * useDeleteAccountMutation()
 *   ↓
 * auth.service.ts
 *   ↓
 * auth.api.ts
 *   ↓
 * Backend API
 */
export const useDeleteAccountMutation = (): UseMutationResult<
  DeleteAccountResponse,
  Error,
  DeleteAccountRequest
> => {
  return useMutation<
    DeleteAccountResponse,
    Error,
    DeleteAccountRequest
  >({
    mutationFn: deleteAccount,
  });
};

export default useDeleteAccountMutation;