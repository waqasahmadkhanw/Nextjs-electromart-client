// ============================================
// Permission
// ============================================

export interface Permission {
  id: string;
  name: string;
  description?: string;
}

// ============================================
// Role
// ============================================

export interface Role {
  id: string;
  name: string;
  description?: string;

  permissions: Permission[];
}

// ============================================
// User Permission
// ============================================

export interface UserPermission {
  userId: string;

  role: string;

  permissions: string[];
}

// ============================================
// Permission Group
// ============================================

export interface PermissionGroup {
  name: string;

  permissions: Permission[];
}

// ============================================
// Route Permission
// ============================================

export interface RoutePermission {
  path: string;

  roles?: string[];

  permissions?: string[];

  requiresAuth: boolean;
}

// ============================================
// Permission Check Result
// ============================================

export interface PermissionResult {
  allowed: boolean;

  reason?: string;
}

// ============================================
// Access Control
// ============================================

export interface AccessControl {
  roles: string[];

  permissions: string[];
}