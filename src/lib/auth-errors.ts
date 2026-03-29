// Error message translations for Better Auth error codes
import { authClient } from './auth-client';

type ErrorCode = keyof typeof authClient.$ERROR_CODES;

// Map common error codes/messages to Bengali translations
// Using a simple Record to avoid strict type checking issues
const errorMessages: Record<string, string> = {
  // User errors
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "An account already exists with this email",
  FAILED_TO_CREATE_USER: "Failed to create user",
  FAILED_TO_UPDATE_USER: "Failed to update user information",
  
  // Session errors
  FAILED_TO_CREATE_SESSION: "Failed to create session",
  FAILED_TO_GET_SESSION: "Failed to get session",
  
  // Password errors
  INVALID_PASSWORD: "Incorrect password",
  WEAK_PASSWORD: "Password must be stronger",
  USER_ALREADY_HAS_PASSWORD: "User already has a password",
  
  // Email errors
  INVALID_EMAIL: "Invalid email address",
  EMAIL_NOT_VERIFIED: "Your email has not been verified. Please check your inbox.",
  
  // Token errors
  INVALID_TOKEN: "Invalid or expired token",
  
  // Auth errors
  INVALID_CREDENTIALS: "Incorrect email or password",
  UNAUTHORIZED: "You are not authorized to perform this action",
  
  // Common error messages (fallbacks)
  "Invalid email or password": "Incorrect email or password",
  "User already exists": "An account already exists with this email",
  "Email not verified": "Your email has not been verified",
  "Invalid token": "Invalid or expired token",
};

export function getAuthErrorMessage(code?: string | ErrorCode, fallback?: string): string {
  if (!code) return fallback || "An error occurred";
  return errorMessages[code as string] || fallback || code;
}
