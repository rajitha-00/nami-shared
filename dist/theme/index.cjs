'use strict';

var styles = require('@mui/material/styles');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/theme/tokens.ts
var BRAND = {
  primary: "#4F46E5",
  primaryLight: "#6366F1",
  primaryDark: "#4338CA",
  secondary: "#0EA5E9",
  secondaryLight: "#38BDF8",
  secondaryDark: "#0284C7"
};
var GREY = {
  50: "#F8FAFC",
  100: "#F1F5F9",
  200: "#E2E8F0",
  300: "#CBD5E1",
  400: "#94A3B8",
  500: "#64748B",
  600: "#475569",
  700: "#334155",
  800: "#1E293B",
  900: "#0F172A"
};
var SEMANTIC = {
  success: { main: "#16A34A", light: "#4ADE80", dark: "#15803D" },
  warning: { main: "#D97706", light: "#FBBF24", dark: "#B45309" },
  error: { main: "#DC2626", light: "#F87171", dark: "#B91C1C" },
  info: { main: "#0284C7", light: "#38BDF8", dark: "#0369A1" }
};
var SPACING_UNIT = 8;
var RADII = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16
};
var SHADOWS = {
  card: "0 1px 2px rgba(15, 23, 42, 0.06)",
  raised: "0 4px 12px rgba(15, 23, 42, 0.08)",
  overlay: "0 12px 32px rgba(15, 23, 42, 0.16)"
};
var FONT_FAMILY = [
  "Inter",
  '"Noto Sans Sinhala"',
  '"Noto Sans Tamil"',
  '"Noto Sans SC"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  "sans-serif"
].join(", ");
var buildPalette = (mode) => ({
  mode,
  primary: {
    main: mode === "light" ? BRAND.primary : BRAND.primaryLight,
    light: BRAND.primaryLight,
    dark: BRAND.primaryDark
  },
  secondary: {
    main: mode === "light" ? BRAND.secondary : BRAND.secondaryLight,
    light: BRAND.secondaryLight,
    dark: BRAND.secondaryDark
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
    contrastText: "#FFFFFF"
  },
  background: mode === "light" ? { default: GREY[50], paper: "#FFFFFF" } : { default: GREY[900], paper: GREY[800] },
  text: mode === "light" ? { primary: GREY[900], secondary: GREY[600] } : { primary: GREY[50], secondary: GREY[400] },
  divider: mode === "light" ? GREY[200] : GREY[700]
});
var buildComponents = (mode) => ({
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: RADII.md,
        fontWeight: 600
      }
    }
  },
  MuiTextField: {
    defaultProps: { size: "small", variant: "outlined" }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: RADII.lg,
        border: `1px solid ${mode === "light" ? GREY[200] : GREY[700]}`,
        boxShadow: SHADOWS.card,
        backgroundImage: "none"
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: RADII.lg }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: { borderRadius: RADII.sm, fontWeight: 500 }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: { paddingTop: SPACING_UNIT * 1.5, paddingBottom: SPACING_UNIT * 1.5 },
      head: {
        fontWeight: 600,
        backgroundColor: mode === "light" ? GREY[50] : GREY[800],
        color: mode === "light" ? GREY[600] : GREY[300],
        whiteSpace: "nowrap"
      }
    }
  },
  MuiTooltip: {
    defaultProps: { arrow: true }
  }
});
var typography = {
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
  overline: { fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }
};
function createHotelOsTheme(mode, overrides) {
  return styles.createTheme(
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
        overlayShadow: SHADOWS.overlay
      }
    },
    overrides ?? {}
  );
}

// src/constants/storage-keys.ts
var STORAGE_KEYS = {
  THEME_MODE: "hotelos.themeMode"};
var ThemeModeContext = react.createContext(null);
var readInitialMode = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEYS.THEME_MODE);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
function ThemeModeProvider({ children, overrides }) {
  const [mode, setModeState] = react.useState(readInitialMode);
  const setMode = react.useCallback((next) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
  }, []);
  const toggleMode = react.useCallback(() => {
    setModeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
      return next;
    });
  }, []);
  const value = react.useMemo(() => ({ mode, toggleMode, setMode }), [mode, toggleMode, setMode]);
  const theme = react.useMemo(
    () => createHotelOsTheme(mode, typeof overrides === "function" ? overrides(mode) : overrides),
    [mode, overrides]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeModeContext.Provider, { value, children: /* @__PURE__ */ jsxRuntime.jsx(styles.ThemeProvider, { theme, children }) });
}
function useThemeMode() {
  const ctx = react.useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return ctx;
}

exports.BRAND = BRAND;
exports.FONT_FAMILY = FONT_FAMILY;
exports.GREY = GREY;
exports.RADII = RADII;
exports.SEMANTIC = SEMANTIC;
exports.SHADOWS = SHADOWS;
exports.SPACING_UNIT = SPACING_UNIT;
exports.ThemeModeProvider = ThemeModeProvider;
exports.createHotelOsTheme = createHotelOsTheme;
exports.useThemeMode = useThemeMode;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map