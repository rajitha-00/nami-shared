// Apple iOS Human Interface Guidelines (HIG) Light Theme Tokens
// Single source of design tokens for all NamiOS applications (Stay OS, Dine OS, Super Admin, Nami Mobile)

export const BRAND = {
  primary: '#007AFF',        // Apple System Blue
  primaryLight: '#3395FF',
  primaryDark: '#0051A8',
  secondary: '#5856D6',      // Apple System Indigo
  secondaryLight: '#7A79E0',
  secondaryDark: '#403E99',
} as const;

export const GREY = {
  50: '#F2F2F7',   // iOS System Background Light
  100: '#E5E5EA',  // iOS System Fill / Border
  200: '#D1D1D6',  // iOS Separator
  300: '#C7C7CC',  // iOS Muted Border
  400: '#AEAEB2',  // iOS Secondary Gray
  500: '#8E8E93',  // iOS System Gray
  600: '#636366',  // iOS Dark Secondary Text
  700: '#3A3A3C',  // iOS Dark Gray
  800: '#2C2C2E',  // iOS Dark Paper Fill
  900: '#1C1C1E',  // iOS Primary Dark Text
} as const;

export const SEMANTIC = {
  success: { main: '#34C759', light: '#5DD37A', dark: '#248A3D' }, // Apple Green
  warning: { main: '#FF9500', light: '#FFAB33', dark: '#C27100' }, // Apple Orange
  error: { main: '#FF3B30', light: '#FF6259', dark: '#C42B24' },   // Apple Red
  info: { main: '#007AFF', light: '#3395FF', dark: '#0051A8' },    // Apple Blue
} as const;

export const SPACING_UNIT = 8;

export const RADII = {
  sm: 10,   // Pills, Chips, Badges
  md: 14,   // Buttons, Input Fields
  lg: 20,   // Apple Continuous Cards, Containers
  xl: 24,   // Modals, Drawers
} as const;

export const SHADOWS = {
  card: '0 4px 20px rgba(0, 0, 0, 0.04)',
  raised: '0 8px 30px rgba(0, 0, 0, 0.06)',
  overlay: '0 16px 40px rgba(0, 0, 0, 0.12)',
} as const;

/** San Francisco first, with Inter & Noto fallbacks for Sinhala, Tamil, and Chinese. */
export const FONT_FAMILY = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"SF Pro Display"',
  '"SF Pro Text"',
  'Inter',
  '"Noto Sans Sinhala"',
  '"Noto Sans Tamil"',
  '"Noto Sans SC"',
  '"Segoe UI"',
  'Roboto',
  'sans-serif',
].join(', ');
