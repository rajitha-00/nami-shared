import { AppleDialogTransition } from './chunk-WIZSQCHM.js';
import { STORAGE_KEYS } from './chunk-3XYH3GIR.js';
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
  none: 0,
  xs: 2,
  // compact controls, micro-badges, tags (1.5 - 2px)
  sm: 3,
  // buttons, form fields, dropdowns (2 - 3px)
  md: 4,
  // menus, popovers, grouped containers (3 - 4px)
  lg: 4,
  // cards, primary surfaces (capped at 4px micro-corner)
  xl: 4,
  // dialogs, drawers, modals (strictly capped at 4px)
  pill: 2
  // deprecated pill - flattened to 2px micro-tag
};
var BORDERS = {
  hairline: "0.5px solid rgba(0, 0, 0, 0.08)",
  subtle: "1px solid rgba(0, 0, 0, 0.07)",
  darkHairline: "0.5px solid rgba(255, 255, 255, 0.08)",
  darkSubtle: "1px solid rgba(255, 255, 255, 0.09)"
};
var OUTLINES = {
  panel: {
    light: "1px solid rgba(226, 232, 240, 0.85)",
    dark: "1px solid rgba(255, 255, 255, 0.08)"
  },
  card: {
    light: "0.5px solid rgba(15, 23, 42, 0.08)",
    dark: "0.5px solid rgba(255, 255, 255, 0.08)"
  },
  focus: {
    light: "0 0 0 2px rgba(15, 23, 42, 0.08)",
    dark: "0 0 0 2px rgba(255, 255, 255, 0.12)"
  }
};
var SHADOWS = {
  card: "0 1px 2px rgba(15, 23, 42, 0.03)",
  raised: "0 4px 12px rgba(15, 23, 42, 0.06)",
  overlay: "0 12px 28px rgba(15, 23, 42, 0.14)"
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
        fontWeight: 600,
        fontSize: "0.8125rem",
        padding: "5px 12px",
        minHeight: 32,
        transition: "all 0.15s cubic-bezier(0.16, 1, 0.3, 1)"
      },
      containedPrimary: {
        backgroundColor: BRAND.primary,
        color: "#FFFFFF",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: BRAND.primaryDark,
          boxShadow: "none"
        }
      },
      outlinedPrimary: {
        borderRadius: `${RADII.sm}px`,
        borderWidth: "0.5px",
        borderColor: mode === "light" ? "rgba(0, 122, 255, 0.35)" : BRAND.primaryLight,
        fontWeight: 600,
        "&:hover": {
          borderWidth: "0.5px"
        }
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.sm}px`,
        margin: "2px 4px",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRight: 10,
        transition: "all 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        "&.Mui-selected": {
          backgroundColor: mode === "light" ? "rgba(0, 122, 255, 0.10)" : "rgba(0, 122, 255, 0.18)",
          color: mode === "light" ? BRAND.primaryDark : "#38BDF8",
          fontWeight: 600,
          boxShadow: "none",
          "& .MuiListItemIcon-root": {
            color: mode === "light" ? BRAND.primaryDark : "#38BDF8"
          },
          "&:hover": {
            backgroundColor: mode === "light" ? "rgba(0, 122, 255, 0.16)" : "rgba(0, 122, 255, 0.24)"
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
          fontSize: "0.8125rem",
          fontWeight: 500,
          boxShadow: "none",
          "& fieldset": {
            borderWidth: "0.5px",
            borderColor: mode === "light" ? "rgba(0, 0, 0, 0.10)" : "rgba(255, 255, 255, 0.10)"
          },
          "&:hover fieldset": {
            borderColor: mode === "light" ? "rgba(0, 0, 0, 0.20)" : "rgba(255, 255, 255, 0.24)"
          },
          "&.Mui-focused": {
            boxShadow: mode === "light" ? "0 0 0 2px rgba(15, 23, 42, 0.08)" : "0 0 0 2px rgba(255, 255, 255, 0.12)",
            "& fieldset": {
              borderColor: BRAND.primary,
              borderWidth: "1px"
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
        fontSize: "0.8125rem",
        fontWeight: 600
      }
    }
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: `${RADII.md}px`,
        boxShadow: SHADOWS.raised,
        border: `0.5px solid ${mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"}`,
        backdropFilter: "blur(16px)",
        padding: "4px 0"
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.xs}px`,
        margin: "1px 4px",
        padding: "5px 10px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        "&.Mui-selected": {
          backgroundColor: mode === "light" ? "rgba(0, 122, 255, 0.10)" : "rgba(0, 122, 255, 0.20)",
          color: BRAND.primary,
          fontWeight: 600
        }
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.lg}px`,
        border: `0.5px solid ${mode === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"}`,
        boxShadow: mode === "light" ? "0 1px 2px rgba(0, 0, 0, 0.03)" : "0 1px 2px rgba(0, 0, 0, 0.3)",
        backgroundImage: "none"
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: `${RADII.lg}px`
      },
      outlined: {
        borderRadius: `${RADII.lg}px`,
        borderColor: mode === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"
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
          backgroundColor: mode === "light" ? "rgba(0, 0, 0, 0.40)" : "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)"
        }
      },
      paper: {
        borderRadius: `${RADII.xl}px`,
        boxShadow: SHADOWS.overlay,
        border: `0.5px solid ${mode === "light" ? "rgba(15, 23, 42, 0.12)" : "rgba(255, 255, 255, 0.12)"}`,
        overflow: "hidden"
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: "12px 16px",
        fontSize: "0.95rem",
        fontWeight: 700,
        borderBottom: `0.5px solid ${mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"}`
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "14px 16px"
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "10px 16px",
        borderTop: `0.5px solid ${mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"}`,
        gap: 6
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.xs}px`,
        fontWeight: 600,
        fontSize: "0.72rem",
        height: 22
      }
    }
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: "0.78rem",
        borderBottom: `0.5px solid ${mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"}`
      },
      head: {
        paddingTop: 6,
        paddingBottom: 6,
        fontWeight: 700,
        backgroundColor: mode === "light" ? GREY[50] : GREY[800],
        color: mode === "light" ? GREY[600] : GREY[400],
        whiteSpace: "nowrap",
        borderBottom: `0.5px solid ${mode === "light" ? "rgba(0, 0, 0, 0.10)" : "rgba(255, 255, 255, 0.10)"}`,
        fontSize: "0.72rem",
        letterSpacing: "0.04em",
        textTransform: "uppercase"
      }
    }
  },
  MuiTooltip: {
    defaultProps: { arrow: true },
    styleOverrides: {
      tooltip: {
        borderRadius: "3px",
        fontSize: "0.72rem",
        fontWeight: 600,
        backgroundColor: mode === "light" ? "rgba(28, 28, 30, 0.94)" : "#1E293B",
        backdropFilter: "blur(10px)",
        border: "0.5px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        padding: "4px 8px"
      }
    }
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: `${RADII.sm}px`,
        fontWeight: 600,
        fontSize: "0.8125rem",
        border: "0.5px solid transparent"
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

export { BORDERS, BRAND, FONT_FAMILY, GREY, MOTION, OUTLINES, RADII, SEMANTIC, SHADOWS, SPACING_UNIT, ThemeModeProvider, createHotelOsTheme, useThemeMode };
//# sourceMappingURL=chunk-PLUOB72D.js.map
//# sourceMappingURL=chunk-PLUOB72D.js.map