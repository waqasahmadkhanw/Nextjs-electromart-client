/**
 * ============================================================
 * Auth Permission Utilities
 * ============================================================
 * Pure authorization helper functions.
 * No React.
 * No API calls.
 * No Redux.
 * No side effects.
 * ============================================================
 */

export type UserRole =
  | "super-admin"
  | "admin"
  | "manager"
  | "staff"
  | "user"
  | string;

export interface AuthUser {
  id: string;
  role: UserRole;
  permissions?: string[];
}

/**
 * Returns true if user has the specified role.
 */
export const hasRole = (
  user: AuthUser | null | undefined,
  role: UserRole
): boolean => {
  return user?.role === role;
};

/**
 * Returns true if user has one of the specified roles.
 */
export const hasAnyRole = (
  user: AuthUser | null | undefined,
  roles: UserRole[]
): boolean => {
  if (!user) return false;

  return roles.includes(user.role);
};

/**
 * Returns true if user has all specified roles.
 */
export const hasAllRoles = (
  user: AuthUser | null | undefined,
  roles: UserRole[]
): boolean => {
  if (!user) return false;

  return roles.every((role) => role === user.role);
};

/**
 * Returns true if user has a permission.
 */
export const hasPermission = (
  user: AuthUser | null | undefined,
  permission: string
): boolean => {
  if (!user?.permissions) return false;

  return user.permissions.includes(permission);
};

/**
 * Returns true if user has any permission.
 */
export const hasAnyPermission = (
  user: AuthUser | null |undefined,
  permissions: string[]
): boolean => {
  if (!user?.permissions) return false;

  return permissions.some((permission) =>
    user.permissions!.includes(permission)
  );
};

/**
 * Returns true if user has all permissions.
 */
export const hasAllPermissions = (
  user: AuthUser | null | undefined,
  permissions: string[]
): boolean => {
  if (!user?.permissions) return false;

  return permissions.every((permission) =>
    user.permissions!.includes(permission)
  );
};

/**
 * Checks if user can access a protected resource.
 */
export const canAccess = (
  user: AuthUser | null | undefined,
  options: {
    roles?: UserRole[];
    permissions?: string[];
  }
): boolean => {
  if (!user) return false;

  const roleAllowed =
    !options.roles ||
    hasAnyRole(user, options.roles);

  const permissionAllowed =
    !options.permissions ||
    hasAllPermissions(user, options.permissions);

  return roleAllowed && permissionAllowed;
};