// ============================================
// Login Form
// ============================================

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

// ============================================
// Register Form
// ============================================

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

// ============================================
// Forgot Password Form
// ============================================

export interface ForgotPasswordFormValues {
  email: string;
}

// ============================================
// Reset Password Form
// ============================================

export interface ResetPasswordFormValues {
  token: string;
  password: string;
  confirmPassword: string;
}

// ============================================
// Verify Email Form
// ============================================

export interface VerifyEmailFormValues {
  token: string;
}

// ============================================
// Change Password Form
// ============================================

export interface ChangePasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Alias for hook compatibility
export type ChangePasswordRequest = ChangePasswordFormValues;

// Alias for hook compatibility
export type UpdateProfileRequest = UpdateProfileFormValues;

// ============================================
// Update Profile Form
// ============================================

export interface UpdateProfileFormValues {
  name: string;
  avatar?: File | null;
}

// ============================================
// Resend Verification Email Form
// ============================================

export interface ResendVerificationEmailFormValues {
  email: string;
}