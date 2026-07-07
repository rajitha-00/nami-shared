export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** International phone: optional +, 7–15 digits, spaces/dashes/parens allowed. */
export const PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;

/** Min 8 chars, at least one uppercase, one lowercase, one digit. */
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
