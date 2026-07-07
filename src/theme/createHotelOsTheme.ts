import { createTheme, type Theme, type ThemeOptions } from '@mui/material/styles';
import './augmentation';
import { BRAND, FONT_FAMILY, GREY, RADII, SEMANTIC, SHADOWS, SPACING_UNIT } from './tokens';

export type ThemeMode = 'light' | 'dark';

const buildPalette = (mode: ThemeMode): ThemeOptions['palette'] => ({
  mode,
  primary: {
    main: mode === 'light' ? BRAND.primary : BRAND.primaryLight,
    light: BRAND.primaryLight,
    dark: BRAND.primaryDark,
  },
  secondary: {
    main: mode === 'light' ? BRAND.secondary : BRAND.secondaryLight,
    light: BRAND.secondaryLight,
    dark: BRAND.secondaryDark,
  },
  success: SEMANTIC.success,
  warning: SEMANTIC.warning,
  error: SEMANTIC.error,
  info: SEMANTIC.info,
  grey: GREY,
  neutral: {
    main: GREY[500],
    light: GREY[300],
    dark: GREY[700],
    contrastText: '#FFFFFF',
  },
  background:
    mode === 'light'
      ? { default: GREY[50], paper: '#FFFFFF' }
      : { default: GREY[900], paper: GREY[800] },
  text:
    mode === 'light'
      ? { primary: GREY[900], secondary: GREY[600] }
      : { primary: GREY[50], secondary: GREY[400] },
  divider: mode === 'light' ? GREY[200] : GREY[700],
});

const buildComponents = (mode: ThemeMode): ThemeOptions['components'] => ({
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: RADII.md,
        fontWeight: 600,
      },
    },
  },
  MuiTextField: {
    defaultProps: { size: 'small', variant: 'outlined' },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: RADII.lg,
        border: `1px solid ${mode === 'light' ? GREY[200] : GREY[700]}`,
        boxShadow: SHADOWS.card,
        backgroundImage: 'none',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: RADII.lg },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: RADII.sm, fontWeight: 500 },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: { paddingTop: SPACING_UNIT * 1.5, paddingBottom: SPACING_UNIT * 1.5 },
      head: {
        fontWeight: 600,
        backgroundColor: mode === 'light' ? GREY[50] : GREY[800],
        color: mode === 'light' ? GREY[600] : GREY[300],
        whiteSpace: 'nowrap',
      },
    },
  },
  MuiTooltip: {
    defaultProps: { arrow: true },
  },
});

const typography: ThemeOptions['typography'] = {
  fontFamily: FONT_FAMILY,
  h1: { fontSize: 32, fontWeight: 600, lineHeight: 1.25 },
  h2: { fontSize: 28, fontWeight: 600, lineHeight: 1.29 },
  h3: { fontSize: 24, fontWeight: 600, lineHeight: 1.33 },
  h4: { fontSize: 20, fontWeight: 600, lineHeight: 1.4 },
  h5: { fontSize: 18, fontWeight: 600, lineHeight: 1.44 },
  h6: { fontSize: 16, fontWeight: 600, lineHeight: 1.5 },
  subtitle1: { fontSize: 16, fontWeight: 500 },
  subtitle2: { fontSize: 14, fontWeight: 500 },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  button: { fontSize: 14, fontWeight: 600 },
  caption: { fontSize: 12 },
  overline: { fontSize: 12, fontWeight: 600, letterSpacing: '0.08em' },
};

/**
 * Builds the Hotel OS MUI theme for the given mode, deep-merging optional
 * per-app overrides. This is the single theming source for ALL Hotel OS apps.
 *
 * Apps without theme switching (e.g. Super Admin) call
 * `createHotelOsTheme('light')` directly and skip {@link ThemeModeProvider}.
 */
export function createHotelOsTheme(mode: ThemeMode, overrides?: ThemeOptions): Theme {
  return createTheme(
    {
      palette: buildPalette(mode),
      typography,
      shape: { borderRadius: RADII.md },
      spacing: SPACING_UNIT,
      components: buildComponents(mode),
      custom: {
        sidebarWidth: 260,
        topBarHeight: 64,
        cardShadow: SHADOWS.card,
        raisedShadow: SHADOWS.raised,
        overlayShadow: SHADOWS.overlay,
      },
    },
    overrides ?? {},
  );
}
