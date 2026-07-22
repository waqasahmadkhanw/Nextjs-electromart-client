// ============================================
// Authenticated User
// ============================================

export interface AuthUser {
  id: string;
  name: string;
  email: string;

  avatar?: string;

  role: string;

  isVerified: boolean;

  createdAt: string;
  updatedAt: string;
}

// ============================================
// User Profile
// ============================================

export interface UserProfile {
  id: string;

  firstName?: string;
  lastName?: string;

  fullName?: string;

  username?: string;

  email: string;

  phone?: string;

  avatar?: string;

  bio?: string;

  role: string;

  isVerified: boolean;

  createdAt: string;
  updatedAt: string;
}

// ============================================
// User Preferences
// ============================================

export interface UserPreferences {
  language?: string;

  timezone?: string;

  theme?: "light" | "dark" | "system";

  notifications?: boolean;
}

// ============================================
// User Address
// ============================================

export interface UserAddress {
  country?: string;

  state?: string;

  city?: string;

  postalCode?: string;

  addressLine1?: string;

  addressLine2?: string;
}

// ============================================
// User Contact
// ============================================

export interface UserContact {
  email: string;

  phone?: string;
}

// ============================================
// User Avatar
// ============================================

export interface UserAvatar {
  url: string;

  publicId?: string;
}

// ============================================
// Public User
// ============================================

export interface PublicUser {
  id: string;

  name: string;

  avatar?: string;
}