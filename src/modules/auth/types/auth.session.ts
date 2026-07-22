// ============================================
// Session User
// ============================================

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  isVerified: boolean;
}

// ============================================
// User Session
// ============================================

export interface AuthSession {
  user: SessionUser;

  accessToken: string;
  refreshToken: string;

  expiresAt: number;

  isAuthenticated: boolean;
}

// ============================================
// Session Metadata
// ============================================

export interface SessionMetadata {
  loginAt: number;
  lastActivityAt: number;
  expiresAt: number;
  ipAddress?: string;
  userAgent?: string;
}

// ============================================
// Active Session
// ============================================

export interface ActiveSession {
  sessionId: string;

  deviceName: string;
  browser: string;
  operatingSystem: string;

  ipAddress: string;

  createdAt: string;
  lastActiveAt: string;

  current: boolean;
}

// ============================================
// Session Configuration
// ============================================

export interface SessionConfig {
  autoRefresh: boolean;
  persistSession: boolean;
  refreshThreshold: number;
}

// ============================================
// Session State
// ============================================

export interface SessionState {
  session: AuthSession | null;

  loading: boolean;

  initialized: boolean;
}