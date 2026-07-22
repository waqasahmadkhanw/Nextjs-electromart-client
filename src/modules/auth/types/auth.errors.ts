// ============================================
// Base API Error
// ============================================

export interface ApiError {
  success: false;
  statusCode: number;
  message: string;
  error?: string;
  timestamp?: string;
}

// ============================================
// Validation Error
// ============================================

export interface ValidationError {
  field: string;
  message: string;
}

// ============================================
// Validation Error Response
// ============================================

export interface ValidationErrorResponse extends ApiError {
  errors: ValidationError[];
}

// ============================================
// Authentication Error
// ============================================

export interface AuthenticationError extends ApiError {
  code:
    | "INVALID_CREDENTIALS"
    | "TOKEN_EXPIRED"
    | "TOKEN_INVALID"
    | "TOKEN_MISSING"
    | "EMAIL_NOT_VERIFIED"
    | "ACCOUNT_LOCKED"
    | "ACCOUNT_DISABLED"
    | "UNAUTHORIZED";
}

// ============================================
// Authorization Error
// ============================================

export interface AuthorizationError extends ApiError {
  code:
    | "FORBIDDEN"
    | "INSUFFICIENT_PERMISSIONS";
}

// ============================================
// Network Error
// ============================================

export interface NetworkError {
  message: string;
  status?: number;
}

// ============================================
// Error State
// ============================================

export interface AuthErrorState {
  error: ApiError | null;
  hasError: boolean;
}