// ============================================
// JWT Access Token
// ============================================

export interface AccessToken {
  token: string;
  expiresAt: number;
  issuedAt?: number;
}

// ============================================
// JWT Refresh Token
// ============================================

export interface RefreshToken {
  token: string;
  expiresAt: number;
  issuedAt?: number;
}

// ============================================
// Token Pair
// ============================================

export interface TokenPair {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

// ============================================
// JWT Payload
// ============================================

export interface TokenPayload {
  sub: string;          // User ID
  email: string;
  role: string;

  iat?: number;         // Issued At
  exp?: number;         // Expiration
  iss?: string;         // Issuer
  aud?: string;         // Audience
}

// ============================================
// Token Refresh Payload
// ============================================

export interface RefreshTokenPayload {
  refreshToken: string;
}

// ============================================
// Decoded Token
// ============================================

export interface DecodedToken extends TokenPayload {
  isExpired: boolean;
}

// ============================================
// Token Metadata
// ============================================

export interface TokenMetadata {
  expiresIn: number;
  expiresAt: number;
  issuedAt: number;
}