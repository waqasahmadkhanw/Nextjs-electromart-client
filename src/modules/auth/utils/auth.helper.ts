/**
 * ============================================================
 * Auth Helper Utilities
 * ============================================================
 * Pure utility functions.
 * No React.
 * No API calls.
 * No browser storage.
 * No business logic.
 * ============================================================
 */

import { User } from "../types";

/**
 * Returns user's full name.
 */
export const getFullName = (
  firstName?: string,
  lastName?: string
): string => {
  return [firstName, lastName].filter(Boolean).join(" ").trim();
};

/**
 * Returns initials from first and last name.
 *
 * Example:
 * John Doe -> JD
 * John -> J
 */
export const getUserInitials = (
  firstName?: string,
  lastName?: string
): string => {
  const first = firstName?.trim()?.charAt(0) ?? "";
  const last = lastName?.trim()?.charAt(0) ?? "";

  return `${first}${last}`.toUpperCase();
};

/**
 * Returns display name.
 *
 * Priority:
 * fullName
 * username
 * email
 */
export const getDisplayName = (
  user?: Partial<User> | null
): string => {
  if (!user) return "";

  const fullName = getFullName(user.firstName, user.lastName);

  return (
    fullName ||
    user.username ||
    user.email ||
    ""
  );
};

/**
 * Returns avatar fallback text.
 */
export const getAvatarFallback = (
  user?: Partial<User> | null
): string => {
  if (!user) return "?";

  return (
    getUserInitials(user.firstName, user.lastName) ||
    user.username?.charAt(0).toUpperCase() ||
    user.email?.charAt(0).toUpperCase() ||
    "?"
  );
};

/**
 * Returns true if user has verified email.
 */
export const isEmailVerified = (
  user?: Partial<User> | null
): boolean => {
  return Boolean(user?.isEmailVerified);
};

/**
 * Returns true if account is active.
 */
export const isAccountActive = (
  user?: Partial<User> | null
): boolean => {
  return Boolean(user?.isActive);
};

/**
 * Safely compares user ids.
 */
export const isCurrentUser = (
  currentUserId?: string,
  targetUserId?: string
): boolean => {
  if (!currentUserId || !targetUserId) {
    return false;
  }

  return currentUserId === targetUserId;
};