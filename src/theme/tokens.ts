// NamiOS visual-system tokens. Product accent colours can vary by application;
// geometry, typography and elevation must not.

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
  none: 0,
  xs: 2,    // compact controls, micro-badges, tags (1.5 - 2px)
  sm: 3,    // buttons, form fields, dropdowns (2 - 3px)
  md: 4,    // menus, popovers, grouped containers (3 - 4px)
  lg: 4,    // cards, primary surfaces (capped at 4px micro-corner)
  xl: 4,    // dialogs, drawers, modals (strictly capped at 4px)
  pill: 2,  // deprecated pill - flattened to 2px micro-tag
} as const;

export const BORDERS = {
  hairline: '0.5px solid rgba(0, 0, 0, 0.08)',
  subtle: '1px solid rgba(0, 0, 0, 0.07)',
  darkHairline: '0.5px solid rgba(255, 255, 255, 0.08)',
  darkSubtle: '1px solid rgba(255, 255, 255, 0.09)',
} as const;

export const OUTLINES = {
  panel: {
    light: '1px solid rgba(226, 232, 240, 0.85)',
    dark: '1px solid rgba(255, 255, 255, 0.08)',
  },
  card: {
    light: '0.5px solid rgba(15, 23, 42, 0.08)',
    dark: '0.5px solid rgba(255, 255, 255, 0.08)',
  },
  focus: {
    light: '0 0 0 2px rgba(15, 23, 42, 0.08)',
    dark: '0 0 0 2px rgba(255, 255, 255, 0.12)',
  },
} as const;

export const SHADOWS = {
  card: '0 1px 2px rgba(15, 23, 42, 0.03)',
  raised: '0 4px 12px rgba(15, 23, 42, 0.06)',
  overlay: '0 12px 28px rgba(15, 23, 42, 0.14)',
} as const;

export const MOTION = {
  micro: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  surface: '200ms cubic-bezier(0.16, 1, 0.3, 1)',
  overlay: '240ms cubic-bezier(0.16, 1, 0.3, 1)',
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
