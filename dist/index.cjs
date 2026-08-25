'use strict';

var styles = require('@mui/material/styles');
var react = require('react');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');
var Button5 = require('@mui/material/Button');
var Dialog = require('@mui/material/Dialog');
var Popover = require('@mui/material/Popover');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogContentText = require('@mui/material/DialogContentText');
var DialogTitle = require('@mui/material/DialogTitle');
var Box4 = require('@mui/material/Box');
var IconButton8 = require('@mui/material/IconButton');
var CloseIcon5 = require('@mui/icons-material/Close');
var reactI18next = require('react-i18next');
var useMediaQuery = require('@mui/material/useMediaQuery');
var Alert = require('@mui/material/Alert');
var Snackbar = require('@mui/material/Snackbar');
var Typography4 = require('@mui/material/Typography');
var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');
var InboxOutlinedIcon = require('@mui/icons-material/InboxOutlined');
var ErrorOutlineIcon = require('@mui/icons-material/ErrorOutline');
var RefreshIcon = require('@mui/icons-material/Refresh');
var Chip5 = require('@mui/material/Chip');
var Checkbox = require('@mui/material/Checkbox');
var Paper = require('@mui/material/Paper');
var Skeleton = require('@mui/material/Skeleton');
var Table = require('@mui/material/Table');
var TableBody = require('@mui/material/TableBody');
var TableCell = require('@mui/material/TableCell');
var TableContainer = require('@mui/material/TableContainer');
var TableHead = require('@mui/material/TableHead');
var TablePagination = require('@mui/material/TablePagination');
var TableRow = require('@mui/material/TableRow');
var TableSortLabel = require('@mui/material/TableSortLabel');
var TrendingDownIcon = require('@mui/icons-material/TrendingDown');
var TrendingFlatIcon = require('@mui/icons-material/TrendingFlat');
var TrendingUpIcon = require('@mui/icons-material/TrendingUp');
var Card = require('@mui/material/Card');
var CardContent = require('@mui/material/CardContent');
var CardHeader = require('@mui/material/CardHeader');
var ClearIcon = require('@mui/icons-material/Clear');
var SearchIcon = require('@mui/icons-material/Search');
var InputAdornment = require('@mui/material/InputAdornment');
var TextField4 = require('@mui/material/TextField');
var MenuItem = require('@mui/material/MenuItem');
var VisibilityIcon = require('@mui/icons-material/Visibility');
var VisibilityOffIcon = require('@mui/icons-material/VisibilityOff');
var FormControlLabel = require('@mui/material/FormControlLabel');
var Switch = require('@mui/material/Switch');
var CheckIcon = require('@mui/icons-material/Check');
var TranslateIcon = require('@mui/icons-material/Translate');
var ListItemIcon = require('@mui/material/ListItemIcon');
var ListItemText = require('@mui/material/ListItemText');
var Menu = require('@mui/material/Menu');
var MenuIcon = require('@mui/icons-material/Menu');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');
var Stack3 = require('@mui/material/Stack');
var Step = require('@mui/material/Step');
var StepLabel = require('@mui/material/StepLabel');
var Stepper = require('@mui/material/Stepper');
var CalendarMonthOutlinedIcon = require('@mui/icons-material/CalendarMonthOutlined');
var ExpandLessIcon = require('@mui/icons-material/ExpandLess');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var Collapse = require('@mui/material/Collapse');
var Drawer = require('@mui/material/Drawer');
var List = require('@mui/material/List');
var ListItemButton = require('@mui/material/ListItemButton');
var NavigateNextIcon = require('@mui/icons-material/NavigateNext');
var Breadcrumbs = require('@mui/material/Breadcrumbs');
var Link = require('@mui/material/Link');
var HotelIcon = require('@mui/icons-material/Hotel');
var RestaurantIcon = require('@mui/icons-material/Restaurant');
var AdminPanelSettingsIcon = require('@mui/icons-material/AdminPanelSettings');
var PublicIcon = require('@mui/icons-material/Public');
var AutoAwesomeIcon = require('@mui/icons-material/AutoAwesome');
var PaymentsIcon = require('@mui/icons-material/Payments');
var PeopleIcon = require('@mui/icons-material/People');
var InventoryIcon = require('@mui/icons-material/Inventory');
var Tooltip = require('@mui/material/Tooltip');
var reactDom = require('react-dom');
var InputBase = require('@mui/material/InputBase');
var CardMedia = require('@mui/material/CardMedia');
var Avatar = require('@mui/material/Avatar');
var i18n = require('i18next');
var LanguageDetector = require('i18next-browser-languagedetector');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Button5__default = /*#__PURE__*/_interopDefault(Button5);
var Dialog__default = /*#__PURE__*/_interopDefault(Dialog);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefault(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var Box4__default = /*#__PURE__*/_interopDefault(Box4);
var IconButton8__default = /*#__PURE__*/_interopDefault(IconButton8);
var CloseIcon5__default = /*#__PURE__*/_interopDefault(CloseIcon5);
var useMediaQuery__default = /*#__PURE__*/_interopDefault(useMediaQuery);
var Alert__default = /*#__PURE__*/_interopDefault(Alert);
var Snackbar__default = /*#__PURE__*/_interopDefault(Snackbar);
var Typography4__default = /*#__PURE__*/_interopDefault(Typography4);
var InboxOutlinedIcon__default = /*#__PURE__*/_interopDefault(InboxOutlinedIcon);
var ErrorOutlineIcon__default = /*#__PURE__*/_interopDefault(ErrorOutlineIcon);
var RefreshIcon__default = /*#__PURE__*/_interopDefault(RefreshIcon);
var Chip5__default = /*#__PURE__*/_interopDefault(Chip5);
var Checkbox__default = /*#__PURE__*/_interopDefault(Checkbox);
var Paper__default = /*#__PURE__*/_interopDefault(Paper);
var Skeleton__default = /*#__PURE__*/_interopDefault(Skeleton);
var Table__default = /*#__PURE__*/_interopDefault(Table);
var TableBody__default = /*#__PURE__*/_interopDefault(TableBody);
var TableCell__default = /*#__PURE__*/_interopDefault(TableCell);
var TableContainer__default = /*#__PURE__*/_interopDefault(TableContainer);
var TableHead__default = /*#__PURE__*/_interopDefault(TableHead);
var TablePagination__default = /*#__PURE__*/_interopDefault(TablePagination);
var TableRow__default = /*#__PURE__*/_interopDefault(TableRow);
var TableSortLabel__default = /*#__PURE__*/_interopDefault(TableSortLabel);
var TrendingDownIcon__default = /*#__PURE__*/_interopDefault(TrendingDownIcon);
var TrendingFlatIcon__default = /*#__PURE__*/_interopDefault(TrendingFlatIcon);
var TrendingUpIcon__default = /*#__PURE__*/_interopDefault(TrendingUpIcon);
var Card__default = /*#__PURE__*/_interopDefault(Card);
var CardContent__default = /*#__PURE__*/_interopDefault(CardContent);
var CardHeader__default = /*#__PURE__*/_interopDefault(CardHeader);
var ClearIcon__default = /*#__PURE__*/_interopDefault(ClearIcon);
var SearchIcon__default = /*#__PURE__*/_interopDefault(SearchIcon);
var InputAdornment__default = /*#__PURE__*/_interopDefault(InputAdornment);
var TextField4__default = /*#__PURE__*/_interopDefault(TextField4);
var MenuItem__default = /*#__PURE__*/_interopDefault(MenuItem);
var VisibilityIcon__default = /*#__PURE__*/_interopDefault(VisibilityIcon);
var VisibilityOffIcon__default = /*#__PURE__*/_interopDefault(VisibilityOffIcon);
var FormControlLabel__default = /*#__PURE__*/_interopDefault(FormControlLabel);
var Switch__default = /*#__PURE__*/_interopDefault(Switch);
var CheckIcon__default = /*#__PURE__*/_interopDefault(CheckIcon);
var TranslateIcon__default = /*#__PURE__*/_interopDefault(TranslateIcon);
var ListItemIcon__default = /*#__PURE__*/_interopDefault(ListItemIcon);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);
var Menu__default = /*#__PURE__*/_interopDefault(Menu);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var Stack3__default = /*#__PURE__*/_interopDefault(Stack3);
var Step__default = /*#__PURE__*/_interopDefault(Step);
var StepLabel__default = /*#__PURE__*/_interopDefault(StepLabel);
var Stepper__default = /*#__PURE__*/_interopDefault(Stepper);
var CalendarMonthOutlinedIcon__default = /*#__PURE__*/_interopDefault(CalendarMonthOutlinedIcon);
var ExpandLessIcon__default = /*#__PURE__*/_interopDefault(ExpandLessIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefault(ExpandMoreIcon);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
var List__default = /*#__PURE__*/_interopDefault(List);
var ListItemButton__default = /*#__PURE__*/_interopDefault(ListItemButton);
var NavigateNextIcon__default = /*#__PURE__*/_interopDefault(NavigateNextIcon);
var Breadcrumbs__default = /*#__PURE__*/_interopDefault(Breadcrumbs);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var HotelIcon__default = /*#__PURE__*/_interopDefault(HotelIcon);
var RestaurantIcon__default = /*#__PURE__*/_interopDefault(RestaurantIcon);
var AdminPanelSettingsIcon__default = /*#__PURE__*/_interopDefault(AdminPanelSettingsIcon);
var PublicIcon__default = /*#__PURE__*/_interopDefault(PublicIcon);
var AutoAwesomeIcon__default = /*#__PURE__*/_interopDefault(AutoAwesomeIcon);
var PaymentsIcon__default = /*#__PURE__*/_interopDefault(PaymentsIcon);
var PeopleIcon__default = /*#__PURE__*/_interopDefault(PeopleIcon);
var InventoryIcon__default = /*#__PURE__*/_interopDefault(InventoryIcon);
var Tooltip__default = /*#__PURE__*/_interopDefault(Tooltip);
var InputBase__default = /*#__PURE__*/_interopDefault(InputBase);
var CardMedia__default = /*#__PURE__*/_interopDefault(CardMedia);
var Avatar__default = /*#__PURE__*/_interopDefault(Avatar);
var i18n__default = /*#__PURE__*/_interopDefault(i18n);
var LanguageDetector__default = /*#__PURE__*/_interopDefault(LanguageDetector);

// src/types/entities.ts
var UserRole = {
  SUPER_ADMIN: "SUPER_ADMIN",
  HOTEL_ADMIN: "HOTEL_ADMIN",
  MANAGER: "MANAGER",
  FRONT_DESK: "FRONT_DESK",
  HOUSEKEEPING: "HOUSEKEEPING",
  GUEST: "GUEST"
};
var Status = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED"
};
var SubscriptionPlanTier = {
  FREE: "FREE",
  STARTER: "STARTER",
  PROFESSIONAL: "PROFESSIONAL",
  ENTERPRISE: "ENTERPRISE"
};
var BillingCycle = {
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY"
};

// src/types/ui.ts
var DialogSize = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl"
};
var LoadState = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

// src/constants/app.ts
var DATE_FORMATS = {
  DATE: { year: "numeric", month: "short", day: "numeric" },
  DATE_TIME: { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" },
  TIME: { hour: "2-digit", minute: "2-digit" },
  MONTH_YEAR: { year: "numeric", month: "short" }
};
var DEBOUNCE_MS = 300;
var DEFAULT_PAGE_SIZE = 15;
var PAGE_SIZE_OPTIONS = [15, 25, 50, 100];
var SNACKBAR_AUTOHIDE_MS = 4e3;

// src/constants/regex.ts
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;
var PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// src/constants/storage-keys.ts
var STORAGE_KEYS = {
  AUTH_TOKEN: "hotelos.authToken",
  LOCALE: "hotelos.locale",
  THEME_MODE: "hotelos.themeMode",
  SIDEBAR_STATE: "hotelos.sidebarState",
  LIST_VIEW_MODE: "hotelos.listViewMode"
};

// src/constants/status-colors.ts
var STATUS_COLORS = {
  [Status.ACTIVE]: "success",
  [Status.INACTIVE]: "default",
  [Status.PENDING]: "info",
  [Status.SUSPENDED]: "warning",
  [Status.EXPIRED]: "error",
  [Status.CANCELLED]: "error"
};

// src/constants/routes.ts
var SHARED_ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  NOT_FOUND: "*"
};

// src/constants/locales.ts
var SUPPORTED_LOCALES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "si", label: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD", dir: "ltr" },
  { code: "ta", label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", dir: "ltr" },
  { code: "es", label: "Espa\xF1ol", dir: "ltr" },
  { code: "zh", label: "\u4E2D\u6587", dir: "ltr" },
  { code: "fr", label: "Fran\xE7ais", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" }
];
var DEFAULT_LOCALE = "en";

// src/utils/object.ts
function safeJsonParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return void 0;
  }
}
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}
function omit(obj, keys) {
  const excluded = new Set(keys);
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!excluded.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function isDefined(value) {
  return value !== null && value !== void 0;
}
function assertNever(x) {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}

// src/utils/array.ts
function groupBy(items, getKey) {
  const result = {};
  for (const item of items) {
    const key = getKey(item);
    (result[key] ?? (result[key] = [])).push(item);
  }
  return result;
}
function sortBy(items, getValue, dir = "asc") {
  const sorted = [...items].sort((a, b) => {
    const va = getValue(a);
    const vb = getValue(b);
    if (typeof va === "string" && typeof vb === "string") {
      return va.localeCompare(vb);
    }
    return Number(va) - Number(vb);
  });
  return dir === "desc" ? sorted.reverse() : sorted;
}
function uniqueBy(items, getKey) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const item of items) {
    const key = getKey(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

// src/utils/string.ts
function truncate(value, maxLength, suffix = "\u2026") {
  if (value.length <= maxLength) return value;
  return value.slice(0, Math.max(0, maxLength - suffix.length)).trimEnd() + suffix;
}
function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const only = parts[0] ?? "";
    return only.slice(0, 2).toUpperCase();
  }
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts[parts.length - 1]?.charAt(0) ?? "";
  return (first + last).toUpperCase();
}
var BYTE_UNITS = ["B", "KB", "MB", "GB", "TB"];
function formatBytes(bytes, decimals = 1) {
  if (bytes <= 0) return "0 B";
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), BYTE_UNITS.length - 1);
  const value = bytes / 1024 ** exponent;
  const unit = BYTE_UNITS[exponent] ?? "B";
  return `${value.toFixed(exponent === 0 ? 0 : decimals)} ${unit}`;
}

// src/utils/misc.ts
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function buildQueryString(params) {
  const search = new URLSearchParams();
  if (params.page !== void 0) search.set("page", String(params.page));
  if (params.pageSize !== void 0) search.set("pageSize", String(params.pageSize));
  if (params.search) search.set("search", params.search);
  if (params.sortBy) search.set("sortBy", params.sortBy);
  if (params.sortDir) search.set("sortDir", params.sortDir);
  if (params.filters) {
    for (const [key, value] of Object.entries(params.filters)) {
      const values = Array.isArray(value) ? value : [value];
      for (const v of values) {
        search.append(key, v);
      }
    }
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

// src/utils/date.ts
var DAY_MS = 24 * 60 * 60 * 1e3;
function isoDate(value) {
  const iso = new Date(value).toISOString();
  return iso.slice(0, 10);
}
function todayIso() {
  const today = /* @__PURE__ */ new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function addDays(date, n) {
  return isoDate((/* @__PURE__ */ new Date(`${isoDate(date)}T00:00:00Z`)).getTime() + n * DAY_MS);
}
function differenceInDays(a, b) {
  const isoDayPattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDayPattern.test(a) || !isoDayPattern.test(b)) return 0;
  const start = (/* @__PURE__ */ new Date(`${a}T00:00:00Z`)).getTime();
  const end = (/* @__PURE__ */ new Date(`${b}T00:00:00Z`)).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 0;
  return Math.round((end - start) / DAY_MS);
}
function dateRangeDays(start, count) {
  return Array.from({ length: count }, (_, i) => addDays(start, i));
}

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
  sm: 10,
  // Pills, Chips, Badges
  md: 14,
  // Buttons, Input Fields
  lg: 20,
  // Apple Continuous Cards, Containers
  xl: 24
  // Modals, Drawers
};
var SHADOWS = {
  card: "0 4px 20px rgba(0, 0, 0, 0.04)",
  raised: "0 8px 30px rgba(0, 0, 0, 0.06)",
  overlay: "0 16px 40px rgba(0, 0, 0, 0.12)"
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
var AppleDialogTransition = react.forwardRef(
  function AppleDialogTransition2(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, ...other } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.AnimatePresence,
      {
        mode: "wait",
        onExitComplete: () => {
          if (onExited) {
            onExited(null);
          }
        },
        children: inProp ? /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            ref,
            initial: {
              opacity: 0,
              filter: "blur(10px)",
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500
            },
            animate: {
              opacity: 1,
              filter: "blur(0px)",
              rotateX: 0,
              rotateY: 0,
              z: 0,
              transition: {
                duration: 0.45,
                ease: [0.17, 0.67, 0.51, 1],
                opacity: {
                  duration: 0.35,
                  ease: "easeOut"
                }
              }
            },
            exit: {
              opacity: 0,
              filter: "blur(10px)",
              rotateY: 25,
              rotateX: 5,
              z: -100,
              transformPerspective: 500,
              transition: {
                duration: 0.25,
                ease: [0.67, 0.17, 0.62, 0.64]
              }
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              transformPerspective: 500,
              transformStyle: "preserve-3d"
            },
            onAnimationStart: () => {
              if (inProp) {
                onEnter?.(null, true);
              } else {
                onExit?.(null);
              }
            },
            onAnimationComplete: () => {
              if (inProp) {
                onEntered?.(null, true);
              }
            },
            ...other,
            children
          }
        ) : null
      }
    );
  }
);

