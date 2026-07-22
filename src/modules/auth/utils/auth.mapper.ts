/**
 * ============================================================
 * Auth Mapper
 * ============================================================
 * Maps backend API responses to frontend models.
 * Pure functions only.
 * No API calls.
 * No React.
 * No side effects.
 * ============================================================
 */

import {
  AuthUser,
  LoginResponse,
  RegisterResponse,
  User,
} from "../types";

/**
 * Maps backend user object to frontend user model.
 */
export const mapUser = (data: Partial<AuthUser>): User => ({
  id: data.id ?? "",
  firstName: data.firstName ?? "",
  lastName: data.lastName ?? "",
  username: data.username ?? "",
  email: data.email ?? "",
  avatar: data.avatar ?? "",
  role: data.role ?? "user",
  isActive: data.isActive ?? false,
  isEmailVerified: data.isEmailVerified ?? false,
  createdAt: data.createdAt ?? "",
  updatedAt: data.updatedAt ?? "",
});

/**
 * Maps login response.
 */
export const mapLoginResponse = (
  response: LoginResponse
): LoginResponse => ({
  accessToken: response.accessToken,
  refreshToken: response.refreshToken,
  user: mapUser(response.user),
});

/**
 * Maps register response.
 */
export const mapRegisterResponse = (
  response: RegisterResponse
): RegisterResponse => ({
  message: response.message,
  user: mapUser(response.user),
});

/**
 * Maps an array of users.
 */
export const mapUsers = (
  users: Partial<AuthUser>[] = []
): User[] => users.map(mapUser);

/**
 * Maps current authenticated user.
 */
export const mapCurrentUser = (
  user: Partial<AuthUser>
): User => mapUser(user);