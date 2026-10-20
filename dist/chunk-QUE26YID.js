import { AppleDialogTransition } from './chunk-APBSDT6L.js';
import { STORAGE_KEYS } from './chunk-UCW2MS4Z.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/theme/tokens.ts
var BRAND = {
  primary: "#007AFF",
  // Apple System Blue
  primaryLight: "#3395FF",
  primaryDark: "#0051A8",
  secondary: "#5856D6",
  // Apple System Indigo
  secondaryLight: "#7A79E0",
  secondaryDark: "#403E99"
};
var GREY = {
  50: "#F2F2F7",
  // iOS System Background Light
  100: "#E5E5EA",
  // iOS System Fill / Border
  200: "#D1D1D6",
  // iOS Separator
  300: "#C7C7CC",
  // iOS Muted Border
  400: "#AEAEB2",
  // iOS Secondary Gray
  500: "#8E8E93",
  // iOS System Gray
  600: "#636366",
  // iOS Dark Secondary Text
  700: "#3A3A3C",
  // iOS Dark Gray
  800: "#2C2C2E",
  // iOS Dark Paper Fill
  900: "#1C1C1E"
  // iOS Primary Dark Text
};
var SEMANTIC = {
  success: { main: "#34C759", light: "#5DD37A", dark: "#248A3D" },
  // Apple Green
  warning: { main: "#FF9500", light: "#FFAB33", dark: "#C27100" },
  // Apple Orange
  error: { main: "#FF3B30", light: "#FF6259", dark: "#C42B24" },
  // Apple Red
  info: { main: "#007AFF", light: "#3395FF", dark: "#0051A8" }
  // Apple Blue
};
var SPACING_UNIT = 8;
var RADII = {
  xs: 4,
  // compact controls and inner elements
  sm: 8,
  // buttons, fields and menu rows
  md: 12,
  // grouped controls and table containers
  lg: 16,
  // cards and primary surfaces
  xl: 24,
  // dialogs and drawers
  pill: 999
};
var SHADOWS = {
  card: "0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.03)",
  raised: "0 8px 24px rgba(15, 23, 42, 0.10)",
  overlay: "0 20px 48px rgba(15, 23, 42, 0.18)"
};
var MOTION = {
  micro: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
  surface: "200ms cubic-bezier(0.16, 1, 0.3, 1)",
  overlay: "240ms cubic-bezier(0.16, 1, 0.3, 1)"
};
var FONT_FAMILY = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"SF Pro Display"',
  '"SF Pro Text"',
  "Inter",
  '"Noto Sans Sinhala"',
  '"Noto Sans Tamil"',
  '"Noto Sans SC"',
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
  background: mode === "light" ? { default: GREY[50], paper: "#FFFFFF" } : { default: "#0F172A", paper: GREY[800] },
  text: mode === "light" ? { primary: GREY[900], secondary: GREY[500] } : { primary: "#F8FAFC", secondary: "#94A3B8" },
  divider: mode === "light" ? "rgba(229, 229, 234, 0.8)" : "rgba(51, 65, 85, 0.8)"
});
var buildComponents = (mode) => ({
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: `${RADII.sm}px`,
        fontWeight: 700,
        fontSize: "0.875rem",
        padding: "9px 20px",
        transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)"
      },
      containedPrimary: {
        backgroundColor: BRAND.primary,
        color: "#FFFFFF",
        boxShadow: mode === "light" ? "0 4px 14px rgba(0, 122, 255, 0.25)" : "none",
        "&:hover": {
          backgroundColor: BRAND.primaryDark,
          boxShadow: mode === "light" ? "0 6px 18px rgba(0, 122, 255, 0.35)" : "none"
        }
      },
      outlinedPrimary: {
        borderRadius: `${RADII.sm}px`,
        borderColor: mode === "light" ? "rgba(0, 122, 255, 0.4)" : BRAND.primaryLight,
        fontWeight: 700
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.md}px`,
        margin: "3px 8px",
        paddingTop: 9,
        paddingBottom: 9,
        transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "&.Mui-selected": {
          backgroundColor: mode === "light" ? BRAND.primary : "rgba(0, 122, 255, 0.2)",
          color: mode === "light" ? "#FFFFFF" : "#38BDF8",
          fontWeight: 700,
          boxShadow: mode === "light" ? "0 4px 14px rgba(0, 122, 255, 0.25)" : "none",
          "& .MuiListItemIcon-root": {
            color: mode === "light" ? "#FFFFFF" : "#38BDF8"
          },
          "&:hover": {
            backgroundColor: mode === "light" ? BRAND.primaryDark : "rgba(0, 122, 255, 0.3)"
          }
        }
      }
    }
  },
  MuiTextField: {
    defaultProps: { size: "small", variant: "outlined" },
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: `${RADII.sm}px`,
          backgroundColor: mode === "light" ? "#FFFFFF" : GREY[800],
          fontSize: "0.875rem",
          fontWeight: 500,
          boxShadow: mode === "light" ? "0 2px 8px rgba(0,0,0,0.02)" : "none",
          "& fieldset": {
            borderColor: mode === "light" ? "rgba(229, 229, 234, 0.9)" : "rgba(51, 65, 85, 0.8)"
          },
          "&:hover fieldset": {
            borderColor: mode === "light" ? GREY[300] : GREY[600]
          },
          "&.Mui-focused": {
            boxShadow: mode === "light" ? "0 0 0 3px rgba(0, 122, 255, 0.18)" : "none",
            "& fieldset": {
              borderColor: BRAND.primary,
              borderWidth: "1.5px"
            }
          }
        }
      }
    }
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.sm}px`,
        backgroundColor: mode === "light" ? "#FFFFFF" : GREY[800],
        fontSize: "0.875rem",
        fontWeight: 600
      }
    }
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: `${RADII.md}px`,
        boxShadow: SHADOWS.raised,
        border: `1px solid ${mode === "light" ? "rgba(229, 229, 234, 0.9)" : "rgba(51, 65, 85, 0.8)"}`,
        backdropFilter: "blur(16px)",
        padding: "6px 0"
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.sm}px`,
        margin: "2px 6px",
        fontSize: "0.875rem",
        fontWeight: 600,
        "&.Mui-selected": {
          backgroundColor: mode === "light" ? "rgba(0, 122, 255, 0.12)" : "rgba(0, 122, 255, 0.25)",
          color: BRAND.primary,
          fontWeight: 700
        }
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.lg}px`,
        border: `1px solid ${mode === "light" ? "rgba(229, 229, 234, 0.85)" : "rgba(51, 65, 85, 0.8)"}`,
        boxShadow: mode === "light" ? "0 4px 20px rgba(0, 0, 0, 0.03)" : "0 4px 20px rgba(0,0,0,0.3)",
        backgroundImage: "none"
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: `${RADII.lg}px`
      }
    }
  },
  MuiDialog: {
    defaultProps: {
      TransitionComponent: AppleDialogTransition
    },
    styleOverrides: {
      root: {
        "& .MuiBackdrop-root": {
          backgroundColor: mode === "light" ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)"
        }
      },
      paper: {
        borderRadius: `${RADII.xl}px`,
        boxShadow: SHADOWS.overlay,
        border: `1px solid ${mode === "light" ? "rgba(229, 229, 234, 0.9)" : "rgba(51, 65, 85, 0.8)"}`,
        overflow: "hidden"
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.sm}px`,
        fontWeight: 700,
        fontSize: "0.75rem"
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        paddingTop: SPACING_UNIT * 0.75,
        // 6px padding for high-density rows
        paddingBottom: SPACING_UNIT * 0.75,
        // 6px padding for high-density rows
        paddingLeft: SPACING_UNIT * 1.5,
        // 12px horizontal padding
        paddingRight: SPACING_UNIT * 1.5,
        fontSize: "0.8125rem"
        // 13px clean compact text
      },
      head: {
        paddingTop: SPACING_UNIT * 1,
        // 8px header vertical padding
        paddingBottom: SPACING_UNIT * 1,
        fontWeight: 700,
        backgroundColor: mode === "light" ? GREY[50] : GREY[800],
        color: mode === "light" ? GREY[500] : GREY[400],
        whiteSpace: "nowrap",
        borderBottom: `1px solid ${mode === "light" ? GREY[100] : GREY[700]}`,
        fontSize: "0.75rem",
        letterSpacing: "0.04em"
      }
    }
  },
  MuiTooltip: {
    defaultProps: { arrow: true },
    styleOverrides: {
      tooltip: {
        borderRadius: "10px",
        fontSize: "0.75rem",
        fontWeight: 600,
        backgroundColor: mode === "light" ? "rgba(28, 28, 30, 0.92)" : "#1E293B",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        padding: "6px 10px"
      }
    }
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.md}px`,
        fontWeight: 600,
        fontSize: "0.85rem"
      }
    }
  }
});
var typography = {
  fontFamily: FONT_FAMILY,
  h1: { fontSize: 34, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.5px" },
  h2: { fontSize: 28, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.4px" },
  h3: { fontSize: 24, fontWeight: 800, lineHeight: 1.3, letterSpacing: "-0.3px" },
  h4: { fontSize: 20, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.2px" },
  h5: { fontSize: 18, fontWeight: 700, lineHeight: 1.4 },
  h6: { fontSize: 16, fontWeight: 700, lineHeight: 1.45 },
  subtitle1: { fontSize: 16, fontWeight: 600 },
  subtitle2: { fontSize: 14, fontWeight: 600 },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  button: { fontSize: 14, fontWeight: 700 },
  caption: { fontSize: 12, fontWeight: 500 },
  overline: { fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }
};
function createHotelOsTheme(mode, overrides) {
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
        overlayShadow: SHADOWS.overlay
      }
    },
    overrides ?? {}
  );
}
var ThemeModeContext = createContext(null);
var readInitialMode = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEYS.THEME_MODE);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
var ThemeModeProvider = ({ children, overrides }) => {
  const [mode, setModeState] = useState(readInitialMode);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode);
      if (mode === "dark") {
        document.documentElement.classList.add("mui-dark");
      } else {
        document.documentElement.classList.remove("mui-dark");
      }
    }
  }, [mode]);
  const setMode = useCallback((next) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
  }, []);
  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
      return next;
    });
  }, []);
  const value = useMemo(() => ({ mode, toggleMode, setMode }), [mode, toggleMode, setMode]);
  const theme = useMemo(
    () => createHotelOsTheme(mode, typeof overrides === "function" ? overrides(mode) : overrides),
    [mode, overrides]
  );
  return /* @__PURE__ */ jsx(ThemeModeContext.Provider, { value, children: /* @__PURE__ */ jsx(ThemeProvider, { theme, children }) });
};
var useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return ctx;
};

export { BRAND, FONT_FAMILY, GREY, MOTION, RADII, SEMANTIC, SHADOWS, SPACING_UNIT, ThemeModeProvider, createHotelOsTheme, useThemeMode };
//# sourceMappingURL=chunk-QUE26YID.js.map
//# sourceMappingURL=chunk-QUE26YID.js.map