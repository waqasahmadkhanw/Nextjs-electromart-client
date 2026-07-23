// ============================================
// Operation Types for Mutations
// ============================================

// Change Password
export interface ChangePasswordResponse {
  message: string;
}

// Delete Account
export interface DeleteAccountRequest {
  password?: string;
  confirmReason?: string;
}

export interface DeleteAccountResponse {
  message: string;
}

// Disable Two Factor
export interface DisableTwoFactorRequest {
  password?: string;
  code?: string;
}

export interface DisableTwoFactorResponse {
  message: string;
}

// Enable Two Factor
export interface EnableTwoFactorRequest {
  password?: string;
  method?: "app" | "sms" | "email";
  phone?: string;
}

export interface EnableTwoFactorResponse {
  message: string;
  secret?: string;
  qrCode?: string;
}

// Resend Verification
export interface ResendVerificationRequest {
  email?: string;
}

export interface ResendVerificationResponse {
  message: string;
}

// Update Profile Response
export interface UpdateProfileResponse {
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
    isVerified: boolean;
  };
}

// Upload Avatar
export interface UploadAvatarRequest {
  avatar: File;
}

export interface UploadAvatarResponse {
  url: string;
  publicId?: string;
}


