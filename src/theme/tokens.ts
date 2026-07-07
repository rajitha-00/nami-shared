// TODO(figma): replace with exact brand tokens from the Hotel OS Figma file
// (https://www.figma.com/design/RVNBzAmmjTTjc6ZQFbW0aU — node 25-30) once the
// Figma MCP connection is authorized. Placeholder: professional indigo SaaS palette.

export const BRAND = {
  primary: '#4F46E5',
  primaryLight: '#6366F1',
  primaryDark: '#4338CA',
  secondary: '#0EA5E9',
  secondaryLight: '#38BDF8',
  secondaryDark: '#0284C7',
} as const;

export const GREY = {
  50: '#F8FAFC',
  100: '#F1F5F9',
  200: '#E2E8F0',
  300: '#CBD5E1',
  400: '#94A3B8',
  500: '#64748B',
  600: '#475569',
  700: '#334155',
  800: '#1E293B',
  900: '#0F172A',
} as const;

export const SEMANTIC = {
  success: { main: '#16A34A', light: '#4ADE80', dark: '#15803D' },
  warning: { main: '#D97706', light: '#FBBF24', dark: '#B45309' },
  error: { main: '#DC2626', light: '#F87171', dark: '#B91C1C' },
  info: { main: '#0284C7', light: '#38BDF8', dark: '#0369A1' },
} as const;

export const SPACING_UNIT = 8;

export const RADII = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
} as const;

export const SHADOWS = {
  card: '0 1px 2px rgba(15, 23, 42, 0.06)',
  raised: '0 4px 12px rgba(15, 23, 42, 0.08)',
  overlay: '0 12px 32px rgba(15, 23, 42, 0.16)',
} as const;

/** Inter first, with Noto fallbacks covering Sinhala, Tamil and Simplified Chinese. */
export const FONT_FAMILY = [
  'Inter',
  '"Noto Sans Sinhala"',
  '"Noto Sans Tamil"',
  '"Noto Sans SC"',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'sans-serif',
].join(', ');