// src/theme/createHotelOsTheme.ts
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
        borderRadius: "14px",
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
        borderRadius: "14px",
        borderColor: mode === "light" ? "rgba(0, 122, 255, 0.4)" : BRAND.primaryLight,
        fontWeight: 700
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
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
          borderRadius: "14px",
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
        borderRadius: "14px",
        backgroundColor: mode === "light" ? "#FFFFFF" : GREY[800],
        fontSize: "0.875rem",
        fontWeight: 600
      }
    }
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: "16px",
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
        borderRadius: "10px",
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
        borderRadius: "20px",
        border: `1px solid ${mode === "light" ? "rgba(229, 229, 234, 0.85)" : "rgba(51, 65, 85, 0.8)"}`,
        boxShadow: mode === "light" ? "0 4px 20px rgba(0, 0, 0, 0.03)" : "0 4px 20px rgba(0,0,0,0.3)",
        backgroundImage: "none"
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: "20px"
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
        borderRadius: "24px",
        boxShadow: SHADOWS.overlay,
        border: `1px solid ${mode === "light" ? "rgba(229, 229, 234, 0.9)" : "rgba(51, 65, 85, 0.8)"}`,
        overflow: "hidden"
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
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
        borderRadius: "14px",
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
function useDialog() {
  const [isOpen, setIsOpen] = react.useState(false);
  const [data, setData] = react.useState(void 0);
  const open = react.useCallback((next) => {
    setData(next);
    setIsOpen(true);
  }, []);
  const close = react.useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggle = react.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return { isOpen, data, open, close, toggle };
}
var FamilyDialogTransition = react.forwardRef(
  function FamilyDialogTransition2(props, ref) {
    const { in: inProp, onEnter, onEntered, onExit, onExited, children, style, ...other } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      framerMotion.AnimatePresence,
      {
        mode: "wait",
        onExitComplete: () => {
          if (onExited) {
            onExited(null);
          }
        },
        children: inProp ? /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
          {
            ref,
            initial: {
              opacity: 0,
              scale: 0.92,
              y: 12,
              filter: "blur(8px)"
            },
            animate: {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                damping: 28,
                stiffness: 380,
                mass: 0.8,
                opacity: { duration: 0.18 }
              }
            },
            exit: {
              opacity: 0,
              scale: 0.94,
              y: 8,
              filter: "blur(6px)",
              transition: {
                duration: 0.16,
                ease: [0.32, 0.72, 0, 1]
              }
            },
            style: {
              outline: "none",
              ...style
            },
            onAnimationStart: () => {
              if (inProp) {
                onEnter?.(null, true);
              } else {
                onExit?.(null);
              }
            },
            onAnimationComplete: () => {
              if (inProp) {
                onEntered?.(null, true);
              }
            },
            ...other,
            children
          }
        ) : null
      }
    );
  }
);
function ConfirmDialog({
  open,
  titleKey,
  messageKey,
  messageParams,
  variant = "info",
  confirmKey = "common:actions.confirm",
  cancelKey = "common:actions.cancel",
  anchorEl,
  disableBackdrop = false,
  onConfirm,
  onCancel
}) {
  const { t } = reactI18next.useTranslation();
  const content = /* @__PURE__ */ jsxRuntime.jsxs(Box4__default.default, { sx: { width: "100%", maxWidth: "380px" }, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogTitle__default.default,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2.5,
          px: 3,
          pb: 0.5,
          fontWeight: 800,
          fontSize: "1.15rem",
          letterSpacing: "-0.02em"
        },
        children: [
          t(titleKey),
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton8__default.default,
            {
              "aria-label": t("common:actions.close"),
              onClick: onCancel,
              size: "small",
              edge: "end",
              sx: {
                p: 0.6,
                color: "text.secondary",
                borderRadius: "50%",
                bgcolor: (theme) => theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.06)",
                "&:hover": {
                  bgcolor: (theme) => theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.12)"
                }
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { sx: { fontSize: 16 } })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(DialogContent__default.default, { sx: { px: 3, py: 1 }, children: /* @__PURE__ */ jsxRuntime.jsx(
      DialogContentText__default.default,
      {
        sx: {
          color: "text.secondary",
          fontSize: "0.9375rem",
          lineHeight: 1.5
        },
        children: t(messageKey, messageParams)
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { sx: { px: 3, pb: 2.5, pt: 1, display: "flex", justifyContent: "flex-end", gap: 1 }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Button5__default.default,
        {
          onClick: onCancel,
          color: "inherit",
          sx: {
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            px: 2.5,
            py: 0.8,
            color: "text.secondary",
            "&:hover": {
              bgcolor: (theme) => theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.08)",
              color: "text.primary"
            }
          },
          children: t(cancelKey)
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button5__default.default,
        {
          onClick: onConfirm,
          variant: "contained",
          autoFocus: true,
          color: variant === "danger" ? "error" : variant === "warning" ? "warning" : "primary",
          sx: {
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "0.875rem",
            px: 3,
            py: 0.8,
            ...variant === "info" && {
              backgroundColor: (theme) => theme.palette.mode === "light" ? "#0F172A" : "#F8FAFC",
              color: (theme) => theme.palette.mode === "light" ? "#FFFFFF" : "#0F172A",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.mode === "light" ? "#000000" : "#E2E8F0",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)"
              }
            },
            ...variant === "danger" && {
              backgroundColor: "#DC2626",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(220, 38, 38, 0.25)",
              "&:hover": {
                backgroundColor: "#B91C1C",
                boxShadow: "0 6px 16px rgba(220, 38, 38, 0.35)"
              }
            },
            ...variant === "warning" && {
              backgroundColor: "#D97706",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(217, 119, 6, 0.25)",
              "&:hover": {
                backgroundColor: "#B45309",
                boxShadow: "0 6px 16px rgba(217, 119, 6, 0.35)"
              }
            }
          },
          children: t(confirmKey)
        }
      )
    ] })
  ] });
  const isAnchorValid = Boolean(
    anchorEl && typeof window !== "undefined" && document.body.contains(anchorEl) && anchorEl.getBoundingClientRect().width > 0 && anchorEl.getBoundingClientRect().height > 0 && (anchorEl.getBoundingClientRect().top > 0 || anchorEl.getBoundingClientRect().left > 0)
  );
  if (isAnchorValid && anchorEl) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Popover__default.default,
      {
        open,
        anchorEl,
        onClose: onCancel,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        TransitionComponent: FamilyDialogTransition,
        slotProps: {
          paper: {
            sx: {
              borderRadius: "28px",
              maxWidth: "380px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              p: 0.5,
              mt: 1,
              overflow: "hidden"
            }
          },
          root: {
            sx: {
              zIndex: (theme) => theme.zIndex.modal + 200,
              "& .MuiBackdrop-root": {
                backgroundColor: "transparent"
              }
            }
          }
        },
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    Dialog__default.default,
    {
      open,
      onClose: onCancel,
      maxWidth: "xs",
      fullWidth: true,
      TransitionComponent: FamilyDialogTransition,
      PaperProps: {
        sx: {
          borderRadius: "28px",
          maxWidth: "380px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          p: 0.5
        }
      },
      sx: {
        zIndex: (theme) => theme.zIndex.modal + 200,
        "& .MuiBackdrop-root": {
          backgroundColor: disableBackdrop ? "transparent" : "rgba(0, 0, 0, 0.15)",
          backdropFilter: disableBackdrop ? "none" : "blur(2px)",
          WebkitBackdropFilter: disableBackdrop ? "none" : "blur(2px)"
        }
      },
      children: content
    }
  );
}
var ConfirmContext = react.createContext(null);
function ConfirmProvider({ children }) {
  const [options, setOptions] = react.useState(null);
  const resolverRef = react.useRef(null);
  const confirm = react.useCallback((next) => {
    setOptions(next);
    return new Promise((resolve) => {
      resolverRef.current = resolve;
    });
  }, []);
  const settle = react.useCallback((confirmed) => {
    resolverRef.current?.(confirmed);
    resolverRef.current = null;
    setOptions(null);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(ConfirmContext.Provider, { value: confirm, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(
      ConfirmDialog,
      {
        open: options !== null,
        anchorEl: options?.anchorEl,
        disableBackdrop: options?.disableBackdrop,
        titleKey: options?.titleKey ?? "",
        messageKey: options?.messageKey ?? "",
        messageParams: options?.messageParams,
        variant: options?.variant ?? "info",
        confirmKey: options?.confirmKey,
        cancelKey: options?.cancelKey,
        onConfirm: () => {
          settle(true);
        },
        onCancel: () => {
          settle(false);
        }
      }
    )
  ] });
}
function useConfirm() {
  const ctx = react.useContext(ConfirmContext);
  if (!ctx) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return ctx;
}
function useDebounce(value, delay = DEBOUNCE_MS) {
  const [debounced, setDebounced] = react.useState(value);
  react.useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      window.clearTimeout(timer);
    };
  }, [value, delay]);
  return debounced;
}
function useDebouncedCallback(callback, delay = DEBOUNCE_MS) {
  const callbackRef = react.useRef(callback);
  callbackRef.current = callback;
  const timerRef = react.useRef(void 0);
  react.useEffect(
    () => () => {
      window.clearTimeout(timerRef.current);
    },
    []
  );
  return react.useMemo(
    () => (...args) => {
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );
}
function usePagination(initial) {
  const initialPage = initial?.page ?? 1;
  const initialPageSize = initial?.pageSize ?? DEFAULT_PAGE_SIZE;
  const [page, setPage] = react.useState(initialPage);
  const [pageSize, setPageSizeState] = react.useState(initialPageSize);
  const setPageSize = react.useCallback((next) => {
    setPageSizeState(next);
    setPage(1);
  }, []);
  const reset = react.useCallback(() => {
    setPage(initialPage);
    setPageSizeState(initialPageSize);
  }, [initialPage, initialPageSize]);
  return { page, pageSize, setPage, setPageSize, reset, offset: (page - 1) * pageSize };
}
function useTableQuery(defaults) {
  const defaultFilters = react.useMemo(() => defaults?.filters ?? {}, [defaults?.filters]);
  const [page, setPage] = react.useState(defaults?.initial?.page ?? 1);
  const [pageSize, setPageSizeState] = react.useState(defaults?.pageSize ?? DEFAULT_PAGE_SIZE);
  const [search, setSearchState] = react.useState(defaults?.initial?.search ?? "");
  const [sortBy2, setSortBy] = react.useState(defaults?.sortBy);
  const [sortDir, setSortDir] = react.useState(defaults?.sortDir ?? "asc");
  const [filters, setFilters] = react.useState(defaultFilters);
  const debouncedSearch = useDebounce(search);
  const setSearch = react.useCallback((next) => {
    setSearchState(next);
    setPage(1);
  }, []);
  const setPageSize = react.useCallback((next) => {
    setPageSizeState(next);
    setPage(1);
  }, []);
  const onSortChange = react.useCallback((key) => {
    setSortBy((prevKey) => {
      setSortDir((prevDir) => prevKey === key && prevDir === "asc" ? "desc" : "asc");
      return key;
    });
  }, []);
  const setFilter = react.useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }, []);
  const clearFilters = react.useCallback(() => {
    setFilters(defaultFilters);
    setSearchState("");
    setPage(1);
  }, [defaultFilters]);
  const reset = react.useCallback(() => {
    setPage(1);
    setSearchState("");
    setSortBy(defaults?.sortBy);
    setSortDir(defaults?.sortDir ?? "asc");
    setFilters(defaultFilters);
  }, [defaultFilters, defaults?.sortBy, defaults?.sortDir]);
  const params = react.useMemo(() => {
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([, v]) => Array.isArray(v) ? v.length > 0 : v !== "")
    );
    return {
      page,
      pageSize,
      search: debouncedSearch || void 0,
      sortBy: sortBy2,
      sortDir: sortBy2 ? sortDir : void 0,
      filters: Object.keys(activeFilters).length > 0 ? activeFilters : void 0
    };
  }, [page, pageSize, debouncedSearch, sortBy2, sortDir, filters]);
  return {
    params,
    page,
    pageSize,
    setPage,
    setPageSize,
    search,
    debouncedSearch,
    setSearch,
    sortBy: sortBy2,
    sortDir,
    onSortChange,
    filters,
    setFilter,
    clearFilters,
    reset
  };
}
function useLocalStorage(key, initial) {
  const [value, setValueState] = react.useState(() => {
    if (typeof window === "undefined") return initial;
    const raw = window.localStorage.getItem(key);
    if (raw === null) return initial;
    return safeJsonParse(raw) ?? initial;
  });
  const setValue = react.useCallback(
    (next) => {
      setValueState((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        window.localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key]
  );
  const remove = react.useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);
  return { value, setValue, remove };
}
function useBoolean(initial = false) {
  const [value, setValue] = react.useState(initial);
  const setTrue = react.useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = react.useCallback(() => {
    setValue(false);
  }, []);
  const toggle = react.useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return { value, setTrue, setFalse, toggle, setValue };
}
function useToggle(initial = false) {
  const { value, toggle, setValue } = useBoolean(initial);
  return { value, toggle, setValue };
}
function usePrevious(value) {
  const ref = react.useRef(void 0);
  react.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
function useIsMounted() {
  const mountedRef = react.useRef(false);
  react.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return react.useCallback(() => mountedRef.current, []);
}
function useMediaBreakpoint() {
  const theme = styles.useTheme();
  const isMobile = useMediaQuery__default.default(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery__default.default(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery__default.default(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery__default.default(theme.breakpoints.up("lg"));
  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}
var SnackbarContext = react.createContext(null);
function SnackbarProvider({ children }) {
  const [current, setCurrent] = react.useState(null);
  const { t } = reactI18next.useTranslation();
  const show = react.useCallback(
    (severity) => (message, params) => {
      setCurrent({ key: Date.now(), severity, message, params });
    },
    []
  );
  const value = react.useMemo(
    () => ({
      showSuccess: show("success"),
      showError: show("error"),
      showInfo: show("info"),
      showWarning: show("warning")
    }),
    [show]
  );
  const handleClose = react.useCallback((_event, reason) => {
    if (reason === "clickaway") return;
    setCurrent(null);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(SnackbarContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(
      Snackbar__default.default,
      {
        open: current !== null,
        autoHideDuration: SNACKBAR_AUTOHIDE_MS,
        onClose: handleClose,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: current ? /* @__PURE__ */ jsxRuntime.jsx(Alert__default.default, { severity: current.severity, variant: "filled", onClose: handleClose, children: t(current.message, current.params) }) : void 0
      },
      current?.key
    )
  ] });
}
function useSnackbar() {
  const ctx = react.useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
}
var DEFAULT_CURRENCY = "LKR";
function useLocaleFormat() {
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const locale = i18n2.language;
  return react.useMemo(
    () => ({
      formatDate: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.DATE).format(new Date(value)),
      formatDateTime: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.DATE_TIME).format(new Date(value)),
      formatMonthYear: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.MONTH_YEAR).format(new Date(value)),
      formatCurrency: (value, currency = DEFAULT_CURRENCY) => new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: value % 1 === 0 ? 0 : 2
      }).format(value),
      formatNumber: (value, options) => new Intl.NumberFormat(locale, options).format(value)
    }),
    [locale]
  );
}
var DateRangePreset = {
  LAST_7: "last7",
  NEXT_7: "next7",
  NEXT_14: "next14",
  THIS_MONTH: "thisMonth"
};
var presetRange = (preset) => {
  const today = todayIso();
  switch (preset) {
    case DateRangePreset.LAST_7:
      return { from: addDays(today, -6), to: today };
    case DateRangePreset.NEXT_7:
      return { from: today, to: addDays(today, 6) };
    case DateRangePreset.NEXT_14:
      return { from: today, to: addDays(today, 13) };
    case DateRangePreset.THIS_MONTH: {
      const start = `${today.slice(0, 8)}01`;
      const monthEnd = new Date(
        Date.UTC(Number(today.slice(0, 4)), Number(today.slice(5, 7)), 0)
      );
      return { from: start, to: isoDate(monthEnd) };
    }
  }
};
function useDateRange(initialPreset = DateRangePreset.NEXT_14) {
  const initial = presetRange(initialPreset);
  const [from, setFrom] = react.useState(initial.from);
  const [to, setTo] = react.useState(initial.to);
  const [preset, setPreset] = react.useState(initialPreset);
  const setRange = react.useCallback((nextFrom, nextTo) => {
    setFrom(nextFrom);
    setTo(nextTo);
    setPreset(null);
  }, []);
  const applyPreset = react.useCallback((next) => {
    const range = presetRange(next);
    setFrom(range.from);
    setTo(range.to);
    setPreset(next);
  }, []);
  const days = react.useMemo(() => differenceInDays(from, to) + 1, [from, to]);
  return { from, to, setRange, preset, applyPreset, days };
}
function useContextMenu() {
  const [contextMenu, setContextMenu] = react.useState({
    open: false,
    x: 0,
    y: 0,
    items: []
  });
  const openContextMenu = react.useCallback(
    (event, items) => {
      event.preventDefault();
      event.stopPropagation();
      setContextMenu({
        open: true,
        x: event.clientX,
        y: event.clientY,
        items
      });
    },
    []
  );
  const closeContextMenu = react.useCallback(() => {
    setContextMenu((prev) => prev.open ? { ...prev, open: false } : prev);
  }, []);
  return {
    contextMenu,
    openContextMenu,
    closeContextMenu
  };
}
function NamiosMarkSvg({ size = 28, color }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: size, height: size, viewBox: "65.4 0 357 357", role: "img", "aria-label": "Namios Logo", children: /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M243.9 0C342.483 0 422.4 79.9172 422.4 178.5C422.4 277.083 342.483 357 243.9 357C145.317 357 65.4 277.083 65.4 178.5C65.4 79.9172 145.317 0 243.9 0ZM310.959 123.084C282.621 110.737 261.859 111.102 245.603 117.036C224.886 124.599 209.317 141.851 193.82 160.904C186.307 170.141 178.662 179.965 170.831 188.264C162.968 196.595 154.239 204.152 144.056 208.622C133.572 213.224 122.004 214.351 109.132 210.549C101.316 208.24 93.1868 204.165 84.6002 198.203C94.3132 277.55 161.929 339 243.9 339C323.826 339 390.103 280.577 402.365 204.107C383.535 221.966 364.908 230.599 347.532 231.866C324.416 233.552 305.636 222.043 294.281 206.255C283.077 190.676 278.393 169.948 284.417 151.887C288.56 139.462 297.435 129.246 310.959 123.084ZM243.9 18C156.6 18 85.5799 87.6993 83.4498 174.486C95.7717 185.135 105.871 190.816 114.232 193.286C122.972 195.868 130.174 195.059 136.822 192.141C143.772 189.09 150.539 183.54 157.741 175.909C164.974 168.245 171.961 159.252 179.855 149.547C195.17 130.717 213.508 109.591 239.431 100.128C266.056 90.4092 298.584 93.6021 340.923 118.22C344.325 120.197 346.047 124.155 345.176 127.992C344.305 131.829 341.043 134.655 337.122 134.971C315.166 136.736 305.095 146.78 301.493 157.582C297.626 169.176 300.411 183.949 308.894 195.745C317.227 207.331 330.354 215.072 346.222 213.914C361.815 212.776 382.028 18 243.9 18Z",
      fill: color || "currentColor"
    }
  ) });
}
var beforeKeyframes = (lat, thickness) => styles.keyframes`
  0% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  35% { width: ${lat * 2}px; boxShadow: 0 ${-thickness}px 0 0, 0 ${thickness}px 0 0; }
  70% { width: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  100% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
`;
var afterKeyframes = (lat, thickness) => styles.keyframes`
  0% { height: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  35% { height: ${lat * 2}px; boxShadow: ${-thickness}px 0 0 0, ${thickness}px 0 0 0; }
  70% { height: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  100% { height: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
`;
function NamiosLoader({
  size = 50,
  color,
  label,
  showLogo = true
}) {
  const theme = styles.useTheme();
  const loaderColor = color || (theme.palette.mode === "light" ? "#2563EB" : "#60A5FA");
  const thickness = Math.max(4, Math.round(size / 5));
  const lat = Math.round((size - thickness) / 2);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box4__default.default,
    {
      sx: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2
      },
      children: [
        showLogo && /* @__PURE__ */ jsxRuntime.jsxs(
          Box4__default.default,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: loaderColor
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(NamiosMarkSvg, { size: 26, color: loaderColor }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Typography4__default.default,
                {
                  variant: "subtitle2",
                  sx: {
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    color: "text.primary"
                  },
                  children: "Namios"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Box4__default.default,
          {
            sx: {
              position: "relative",
              width: size,
              height: size,
              transform: "rotate(165deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                display: "block",
                borderRadius: `${thickness / 2}px`,
                backgroundColor: loaderColor,
                transform: "translate(-50%, -50%)"
              },
              "&::before": {
                height: `${thickness}px`,
                animation: `${beforeKeyframes(lat, thickness)} 2s infinite ease`
              },
              "&::after": {
                width: `${thickness}px`,
                animation: `${afterKeyframes(lat, thickness)} 2s infinite ease`
              }
            }
          }
        ),
        label && /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "caption",
            color: "text.secondary",
            sx: {
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontSize: "0.72rem",
              mt: 0.5
            },
            children: label
          }
        )
      ]
    }
  );
}
var OverlayRoot = styles.styled("div")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(19, 23, 34, 0.85)",
  backdropFilter: "blur(4px)",
  zIndex: theme.zIndex.modal
}));
function LoadingOverlay({ open, label, size = 48 }) {
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(OverlayRoot, { children: /* @__PURE__ */ jsxRuntime.jsx(NamiosLoader, { size, label }) });
}
function AppDialog({
  open,
  titleKey,
  titleParams,
  size = "sm",
  actions,
  loading = false,
  disableClose = false,
  onClose,
  children
}) {
  const { t } = reactI18next.useTranslation();
  const handleClose = (_event, reason) => {
    if (disableClose && (reason === "backdropClick" || reason === "escapeKeyDown")) return;
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open,
      onClose: handleClose,
      fullWidth: true,
      maxWidth: size,
      TransitionComponent: AppleDialogTransition,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          t(titleKey, titleParams),
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton8__default.default,
            {
              "aria-label": t("common:actions.close"),
              onClick: onClose,
              edge: "end",
              size: "small",
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { sx: { position: "relative" }, children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: loading })
        ] }),
        actions ? /* @__PURE__ */ jsxRuntime.jsx(DialogActions__default.default, { children: actions }) : null
      ]
    }
  );
}
function FormDialog({
  open,
  titleKey,
  titleParams,
  size = "sm",
  schema,
  defaultValues,
  onSubmit,
  onClose,
  submitting = false,
  submitKey = "common:actions.save",
  cancelKey = "common:actions.cancel",
  children
}) {
  const { t } = reactI18next.useTranslation();
  const form = reactHookForm.useForm({
    resolver: zod.zodResolver(schema),
    defaultValues,
    mode: "onBlur"
  });
  const { reset } = form;
  react.useEffect(() => {
    if (open) reset(defaultValues);
  }, [open, defaultValues, reset]);
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    AppDialog,
    {
      open,
      titleKey,
      titleParams,
      size,
      loading: submitting,
      disableClose: form.formState.isDirty,
      onClose,
      actions: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onClose, color: "inherit", disabled: submitting, children: t(cancelKey) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button5__default.default,
          {
            onClick: () => {
              void handleSubmit();
            },
            variant: "contained",
            disabled: submitting,
            children: t(submitKey)
          }
        )
      ] }),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "form",
        {
          onSubmit: (event) => {
            event.preventDefault();
            void handleSubmit(event);
          },
          noValidate: true,
          children: children(form)
        }
      )
    }
  );
}
var EmptyStateRoot = styles.styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
var EmptyStateIcon = styles.styled("div")(({ theme }) => ({
  display: "inline-flex",
  padding: theme.spacing(2),
  borderRadius: "50%",
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
  "& > svg": { fontSize: 40 }
}));
function EmptyState({
  icon,
  titleKey,
  descriptionKey,
  descriptionParams,
  action
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(EmptyStateRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(EmptyStateIcon, { children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(InboxOutlinedIcon__default.default, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", color: "text.primary", children: t(titleKey) }),
    descriptionKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", children: t(descriptionKey, descriptionParams) }) : null,
    action
  ] });
}
var ErrorStateRoot = styles.styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(6, 3),
  textAlign: "center"
}));
function ErrorState({
  titleKey = "common:states.errorTitle",
  messageKey = "common:states.errorGeneric",
  onRetry
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(ErrorStateRoot, { role: "alert", children: [
    /* @__PURE__ */ jsxRuntime.jsx(ErrorOutlineIcon__default.default, { color: "error", sx: { fontSize: 40 } }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", children: t(titleKey) }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", children: t(messageKey) }),
    onRetry ? /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onRetry, startIcon: /* @__PURE__ */ jsxRuntime.jsx(RefreshIcon__default.default, {}), variant: "outlined", children: t("common:actions.retry") }) : null
  ] });
}
function PageSkeleton({ label }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box4__default.default,
    {
      sx: {
        display: "flex",
        minHeight: "65vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(NamiosLoader, { size: 54, label })
    }
  );
}
function StatusChip({ status, size = "small" }) {
  const { t } = reactI18next.useTranslation();
  const color = STATUS_COLORS[status];
  return /* @__PURE__ */ jsxRuntime.jsx(
    Chip5__default.default,
    {
      label: t(`common:status.${status}`),
      size,
      color: color === "default" ? void 0 : color,
      variant: color === "default" ? "outlined" : "filled",
      sx: color === "default" ? void 0 : { color: "#fff" }
    }
  );
}
var MENU_SPRING = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.7
};
var HIGHLIGHT_SPRING = {
  type: "spring",
  stiffness: 500,
  damping: 35
};
var ContextMenu = ({
  open,
  x,
  y,
  items,
  onClose
}) => {
  const [highlightedIndex, setHighlightedIndex] = react.useState(-1);
  const [activeSubmenu, setActiveSubmenu] = react.useState(null);
  const menuRef = react.useRef(null);
  const [position, setPosition] = react.useState({ x, y });
  react.useEffect(() => {
    if (!open) {
      setHighlightedIndex(-1);
      setActiveSubmenu(null);
      return;
    }
    const estimatedWidth = 220;
    const estimatedHeight = items.length * 36 + 20;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    let posX = x;
    let posY = y;
    if (posX + estimatedWidth > winWidth - 12) {
      posX = Math.max(12, posX - estimatedWidth);
    }
    if (posY + estimatedHeight > winHeight - 12) {
      posY = Math.max(12, winHeight - estimatedHeight - 12);
    }
    setPosition({ x: Math.max(12, posX), y: Math.max(12, posY) });
  }, [open, x, y, items]);
  react.useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    const handleScroll = () => {
      onClose();
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, [open, onClose]);
  const handleItemClick = react.useCallback(
    (item) => {
      if (item.disabled || item.separator) return;
      if (item.children && item.children.length > 0) return;
      onClose();
      item.onClick?.();
    },
    [onClose]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      ref: menuRef,
      initial: { opacity: 0, scale: 0.9, y: -4 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.94, transition: { duration: 0.1 } },
      transition: MENU_SPRING,
      style: {
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 999999,
        backgroundColor: "#11151e",
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: 12,
        padding: 5,
        minWidth: 210,
        maxWidth: 280,
        boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0.5px 0 rgba(255, 255, 255, 0.12)",
        userSelect: "none",
        outline: "none"
      },
      onContextMenu: (e) => e.preventDefault(),
      children: items.map((item, index) => {
        if (item.separator) {
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                height: 1,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                margin: "4px 6px"
              }
            },
            `sep-${index}`
          );
        }
        const isHighlighted = highlightedIndex === index;
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isSubmenuOpen = activeSubmenu === item.label;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: { position: "relative" },
            onMouseEnter: () => {
              if (!item.disabled) {
                setHighlightedIndex(index);
                if (hasChildren && item.label) {
                  setActiveSubmenu(item.label);
                } else {
                  setActiveSubmenu(null);
                }
              }
            },
            onMouseLeave: () => {
              if (!hasChildren) {
                setHighlightedIndex(-1);
              }
            },
            onClick: () => handleItemClick(item),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  style: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 10px",
                    borderRadius: 8,
                    cursor: item.disabled ? "not-allowed" : "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: item.disabled ? "rgba(255, 255, 255, 0.25)" : item.danger ? "#FF453A" : "#FFFFFF",
                    gap: 12
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.div,
                      {
                        initial: false,
                        animate: { opacity: isHighlighted || isSubmenuOpen ? 1 : 0 },
                        transition: HIGHLIGHT_SPRING,
                        style: {
                          position: "absolute",
                          inset: 0,
                          borderRadius: 8,
                          backgroundColor: item.danger ? "rgba(255, 69, 58, 0.18)" : "rgba(255, 255, 255, 0.1)",
                          pointerEvents: "none"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        style: {
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: [
                          item.icon && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 16,
                                width: 16,
                                height: 16,
                                opacity: item.disabled ? 0.3 : 0.9
                              },
                              children: item.icon
                            }
                          ),
                          /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        style: {
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 6
                        },
                        children: [
                          item.shortcut && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "11px",
                                fontWeight: 600,
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                color: isHighlighted ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.35)",
                                letterSpacing: "0.04em"
                              },
                              children: item.shortcut
                            }
                          ),
                          hasChildren && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "14px",
                                color: isHighlighted ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)"
                              },
                              children: "\u203A"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: hasChildren && isSubmenuOpen && item.children && /* @__PURE__ */ jsxRuntime.jsx(
                framerMotion.motion.div,
                {
                  initial: { opacity: 0, x: -6, scale: 0.94 },
                  animate: { opacity: 1, x: 0, scale: 1 },
                  exit: { opacity: 0, x: -4, transition: { duration: 0.1 } },
                  transition: MENU_SPRING,
                  style: {
                    position: "absolute",
                    top: -4,
                    left: "calc(100% + 4px)",
                    backgroundColor: "#11151e",
                    backdropFilter: "blur(24px) saturate(1.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 12,
                    padding: 5,
                    minWidth: 180,
                    boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.55)",
                    zIndex: 1e6
                  },
                  children: item.children.map((sub, subIdx) => {
                    if (sub.separator) {
                      return /* @__PURE__ */ jsxRuntime.jsx(
                        "div",
                        {
                          style: {
                            height: 1,
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            margin: "4px 6px"
                          }
                        },
                        `sub-sep-${subIdx}`
                      );
                    }
                    return /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        onClick: () => handleItemClick(sub),
                        style: {
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "6px 10px",
                          borderRadius: 8,
                          cursor: sub.disabled ? "not-allowed" : "pointer",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: sub.disabled ? "rgba(255, 255, 255, 0.25)" : sub.danger ? "#FF453A" : "#FFFFFF",
                          gap: 12
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                            sub.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { children: sub.icon }),
                            /* @__PURE__ */ jsxRuntime.jsx("span", { children: sub.label })
                          ] }),
                          sub.shortcut && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "11px",
                                color: "rgba(255, 255, 255, 0.35)"
                              },
                              children: sub.shortcut
                            }
                          )
                        ]
                      },
                      sub.key || sub.label || `sub-${subIdx}`
                    );
                  })
                }
              ) })
            ]
          },
          item.key || item.label || `item-${index}`
        );
      })
    }
  ) });
};
var TableToolbar = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 2),
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`
}));
var ClickableRow = styles.styled(TableRow__default.default, {
  shouldForwardProp: (prop) => prop !== "clickable"
})(({ theme, clickable }) => ({
  transition: "background-color 0.15s ease",
  ...clickable && {
    cursor: "pointer",
    "&:hover": { backgroundColor: theme.palette.action.hover }
  }
}));
function DataTable({
  columns,
  data,
  isLoading = false,
  isError = false,
  onRetry,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  sortBy: sortBy2,
  sortDir = "asc",
  onSortChange,
  selectable = false,
  selected = [],
  onSelectedChange,
  getContextMenuItems,
  rowActions,
  onRowClick,
  toolbar,
  emptyState,
  compact = false
}) {
  const { t } = reactI18next.useTranslation();
  const { contextMenu, openContextMenu, closeContextMenu } = useContextMenu();
  const rows = data?.items ?? [];
  const colSpan = columns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0);
  const allSelected = rows.length > 0 && rows.every((row) => selected.includes(row.id));
  const someSelected = rows.some((row) => selected.includes(row.id));
  const toggleAll = () => {
    if (!onSelectedChange) return;
    onSelectedChange(allSelected ? [] : rows.map((row) => row.id));
  };
  const toggleOne = (id) => {
    if (!onSelectedChange) return;
    onSelectedChange(
      selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]
    );
  };
  const renderCell = (row, column) => {
    if (column.render) return column.render(row);
    const value = row[column.key];
    return value === null || value === void 0 ? "" : String(value);
  };
  const handleRowContextMenu = (event, row) => {
    if (getContextMenuItems) {
      const items = getContextMenuItems(row);
      if (items && items.length > 0) {
        openContextMenu(event, items);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Paper__default.default,
    {
      variant: "outlined",
      sx: {
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper"
      },
      children: [
        toolbar ? /* @__PURE__ */ jsxRuntime.jsx(TableToolbar, { children: toolbar }) : null,
        /* @__PURE__ */ jsxRuntime.jsx(TableContainer__default.default, { children: /* @__PURE__ */ jsxRuntime.jsxs(Table__default.default, { size: "small", "aria-busy": isLoading, children: [
          /* @__PURE__ */ jsxRuntime.jsx(TableHead__default.default, { sx: { backgroundColor: "action.hover" }, children: /* @__PURE__ */ jsxRuntime.jsxs(TableRow__default.default, { children: [
            selectable ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntime.jsx(
              Checkbox__default.default,
              {
                checked: allSelected,
                indeterminate: !allSelected && someSelected,
                onChange: toggleAll,
                inputProps: { "aria-label": t("common:table.selectAll") }
              }
            ) }) : null,
            columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(
              TableCell__default.default,
              {
                align: column.align ?? "left",
                sx: { width: column.width, fontWeight: 700 },
                sortDirection: sortBy2 === column.key ? sortDir : false,
                children: column.sortable && onSortChange ? /* @__PURE__ */ jsxRuntime.jsx(
                  TableSortLabel__default.default,
                  {
                    active: sortBy2 === column.key,
                    direction: sortBy2 === column.key ? sortDir : "asc",
                    onClick: () => {
                      onSortChange(String(column.key));
                    },
                    children: t(column.labelKey)
                  }
                ) : t(column.labelKey)
              },
              String(column.key)
            )),
            rowActions ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: "right", sx: { fontWeight: 700 }, children: t("common:table.actions") }) : null
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsxs(TableBody__default.default, { children: [
            isLoading ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "text", height: 28 }) }) }, i)) : null,
            !isLoading && isError ? /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, sx: { border: 0 }, children: /* @__PURE__ */ jsxRuntime.jsx(ErrorState, { onRetry }) }) }) : null,
            !isLoading && !isError && rows.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, sx: { border: 0 }, children: emptyState ?? /* @__PURE__ */ jsxRuntime.jsx(EmptyState, { titleKey: "common:states.noResults" }) }) }) : null,
            !isLoading && !isError ? rows.map((row) => /* @__PURE__ */ jsxRuntime.jsxs(
              ClickableRow,
              {
                clickable: Boolean(onRowClick || getContextMenuItems),
                hover: true,
                selected: selected.includes(row.id),
                onClick: onRowClick ? () => {
                  onRowClick(row);
                } : void 0,
                onContextMenu: (e) => handleRowContextMenu(e, row),
                children: [
                  selectable ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { padding: "checkbox", onClick: (e) => {
                    e.stopPropagation();
                  }, children: /* @__PURE__ */ jsxRuntime.jsx(
                    Checkbox__default.default,
                    {
                      checked: selected.includes(row.id),
                      onChange: () => {
                        toggleOne(row.id);
                      },
                      inputProps: { "aria-label": t("common:table.selectRow") }
                    }
                  ) }) : null,
                  columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: column.align ?? "left", children: renderCell(row, column) }, String(column.key))),
                  rowActions ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { align: "right", onClick: (e) => {
                    e.stopPropagation();
                  }, children: rowActions(row) }) : null
                ]
              },
              row.id
            )) : null
          ] })
        ] }) }),
        !compact ? /* @__PURE__ */ jsxRuntime.jsx(
          TablePagination__default.default,
          {
            component: "div",
            count: data?.total ?? 0,
            page: Math.max(0, page - 1),
            rowsPerPage: pageSize,
            rowsPerPageOptions: [...PAGE_SIZE_OPTIONS],
            onPageChange: (_e, newPage) => {
              onPageChange(newPage + 1);
            },
            onRowsPerPageChange: (e) => {
              onPageSizeChange(Number(e.target.value));
            },
            labelRowsPerPage: t("common:table.rowsPerPage"),
            labelDisplayedRows: ({ from, to, count }) => t("common:table.displayedRows", { from, to, count }),
            sx: {
              borderTop: "1px solid",
              borderColor: "divider",
              "& .MuiTablePagination-toolbar": { minHeight: 48, px: 2 }
            }
          }
        ) : null,
        /* @__PURE__ */ jsxRuntime.jsx(
          ContextMenu,
          {
            open: contextMenu.open,
            x: contextMenu.x,
            y: contextMenu.y,
            items: contextMenu.items,
            onClose: closeContextMenu
          }
        )
      ]
    }
  );
}
var StatCardRoot = styles.styled(Card__default.default, {
  shouldForwardProp: (prop) => prop !== "compactSize"
})(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(2, 2.5) : theme.spacing(2.5, 3),
  display: "flex",
  flexDirection: "column",
  gap: compactSize ? theme.spacing(0.75) : theme.spacing(1),
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
  border: "1px solid rgba(229, 229, 234, 0.85)",
  transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&:hover": {
    boxShadow: "0 8px 28px rgba(0, 0, 0, 0.07)",
    borderColor: theme.palette.primary.main,
    transform: "translateY(-2px)"
  }
}));
var KpiHeaderRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),
  width: "100%"
}));
var IconTile = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "colorKey" && prop !== "compact"
})(({ theme, colorKey, compact }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(compact ? 1 : 1.25),
  borderRadius: "12px",
  backgroundColor: styles.alpha(theme.palette[colorKey].main, 0.12),
  color: theme.palette[colorKey].main,
  flexShrink: 0
}));
var DeltaRow = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "trend"
})(({ theme, trend }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  ...theme.typography.caption,
  fontWeight: 700,
  fontSize: "0.75rem",
  color: trend === "up" ? theme.palette.success.main : trend === "down" ? theme.palette.error.main : theme.palette.text.secondary
}));
var TREND_ICONS = {
  up: /* @__PURE__ */ jsxRuntime.jsx(TrendingUpIcon__default.default, { fontSize: "inherit" }),
  down: /* @__PURE__ */ jsxRuntime.jsx(TrendingDownIcon__default.default, { fontSize: "inherit" }),
  flat: /* @__PURE__ */ jsxRuntime.jsx(TrendingFlatIcon__default.default, { fontSize: "inherit" })
};
function StatCard({
  labelKey,
  value,
  delta,
  trend = "flat",
  icon,
  loading = false,
  layout = "stat",
  subtitleKey,
  subtitleParams,
  badge,
  iconColor = "primary",
  size = "small"
}) {
  const { t } = reactI18next.useTranslation();
  const isCompact = size === "small" || size === "mini";
  const valueNode = loading ? /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "text", width: 80, height: isCompact ? 28 : 40 }) : /* @__PURE__ */ jsxRuntime.jsx(
    Typography4__default.default,
    {
      variant: isCompact ? "h5" : "h4",
      component: "div",
      sx: isCompact ? { fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.2 } : { fontWeight: 800 },
      children: value
    }
  );
  const deltaNode = delta && !loading ? /* @__PURE__ */ jsxRuntime.jsxs(DeltaRow, { trend, children: [
    TREND_ICONS[trend],
    delta
  ] }) : null;
  const subtitleNode = subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", color: "text.secondary", sx: { fontSize: "0.75rem", fontWeight: 500 }, children: t(subtitleKey, subtitleParams) }) : null;
  if (layout === "kpi") {
    return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(KpiHeaderRow, { children: [
        icon ? /* @__PURE__ */ jsxRuntime.jsx(IconTile, { colorKey: iconColor, compact: isCompact, children: icon }) : /* @__PURE__ */ jsxRuntime.jsx("span", {}),
        badge ?? /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "overline",
            color: "text.secondary",
            noWrap: true,
            sx: {
              textAlign: "right",
              lineHeight: 1.3,
              fontSize: isCompact ? "0.68rem" : "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              maxWidth: "70%",
              pr: 0.5
            },
            children: t(labelKey)
          }
        )
      ] }),
      badge ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "overline", color: "text.secondary", noWrap: true, sx: { fontSize: isCompact ? "0.68rem" : "0.75rem", fontWeight: 700, pr: 0.5 }, children: t(labelKey) }) : null,
      valueNode,
      deltaNode ?? subtitleNode
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Typography4__default.default,
      {
        variant: "body2",
        color: "text.secondary",
        noWrap: true,
        sx: { display: "flex", alignItems: "center", gap: 1, fontSize: isCompact ? "0.75rem" : "0.8125rem", pr: 0.5 },
        children: [
          icon,
          t(labelKey)
        ]
      }
    ),
    valueNode,
    deltaNode,
    subtitleNode
  ] });
}
function SectionCard({ titleKey, titleParams, action, children }) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(Card__default.default, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      CardHeader__default.default,
      {
        title: t(titleKey, titleParams),
        titleTypographyProps: { variant: "h6" },
        action
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent__default.default, { sx: { pt: 0 }, children })
  ] });
}
var ListRoot = styles.styled("dl")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(140px, auto) 1fr",
  columnGap: theme.spacing(3),
  rowGap: theme.spacing(1.5),
  margin: 0
}));
var Term = styles.styled("dt")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary
}));
var Detail = styles.styled("dd")(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  margin: 0
}));
function DescriptionList({ items }) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(ListRoot, { children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Term, { children: t(item.labelKey, item.labelParams) }),
    /* @__PURE__ */ jsxRuntime.jsx(Detail, { children: item.value })
  ] }, item.labelKey)) });
}
function SearchField({
  value,
  onChange,
  placeholderKey = "common:actions.search",
  fullWidth = false,
  autoFocus = false
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    TextField4__default.default,
    {
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      placeholder: t(placeholderKey),
      fullWidth,
      autoFocus,
      inputProps: { "aria-label": t(placeholderKey) },
      InputProps: {
        startAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "start", children: /* @__PURE__ */ jsxRuntime.jsx(SearchIcon__default.default, { fontSize: "small" }) }),
        endAdornment: value ? /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx(
          IconButton8__default.default,
          {
            size: "small",
            "aria-label": t("common:actions.clear"),
            onClick: () => {
              onChange("");
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(ClearIcon__default.default, { fontSize: "small" })
          }
        ) }) : void 0
      }
    }
  );
}
function SelectField({
  value,
  onChange,
  options,
  labelKey,
  emptyOptionKey,
  fullWidth = false,
  minWidth = 160,
  disabled = false
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    TextField4__default.default,
    {
      select: true,
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      label: labelKey ? t(labelKey) : void 0,
      fullWidth,
      disabled,
      sx: { minWidth: fullWidth ? void 0 : minWidth },
      children: [
        emptyOptionKey ? /* @__PURE__ */ jsxRuntime.jsx(MenuItem__default.default, { value: "", children: t(emptyOptionKey) }) : null,
        options.map((option) => /* @__PURE__ */ jsxRuntime.jsxs(MenuItem__default.default, { value: option.value, disabled: option.disabled, children: [
          option.icon,
          option.label
        ] }, String(option.value)))
      ]
    }
  );
}
var PasswordField = react.forwardRef(
  function PasswordField2(props, ref) {
    const { t } = reactI18next.useTranslation();
    const [visible, setVisible] = react.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsx(
      TextField4__default.default,
      {
        ...props,
        inputRef: ref ?? props.inputRef,
        type: visible ? "text" : "password",
        InputProps: {
          ...props.InputProps,
          endAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton8__default.default,
            {
              "aria-label": t(
                visible ? "common:actions.hidePassword" : "common:actions.showPassword"
              ),
              onClick: () => {
                setVisible((v) => !v);
              },
              edge: "end",
              size: "small",
              children: visible ? /* @__PURE__ */ jsxRuntime.jsx(VisibilityOffIcon__default.default, { fontSize: "small" }) : /* @__PURE__ */ jsxRuntime.jsx(VisibilityIcon__default.default, { fontSize: "small" })
            }
          ) })
        }
      }
    );
  }
);
function FormTextField({
  control,
  name,
  labelKey,
  type,
  multiline,
  rows,
  autoFocus,
  autoComplete,
  placeholderKey,
  disabled
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field: { ref, ...field }, fieldState }) => {
        const shared = {
          ...field,
          inputRef: ref,
          label: t(labelKey),
          placeholder: placeholderKey ? t(placeholderKey) : void 0,
          error: Boolean(fieldState.error),
          helperText: fieldState.error?.message ? t(fieldState.error.message) : void 0,
          fullWidth: true,
          margin: "normal",
          multiline,
          rows,
          autoFocus,
          autoComplete,
          disabled
        };
        return type === "password" ? /* @__PURE__ */ jsxRuntime.jsx(PasswordField, { ...shared }) : /* @__PURE__ */ jsxRuntime.jsx(TextField4__default.default, { ...shared, type });
      }
    }
  );
}
function FormSelect({
  control,
  name,
  labelKey,
  options
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsxRuntime.jsx(
        TextField4__default.default,
        {
          ...field,
          select: true,
          label: t(labelKey),
          error: Boolean(fieldState.error),
          helperText: fieldState.error?.message ? t(fieldState.error.message) : void 0,
          fullWidth: true,
          margin: "normal",
          children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(MenuItem__default.default, { value: option.value, disabled: option.disabled, children: option.label }, String(option.value)))
        }
      )
    }
  );
}
function FormSwitch({
  control,
  name,
  labelKey
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsxRuntime.jsx(
        FormControlLabel__default.default,
        {
          control: /* @__PURE__ */ jsxRuntime.jsx(Switch__default.default, { checked: Boolean(field.value), onChange: field.onChange }),
          label: t(labelKey)
        }
      )
    }
  );
}
function LanguageSwitcher({ variant = "text" }) {
  const { i18n: i18n2, t } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = react.useState(null);
  const current = SUPPORTED_LOCALES.find((locale) => i18n2.language.startsWith(locale.code)) ?? SUPPORTED_LOCALES[0];
  const handleSelect = (code) => {
    void i18n2.changeLanguage(code);
    setAnchorEl(null);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button5__default.default,
      {
        color: "inherit",
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(TranslateIcon__default.default, {}),
        onClick: (e) => {
          setAnchorEl(e.currentTarget);
        },
        "aria-label": t("common:actions.changeLanguage"),
        "aria-haspopup": "menu",
        children: variant === "text" ? current.label : null
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      Menu__default.default,
      {
        anchorEl,
        open: Boolean(anchorEl),
        onClose: () => {
          setAnchorEl(null);
        },
        children: SUPPORTED_LOCALES.map((locale) => /* @__PURE__ */ jsxRuntime.jsxs(
          MenuItem__default.default,
          {
            selected: locale.code === current.code,
            onClick: () => {
              handleSelect(locale.code);
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { children: locale.code === current.code ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon__default.default, { fontSize: "small" }) : null }),
              /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { children: locale.label })
            ]
          },
          locale.code
        ))
      }
    )
  ] });
}
var TopBarSlot = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
var TopBarNav = styles.styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flexGrow: 1,
  justifyContent: "center"
}));
function AppTopBar({ appsLauncher, logo, nav, actions, onMenuClick }) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    AppBar__default.default,
    {
      position: "fixed",
      color: "inherit",
      elevation: 0,
      sx: (theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer + 1
      }),
      children: /* @__PURE__ */ jsxRuntime.jsxs(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }), children: [
        /* @__PURE__ */ jsxRuntime.jsxs(TopBarSlot, { children: [
          onMenuClick ? /* @__PURE__ */ jsxRuntime.jsx(
            IconButton8__default.default,
            {
              "aria-label": t("common:actions.openMenu"),
              onClick: onMenuClick,
              edge: "start",
              sx: { display: { md: "none" } },
              children: /* @__PURE__ */ jsxRuntime.jsx(MenuIcon__default.default, {})
            }
          ) : null,
          appsLauncher,
          logo
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(TopBarNav, { children: nav }),
        /* @__PURE__ */ jsxRuntime.jsx(TopBarSlot, { children: actions })
      ] })
    }
  );
}
var RESOURCE_COL_WIDTH = 148;
var DAY_COL_WIDTH = 76;
var ROW_HEIGHT = 52;
var SPAN_INSET = 8;
var MatrixRoot = styles.styled("div")(({ theme }) => ({
  overflowX: "auto",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius
}));
var HeaderRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  zIndex: 3
}));
var ResourceCell = styles.styled("div")(({ theme }) => ({
  width: RESOURCE_COL_WIDTH,
  minWidth: RESOURCE_COL_WIDTH,
  padding: theme.spacing(1, 2),
  display: "flex",
  alignItems: "center",
  position: "sticky",
  left: 0,
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`
}));
var DayHeaderCell = styles.styled("div")(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  padding: theme.spacing(1, 0),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2
}));
var TodayBubble = styles.styled("span")(({ theme }) => ({
  width: 26,
  height: 26,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: theme.typography.body2.fontSize
}));
var BodyRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": { borderBottom: "none" },
  backgroundColor: theme.palette.background.paper
}));
var RowTrack = styles.styled("div")({
  position: "relative",
  height: ROW_HEIGHT,
  display: "flex"
});
var DayCell = styles.styled("button")(({ theme }) => ({
  width: DAY_COL_WIDTH,
  minWidth: DAY_COL_WIDTH,
  height: "100%",
  border: "none",
  borderLeft: `1px solid ${theme.palette.divider}`,
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  "&:hover": { backgroundColor: theme.palette.action.hover },
  "&:disabled": { cursor: "default" }
}));
var SpanBar = styles.styled("button")(({ theme }) => ({
  position: "absolute",
  top: SPAN_INSET,
  height: ROW_HEIGHT - SPAN_INSET * 2,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1),
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 500,
  textAlign: "left",
  zIndex: 1
}));
function TimelineMatrix({
  resources,
  spans,
  startDate,
  days,
  renderResource,
  resourceLabelKey,
  onSpanClick,
  onCellClick,
  legend,
  loading = false,
  today
}) {
  const { t, i18n: i18n2 } = reactI18next.useTranslation();
  const theme = styles.useTheme();
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);
  const spanColor = (key) => {
    const paletteColor = key === "neutral" ? theme.palette.neutral : theme.palette[key];
    return {
      backgroundColor: styles.alpha(paletteColor.main, theme.palette.mode === "light" ? 0.09 : 0.22),
      border: `1px solid ${styles.alpha(paletteColor.main, 0.55)}`,
      color: theme.palette.mode === "light" ? paletteColor.dark : paletteColor.light
    };
  };
  const monthFormat = new Intl.DateTimeFormat(i18n2.language, { month: "short" });
  const dayFormat = new Intl.DateTimeFormat(i18n2.language, { day: "numeric" });
  if (loading) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton__default.default, { variant: "rounded", height: ROW_HEIGHT * 6 }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    legend ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { component: "div", variant: "body2", sx: { display: "flex", justifyContent: "flex-end", mb: 1 }, children: legend }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(MatrixRoot, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: RESOURCE_COL_WIDTH + days * DAY_COL_WIDTH }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(HeaderRow, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "overline", color: "text.secondary", children: t(resourceLabelKey) }) }),
        dayList.map((date) => {
          const isToday = date === todayDate;
          const dateObj = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
          return /* @__PURE__ */ jsxRuntime.jsxs(DayHeaderCell, { "aria-current": isToday ? "date" : void 0, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", color: "text.secondary", sx: { textTransform: "uppercase" }, children: monthFormat.format(dateObj) }),
            isToday ? /* @__PURE__ */ jsxRuntime.jsx(TodayBubble, { "aria-label": t("common:timeline.today"), children: dayFormat.format(dateObj) }) : /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", children: dayFormat.format(dateObj) })
          ] }, date);
        })
      ] }),
      resources.map((resource) => {
        const rowSpans = spans.filter(
          (span) => span.resourceId === resource.id && span.startDate < endDate && span.endDate > startDate
        );
        return /* @__PURE__ */ jsxRuntime.jsxs(BodyRow, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { children: renderResource(resource) }),
          /* @__PURE__ */ jsxRuntime.jsxs(RowTrack, { style: { width: days * DAY_COL_WIDTH }, children: [
            dayList.map((date) => /* @__PURE__ */ jsxRuntime.jsx(
              DayCell,
              {
                type: "button",
                "aria-label": `${resource.id} ${date}`,
                disabled: !onCellClick,
                onClick: () => onCellClick?.(resource.id, date)
              },
              date
            )),
            rowSpans.map((span) => {
              const clampedStart = span.startDate < startDate ? startDate : span.startDate;
              const clampedEnd = span.endDate > endDate ? endDate : span.endDate;
              const offset = differenceInDays(startDate, clampedStart);
              const length = Math.max(1, differenceInDays(clampedStart, clampedEnd));
              return /* @__PURE__ */ jsxRuntime.jsx(
                SpanBar,
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    onSpanClick?.(span);
                  },
                  style: {
                    left: offset * DAY_COL_WIDTH + 2,
                    width: length * DAY_COL_WIDTH - 4,
                    ...spanColor(span.colorKey)
                  },
                  children: span.labelKey ? t(span.labelKey) : span.label
                },
                span.id
              );
            })
          ] })
        ] }, resource.id);
      })
    ] }) })
  ] });
}
function StatusFilterChips({
  options,
  value,
  onChange
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(Stack3__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, role: "tablist", children: options.map((option) => {
    const active = option.value === value;
    const label = option.count !== void 0 ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Chip5__default.default,
      {
        label,
        color: active ? "primary" : void 0,
        variant: active ? "filled" : "outlined",
        onClick: () => {
          onChange(option.value);
        },
        role: "tab",
        "aria-selected": active
      },
      option.value
    );
  }) });
}
var DrawerHeader = styles.styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper
}));
var DrawerContent = styles.styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(3),
  position: "relative",
  maxHeight: "75vh"
}));
var DrawerFooter = styles.styled("footer")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  "& > *": { flexGrow: 1 }
}));
function AppDrawer({
  open,
  onClose,
  titleKey,
  titleParams,
  title,
  statusChip,
  tabs,
  footer,
  width,
  loading = false,
  children
}) {
  const { t } = reactI18next.useTranslation();
  const getMaxWidth = () => {
    if (width === "full" || width === "xl") return "xl";
    if (width === "lg") return "lg";
    if (width === "sm") return "sm";
    if (width === "xs") return "xs";
    return "md";
  };
  const getPaperWidthSx = () => {
    if (width === "full") {
      return { maxWidth: "1380px", width: "95vw" };
    }
    if (width === "xl") {
      return { maxWidth: "1440px", width: "95vw" };
    }
    if (width === "lg") {
      return { maxWidth: "1200px", width: "92vw" };
    }
    if (typeof width === "number") {
      return { maxWidth: `${width}px`, width: "95vw" };
    }
    return {};
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open,
      onClose: (_event, reason) => {
        if (reason !== "backdropClick") onClose();
      },
      maxWidth: getMaxWidth(),
      fullWidth: true,
      PaperProps: {
        sx: {
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
          border: "1px solid rgba(229, 229, 234, 0.9)",
          overflow: "hidden",
          ...getPaperWidthSx()
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerHeader, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", spacing: 1.5, alignItems: "center", sx: { flexGrow: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h5", fontWeight: 800, letterSpacing: "-0.3px", noWrap: true, children: title ?? (titleKey ? t(titleKey, titleParams) : null) }),
            statusChip
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton8__default.default, { "aria-label": t("common:actions.close"), onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" }) })
        ] }),
        tabs,
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerContent, { children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: loading })
        ] }),
        footer ? /* @__PURE__ */ jsxRuntime.jsx(DrawerFooter, { children: footer }) : null
      ]
    }
  );
}
function WizardDialog({
  open,
  titleKey,
  steps,
  activeStep,
  canNext,
  onNext,
  onBack,
  onCancel,
  onFinish,
  submitting = false,
  nextKey = "common:actions.next",
  backKey = "common:actions.back",
  finishKey = "common:wizard.finish",
  children
}) {
  const { t } = reactI18next.useTranslation();
  const isLast = activeStep === steps.length - 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open,
      onClose: onCancel,
      fullWidth: true,
      maxWidth: "lg",
      TransitionComponent: AppleDialogTransition,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          t(titleKey),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton8__default.default, { "aria-label": t("common:actions.close"), onClick: onCancel, size: "small", edge: "end", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Stepper__default.default, { activeStep, sx: { px: 3, pb: 2 }, children: steps.map((step) => /* @__PURE__ */ jsxRuntime.jsx(Step__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(StepLabel__default.default, { children: t(step.labelKey) }) }, step.labelKey)) }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { dividers: true, sx: { position: "relative", minHeight: 320 }, children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: submitting })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { sx: { justifyContent: "space-between", px: 3 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onCancel, color: "inherit", disabled: submitting, children: t("common:actions.cancel") }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onBack, color: "inherit", disabled: activeStep === 0 || submitting, sx: { mr: 1 }, children: t(backKey) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button5__default.default,
              {
                variant: "contained",
                onClick: isLast ? onFinish : onNext,
                disabled: !canNext || submitting,
                children: t(isLast ? finishKey : nextKey)
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function DateRangeButton({ range }) {
  const { t, i18n: i18n2 } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = react.useState(null);
  const [draftFrom, setDraftFrom] = react.useState(range.from);
  const [draftTo, setDraftTo] = react.useState(range.to);
  const format = new Intl.DateTimeFormat(i18n2.language, { month: "short", day: "numeric" });
  const formatWithYear = new Intl.DateTimeFormat(i18n2.language, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  const label = `${format.format(/* @__PURE__ */ new Date(`${range.from}T00:00:00Z`))} \u2013 ${formatWithYear.format(
    /* @__PURE__ */ new Date(`${range.to}T00:00:00Z`)
  )}`;
  const openPopover = (element) => {
    setDraftFrom(range.from);
    setDraftTo(range.to);
    setAnchorEl(element);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      Button5__default.default,
      {
        variant: "outlined",
        color: "inherit",
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(CalendarMonthOutlinedIcon__default.default, {}),
        onClick: (e) => {
          openPopover(e.currentTarget);
        },
        sx: { borderRadius: 999, whiteSpace: "nowrap" },
        "aria-label": t("common:dateRange.label"),
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      Popover__default.default,
      {
        open: Boolean(anchorEl),
        anchorEl,
        onClose: () => {
          setAnchorEl(null);
        },
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        children: /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { spacing: 2, sx: { p: 2, width: 300 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Stack3__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: Object.values(DateRangePreset).map((preset) => /* @__PURE__ */ jsxRuntime.jsx(
            Chip5__default.default,
            {
              label: t(`common:dateRange.presets.${preset}`),
              size: "small",
              color: range.preset === preset ? "primary" : void 0,
              variant: range.preset === preset ? "filled" : "outlined",
              onClick: () => {
                range.applyPreset(preset);
                setAnchorEl(null);
              }
            },
            preset
          )) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField4__default.default,
            {
              type: "date",
              label: t("common:dateRange.from"),
              value: draftFrom,
              onChange: (e) => {
                setDraftFrom(e.target.value);
              },
              InputLabelProps: { shrink: true }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            TextField4__default.default,
            {
              type: "date",
              label: t("common:dateRange.to"),
              value: draftTo,
              onChange: (e) => {
                setDraftTo(e.target.value);
              },
              InputLabelProps: { shrink: true }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button5__default.default,
            {
              variant: "contained",
              disabled: !draftFrom || !draftTo || draftTo < draftFrom,
              onClick: () => {
                range.setRange(draftFrom, draftTo);
                setAnchorEl(null);
              },
              children: t("common:dateRange.apply")
            }
          )
        ] })
      }
    )
  ] });
}
var NavItemButton = styles.styled(ListItemButton__default.default)(({ theme }) => ({
  borderRadius: "12px",
  margin: theme.spacing(0.35, 1.25),
  paddingTop: 8,
  paddingBottom: 8,
  transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&.Mui-selected": {
    backgroundColor: theme.palette.mode === "light" ? "#007AFF" : "#0A84FF",
    color: "#FFFFFF",
    fontWeight: 700,
    boxShadow: theme.palette.mode === "light" ? "0 4px 14px rgba(0, 122, 255, 0.25)" : "none",
    "& .MuiListItemIcon-root": { color: "#FFFFFF" },
    "& .MuiTypography-root": { fontWeight: 700 },
    "&:hover": { backgroundColor: theme.palette.mode === "light" ? "#0062CC" : "#0051A8" }
  }
}));
function NavList({
  items,
  activePath,
  onNavigate,
  depth = 0
}) {
  const { t } = reactI18next.useTranslation();
  const [openMap, setOpenMap] = react.useState({});
  return /* @__PURE__ */ jsxRuntime.jsx(List__default.default, { component: depth === 0 ? "nav" : "div", disablePadding: depth > 0, children: items.map((item) => {
    const isActive = activePath === item.path || !item.exact && item.path !== "/" && activePath.startsWith(`${item.path}/`);
    const hasChildren = Boolean(item.children?.length);
    const isOpen = openMap[item.path] ?? isActive;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        NavItemButton,
        {
          selected: isActive && !hasChildren,
          onClick: () => {
            if (hasChildren) {
              setOpenMap((prev) => ({ ...prev, [item.path]: !isOpen }));
            } else {
              onNavigate(item.path);
            }
          },
          sx: { pl: 2 + depth * 2 },
          children: [
            item.icon ? /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { sx: { minWidth: 40 }, children: item.icon }) : null,
            /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { primary: t(item.labelKey) }),
            hasChildren ? isOpen ? /* @__PURE__ */ jsxRuntime.jsx(ExpandLessIcon__default.default, {}) : /* @__PURE__ */ jsxRuntime.jsx(ExpandMoreIcon__default.default, {}) : null
          ]
        }
      ),
      hasChildren && item.children ? /* @__PURE__ */ jsxRuntime.jsx(Collapse__default.default, { in: isOpen, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsxRuntime.jsx(
        NavList,
        {
          items: item.children,
          activePath,
          onNavigate,
          depth: depth + 1
        }
      ) }) : null
    ] }, item.path);
  }) });
}
function AppSideNav({
  items,
  activePath,
  onNavigate,
  mobileOpen = false,
  onMobileClose,
  temporary = false
}) {
  const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
    /* @__PURE__ */ jsxRuntime.jsx(NavList, { items, activePath, onNavigate })
  ] });
  if (temporary) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Drawer__default.default,
      {
        variant: "temporary",
        open: mobileOpen,
        onClose: onMobileClose,
        ModalProps: { keepMounted: true },
        sx: (theme) => ({
          "& .MuiDrawer-paper": { width: theme.custom.sidebarWidth }
        }),
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    Drawer__default.default,
    {
      variant: "permanent",
      sx: (theme) => ({
        width: theme.custom.sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: theme.custom.sidebarWidth,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`
        }
      }),
      children: content
    }
  );
}
var HeaderRoot = styles.styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3)
}));
function PageHeader({
  titleKey,
  titleParams,
  title,
  subtitleKey,
  subtitleParams,
  breadcrumbs,
  onNavigate,
  actions
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(HeaderRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      breadcrumbs && breadcrumbs.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(Breadcrumbs__default.default, { separator: /* @__PURE__ */ jsxRuntime.jsx(NavigateNextIcon__default.default, { fontSize: "small" }), sx: { mb: 0.5 }, children: breadcrumbs.map(
        (crumb) => crumb.path && onNavigate ? /* @__PURE__ */ jsxRuntime.jsx(
          Link__default.default,
          {
            component: "button",
            type: "button",
            variant: "body2",
            color: "text.secondary",
            underline: "hover",
            onClick: () => {
              if (crumb.path) onNavigate(crumb.path);
            },
            children: t(crumb.labelKey)
          },
          crumb.labelKey
        ) : /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.primary", children: t(crumb.labelKey) }, crumb.labelKey)
      ) }) : null,
      /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h4", component: "h1", children: title ?? t(titleKey, titleParams) }),
      subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: t(subtitleKey, subtitleParams) }) : null
    ] }),
    actions ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: actions }) : null
  ] });
}
var AuthRoot = styles.styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default
}));
var AuthTopRight = styles.styled("div")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(3)
}));
var AuthCard = styles.styled(Card__default.default)(({ theme }) => ({
  width: "100%",
  maxWidth: 420,
  boxShadow: theme.custom.raisedShadow
}));
var AuthLogo = styles.styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: "flex",
  justifyContent: "center"
}));
function AuthLayout({ children, logo, topRight }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(AuthRoot, { children: [
    topRight ? /* @__PURE__ */ jsxRuntime.jsx(AuthTopRight, { children: topRight }) : null,
    logo ? /* @__PURE__ */ jsxRuntime.jsx(AuthLogo, { children: logo }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(AuthCard, { children: /* @__PURE__ */ jsxRuntime.jsx(CardContent__default.default, { sx: { p: 4 }, children }) })
  ] });
}

// src/components/AppLauncher/constants/animationConfig.ts
var FOLDER_LAYOUT_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 26,
  mass: 0.8
};
var BACKDROP_TRANSITION = {
  duration: 0.24,
  ease: [0.16, 1, 0.3, 1]
};
var CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 12
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
      mass: 0.8,
      staggerChildren: 0.035,
      delayChildren: 0.06
    }
  },
  exit: {
    opacity: 0,
    scale: 0.86,
    y: 10,
    transition: {
      duration: 0.18,
      ease: [0.32, 0, 0.67, 0]
    }
  }
};
var APP_TILE_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: 14
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 24
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.12
    }
  }
};
var DEFAULT_HOTELOS_APPS = [
  {
    id: "stay-os",
    name: "Stay OS",
    shortName: "PMS & Desk",
    tagline: "Property Management System",
    description: "Front desk operations, room allocation matrix grid, reservation wizard, housekeeping kanban, and folio engines.",
    category: "operations",
    status: "OPERATIONAL",
    port: 5174,
    url: "http://localhost:5174",
    devCommand: "cd hotelos-stay-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)",
    iconColor: "#007AFF",
    gradientBorder: "from-blue-500/20 via-indigo-500/20 to-sky-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(HotelIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Core",
    badgeText: "Port 5174",
    badgeColor: "primary",
    shortcut: "\u23181",
    isFavorite: true,
    docUrl: "https://docs.stay.namios.app/",
    lordIconSrc: "/icons/stay.gif"
  },
  {
    id: "dine-os",
    name: "Dine OS",
    shortName: "F&B & POS",
    tagline: "Restaurant & Kitchen Workspace",
    description: "Interactive floor seating canvas, live dual-pane POS order cart, kitchen queue kanban with rush indicators, and room bill transfers.",
    category: "food_beverage",
    status: "OPERATIONAL",
    port: 5175,
    url: "http://localhost:5175",
    devCommand: "cd hotelos-dine-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #FF6B00 0%, #FFA800 100%)",
    iconColor: "#FF6B00",
    gradientBorder: "from-rose-500/20 via-orange-500/20 to-amber-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(RestaurantIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Live",
    badgeText: "Port 5175",
    badgeColor: "warning",
    shortcut: "\u23182",
    isFavorite: true,
    docUrl: "https://docs.dine.namios.app/",
    lordIconSrc: "/icons/dine.gif"
  },
  {
    id: "people-hr",
    name: "People (HR)",
    shortName: "Staff & HR",
    tagline: "Staff Roster, Attendance & Payroll",
    description: "Shift scheduling, employee attendance tracking, payroll processing, leave management, and staff performance metrics.",
    category: "operations",
    status: "OPERATIONAL",
    port: 5176,
    url: "http://localhost:5176",
    devCommand: "cd hotelos-stay-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #9333EA 0%, #C084FC 100%)",
    iconColor: "#9333EA",
    gradientBorder: "from-purple-500/20 via-fuchsia-500/20 to-violet-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(PeopleIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "HR",
    badgeText: "HR Module",
    badgeColor: "info",
    isFavorite: true,
    docUrl: "https://docs.people.namios.app/",
    lordIconSrc: "/icons/people.gif"
  },
  {
    id: "super-admin",
    name: "Super Admin",
    shortName: "Platform Control",
    tagline: "Tenant & Subscription Control",
    description: "Platform management dashboard tracking tenant onboarding, subscription tiers, MRR analytics, and system audit logs.",
    category: "management",
    status: "OPERATIONAL",
    port: 5173,
    url: "http://localhost:5173",
    devCommand: "cd hotelos-super-admin && pnpm dev",
    iconBg: "linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)",
    iconColor: "#16A34A",
    gradientBorder: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(AdminPanelSettingsIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Admin",
    badgeText: "Port 5173",
    badgeColor: "default",
    isFavorite: true,
    docUrl: "https://docs.admin.namios.app/",
    lordIconSrc: "/icons/admin.gif"
  },
  {
    id: "payments-os",
    name: "Payments OS",
    shortName: "Billing & Gateway",
    tagline: "Multi-Currency Terminal & Invoicing",
    description: "Payment gateway integrations, card terminal processing, room folio billing, cash drawer reconciliations, and tax calculations.",
    category: "operations",
    status: "OPERATIONAL",
    port: 4e3,
    url: "http://localhost:4000",
    devCommand: "cd hotel-os-be && npm run dev",
    iconBg: "linear-gradient(135deg, #00C7BE 0%, #30B0C7 100%)",
    iconColor: "#EA580C",
    gradientBorder: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(PaymentsIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Gateway",
    badgeText: "Gateway",
    badgeColor: "info",
    isFavorite: true,
    docUrl: "https://docs.payments.namios.app/",
    lordIconSrc: "/icons/payments.gif"
  },
  {
    id: "inventory-os",
    name: "Inventory OS",
    shortName: "Stock & POs",
    tagline: "F&B Stock & Supplies Control",
    description: "Real-time stock level tracking, kitchen ingredient usage, linen inventories, low-stock alerts, and purchase order creation.",
    category: "operations",
    status: "OPERATIONAL",
    port: 5175,
    url: "http://localhost:5175",
    devCommand: "cd hotelos-dine-os && pnpm dev",
    iconBg: "linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)",
    iconColor: "#0891B2",
    gradientBorder: "from-cyan-500/20 via-sky-500/20 to-blue-500/20",
    icon: /* @__PURE__ */ jsxRuntime.jsx(InventoryIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Stock",
    badgeText: "Stock Engine",
    badgeColor: "default",
    isFavorite: true,
    docUrl: "https://docs.inventory.namios.app/",
    lordIconSrc: "/icons/inventory.gif"
  },
  {
    id: "nami-ai",
    name: "Nami AI",
    shortName: "AI Concierge",
    tagline: "Smart Assistant & Messaging",
    description: "AI Guest Concierge, Assistant & Smart Messaging across Guest Portals and Front Desk.",
    category: "guest_experience",
    status: "BETA",
    port: 5176,
    url: "http://localhost:5176",
    iconBg: "linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)",
    iconColor: "#AF52DE",
    icon: /* @__PURE__ */ jsxRuntime.jsx(AutoAwesomeIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "AI Beta",
    badgeText: "Beta",
    badgeColor: "info",
    shortcut: "\u23184",
    isFavorite: false
  },
  {
    id: "public-web",
    name: "Booking Engine",
    shortName: "Guest Portal",
    tagline: "Public Guest Direct Booking",
    description: "Public Guest Direct Booking & Hotel Web Portal for direct room reservations.",
    category: "marketing",
    status: "OPERATIONAL",
    port: 3e3,
    url: "http://localhost:3000",
    iconBg: "linear-gradient(135deg, #34C759 0%, #30D158 100%)",
    iconColor: "#34C759",
    icon: /* @__PURE__ */ jsxRuntime.jsx(PublicIcon__default.default, { sx: { fontSize: 26, color: "#FFFFFF" } }),
    badge: "Public",
    badgeText: "Guest Web",
    badgeColor: "success",
    isExternal: true
  }
];
var AppFolderMiniPreview = ({
  apps,
  isOpen,
  onClick,
  tooltip = "NamiOS Apps",
  className
}) => {
  const previewApps = apps.slice(0, 4);
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip__default.default, { title: tooltip, arrow: true, placement: "bottom", children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.button,
    {
      type: "button",
      layoutId: "hotelos-app-folder-container",
      transition: FOLDER_LAYOUT_SPRING,
      onClick,
      "aria-label": tooltip,
      "aria-expanded": isOpen,
      "aria-haspopup": "dialog",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.94 },
      className,
      style: {
        width: 38,
        height: 38,
        borderRadius: 12,
        padding: 4,
        border: "1px solid rgba(229, 231, 235, 0.9)",
        background: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2.5,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyItems: "center"
          },
          children: previewApps.map((app) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                width: "100%",
                height: "100%",
                borderRadius: 3.5,
                background: app.iconBg || "#007AFF",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            app.id
          ))
        }
      )
    }
  ) });
};
var AppTile = ({
  app,
  isActive = false,
  onSelect
}) => {
  const [imgError, setImgError] = react.useState(false);
  const iconSrcToUse = app.lordIconSrc || app.iconSrc;
  const handleClick = () => {
    if (app.disabled) return;
    onSelect(app);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.div,
    {
      variants: APP_TILE_VARIANTS,
      whileHover: { scale: 1.06, y: -2 },
      whileTap: { scale: 0.94 },
      transition: { type: "spring", stiffness: 380, damping: 20 },
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: app.disabled ? -1 : 0,
      role: "button",
      "aria-label": `${app.name}${app.description ? `: ${app.description}` : ""}`,
      "aria-disabled": app.disabled,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "6px 4px",
        borderRadius: 16,
        cursor: app.disabled ? "not-allowed" : "pointer",
        opacity: app.disabled ? 0.5 : 1,
        position: "relative",
        userSelect: "none",
        outline: "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              width: 56,
              height: 56,
              borderRadius: 15,
              background: app.iconBg || "linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)",
              boxShadow: isActive ? "0 6px 18px rgba(0, 122, 255, 0.45), 0 0 0 2.5px #007AFF" : "0 6px 16px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
              marginBottom: 6,
              border: "1px solid rgba(255, 255, 255, 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "45%",
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
                    pointerEvents: "none"
                  }
                }
              ),
              iconSrcToUse && !imgError ? /* @__PURE__ */ jsxRuntime.jsx(
                "img",
                {
                  src: iconSrcToUse,
                  alt: app.name,
                  onError: () => setImgError(true),
                  style: { width: 32, height: 32, objectFit: "contain" },
                  draggable: false
                }
              ) : app.icon,
              isActive && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 3.5,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 0 4px rgba(255, 255, 255, 0.9)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "caption",
            sx: {
              fontWeight: 700,
              fontSize: "0.76rem",
              lineHeight: 1.2,
              color: "#0F172A",
              maxWidth: 86,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              letterSpacing: "-0.2px"
            },
            children: app.name
          }
        ),
        app.badge && /* @__PURE__ */ jsxRuntime.jsx(
          Chip5__default.default,
          {
            label: app.badge,
            size: "small",
            color: app.badgeColor || "default",
            sx: {
              mt: 0.4,
              height: 16,
              fontSize: "0.6rem",
              fontWeight: 800,
              borderRadius: "5px",
              "& .MuiChip-label": { px: 0.6 }
            }
          }
        )
      ]
    }
  );
};
var AppFolderModal = ({
  title = "NamiOS Ecosystem",
  subtitle = "Switch between NamiOS modules & portals",
  apps,
  currentAppId,
  isOpen,
  onClose,
  onSelectApp
}) => {
  const [search, setSearch] = react.useState("");
  const [selectedCategory, setSelectedCategory] = react.useState("all");
  const modalRef = react.useRef(null);
  react.useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setSelectedCategory("all");
    }
  }, [isOpen]);
  react.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  const categories = react.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    apps.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [apps]);
  const filteredApps = react.useMemo(() => {
    return apps.filter((app) => {
      const matchSearch = !search.trim() || app.name.toLowerCase().includes(search.toLowerCase()) || app.description && app.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === "all" || app.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [apps, search, selectedCategory]);
  const getCategoryLabel = (cat) => {
    switch (cat) {
      case "operations":
        return "Operations";
      case "food_beverage":
        return "F&B";
      case "platform":
        return "Platform";
      case "guest_experience":
        return "Guest Hub";
      case "management":
        return "Management";
      case "marketing":
        return "Public Web";
      default:
        return cat.replace("_", " ");
    }
  };
  if (typeof document === "undefined") return null;
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { mode: "wait", children: isOpen && /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: BACKDROP_TRANSITION,
              onClick: onClose,
              style: {
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(15, 23, 42, 0.18)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)"
              }
            },
            "backdrop"
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            framerMotion.motion.div,
            {
              ref: modalRef,
              variants: CONTAINER_VARIANTS,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              style: {
                position: "relative",
                width: "100%",
                maxWidth: 620,
                maxHeight: "88vh",
                borderRadius: 30,
                backgroundColor: "rgba(255, 255, 255, 0.94)",
                backdropFilter: "blur(28px) saturate(190%)",
                WebkitBackdropFilter: "blur(28px) saturate(190%)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 24px 60px -10px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
                padding: "24px 24px 18px 24px",
                display: "flex",
                flexDirection: "column",
                zIndex: 1,
                overflow: "hidden",
                boxSizing: "border-box",
                margin: "auto"
              },
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs(Box4__default.default, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }, children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(Box4__default.default, { sx: { pr: 2 }, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      Typography4__default.default,
                      {
                        variant: "h6",
                        sx: {
                          fontWeight: 800,
                          letterSpacing: "-0.3px",
                          fontSize: "1.25rem",
                          color: "#0F172A",
                          lineHeight: 1.2
                        },
                        children: title
                      }
                    ),
                    subtitle && /* @__PURE__ */ jsxRuntime.jsx(
                      Typography4__default.default,
                      {
                        variant: "caption",
                        sx: { color: "#64748B", fontWeight: 500, display: "block", mt: 0.5, fontSize: "0.8rem" },
                        children: subtitle
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    IconButton8__default.default,
                    {
                      size: "small",
                      onClick: onClose,
                      "aria-label": "Close apps directory",
                      sx: {
                        bgcolor: "rgba(0, 0, 0, 0.05)",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                        color: "#475569"
                      },
                      children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" })
                    }
                  )
                ] }),
                apps.length > 4 && /* @__PURE__ */ jsxRuntime.jsxs(
                  Box4__default.default,
                  {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                      borderRadius: "12px",
                      px: 1.5,
                      py: 0.75,
                      mb: 1.75,
                      border: "1px solid rgba(0, 0, 0, 0.05)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(SearchIcon__default.default, { sx: { fontSize: 18, color: "#94A3B8", mr: 1 } }),
                      /* @__PURE__ */ jsxRuntime.jsx(
                        InputBase__default.default,
                        {
                          placeholder: "Search applications...",
                          value: search,
                          onChange: (e) => setSearch(e.target.value),
                          fullWidth: true,
                          autoFocus: false,
                          inputProps: {
                            "aria-label": "Search apps",
                            style: { fontSize: "0.875rem", fontWeight: 500, padding: 0 }
                          }
                        }
                      ),
                      search && /* @__PURE__ */ jsxRuntime.jsx(IconButton8__default.default, { size: "small", onClick: () => setSearch(""), sx: { p: 0.25 }, children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { sx: { fontSize: 14 } }) })
                    ]
                  }
                ),
                categories.length > 1 && !search && /* @__PURE__ */ jsxRuntime.jsxs(
                  Box4__default.default,
                  {
                    sx: {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mb: 2,
                      alignItems: "center"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(
                        Chip5__default.default,
                        {
                          label: "All Apps",
                          size: "small",
                          onClick: () => setSelectedCategory("all"),
                          variant: selectedCategory === "all" ? "filled" : "outlined",
                          color: selectedCategory === "all" ? "primary" : "default",
                          sx: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: "8px"
                          }
                        }
                      ),
                      categories.map((cat) => /* @__PURE__ */ jsxRuntime.jsx(
                        Chip5__default.default,
                        {
                          label: getCategoryLabel(cat),
                          size: "small",
                          onClick: () => setSelectedCategory(cat),
                          variant: selectedCategory === cat ? "filled" : "outlined",
                          color: selectedCategory === cat ? "primary" : "default",
                          sx: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: "8px"
                          }
                        },
                        cat
                      ))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  Box4__default.default,
                  {
                    sx: {
                      flexGrow: 1,
                      overflowY: "auto",
                      py: 0.5,
                      pr: 0.5,
                      minHeight: 180,
                      "::-webkit-scrollbar": { width: 4 },
                      "::-webkit-scrollbar-thumb": {
                        bgcolor: "rgba(0, 0, 0, 0.12)",
                        borderRadius: 2
                      }
                    },
                    children: filteredApps.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { sx: { py: 6, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsxs(Typography4__default.default, { variant: "body2", color: "text.secondary", fontWeight: 600, children: [
                      "No apps found matching \u201C",
                      search,
                      "\u201D"
                    ] }) }) : /* @__PURE__ */ jsxRuntime.jsx(
                      framerMotion.motion.div,
                      {
                        variants: CONTAINER_VARIANTS,
                        initial: "hidden",
                        animate: "visible",
                        style: {
                          display: "grid",
                          gridTemplateColumns: "repeat(5, 1fr)",
                          gap: "14px 8px",
                          justifyItems: "center"
                        },
                        children: filteredApps.map((app) => /* @__PURE__ */ jsxRuntime.jsx(
                          AppTile,
                          {
                            app,
                            isActive: currentAppId === app.id,
                            onSelect: (selected) => {
                              onSelectApp(selected);
                              onClose();
                            }
                          },
                          app.id
                        ))
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  Box4__default.default,
                  {
                    sx: {
                      pt: 1.5,
                      mt: 1,
                      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", sx: { color: "#94A3B8", fontWeight: 600 }, children: "NamiOS Suite" }),
                      /* @__PURE__ */ jsxRuntime.jsxs(Typography4__default.default, { variant: "caption", sx: { color: "#94A3B8", fontSize: "0.7rem" }, children: [
                        "Press ",
                        /* @__PURE__ */ jsxRuntime.jsx("kbd", { style: { background: "rgba(0,0,0,0.06)", padding: "2px 4px", borderRadius: 4, fontWeight: 700 }, children: "Esc" }),
                        " to close"
                      ] })
                    ]
                  }
                )
              ]
            },
            "folder-modal"
          )
        ]
      }
    ) }),
    document.body
  );
};
var AppLauncher = ({
  title = "NamiOS Ecosystem",
  subtitle = "Switch between NamiOS modules & portals",
  apps = DEFAULT_HOTELOS_APPS,
  currentAppId = "stay-os",
  onSelectApp,
  className,
  tooltip = "NamiOS Apps"
}) => {
  const [isOpen, setIsOpen] = react.useState(false);
  const handleOpen = react.useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = react.useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleSelectApp = react.useCallback(
    (app) => {
      if (onSelectApp) {
        onSelectApp(app);
        return;
      }
      if (app.url) {
        if (app.isExternal) {
          window.open(app.url, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = app.url;
        }
      } else if (app.path) {
        window.location.href = app.path;
      }
    },
    [onSelectApp]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(framerMotion.MotionConfig, { transition: FOLDER_LAYOUT_SPRING, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      AppFolderMiniPreview,
      {
        apps,
        isOpen,
        onClick: handleOpen,
        tooltip,
        className
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      AppFolderModal,
      {
        title,
        subtitle,
        apps,
        currentAppId,
        isOpen,
        onClose: handleClose,
        onSelectApp: handleSelectApp
      }
    )
  ] });
};
var LayoutRoot = styles.styled("div")({
  display: "flex",
  minHeight: "100vh"
});
var ContentArea = styles.styled("main")(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default
}));
function DashboardLayout({
  navItems,
  activePath,
  onNavigate,
  appsLauncher = /* @__PURE__ */ jsxRuntime.jsx(AppLauncher, {}),
  logo,
  topBarActions,
  children
}) {
  const { isDesktop } = useMediaBreakpoint();
  const [mobileOpen, setMobileOpen] = react.useState(false);
  const handleNavigate = (path) => {
    setMobileOpen(false);
    onNavigate(path);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(LayoutRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      AppTopBar,
      {
        appsLauncher,
        logo,
        actions: topBarActions,
        onMenuClick: isDesktop ? void 0 : () => {
          setMobileOpen((open) => !open);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      AppSideNav,
      {
        items: navItems,
        activePath,
        onNavigate: handleNavigate,
        temporary: !isDesktop,
        mobileOpen,
        onMobileClose: () => {
          setMobileOpen(false);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(ContentArea, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
      children
    ] })
  ] });
}
var LaneContainer = styles.styled(Box4__default.default)(({ theme }) => ({
  flex: 1,
  minWidth: 280,
  maxWidth: 360,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === "light" ? "#F1F5F9" : "#0F172A",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  height: "100%",
  minHeight: 500,
  border: `1px solid ${theme.palette.mode === "light" ? "#E2E8F0" : "#1E293B"}`
}));
var ColumnHeader = styles.styled(Box4__default.default)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1.5),
  borderBottom: `2px solid ${theme.palette.divider}`
}));
var ItemsScrollArea = styles.styled(Box4__default.default)(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  paddingRight: theme.spacing(0.5),
  "&::-webkit-scrollbar": {
    width: 6
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.mode === "light" ? "#CBD5E1" : "#475569",
    borderRadius: 3
  }
}));
function KanbanBoard({
  columns,
  items,
  getItemId,
  getItemColumnId,
  renderItem
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Stack3__default.default,
    {
      direction: "row",
      spacing: 2.5,
      sx: {
        overflowX: "auto",
        pb: 2,
        height: "100%",
        alignItems: "stretch",
        minHeight: 550
      },
      children: columns.map((column) => {
        const laneItems = items.filter((item) => getItemColumnId(item) === column.id);
        return /* @__PURE__ */ jsxRuntime.jsxs(LaneContainer, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(ColumnHeader, { children: [
            /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", spacing: 1.5, alignItems: "center", children: [
              column.color && /* @__PURE__ */ jsxRuntime.jsx(
                Box4__default.default,
                {
                  sx: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: column.color
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "subtitle2", sx: { fontWeight: 700, letterSpacing: "0.05em" }, children: column.title })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Card__default.default,
              {
                variant: "outlined",
                sx: {
                  px: 1,
                  py: 0.25,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  borderColor: "divider",
                  boxShadow: "none"
                },
                children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", sx: { fontWeight: 700 }, children: laneItems.length })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ItemsScrollArea, { children: laneItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { sx: { position: "relative" }, children: renderItem(item) }, getItemId(item))) })
        ] }, column.id);
      })
    }
  );
}
function SplitPaneLayout({
  leftPane,
  rightPane,
  rightWidth = 400
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box4__default.default,
    {
      sx: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        width: "100%",
        height: "100%",
        alignItems: "stretch"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Box4__default.default,
          {
            sx: {
              flexGrow: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column"
            },
            children: leftPane
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Box4__default.default,
          {
            sx: {
              width: { xs: "100%", md: rightWidth },
              flexShrink: 0,
              position: { md: "sticky" },
              top: { md: 88 },
              // Adjust based on TopBar height (topBarHeight is 64, offset by spacing)
              height: { md: "calc(100vh - 120px)" },
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: rightPane
          }
        )
      ]
    }
  );
}
var StyledCard = styles.styled(Card__default.default, {
  shouldForwardProp: (prop) => prop !== "activeBorderColor" && prop !== "hasAction"
})(({ theme, activeBorderColor, hasAction }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out",
  cursor: hasAction ? "pointer" : "default",
  border: activeBorderColor ? `2px solid ${activeBorderColor}` : `1px solid ${theme.palette.divider}`,
  "&:hover": hasAction ? {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
    borderColor: activeBorderColor || theme.palette.text.secondary
  } : {}
}));
var ImageContainer = styles.styled(Box4__default.default)({
  position: "relative",
  paddingTop: "60%",
  // 5:3 Aspect Ratio
  width: "100%",
  overflow: "hidden"
});
var MediaOverlay = styles.styled(Box4__default.default)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.2s ease-in-out",
  "&:hover": {
    opacity: 1
  }
});
function MenuCard({
  name,
  price,
  description,
  imageUrl,
  badges,
  stockLabel,
  stockColor = "default",
  actionOverlay,
  activeBorderColor,
  onClick
}) {
  const { formatCurrency } = useLocaleFormat();
  const formattedPrice = typeof price === "number" ? formatCurrency(price) : price;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    StyledCard,
    {
      activeBorderColor,
      hasAction: Boolean(onClick),
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(ImageContainer, { children: [
          imageUrl ? /* @__PURE__ */ jsxRuntime.jsx(
            CardMedia__default.default,
            {
              component: "img",
              image: imageUrl,
              alt: name,
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }
          ) : /* @__PURE__ */ jsxRuntime.jsx(
            Box4__default.default,
            {
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "action.hover"
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", sx: { fontWeight: 600 }, children: "No Image" })
            }
          ),
          actionOverlay && /* @__PURE__ */ jsxRuntime.jsx(MediaOverlay, { children: actionOverlay })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(CardContent__default.default, { sx: { p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 1, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "subtitle1", sx: { fontWeight: 700, lineHeight: 1.2 }, noWrap: true, children: name }),
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "subtitle1", color: "primary", sx: { fontWeight: 700 }, children: formattedPrice })
          ] }),
          description && /* @__PURE__ */ jsxRuntime.jsx(
            Typography4__default.default,
            {
              variant: "body2",
              color: "text.secondary",
              sx: {
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: 40,
                lineHeight: 1.4
              },
              children: description
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { sx: { flexGrow: 1 } }),
          /* @__PURE__ */ jsxRuntime.jsxs(Stack3__default.default, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, alignItems: "center", sx: { mt: 1 }, children: [
            badges?.map((badge, idx) => /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { children: badge }, idx)),
            /* @__PURE__ */ jsxRuntime.jsx(Box4__default.default, { sx: { flexGrow: 1 } }),
            stockLabel && /* @__PURE__ */ jsxRuntime.jsx(
              Chip5__default.default,
              {
                label: stockLabel,
                size: "small",
                color: stockColor,
                sx: { fontWeight: 700, fontSize: "0.65rem", height: 20 }
              }
            )
          ] })
        ] })
      ]
    }
  );
}
var DETERMINISTIC_COLORS = [
  "#007AFF",
  // Blue
  "#5856D6",
  // Purple
  "#AF52DE",
  // Magenta
  "#FF2D55",
  // Pink
  "#FF9500",
  // Orange
  "#34C759",
  // Green
  "#00C7BE",
  // Teal
  "#32ADE6"
  // Light Blue
];
var getAvatarBgColor = (seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DETERMINISTIC_COLORS.length;
  return DETERMINISTIC_COLORS[index] ?? "#007AFF";
};
var UserAvatar = ({
  name = "",
  email = "",
  avatarUrl,
  size = 36,
  sx,
  fontSize,
  className
}) => {
  const [imageSrc, setImageSrc] = react.useState(avatarUrl);
  const [imageError, setImageError] = react.useState(false);
  react.useEffect(() => {
    if (avatarUrl) {
      setImageSrc(avatarUrl);
      setImageError(false);
      return;
    }
    try {
      const stored = window.localStorage.getItem("hotelos.avatar");
      if (stored) {
        setImageSrc(stored);
        setImageError(false);
      }
    } catch {
    }
  }, [avatarUrl]);
  const displayName = name.trim() || email.trim() || "User";
  const initials = initialsFromName(displayName);
  const bgColor = getAvatarBgColor(displayName);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Avatar__default.default,
    {
      src: imageError ? void 0 : imageSrc,
      alt: displayName,
      imgProps: {
        onError: () => setImageError(true)
      },
      className,
      sx: {
        width: size,
        height: size,
        bgcolor: bgColor,
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: fontSize ?? Math.max(12, Math.floor(size * 0.4)),
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...sx
      },
      children: initials
    }
  );
};

// src/i18n/locales/de/common.json
var common_default = {
  appName: "NamiOS",
  actions: {
    save: "Speichern",
    cancel: "Abbrechen",
    delete: "L\xF6schen",
    edit: "Bearbeiten",
    view: "Ansehen",
    create: "Erstellen",
    search: "Suchen",
    filter: "Filtern",
    export: "Exportieren",
    refresh: "Aktualisieren",
    back: "Zur\xFCck",
    next: "Weiter",
    previous: "Vorherige",
    confirm: "Best\xE4tigen",
    close: "Schlie\xDFen",
    retry: "Erneut versuchen",
    logout: "Abmelden",
    login: "Anmelden",
    clear: "Leeren",
    changeLanguage: "Sprache \xE4ndern",
    openMenu: "Men\xFC \xF6ffnen",
    showPassword: "Passwort anzeigen",
    hidePassword: "Passwort verbergen"
  },
  states: {
    loading: "Wird geladen\u2026",
    noResults: "Keine Ergebnisse gefunden",
    errorTitle: "Etwas ist schiefgelaufen",
    error: {
      generic: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      network: "Netzwerkfehler. Pr\xFCfen Sie Ihre Verbindung und versuchen Sie es erneut."
    },
    success: {
      saved: "Erfolgreich gespeichert",
      deleted: "Erfolgreich gel\xF6scht"
    }
  },
  table: {
    rowsPerPage: "Zeilen pro Seite",
    of: "von",
    page: "Seite",
    sortBy: "Sortieren nach",
    actions: "Aktionen",
    selectAll: "Alle Zeilen ausw\xE4hlen",
    selectRow: "Zeile ausw\xE4hlen",
    displayedRows: "{{from}}\u2013{{to}} von {{count}}"
  },
  validation: {
    required: "Dieses Feld ist erforderlich",
    email: "Geben Sie eine g\xFCltige E-Mail-Adresse ein",
    minLength: "Muss mindestens {{count}} Zeichen enthalten",
    maxLength: "Darf h\xF6chstens {{count}} Zeichen enthalten",
    passwordWeak: "Das Passwort ben\xF6tigt 8+ Zeichen mit Gro\xDF-, Kleinbuchstaben und einer Ziffer",
    passwordMismatch: "Die Passw\xF6rter stimmen nicht \xFCberein"
  },
  datetime: {
    today: "Heute",
    yesterday: "Gestern"
  },
  status: {
    ACTIVE: "Aktiv",
    INACTIVE: "Inaktiv",
    PENDING: "Ausstehend",
    SUSPENDED: "Gesperrt",
    EXPIRED: "Abgelaufen",
    CANCELLED: "Storniert"
  },
  timeline: {
    resource: "Ressource",
    today: "Heute",
    legend: "Legende"
  },
  wizard: {
    step: "Schritt {{current}} von {{total}}",
    finish: "Fertigstellen"
  },
  dateRange: {
    label: "Zeitraum",
    from: "Von",
    to: "Bis",
    apply: "Anwenden",
    presets: {
      last7: "Letzte 7 Tage",
      next7: "N\xE4chste 7 Tage",
      next14: "N\xE4chste 14 Tage",
      thisMonth: "Dieser Monat"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Tisch",
    floor: "Etage",
    seats: "Sitze",
    queued: "Warteschlange",
    preparing: "In Zubereitung",
    ready: "Bereit",
    served: "Serviert",
    inStock: "Auf Lager",
    outOfStock: "Nicht auf Lager"
  }
};

// src/i18n/locales/en/common.json
var common_default2 = {
  appName: "NamiOS",
  actions: {
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    create: "Create",
    search: "Search",
    filter: "Filter",
    export: "Export",
    refresh: "Refresh",
    back: "Back",
    next: "Next",
    previous: "Previous",
    confirm: "Confirm",
    close: "Close",
    retry: "Retry",
    logout: "Log out",
    login: "Log in",
    clear: "Clear",
    changeLanguage: "Change language",
    openMenu: "Open menu",
    showPassword: "Show password",
    hidePassword: "Hide password"
  },
  states: {
    loading: "Loading\u2026",
    noResults: "No results found",
    errorTitle: "Something went wrong",
    error: {
      generic: "An unexpected error occurred. Please try again.",
      network: "Network error. Check your connection and try again."
    },
    success: {
      saved: "Saved successfully",
      deleted: "Deleted successfully"
    }
  },
  table: {
    rowsPerPage: "Rows per page",
    of: "of",
    page: "Page",
    sortBy: "Sort by",
    actions: "Actions",
    selectAll: "Select all rows",
    selectRow: "Select row",
    displayedRows: "{{from}}\u2013{{to}} of {{count}}"
  },
  validation: {
    required: "This field is required",
    email: "Enter a valid email address",
    minLength: "Must be at least {{count}} characters",
    maxLength: "Must be at most {{count}} characters",
    passwordWeak: "Password needs 8+ characters with uppercase, lowercase and a number",
    passwordMismatch: "Passwords do not match"
  },
  datetime: {
    today: "Today",
    yesterday: "Yesterday"
  },
  status: {
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    PENDING: "Pending",
    SUSPENDED: "Suspended",
    EXPIRED: "Expired",
    CANCELLED: "Cancelled"
  },
  timeline: {
    resource: "Resource",
    today: "Today",
    legend: "Legend"
  },
  wizard: {
    step: "Step {{current}} of {{total}}",
    finish: "Finish"
  },
  dateRange: {
    label: "Date range",
    from: "From",
    to: "To",
    apply: "Apply",
    presets: {
      last7: "Last 7 days",
      next7: "Next 7 days",
      next14: "Next 14 days",
      thisMonth: "This month"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Table",
    floor: "Floor",
    seats: "Seats",
    queued: "Queued",
    preparing: "Preparing",
    ready: "Ready",
    served: "Served",
    inStock: "In Stock",
    outOfStock: "Out of Stock"
  }
};

// src/i18n/locales/es/common.json
var common_default3 = {
  appName: "NamiOS",
  actions: {
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    view: "Ver",
    create: "Crear",
    search: "Buscar",
    filter: "Filtrar",
    export: "Exportar",
    refresh: "Actualizar",
    back: "Atr\xE1s",
    next: "Siguiente",
    previous: "Anterior",
    confirm: "Confirmar",
    close: "Cerrar",
    retry: "Reintentar",
    logout: "Cerrar sesi\xF3n",
    login: "Iniciar sesi\xF3n",
    clear: "Borrar",
    changeLanguage: "Cambiar idioma",
    openMenu: "Abrir men\xFA",
    showPassword: "Mostrar contrase\xF1a",
    hidePassword: "Ocultar contrase\xF1a"
  },
  states: {
    loading: "Cargando\u2026",
    noResults: "No se encontraron resultados",
    errorTitle: "Algo sali\xF3 mal",
    error: {
      generic: "Ocurri\xF3 un error inesperado. Int\xE9ntalo de nuevo.",
      network: "Error de red. Comprueba tu conexi\xF3n e int\xE9ntalo de nuevo."
    },
    success: {
      saved: "Guardado correctamente",
      deleted: "Eliminado correctamente"
    }
  },
  table: {
    rowsPerPage: "Filas por p\xE1gina",
    of: "de",
    page: "P\xE1gina",
    sortBy: "Ordenar por",
    actions: "Acciones",
    selectAll: "Seleccionar todas las filas",
    selectRow: "Seleccionar fila",
    displayedRows: "{{from}}\u2013{{to}} de {{count}}"
  },
  validation: {
    required: "Este campo es obligatorio",
    email: "Introduce una direcci\xF3n de correo v\xE1lida",
    minLength: "Debe tener al menos {{count}} caracteres",
    maxLength: "Debe tener como m\xE1ximo {{count}} caracteres",
    passwordWeak: "La contrase\xF1a necesita 8+ caracteres con may\xFAscula, min\xFAscula y un n\xFAmero",
    passwordMismatch: "Las contrase\xF1as no coinciden"
  },
  datetime: {
    today: "Hoy",
    yesterday: "Ayer"
  },
  status: {
    ACTIVE: "Activo",
    INACTIVE: "Inactivo",
    PENDING: "Pendiente",
    SUSPENDED: "Suspendido",
    EXPIRED: "Vencido",
    CANCELLED: "Cancelado"
  },
  timeline: {
    resource: "Recurso",
    today: "Hoy",
    legend: "Leyenda"
  },
  wizard: {
    step: "Paso {{current}} de {{total}}",
    finish: "Finalizar"
  },
  dateRange: {
    label: "Rango de fechas",
    from: "Desde",
    to: "Hasta",
    apply: "Aplicar",
    presets: {
      last7: "\xDAltimos 7 d\xEDas",
      next7: "Pr\xF3ximos 7 d\xEDas",
      next14: "Pr\xF3ximos 14 d\xEDas",
      thisMonth: "Este mes"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Mesa",
    floor: "Piso",
    seats: "Asientos",
    queued: "En cola",
    preparing: "Preparando",
    ready: "Listo",
    served: "Servido",
    inStock: "En stock",
    outOfStock: "Agotado"
  }
};

// src/i18n/locales/fr/common.json
var common_default4 = {
  appName: "NamiOS",
  actions: {
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    view: "Voir",
    create: "Cr\xE9er",
    search: "Rechercher",
    filter: "Filtrer",
    export: "Exporter",
    refresh: "Actualiser",
    back: "Retour",
    next: "Suivant",
    previous: "Pr\xE9c\xE9dent",
    confirm: "Confirmer",
    close: "Fermer",
    retry: "R\xE9essayer",
    logout: "Se d\xE9connecter",
    login: "Se connecter",
    clear: "Effacer",
    changeLanguage: "Changer de langue",
    openMenu: "Ouvrir le menu",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe"
  },
  states: {
    loading: "Chargement\u2026",
    noResults: "Aucun r\xE9sultat trouv\xE9",
    errorTitle: "Une erreur est survenue",
    error: {
      generic: "Une erreur inattendue est survenue. Veuillez r\xE9essayer.",
      network: "Erreur r\xE9seau. V\xE9rifiez votre connexion et r\xE9essayez."
    },
    success: {
      saved: "Enregistr\xE9 avec succ\xE8s",
      deleted: "Supprim\xE9 avec succ\xE8s"
    }
  },
  table: {
    rowsPerPage: "Lignes par page",
    of: "sur",
    page: "Page",
    sortBy: "Trier par",
    actions: "Actions",
    selectAll: "S\xE9lectionner toutes les lignes",
    selectRow: "S\xE9lectionner la ligne",
    displayedRows: "{{from}}\u2013{{to}} sur {{count}}"
  },
  validation: {
    required: "Ce champ est obligatoire",
    email: "Saisissez une adresse e-mail valide",
    minLength: "Doit contenir au moins {{count}} caract\xE8res",
    maxLength: "Doit contenir au maximum {{count}} caract\xE8res",
    passwordWeak: "Le mot de passe doit contenir 8+ caract\xE8res avec majuscule, minuscule et un chiffre",
    passwordMismatch: "Les mots de passe ne correspondent pas"
  },
  datetime: {
    today: "Aujourd'hui",
    yesterday: "Hier"
  },
  status: {
    ACTIVE: "Actif",
    INACTIVE: "Inactif",
    PENDING: "En attente",
    SUSPENDED: "Suspendu",
    EXPIRED: "Expir\xE9",
    CANCELLED: "Annul\xE9"
  },
  timeline: {
    resource: "Ressource",
    today: "Aujourd'hui",
    legend: "L\xE9gende"
  },
  wizard: {
    step: "\xC9tape {{current}} sur {{total}}",
    finish: "Terminer"
  },
  dateRange: {
    label: "Plage de dates",
    from: "Du",
    to: "Au",
    apply: "Appliquer",
    presets: {
      last7: "7 derniers jours",
      next7: "7 prochains jours",
      next14: "14 prochains jours",
      thisMonth: "Ce mois-ci"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Table",
    floor: "\xC9tage",
    seats: "Si\xE8ges",
    queued: "En file d'attente",
    preparing: "En pr\xE9paration",
    ready: "Pr\xEAt",
    served: "Servi",
    inStock: "En stock",
    outOfStock: "En rupture de stock"
  }
};

// src/i18n/locales/si/common.json
var common_default5 = {
  appName: "NamiOS",
  actions: {
    save: "\u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1",
    cancel: "\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    delete: "\u0DB8\u0D9A\u0DB1\u0DCA\u0DB1",
    edit: "\u0DC3\u0D82\u0DC3\u0DCA\u0D9A\u0DBB\u0DAB\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    view: "\u0DB6\u0DBD\u0DB1\u0DCA\u0DB1",
    create: "\u0DC3\u0DCF\u0DAF\u0DB1\u0DCA\u0DB1",
    search: "\u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
    filter: "\u0DB4\u0DD9\u0DBB\u0DC4\u0DB1",
    export: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DBA\u0DCF\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    refresh: "\u0DB1\u0DD0\u0DC0\u0DD4\u0DB8\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    back: "\u0D86\u0DB4\u0DC3\u0DD4",
    next: "\u0D8A\u0DC5\u0D9F",
    previous: "\u0DB4\u0DD9\u0DBB",
    confirm: "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    close: "\u0DC0\u0DC3\u0DB1\u0DCA\u0DB1",
    retry: "\u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    logout: "\u0DB4\u0DD2\u0DA7\u0DC0\u0DB1\u0DCA\u0DB1",
    login: "\u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD9\u0DB1\u0DCA\u0DB1",
    clear: "\u0DC4\u0DD2\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    changeLanguage: "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    openMenu: "\u0DB8\u0DD9\u0DB1\u0DD4\u0DC0 \u0DC0\u0DD2\u0DC0\u0DD8\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    showPassword: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DB4\u0DD9\u0DB1\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
    hidePassword: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DC3\u0D9F\u0DC0\u0DB1\u0DCA\u0DB1"
  },
  states: {
    loading: "\u0DB4\u0DD6\u0DBB\u0DAB\u0DBA \u0DC0\u0DD9\u0DB8\u0DD2\u0DB1\u0DCA\u2026",
    noResults: "\u0DB4\u0DCA\u200D\u0DBB\u0DAD\u0DD2\u0DB5\u0DBD \u0DC4\u0DB8\u0DD4 \u0DB1\u0DDC\u0DC0\u0DD3\u0DBA",
    errorTitle: "\u0DBA\u0DB8\u0D9A\u0DCA \u0DC0\u0DD0\u0DBB\u0DAF\u0DD3 \u0D87\u0DAD",
    error: {
      generic: "\u0D85\u0DB1\u0DB4\u0DDA\u0D9A\u0DCA\u0DC2\u0DD2\u0DAD \u0DAF\u0DDD\u0DC2\u0DBA\u0D9A\u0DCA \u0DC3\u0DD2\u0DAF\u0DD4 \u0DC0\u0DD2\u0DBA. \u0D9A\u0DBB\u0DD4\u0DAB\u0DCF\u0D9A\u0DBB \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
      network: "\u0DA2\u0DCF\u0DBD \u0DAF\u0DDD\u0DC2\u0DBA\u0D9A\u0DD2. \u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0\u0DAD\u0DCF\u0DC0\u0DBA \u0DB4\u0DBB\u0DD3\u0D9A\u0DCA\u0DC2\u0DCF \u0D9A\u0DBB \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1."
    },
    success: {
      saved: "\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DC0 \u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1 \u0DBD\u0DAF\u0DD3",
      deleted: "\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DC0 \u0DB8\u0D9A\u0DCF \u0DAF\u0DB8\u0DB1 \u0DBD\u0DAF\u0DD3"
    }
  },
  table: {
    rowsPerPage: "\u0DB4\u0DD2\u0DA7\u0DD4\u0DC0\u0D9A\u0DA7 \u0DB4\u0DDA\u0DC5\u0DD2",
    of: "\u0D9A\u0DD2\u0DB1\u0DCA",
    page: "\u0DB4\u0DD2\u0DA7\u0DD4\u0DC0",
    sortBy: "\u0D85\u0DB1\u0DD4\u0DC0 \u0DB4\u0DD9\u0DC5\u0D9C\u0DC3\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
    actions: "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF",
    selectAll: "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0DB4\u0DDA\u0DC5\u0DD2 \u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1",
    selectRow: "\u0DB4\u0DDA\u0DC5\u0DD2\u0DBA \u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1",
    displayedRows: "{{count}} \u0D9A\u0DD2\u0DB1\u0DCA {{from}}\u2013{{to}}"
  },
  validation: {
    required: "\u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u0DC2\u0DDA\u0DAD\u0DCA\u200D\u0DBB\u0DBA \u0D85\u0DC0\u0DC1\u0DCA\u200D\u0DBA\u0DBA\u0DD2",
    email: "\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0DC0\u0DD2\u0DAF\u0DCA\u200D\u0DBA\u0DD4\u0DAD\u0DCA \u0DAD\u0DD0\u0DB4\u0DD0\u0DBD\u0DCA \u0DBD\u0DD2\u0DB4\u0DD2\u0DB1\u0DBA\u0D9A\u0DCA \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    minLength: "\u0D85\u0DC0\u0DB8 \u0DC0\u0DC1\u0DBA\u0DD9\u0DB1\u0DCA \u0D85\u0D9A\u0DCA\u0DC2\u0DBB {{count}}\u0D9A\u0DCA \u0DC0\u0DD2\u0DBA \u0DBA\u0DD4\u0DAD\u0DD4\u0DBA",
    maxLength: "\u0D8B\u0DB4\u0DBB\u0DD2\u0DB8 \u0DC0\u0DC1\u0DBA\u0DD9\u0DB1\u0DCA \u0D85\u0D9A\u0DCA\u0DC2\u0DBB {{count}}\u0D9A\u0DCA \u0DC0\u0DD2\u0DBA \u0DBA\u0DD4\u0DAD\u0DD4\u0DBA",
    passwordWeak: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA\u0DA7 \u0D85\u0DC0\u0DB8 \u0D85\u0D9A\u0DCA\u0DC2\u0DBB 8\u0D9A\u0DCA, \u0D9A\u0DD0\u0DB4\u0DD2\u0DA7\u0DBD\u0DCA \u0D85\u0D9A\u0DD4\u0DBB\u0D9A\u0DCA, \u0DC3\u0DD2\u0DB8\u0DCA\u0DB4\u0DBD\u0DCA \u0D85\u0D9A\u0DD4\u0DBB\u0D9A\u0DCA \u0DC3\u0DC4 \u0D89\u0DBD\u0D9A\u0DCA\u0D9A\u0DB8\u0D9A\u0DCA \u0D85\u0DC0\u0DC1\u0DCA\u200D\u0DBA\u0DBA\u0DD2",
    passwordMismatch: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF \u0DB1\u0DDC\u0D9C\u0DD0\u0DBD\u0DB4\u0DDA"
  },
  datetime: {
    today: "\u0D85\u0DAF",
    yesterday: "\u0D8A\u0DBA\u0DDA"
  },
  status: {
    ACTIVE: "\u0DC3\u0D9A\u0DCA\u200D\u0DBB\u0DD3\u0DBA\u0DBA\u0DD2",
    INACTIVE: "\u0D85\u0D9A\u0DCA\u200D\u0DBB\u0DD3\u0DBA\u0DBA\u0DD2",
    PENDING: "\u0DB4\u0DDC\u0DBB\u0DDC\u0DAD\u0DCA\u0DAD\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA",
    SUSPENDED: "\u0D85\u0DAD\u0DCA\u0DC4\u0DD2\u0DA7\u0DD4\u0DC0\u0DCF \u0D87\u0DAD",
    EXPIRED: "\u0D9A\u0DBD\u0DCA \u0D89\u0D9A\u0DD4\u0DAD\u0DCA \u0DC0\u0DD3 \u0D87\u0DAD",
    CANCELLED: "\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD"
  },
  timeline: {
    resource: "\u0DC3\u0DB8\u0DCA\u0DB4\u0DAD",
    today: "\u0D85\u0DAF",
    legend: "\u0DC3\u0D82\u0D9A\u0DDA\u0DAD"
  },
  wizard: {
    step: "\u0DB4\u0DD2\u0DBA\u0DC0\u0DBB {{total}} \u0D9A\u0DD2\u0DB1\u0DCA {{current}}",
    finish: "\u0D85\u0DC0\u0DC3\u0DB1\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1"
  },
  dateRange: {
    label: "\u0DAF\u0DD2\u0DB1 \u0DB4\u0DBB\u0DCF\u0DC3\u0DBA",
    from: "\u0DC3\u0DD2\u0DA7",
    to: "\u0DAF\u0D9A\u0DCA\u0DC0\u0DCF",
    apply: "\u0DBA\u0DDC\u0DAF\u0DB1\u0DCA\u0DB1",
    presets: {
      last7: "\u0DB4\u0DC3\u0DD4\u0D9C\u0DD2\u0DBA \u0DAF\u0DD2\u0DB1 7",
      next7: "\u0D89\u0DAF\u0DD2\u0DBB\u0DD2 \u0DAF\u0DD2\u0DB1 7",
      next14: "\u0D89\u0DAF\u0DD2\u0DBB\u0DD2 \u0DAF\u0DD2\u0DB1 14",
      thisMonth: "\u0DB8\u0DD9\u0DB8 \u0DB8\u0DCF\u0DC3\u0DBA"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "\u0DB8\u0DDA\u0DC3\u0DBA",
    floor: "\u0DB8\u0DC4\u0DBD",
    seats: "\u0D86\u0DC3\u0DB1",
    queued: "\u0DB4\u0DD9\u0DC5 \u0D9C\u0DD0\u0DC3\u0DD6",
    preparing: "\u0DC3\u0DD6\u0DAF\u0DCF\u0DB1\u0DB8\u0DCA \u0D9A\u0DBB\u0DB8\u0DD2\u0DB1\u0DCA",
    ready: "\u0DC3\u0DD6\u0DAF\u0DCF\u0DB1\u0DB8\u0DCA",
    served: "\u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DD0\u0DB1\u0DCA\u0DC0\u0DD6",
    inStock: "\u0DAD\u0DDC\u0D9C\u0DBA\u0DDA \u0D87\u0DAD",
    outOfStock: "\u0DAD\u0DDC\u0D9C\u0DBA\u0DDA \u0DB1\u0DD0\u0DAD"
  }
};

// src/i18n/locales/ta/common.json
var common_default6 = {
  appName: "NamiOS",
  actions: {
    save: "\u0B9A\u0BC7\u0BAE\u0BBF",
    cancel: "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD",
    delete: "\u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BC1",
    edit: "\u0BA4\u0BBF\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    view: "\u0BAA\u0BBE\u0BB0\u0BCD",
    create: "\u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1",
    search: "\u0BA4\u0BC7\u0B9F\u0BC1",
    filter: "\u0BB5\u0B9F\u0BBF\u0B95\u0B9F\u0BCD\u0B9F\u0BC1",
    export: "\u0B8F\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BA4\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD",
    refresh: "\u0BAA\u0BC1\u0BA4\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF",
    back: "\u0BAA\u0BBF\u0BA9\u0BCD \u0B9A\u0BC6\u0BB2\u0BCD",
    next: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    previous: "\u0BAE\u0BC1\u0BA8\u0BCD\u0BA4\u0BC8\u0BAF\u0BA4\u0BC1",
    confirm: "\u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    close: "\u0BAE\u0BC2\u0B9F\u0BC1",
    retry: "\u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF",
    logout: "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BC1",
    login: "\u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8",
    clear: "\u0B85\u0BB4\u0BBF",
    changeLanguage: "\u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BC8 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
    openMenu: "\u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1",
    showPassword: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1",
    hidePassword: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BC8 \u0BAE\u0BB1\u0BC8"
  },
  states: {
    loading: "\u0B8F\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1\u2026",
    noResults: "\u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
    errorTitle: "\u0B8F\u0BA4\u0BCB \u0BA4\u0BB5\u0BB1\u0BC1 \u0BA8\u0B9F\u0BA8\u0BCD\u0BA4\u0BC1\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    error: {
      generic: "\u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BBE\u0BA4 \u0BAA\u0BBF\u0BB4\u0BC8 \u0B8F\u0BB1\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
      network: "\u0B87\u0BA3\u0BC8\u0BAF\u0BAA\u0BCD \u0BAA\u0BBF\u0BB4\u0BC8. \u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0B9A\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD."
    },
    success: {
      saved: "\u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
      deleted: "\u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95 \u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1"
    }
  },
  table: {
    rowsPerPage: "\u0BAA\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0B95\u0BB3\u0BCD",
    of: "\u0B87\u0BB2\u0BCD",
    page: "\u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
    sortBy: "\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    actions: "\u0B9A\u0BC6\u0BAF\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
    selectAll: "\u0B8E\u0BB2\u0BCD\u0BB2\u0BBE \u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0B95\u0BB3\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
    selectRow: "\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
    displayedRows: "{{count}} \u0B87\u0BB2\u0BCD {{from}}\u2013{{to}}"
  },
  validation: {
    required: "\u0B87\u0BA8\u0BCD\u0BA4\u0BAA\u0BCD \u0BAA\u0BC1\u0BB2\u0BAE\u0BCD \u0B85\u0BB5\u0B9A\u0BBF\u0BAF\u0BAE\u0BCD",
    email: "\u0B9A\u0BB0\u0BBF\u0BAF\u0BBE\u0BA9 \u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF\u0BAF\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
    minLength: "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 {{count}} \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    maxLength: "\u0B85\u0BA4\u0BBF\u0B95\u0BAA\u0B9F\u0BCD\u0B9A\u0BAE\u0BCD {{count}} \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BC7",
    passwordWeak: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BBF\u0BB2\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD, \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1, \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B8E\u0BA3\u0BCD \u0BA4\u0BC7\u0BB5\u0BC8",
    passwordMismatch: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB1\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8"
  },
  datetime: {
    today: "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1",
    yesterday: "\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1"
  },
  status: {
    ACTIVE: "\u0B9A\u0BC6\u0BAF\u0BB2\u0BBF\u0BB2\u0BCD",
    INACTIVE: "\u0B9A\u0BC6\u0BAF\u0BB2\u0BB1\u0BCD\u0BB1\u0BA4\u0BC1",
    PENDING: "\u0BA8\u0BBF\u0BB2\u0BC1\u0BB5\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD",
    SUSPENDED: "\u0B87\u0B9F\u0BC8\u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    EXPIRED: "\u0B95\u0BBE\u0BB2\u0BBE\u0BB5\u0BA4\u0BBF\u0BAF\u0BBE\u0BA9\u0BA4\u0BC1",
    CANCELLED: "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1"
  },
  timeline: {
    resource: "\u0BB5\u0BB3\u0BAE\u0BCD",
    today: "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1",
    legend: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1"
  },
  wizard: {
    step: "\u0BAA\u0B9F\u0BBF {{current}} / {{total}}",
    finish: "\u0BAE\u0BC1\u0B9F\u0BBF"
  },
  dateRange: {
    label: "\u0BA4\u0BC7\u0BA4\u0BBF \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    from: "\u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1",
    to: "\u0BB5\u0BB0\u0BC8",
    apply: "\u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    presets: {
      last7: "\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      next7: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      next14: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 14 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      thisMonth: "\u0B87\u0BA8\u0BCD\u0BA4 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "\u0BAE\u0BC7\u0B9C\u0BC8",
    floor: "\u0BA4\u0BB3\u0BAE\u0BCD",
    seats: "\u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC8\u0B95\u0BB3\u0BCD",
    queued: "\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1",
    preparing: "\u0BA4\u0BAF\u0BBE\u0BB0\u0BBE\u0B95\u0BBF\u0BB1\u0BA4\u0BC1",
    ready: "\u0BA4\u0BAF\u0BBE\u0BB0\u0BCD",
    served: "\u0BAA\u0BB0\u0BBF\u0BAE\u0BBE\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    inStock: "\u0B95\u0BC8\u0BAF\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1",
    outOfStock: "\u0B95\u0BC8\u0BAF\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8"
  }
};

// src/i18n/locales/zh/common.json
var common_default7 = {
  appName: "NamiOS",
  actions: {
    save: "\u4FDD\u5B58",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    edit: "\u7F16\u8F91",
    view: "\u67E5\u770B",
    create: "\u65B0\u5EFA",
    search: "\u641C\u7D22",
    filter: "\u7B5B\u9009",
    export: "\u5BFC\u51FA",
    refresh: "\u5237\u65B0",
    back: "\u8FD4\u56DE",
    next: "\u4E0B\u4E00\u6B65",
    previous: "\u4E0A\u4E00\u6B65",
    confirm: "\u786E\u8BA4",
    close: "\u5173\u95ED",
    retry: "\u91CD\u8BD5",
    logout: "\u9000\u51FA\u767B\u5F55",
    login: "\u767B\u5F55",
    clear: "\u6E05\u9664",
    changeLanguage: "\u5207\u6362\u8BED\u8A00",
    openMenu: "\u6253\u5F00\u83DC\u5355",
    showPassword: "\u663E\u793A\u5BC6\u7801",
    hidePassword: "\u9690\u85CF\u5BC6\u7801"
  },
  states: {
    loading: "\u52A0\u8F7D\u4E2D\u2026",
    noResults: "\u672A\u627E\u5230\u7ED3\u679C",
    errorTitle: "\u51FA\u9519\u4E86",
    error: {
      generic: "\u53D1\u751F\u610F\u5916\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
      network: "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"
    },
    success: {
      saved: "\u4FDD\u5B58\u6210\u529F",
      deleted: "\u5220\u9664\u6210\u529F"
    }
  },
  table: {
    rowsPerPage: "\u6BCF\u9875\u884C\u6570",
    of: "\u5171",
    page: "\u9875",
    sortBy: "\u6392\u5E8F\u65B9\u5F0F",
    actions: "\u64CD\u4F5C",
    selectAll: "\u5168\u9009",
    selectRow: "\u9009\u62E9\u6B64\u884C",
    displayedRows: "\u7B2C {{from}}\u2013{{to}} \u6761\uFF0C\u5171 {{count}} \u6761"
  },
  validation: {
    required: "\u6B64\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879",
    email: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    minLength: "\u81F3\u5C11\u9700\u8981 {{count}} \u4E2A\u5B57\u7B26",
    maxLength: "\u6700\u591A {{count}} \u4E2A\u5B57\u7B26",
    passwordWeak: "\u5BC6\u7801\u9700\u81F3\u5C11 8 \u4E2A\u5B57\u7B26\uFF0C\u5305\u542B\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57",
    passwordMismatch: "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"
  },
  datetime: {
    today: "\u4ECA\u5929",
    yesterday: "\u6628\u5929"
  },
  status: {
    ACTIVE: "\u5DF2\u6FC0\u6D3B",
    INACTIVE: "\u672A\u6FC0\u6D3B",
    PENDING: "\u5F85\u5904\u7406",
    SUSPENDED: "\u5DF2\u6682\u505C",
    EXPIRED: "\u5DF2\u8FC7\u671F",
    CANCELLED: "\u5DF2\u53D6\u6D88"
  },
  timeline: {
    resource: "\u8D44\u6E90",
    today: "\u4ECA\u5929",
    legend: "\u56FE\u4F8B"
  },
  wizard: {
    step: "\u7B2C {{current}} \u6B65\uFF0C\u5171 {{total}} \u6B65",
    finish: "\u5B8C\u6210"
  },
  dateRange: {
    label: "\u65E5\u671F\u8303\u56F4",
    from: "\u5F00\u59CB\u65E5\u671F",
    to: "\u7ED3\u675F\u65E5\u671F",
    apply: "\u5E94\u7528",
    presets: {
      last7: "\u8FC7\u53BB 7 \u5929",
      next7: "\u672A\u6765 7 \u5929",
      next14: "\u672A\u6765 14 \u5929",
      thisMonth: "\u672C\u6708"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "\u684C\u53F7",
    floor: "\u697C\u5C42",
    seats: "\u5EA7\u4F4D",
    queued: "\u5DF2\u6392\u961F",
    preparing: "\u51C6\u5907\u4E2D",
    ready: "\u5DF2\u5C31\u7EEA",
    served: "\u5DF2\u9001\u8FBE",
    inStock: "\u6709\u73B0\u8D27",
    outOfStock: "\u65E0\u73B0\u8D27"
  }
};

// src/i18n/initI18n.ts
var COMMON_NAMESPACE = "common";
var COMMON_RESOURCES = {
  en: { common: common_default2 },
  si: { common: common_default5 },
  ta: { common: common_default6 },
  es: { common: common_default3 },
  zh: { common: common_default7 },
  fr: { common: common_default4 },
  de: { common: common_default }
};
var mergeResources = (base, extra) => {
  if (!extra) return base;
  const merged = { ...base };
  for (const [lng, namespaces] of Object.entries(extra)) {
    const baseNs = merged[lng] ?? {};
    const extraNs = namespaces;
    const mergedNs = { ...baseNs };
    for (const [ns, translations] of Object.entries(extraNs)) {
      if (typeof translations === "object" && translations !== null && typeof baseNs[ns] === "object" && baseNs[ns] !== null) {
        mergedNs[ns] = { ...baseNs[ns], ...translations };
      } else {
        mergedNs[ns] = translations;
      }
    }
    merged[lng] = mergedNs;
  }
  return merged;
};
function initI18n(options = {}) {
  void i18n__default.default.use(LanguageDetector__default.default).use(reactI18next.initReactI18next).init({
    resources: mergeResources(COMMON_RESOURCES, options.resources),
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES.map((locale) => locale.code),
    defaultNS: options.defaultNS ?? COMMON_NAMESPACE,
    fallbackNS: COMMON_NAMESPACE,
    debug: options.debug ?? false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: STORAGE_KEYS.LOCALE,
      caches: ["localStorage"]
    },
    react: { useSuspense: false }
  });
  return i18n__default.default;
}

// src/i18n/keys.ts
var commonKey = (key) => key;

// src/i18n/keyParity.ts
function flattenTranslationKeys(obj, prefix = "") {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const normalized = key.replace(/_(zero|one|two|few|many|other)$/, "");
    const path = prefix ? `${prefix}.${normalized}` : normalized;
    if (value !== null && typeof value === "object") {
      keys.push(...flattenTranslationKeys(value, path));
    } else {
      keys.push(path);
    }
  }
  return [...new Set(keys)].sort();
}
function diffTranslationKeys(reference, candidate) {
  const refKeys = new Set(flattenTranslationKeys(reference));
  const candKeys = new Set(flattenTranslationKeys(candidate));
  return {
    missing: [...refKeys].filter((k) => !candKeys.has(k)),
    extra: [...candKeys].filter((k) => !refKeys.has(k))
  };
}

exports.APP_TILE_VARIANTS = APP_TILE_VARIANTS;
exports.AppDialog = AppDialog;
exports.AppDrawer = AppDrawer;
exports.AppFolderMiniPreview = AppFolderMiniPreview;
exports.AppFolderModal = AppFolderModal;
exports.AppLauncher = AppLauncher;
exports.AppSideNav = AppSideNav;
exports.AppTile = AppTile;
exports.AppTopBar = AppTopBar;
exports.AppleDialogTransition = AppleDialogTransition;
exports.AuthLayout = AuthLayout;
exports.BACKDROP_TRANSITION = BACKDROP_TRANSITION;
exports.BRAND = BRAND;
exports.BillingCycle = BillingCycle;
exports.COMMON_NAMESPACE = COMMON_NAMESPACE;
exports.CONTAINER_VARIANTS = CONTAINER_VARIANTS;
exports.ConfirmDialog = ConfirmDialog;
exports.ConfirmProvider = ConfirmProvider;
exports.ContextMenu = ContextMenu;
exports.DATE_FORMATS = DATE_FORMATS;
exports.DEBOUNCE_MS = DEBOUNCE_MS;
exports.DEFAULT_HOTELOS_APPS = DEFAULT_HOTELOS_APPS;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.DEFAULT_PAGE_SIZE = DEFAULT_PAGE_SIZE;
exports.DashboardLayout = DashboardLayout;
exports.DataTable = DataTable;
exports.DateRangeButton = DateRangeButton;
exports.DateRangePreset = DateRangePreset;
exports.DescriptionList = DescriptionList;
exports.DialogSize = DialogSize;
exports.EMAIL_REGEX = EMAIL_REGEX;
exports.EmptyState = EmptyState;
exports.ErrorState = ErrorState;
exports.FOLDER_LAYOUT_SPRING = FOLDER_LAYOUT_SPRING;
exports.FONT_FAMILY = FONT_FAMILY;
exports.FamilyDialogTransition = FamilyDialogTransition;
exports.FormDialog = FormDialog;
exports.FormSelect = FormSelect;
exports.FormSwitch = FormSwitch;
exports.FormTextField = FormTextField;
exports.GREY = GREY;
exports.KanbanBoard = KanbanBoard;
exports.LanguageSwitcher = LanguageSwitcher;
exports.LoadState = LoadState;
exports.LoadingOverlay = LoadingOverlay;
exports.MenuCard = MenuCard;
exports.NamiosLoader = NamiosLoader;
exports.NamiosMarkSvg = NamiosMarkSvg;
exports.PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;
exports.PASSWORD_REGEX = PASSWORD_REGEX;
exports.PHONE_REGEX = PHONE_REGEX;
exports.PageHeader = PageHeader;
exports.PageSkeleton = PageSkeleton;
exports.PasswordField = PasswordField;
exports.RADII = RADII;
exports.SEMANTIC = SEMANTIC;
exports.SHADOWS = SHADOWS;
exports.SHARED_ROUTES = SHARED_ROUTES;
exports.SNACKBAR_AUTOHIDE_MS = SNACKBAR_AUTOHIDE_MS;
exports.SPACING_UNIT = SPACING_UNIT;
exports.STATUS_COLORS = STATUS_COLORS;
exports.STORAGE_KEYS = STORAGE_KEYS;
exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
exports.SearchField = SearchField;
exports.SectionCard = SectionCard;
exports.SelectField = SelectField;
exports.SnackbarProvider = SnackbarProvider;
exports.SplitPaneLayout = SplitPaneLayout;
exports.StatCard = StatCard;
exports.Status = Status;
exports.StatusChip = StatusChip;
exports.StatusFilterChips = StatusFilterChips;
exports.SubscriptionPlanTier = SubscriptionPlanTier;
exports.ThemeModeProvider = ThemeModeProvider;
exports.TimelineMatrix = TimelineMatrix;
exports.UserAvatar = UserAvatar;
exports.UserRole = UserRole;
exports.WizardDialog = WizardDialog;
exports.addDays = addDays;
exports.assertNever = assertNever;
exports.buildQueryString = buildQueryString;
exports.clamp = clamp;
exports.commonKey = commonKey;
exports.createHotelOsTheme = createHotelOsTheme;
exports.dateRangeDays = dateRangeDays;
exports.diffTranslationKeys = diffTranslationKeys;
exports.differenceInDays = differenceInDays;
exports.flattenTranslationKeys = flattenTranslationKeys;
exports.formatBytes = formatBytes;
exports.getAvatarBgColor = getAvatarBgColor;
exports.groupBy = groupBy;
exports.initI18n = initI18n;
exports.initialsFromName = initialsFromName;
exports.isDefined = isDefined;
exports.isoDate = isoDate;
exports.omit = omit;
exports.pick = pick;
exports.safeJsonParse = safeJsonParse;
exports.sleep = sleep;
exports.sortBy = sortBy;
exports.todayIso = todayIso;
exports.truncate = truncate;
exports.uniqueBy = uniqueBy;
exports.useBoolean = useBoolean;
exports.useConfirm = useConfirm;
exports.useContextMenu = useContextMenu;
exports.useDateRange = useDateRange;
exports.useDebounce = useDebounce;
exports.useDebouncedCallback = useDebouncedCallback;
exports.useDialog = useDialog;
exports.useIsMounted = useIsMounted;
exports.useLocalStorage = useLocalStorage;
exports.useLocaleFormat = useLocaleFormat;
exports.useMediaBreakpoint = useMediaBreakpoint;
exports.usePagination = usePagination;
exports.usePrevious = usePrevious;
exports.useSnackbar = useSnackbar;
exports.useTableQuery = useTableQuery;
exports.useThemeMode = useThemeMode;
exports.useToggle = useToggle;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map