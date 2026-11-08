'use strict';

var styles = require('@mui/material/styles');
var React19 = require('react');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');
var Button5 = require('@mui/material/Button');
var CircularProgress = require('@mui/material/CircularProgress');
var Dialog = require('@mui/material/Dialog');
var Popover = require('@mui/material/Popover');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogContentText = require('@mui/material/DialogContentText');
var DialogTitle = require('@mui/material/DialogTitle');
var Box6 = require('@mui/material/Box');
var IconButton9 = require('@mui/material/IconButton');
var CloseIcon5 = require('@mui/icons-material/Close');
var reactI18next = require('react-i18next');
var useMediaQuery = require('@mui/material/useMediaQuery');
var shim = require('use-sync-external-store/shim');
var withSelector = require('use-sync-external-store/shim/with-selector');
var ReactDOM = require('react-dom');
var CloseRoundedIcon = require('@mui/icons-material/CloseRounded');
var CheckCircleRoundedIcon = require('@mui/icons-material/CheckCircleRounded');
var ErrorRoundedIcon = require('@mui/icons-material/ErrorRounded');
var InfoRoundedIcon = require('@mui/icons-material/InfoRounded');
var WarningAmberRoundedIcon = require('@mui/icons-material/WarningAmberRounded');
var Typography4 = require('@mui/material/Typography');
var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');
var Stack4 = require('@mui/material/Stack');
var Paper = require('@mui/material/Paper');
var ErrorOutlineIcon = require('@mui/icons-material/ErrorOutline');
var RefreshIcon = require('@mui/icons-material/Refresh');
var Checkbox2 = require('@mui/material/Checkbox');
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
var Card2 = require('@mui/material/Card');
var ClearIcon = require('@mui/icons-material/Clear');
var SearchIcon = require('@mui/icons-material/Search');
var InputAdornment = require('@mui/material/InputAdornment');
var TextField5 = require('@mui/material/TextField');
var MenuItem = require('@mui/material/MenuItem');
var VisibilityIcon = require('@mui/icons-material/Visibility');
var VisibilityOffIcon = require('@mui/icons-material/VisibilityOff');
var FormControlLabel = require('@mui/material/FormControlLabel');
var Switch2 = require('@mui/material/Switch');
var CheckIcon = require('@mui/icons-material/Check');
var TranslateIcon = require('@mui/icons-material/Translate');
var ListItemIcon = require('@mui/material/ListItemIcon');
var ListItemText = require('@mui/material/ListItemText');
var Menu = require('@mui/material/Menu');
var MenuIcon = require('@mui/icons-material/Menu');
var AppBar = require('@mui/material/AppBar');
var Toolbar = require('@mui/material/Toolbar');
var Skeleton2 = require('@mui/material/Skeleton');
var Tooltip2 = require('@mui/material/Tooltip');
var Step = require('@mui/material/Step');
var StepLabel = require('@mui/material/StepLabel');
var Stepper = require('@mui/material/Stepper');
var CalendarMonthOutlinedIcon = require('@mui/icons-material/CalendarMonthOutlined');
var ExpandLessIcon = require('@mui/icons-material/ExpandLess');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var Collapse = require('@mui/material/Collapse');
var Drawer2 = require('@mui/material/Drawer');
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
var InputBase = require('@mui/material/InputBase');
var CardContent2 = require('@mui/material/CardContent');
var CardMedia2 = require('@mui/material/CardMedia');
var i18n = require('i18next');
var LanguageDetector = require('i18next-browser-languagedetector');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React19__namespace = /*#__PURE__*/_interopNamespace(React19);
var Button5__default = /*#__PURE__*/_interopDefault(Button5);
var CircularProgress__default = /*#__PURE__*/_interopDefault(CircularProgress);
var Dialog__default = /*#__PURE__*/_interopDefault(Dialog);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefault(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var Box6__default = /*#__PURE__*/_interopDefault(Box6);
var IconButton9__default = /*#__PURE__*/_interopDefault(IconButton9);
var CloseIcon5__default = /*#__PURE__*/_interopDefault(CloseIcon5);
var useMediaQuery__default = /*#__PURE__*/_interopDefault(useMediaQuery);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);
var CloseRoundedIcon__default = /*#__PURE__*/_interopDefault(CloseRoundedIcon);
var CheckCircleRoundedIcon__default = /*#__PURE__*/_interopDefault(CheckCircleRoundedIcon);
var ErrorRoundedIcon__default = /*#__PURE__*/_interopDefault(ErrorRoundedIcon);
var InfoRoundedIcon__default = /*#__PURE__*/_interopDefault(InfoRoundedIcon);
var WarningAmberRoundedIcon__default = /*#__PURE__*/_interopDefault(WarningAmberRoundedIcon);
var Typography4__default = /*#__PURE__*/_interopDefault(Typography4);
var Stack4__default = /*#__PURE__*/_interopDefault(Stack4);
var Paper__default = /*#__PURE__*/_interopDefault(Paper);
var ErrorOutlineIcon__default = /*#__PURE__*/_interopDefault(ErrorOutlineIcon);
var RefreshIcon__default = /*#__PURE__*/_interopDefault(RefreshIcon);
var Checkbox2__default = /*#__PURE__*/_interopDefault(Checkbox2);
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
var Card2__default = /*#__PURE__*/_interopDefault(Card2);
var ClearIcon__default = /*#__PURE__*/_interopDefault(ClearIcon);
var SearchIcon__default = /*#__PURE__*/_interopDefault(SearchIcon);
var InputAdornment__default = /*#__PURE__*/_interopDefault(InputAdornment);
var TextField5__default = /*#__PURE__*/_interopDefault(TextField5);
var MenuItem__default = /*#__PURE__*/_interopDefault(MenuItem);
var VisibilityIcon__default = /*#__PURE__*/_interopDefault(VisibilityIcon);
var VisibilityOffIcon__default = /*#__PURE__*/_interopDefault(VisibilityOffIcon);
var FormControlLabel__default = /*#__PURE__*/_interopDefault(FormControlLabel);
var Switch2__default = /*#__PURE__*/_interopDefault(Switch2);
var CheckIcon__default = /*#__PURE__*/_interopDefault(CheckIcon);
var TranslateIcon__default = /*#__PURE__*/_interopDefault(TranslateIcon);
var ListItemIcon__default = /*#__PURE__*/_interopDefault(ListItemIcon);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);
var Menu__default = /*#__PURE__*/_interopDefault(Menu);
var MenuIcon__default = /*#__PURE__*/_interopDefault(MenuIcon);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var Skeleton2__default = /*#__PURE__*/_interopDefault(Skeleton2);
var Tooltip2__default = /*#__PURE__*/_interopDefault(Tooltip2);
var Step__default = /*#__PURE__*/_interopDefault(Step);
var StepLabel__default = /*#__PURE__*/_interopDefault(StepLabel);
var Stepper__default = /*#__PURE__*/_interopDefault(Stepper);
var CalendarMonthOutlinedIcon__default = /*#__PURE__*/_interopDefault(CalendarMonthOutlinedIcon);
var ExpandLessIcon__default = /*#__PURE__*/_interopDefault(ExpandLessIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefault(ExpandMoreIcon);
var Collapse__default = /*#__PURE__*/_interopDefault(Collapse);
var Drawer2__default = /*#__PURE__*/_interopDefault(Drawer2);
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
var InputBase__default = /*#__PURE__*/_interopDefault(InputBase);
var CardContent2__default = /*#__PURE__*/_interopDefault(CardContent2);
var CardMedia2__default = /*#__PURE__*/_interopDefault(CardMedia2);
var i18n__default = /*#__PURE__*/_interopDefault(i18n);
var LanguageDetector__default = /*#__PURE__*/_interopDefault(LanguageDetector);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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
function truncate(value, maxLength = 0, suffix = "\u2026") {
  if (!value || typeof value !== "string") return "";
  if (value.length <= maxLength) return value;
  return value.slice(0, Math.max(0, maxLength - suffix.length)).trimEnd() + suffix;
}
function initialsFromName(name) {
  if (!name || typeof name !== "string") return "";
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
function clamp(value, min2, max2) {
  return Math.min(Math.max(value, min2), max2);
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

// src/utils/file-security.ts
var MAX_IMAGE_BYTES = 5 * 1024 * 1024;
var MAX_VIDEO_BYTES = 50 * 1024 * 1024;
var readHeader = async (file, length = 12) => new Uint8Array(await file.slice(0, length).arrayBuffer());
var validateImageFile = async (file, maxBytes = MAX_IMAGE_BYTES) => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const png = [137, 80, 78, 71, 13, 10, 26, 10].every(
    (value, index3) => bytes[index3] === value
  );
  const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  const webp = bytes.length >= 12 && String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
  return png || jpeg || webp;
};
var validateVideoFile = async (file, maxBytes = MAX_VIDEO_BYTES) => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const mp4 = bytes.length >= 8 && String.fromCharCode(...bytes.slice(4, 8)) === "ftyp";
  const webm = bytes.length >= 4 && bytes[0] === 26 && bytes[1] === 69 && bytes[2] === 223 && bytes[3] === 163;
  return mp4 || webm;
};

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
var AppleDialogTransition = React19.forwardRef(
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
var ThemeModeContext = React19.createContext(null);
var readInitialMode = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEYS.THEME_MODE);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
var ThemeModeProvider = ({ children, overrides }) => {
  const [mode, setModeState] = React19.useState(readInitialMode);
  React19.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode);
      if (mode === "dark") {
        document.documentElement.classList.add("mui-dark");
      } else {
        document.documentElement.classList.remove("mui-dark");
      }
    }
  }, [mode]);
  const setMode = React19.useCallback((next) => {
    setModeState(next);
    window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
  }, []);
  const toggleMode = React19.useCallback(() => {
    setModeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      window.localStorage.setItem(STORAGE_KEYS.THEME_MODE, next);
      return next;
    });
  }, []);
  const value = React19.useMemo(() => ({ mode, toggleMode, setMode }), [mode, toggleMode, setMode]);
  const theme = React19.useMemo(
    () => createHotelOsTheme(mode, typeof overrides === "function" ? overrides(mode) : overrides),
    [mode, overrides]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeModeContext.Provider, { value, children: /* @__PURE__ */ jsxRuntime.jsx(styles.ThemeProvider, { theme, children }) });
};
var useThemeMode = () => {
  const ctx = React19.useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return ctx;
};
function useDialog() {
  const [isOpen, setIsOpen] = React19.useState(false);
  const [data, setData] = React19.useState(void 0);
  const open2 = React19.useCallback((next) => {
    setData(next);
    setIsOpen(true);
  }, []);
  const close = React19.useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggle = React19.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return { isOpen, data, open: open2, close, toggle };
}
var FamilyDialogTransition = React19.forwardRef(
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
var ConfirmDialog = ({
  open: open2,
  titleKey,
  messageKey,
  messageParams,
  variant = "info",
  confirmKey = "common:actions.confirm",
  cancelKey = "common:actions.cancel",
  loading = false,
  anchorEl,
  disableBackdrop = false,
  onConfirm,
  onCancel
}) => {
  const { t } = reactI18next.useTranslation();
  const content = /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { width: "100%", maxWidth: "380px" }, children: [
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
            IconButton9__default.default,
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
          disabled: loading,
          sx: {
            borderRadius: "3px",
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
          disabled: loading,
          startIcon: loading ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress__default.default, { size: 16, color: "inherit" }) : void 0,
          color: variant === "danger" ? "error" : variant === "warning" ? "warning" : "primary",
          sx: {
            borderRadius: "3px",
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
        open: open2,
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
              borderRadius: "4px",
              border: "0.5px solid rgba(0, 0, 0, 0.1)",
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
      open: open2,
      onClose: onCancel,
      maxWidth: "xs",
      fullWidth: true,
      TransitionComponent: FamilyDialogTransition,
      PaperProps: {
        sx: {
          borderRadius: "4px",
          border: "0.5px solid rgba(0, 0, 0, 0.1)",
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
};
var ConfirmContext = React19.createContext(null);
function ConfirmProvider({ children }) {
  const [options, setOptions] = React19.useState(null);
  const resolverRef = React19.useRef(null);
  const confirm = React19.useCallback((next) => {
    setOptions(next);
    return new Promise((resolve) => {
      resolverRef.current = resolve;
    });
  }, []);
  const settle = React19.useCallback((confirmed) => {
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
  const ctx = React19.useContext(ConfirmContext);
  if (!ctx) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return ctx;
}
function useDebounce(value, delay = DEBOUNCE_MS) {
  const [debounced, setDebounced] = React19.useState(value);
  React19.useEffect(() => {
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
  const callbackRef = React19.useRef(callback);
  callbackRef.current = callback;
  const timerRef = React19.useRef(void 0);
  React19.useEffect(
    () => () => {
      window.clearTimeout(timerRef.current);
    },
    []
  );
  return React19.useMemo(
    () => (...args) => {
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );
}
function usePagination(initial2) {
  const initialPage = initial2?.page ?? 1;
  const initialPageSize = initial2?.pageSize ?? DEFAULT_PAGE_SIZE;
  const [page, setPage] = React19.useState(initialPage);
  const [pageSize, setPageSizeState] = React19.useState(initialPageSize);
  const setPageSize = React19.useCallback((next) => {
    setPageSizeState(next);
    setPage(1);
  }, []);
  const reset = React19.useCallback(() => {
    setPage(initialPage);
    setPageSizeState(initialPageSize);
  }, [initialPage, initialPageSize]);
  return { page, pageSize, setPage, setPageSize, reset, offset: (page - 1) * pageSize };
}
function useTableQuery(defaults) {
  const defaultFilters = React19.useMemo(() => defaults?.filters ?? {}, [defaults?.filters]);
  const [page, setPage] = React19.useState(defaults?.initial?.page ?? 1);
  const [pageSize, setPageSizeState] = React19.useState(defaults?.pageSize ?? DEFAULT_PAGE_SIZE);
  const [search, setSearchState] = React19.useState(defaults?.initial?.search ?? "");
  const [sortBy2, setSortBy] = React19.useState(defaults?.sortBy);
  const [sortDir, setSortDir] = React19.useState(defaults?.sortDir ?? "asc");
  const [filters, setFilters] = React19.useState(defaultFilters);
  const debouncedSearch = useDebounce(search);
  const setSearch = React19.useCallback((next) => {
    setSearchState(next);
    setPage(1);
  }, []);
  const setPageSize = React19.useCallback((next) => {
    setPageSizeState(next);
    setPage(1);
  }, []);
  const onSortChange = React19.useCallback((key) => {
    setSortBy((prevKey) => {
      setSortDir((prevDir) => prevKey === key && prevDir === "asc" ? "desc" : "asc");
      return key;
    });
  }, []);
  const setFilter = React19.useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }, []);
  const clearFilters = React19.useCallback(() => {
    setFilters(defaultFilters);
    setSearchState("");
    setPage(1);
  }, [defaultFilters]);
  const reset = React19.useCallback(() => {
    setPage(1);
    setSearchState("");
    setSortBy(defaults?.sortBy);
    setSortDir(defaults?.sortDir ?? "asc");
    setFilters(defaultFilters);
  }, [defaultFilters, defaults?.sortBy, defaults?.sortDir]);
  const params = React19.useMemo(() => {
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
function useLocalStorage(key, initial2) {
  const [value, setValueState] = React19.useState(() => {
    if (typeof window === "undefined") return initial2;
    const raw = window.localStorage.getItem(key);
    if (raw === null) return initial2;
    return safeJsonParse(raw) ?? initial2;
  });
  const setValue = React19.useCallback(
    (next) => {
      setValueState((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        window.localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key]
  );
  const remove = React19.useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);
  return { value, setValue, remove };
}
function useBoolean(initial2 = false) {
  const [value, setValue] = React19.useState(initial2);
  const setTrue = React19.useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = React19.useCallback(() => {
    setValue(false);
  }, []);
  const toggle = React19.useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return { value, setTrue, setFalse, toggle, setValue };
}
function useToggle(initial2 = false) {
  const { value, toggle, setValue } = useBoolean(initial2);
  return { value, toggle, setValue };
}
function usePrevious(value) {
  const ref = React19.useRef(void 0);
  React19.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
function useIsMounted() {
  const mountedRef = React19.useRef(false);
  React19.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return React19.useCallback(() => mountedRef.current, []);
}
function useMediaBreakpoint() {
  const theme = styles.useTheme();
  const isMobile = useMediaQuery__default.default(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery__default.default(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery__default.default(theme.breakpoints.up("md"));
  const isLargeDesktop = useMediaQuery__default.default(theme.breakpoints.up("lg"));
  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}

// node_modules/@base-ui/react/toast/index.parts.mjs
var index_parts_exports = {};
__export(index_parts_exports, {
  Action: () => ToastAction,
  Arrow: () => ToastArrow,
  Close: () => ToastClose,
  Content: () => ToastContent,
  Description: () => ToastDescription,
  Portal: () => ToastPortal,
  Positioner: () => ToastPositioner,
  Provider: () => ToastProvider,
  Root: () => ToastRoot,
  Title: () => ToastTitle,
  Viewport: () => ToastViewport,
  createToastManager: () => createToastManager,
  useToastManager: () => useToastManager
});

// node_modules/@base-ui/utils/empty.mjs
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// node_modules/@base-ui/utils/useOnMount.mjs
function useOnMount(fn) {
  React19__namespace.useEffect(fn, EMPTY_ARRAY);
}
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React19__namespace.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React19__namespace.useLayoutEffect : noop;

// node_modules/@base-ui/utils/formatErrorMessage.mjs
function createFormatErrorMessage(baseUrl, prefix) {
  return function formatErrorMessage2(code, ...args) {
    const url = new URL(baseUrl);
    url.searchParams.set("code", code.toString());
    args.forEach((arg) => url.searchParams.append("args[]", arg));
    return `${prefix} error #${code}; visit ${url} for the full message.`;
  };
}
var formatErrorMessage = createFormatErrorMessage("https://base-ui.com/production-error", "Base UI");
var formatErrorMessage_default = formatErrorMessage;
var ToastContext = /* @__PURE__ */ React19__namespace.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToastContext.displayName = "ToastContext";
function useToastProviderContext() {
  const context = React19__namespace.useContext(ToastContext);
  if (!context) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: useToastManager must be used within <Toast.Provider>." : formatErrorMessage_default(73));
  }
  return context;
}
var majorVersion = parseInt(React19__namespace.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// node_modules/@base-ui/utils/store/useStore.mjs
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React19__namespace.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return shim.useSyncExternalStore(store.subscribe, getSelection, getSelection);
}
function useStoreFast(store, selector, a1, a2, a3) {
  {
    return useStoreR19(store, selector, a1, a2, a3);
  }
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return withSelector.useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// node_modules/@base-ui/utils/store/Store.mjs
var Store = class {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(state) {
    /**
     * Registers a listener that will be called whenever the store's state changes.
     *
     * @param fn The listener function to be called on state changes.
     * @returns A function to unsubscribe the listener.
     */
    __publicField(this, "subscribe", (fn) => {
      this.listeners.add(fn);
      return () => {
        this.listeners.delete(fn);
      };
    });
    /**
     * Returns the current state of the store.
     */
    __publicField(this, "getSnapshot", () => {
      return this.state;
    });
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  /**
   * Creates a store with the given initial state, constructing the class it is called on.
   * Calling it on a generic base class (e.g. `ReactStore.create(...)`) constructs that
   * class but degrades the inferred instance type to `Store`; use `new` there instead.
   */
  static create(state) {
    return new this(state);
  }
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   * Each value must match its state key. Pass an exact known subset rather than a broad
   * `Partial<State>`, which may contain `undefined` for required state fields.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value
      });
    }
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
};
var SafeReact = {
  ...React19__namespace
};

// node_modules/@base-ui/utils/useStableCallback.mjs
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (process.env.NODE_ENV !== "production") {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

// node_modules/@base-ui/utils/store/ReactStore.mjs
var ReactStore = class extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors3) {
    super(state);
    this.context = context;
    this.selectors = selectors3;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key, value) {
    React19__namespace.useDebugValue(key);
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
    }, [store, key, value]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key, value) {
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
      return () => {
        store.set(key, void 0);
      };
    }, [store, key, value]);
  }
  /**
   * Synchronizes multiple external values into the store.
   * Each value must match its state key. Pass an exact known subset rather than a broad
   * `Partial<State>`, which may contain `undefined` for required state fields.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   *
   * @param statePart An exact subset of state fields to synchronize. Unknown keys are not accepted.
   */
  useSyncedValues(statePart) {
    const store = this;
    if (process.env.NODE_ENV !== "production") {
      React19__namespace.useDebugValue(statePart, (p) => Object.keys(p));
      const keys = React19__namespace.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (keys.length !== nextKeys.length || keys.some((key, index3) => key !== nextKeys[index3])) {
        console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
      }
    }
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      store.update(statePart);
    }, [store, ...dependencies]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key, controlled) {
    React19__namespace.useDebugValue(key);
    const store = this;
    const isControlled = controlled !== void 0;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(store.state[key], controlled)) {
        store.setState({
          ...store.state,
          [key]: controlled
        });
      }
    }, [store, key, controlled, isControlled]);
    if (process.env.NODE_ENV !== "production") {
      const cache = this.controlledValues ?? (this.controlledValues = /* @__PURE__ */ new Map());
      if (!cache.has(key)) {
        cache.set(key, isControlled);
      }
      const previouslyControlled = cache.get(key);
      if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) {
        console.error(`A component is changing the ${previouslyControlled ? "" : "un"}controlled state of ${key.toString()} to be ${previouslyControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
      }
    }
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(key, a1, a2, a3) {
    React19__namespace.useDebugValue(key);
    return useStore(this, this.selectors[key], a1, a2, a3);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key, fn) {
    React19__namespace.useDebugValue(key);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key] = stableFunction;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key) {
    const ref = React19__namespace.useRef(void 0);
    if (ref.current === void 0) {
      ref.current = (value) => {
        this.set(key, value);
      };
    }
    return ref.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@base-ui/utils/mergeCleanups.mjs
function mergeCleanups(...cleanups) {
  return () => {
    for (let i = 0; i < cleanups.length; i += 1) {
      const cleanup = cleanups[i];
      if (cleanup) {
        cleanup();
      }
    }
  };
}

// node_modules/@base-ui/utils/owner.mjs
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// node_modules/@base-ui/utils/addEventListener.mjs
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}
function useForcedRerendering() {
  const [, setState] = React19__namespace.useState({});
  return React19__namespace.useCallback(() => {
    setState({});
  }, []);
}

// node_modules/@base-ui/utils/useAnimationFrame.mjs
var EMPTY = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
  constructor() {
    /* This implementation uses an array as a backing data-structure for frame callbacks.
     * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
     * never calls the native `cancelAnimationFrame` if there are no frames left. This can
     * be much more efficient if there is a call pattern that alterns as
     * "request-cancel-request-cancel-…".
     * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
     * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
    __publicField(this, "callbacks", []);
    __publicField(this, "callbacksCount", 0);
    __publicField(this, "nextId", 1);
    __publicField(this, "startId", 1);
    __publicField(this, "isScheduled", false);
    __publicField(this, "tick", (timestamp) => {
      this.isScheduled = false;
      const currentCallbacks = this.callbacks;
      const currentCallbacksCount = this.callbacksCount;
      this.callbacks = [];
      this.callbacksCount = 0;
      this.startId = this.nextId;
      if (currentCallbacksCount > 0) {
        for (let i = 0; i < currentCallbacks.length; i += 1) {
          currentCallbacks[i]?.(timestamp);
        }
      }
    });
  }
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = process.env.NODE_ENV !== "production" && LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index3 = id - this.startId;
    if (index3 < 0 || index3 >= this.callbacks.length) {
      return;
    }
    if (this.callbacks[index3] === null) {
      return;
    }
    this.callbacks[index3] = null;
    this.callbacksCount -= 1;
  }
};
var scheduler = new Scheduler();
var AnimationFrame = class _AnimationFrame {
  constructor() {
    __publicField(this, "currentId", EMPTY);
    __publicField(this, "cancel", () => {
      if (this.currentId !== EMPTY) {
        scheduler.cancel(this.currentId);
        this.currentId = EMPTY;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.cancel;
    });
  }
  static create() {
    return new _AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn();
    });
  }
};
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/utils/useTimeout.mjs
var EMPTY2 = 0;
var Timeout = class _Timeout {
  constructor() {
    __publicField(this, "currentId", EMPTY2);
    __publicField(this, "clear", () => {
      if (this.currentId !== EMPTY2) {
        clearTimeout(this.currentId);
        this.currentId = EMPTY2;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.clear;
    });
  }
  static create() {
    return new _Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY2;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY2;
  }
};
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/utils/generateId.mjs
var counter = 0;
function generateId(prefix) {
  counter += 1;
  return `${prefix}-${Math.random().toString(36).slice(2, 6)}-${counter}`;
}

// node_modules/@base-ui/react/toast/utils/resolvePromiseOptions.mjs
function resolvePromiseOptions(options, result) {
  if (typeof options === "string") {
    return {
      description: options
    };
  }
  if (typeof options === "function") {
    const resolvedOptions = options(result);
    return typeof resolvedOptions === "string" ? {
      description: resolvedOptions
    } : resolvedOptions;
  }
  return options;
}

// node_modules/@base-ui/utils/platform/parts.mjs
var parts_exports = {};
__export(parts_exports, {
  engine: () => engine_exports,
  env: () => env_exports,
  mediaQuery: () => media_query_exports,
  os: () => os_exports,
  screenReader: () => screen_reader_exports
});

// node_modules/@base-ui/utils/platform/os.mjs
var os_exports = {};
__export(os_exports, {
  android: () => android,
  apple: () => apple,
  ios: () => ios,
  linux: () => linux,
  mac: () => mac,
  windows: () => windows
});

// node_modules/@base-ui/utils/platform/shared.mjs
function readRawData() {
  if (typeof navigator === "undefined") {
    return {
      userAgent: "",
      platform: "",
      maxTouchPoints: 0
    };
  }
  if (process.env.NODE_ENV !== "production") {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return {
        userAgent: uaData.brands.map(({
          brand,
          version: version2
        }) => `${brand}/${version2}`).join(" "),
        platform: uaData.platform ?? navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? 0
      };
    }
  }
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  };
}
var {
  userAgent,
  platform,
  maxTouchPoints
} = readRawData();
var lowerUserAgent = userAgent.toLowerCase();
var lowerPlatform = platform.toLowerCase();

// node_modules/@base-ui/utils/platform/os.mjs
var ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
var ANDROID_STRING = "android";
var android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
var mac = !ios && lowerPlatform.startsWith("mac");
var windows = lowerPlatform.startsWith("win");
var linux = !android && /^(linux|chrome os)/.test(lowerPlatform);
var apple = mac || ios;

// node_modules/@base-ui/utils/platform/engine.mjs
var engine_exports = {};
__export(engine_exports, {
  blink: () => blink,
  gecko: () => gecko,
  webkit: () => webkit
});
var webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
var gecko = !webkit && lowerUserAgent.includes("firefox");
var blink = !webkit && lowerUserAgent.includes("chrom");

// node_modules/@base-ui/utils/platform/screen-reader.mjs
var screen_reader_exports = {};
__export(screen_reader_exports, {
  voiceOver: () => voiceOver
});
var voiceOver = apple;

// node_modules/@base-ui/utils/platform/env.mjs
var env_exports = {};
__export(env_exports, {
  jsdom: () => jsdom
});
var jsdom = /jsdom|happydom/.test(lowerUserAgent);

// node_modules/@base-ui/utils/platform/media-query.mjs
var media_query_exports = {};
__export(media_query_exports, {
  iOS: () => iOS
});
var iOS = "@supports (-webkit-touch-callout: none)";

// node_modules/@base-ui/utils/shadowDom.mjs
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function closest(node, selector) {
  let current = node;
  while (current) {
    if (isElement(current) && current.matches(selector)) {
      return current;
    }
    current = current.assignedSlot ?? current.parentNode ?? (isShadowRoot(current) ? current.host : null);
  }
  return null;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0] ?? event.target;
  }
  return event.target;
}

// node_modules/@base-ui/react/internals/TransitionStatusDataAttributes.mjs
var TransitionStatusDataAttributes_exports = {};
__export(TransitionStatusDataAttributes_exports, {
  endingStyle: () => endingStyle,
  startingStyle: () => startingStyle
});
var startingStyle = "data-starting-style";
var endingStyle = "data-ending-style";

// node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var STARTING_HOOK = {
  [startingStyle]: ""
};
var ENDING_HOOK = {
  [endingStyle]: ""
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};

// node_modules/@base-ui/react/utils/CommonPopupDataAttributes.mjs
var open = "data-open";
var closed = "data-closed";
var anchorHidden = "data-anchor-hidden";
var POPUP_OPEN_HOOK = {
  [open]: ""
};
var POPUP_CLOSED_HOOK = {
  [closed]: ""
};
var ANCHOR_HIDDEN_HOOK = {
  [anchorHidden]: ""
};
var popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};
({
  ...popupStateMapping});

// node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function matchesFocusVisible(element) {
  if (!element || parts_exports.env.jsdom) {
    return true;
  }
  try {
    return element.matches(":focus-visible");
  } catch (_e) {
    return true;
  }
}

// node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp2(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height: height2
  } = rect;
  return {
    width,
    height: height2,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height2,
    x,
    y
  };
}

// node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle2(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle2(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index3 = list.indexOf(active);
  const nextIndex = index3 === -1 ? dir === 1 ? 0 : len - 1 : index3 + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}

// node_modules/@base-ui/react/toast/store.mjs
function createToastMetadata(toasts) {
  const metadata = /* @__PURE__ */ new Map();
  let visibleIndex = 0;
  let offsetY2 = 0;
  toasts.forEach((toast, toastIndex) => {
    const isEnding = toast.transitionStatus === "ending";
    metadata.set(toast.id, {
      value: toast,
      domIndex: toastIndex,
      visibleIndex: isEnding ? -1 : visibleIndex,
      offsetY: offsetY2
    });
    offsetY2 += toast.height || 0;
    if (!isEnding) {
      visibleIndex += 1;
    }
  });
  return metadata;
}
function applyLimited(toasts, limit) {
  let activeIndex = 0;
  return toasts.map((toast) => {
    if (toast.transitionStatus === "ending") {
      return toast;
    }
    const limited = activeIndex >= limit;
    activeIndex += 1;
    return toast.limited === limited ? toast : {
      ...toast,
      limited
    };
  });
}
var selectors = {
  toasts: (state) => state.toasts,
  isEmpty: (state) => state.toasts.length === 0,
  toast: (state, id) => state.toastMetadata.get(id)?.value,
  toastIndex: (state, id) => state.toastMetadata.get(id)?.domIndex ?? -1,
  toastOffsetY: (state, id) => state.toastMetadata.get(id)?.offsetY ?? 0,
  toastVisibleIndex: (state, id) => state.toastMetadata.get(id)?.visibleIndex ?? -1,
  focused: (state) => state.focused,
  expanded: (state) => state.hovering || state.focused,
  expandedOrOutOfFocus: (state) => state.hovering || state.focused || !state.isWindowFocused,
  prevFocusElement: (state) => state.prevFocusElement
};
var ToastStore = class extends ReactStore {
  constructor(initialState) {
    super({
      ...initialState,
      toastMetadata: createToastMetadata(initialState.toasts)
    }, {}, selectors);
    __publicField(this, "timers", /* @__PURE__ */ new Map());
    __publicField(this, "areTimersPaused", false);
    __publicField(this, "setViewport", (viewport) => {
      this.set("viewport", viewport);
    });
    __publicField(this, "disposeEffect", () => {
      return () => {
        this.timers.forEach((timer) => {
          timer.timeout?.clear();
        });
        this.timers.clear();
      };
    });
    __publicField(this, "addToast", (toast) => {
      const {
        timeout,
        limit
      } = this.state;
      const id = toast.id || generateId("toast");
      if (toast.id) {
        const existingToast = selectors.toast(this.state, toast.id);
        if (existingToast) {
          if (existingToast.transitionStatus === "ending") {
            this.removeToast(toast.id, true);
          } else {
            const {
              id: ignoredId,
              transitionStatus: ignoredTransitionStatus,
              ...updates
            } = toast;
            this.updateToastInternal(toast.id, updates, true, true);
            return toast.id;
          }
        }
      }
      const toastToAdd = {
        ...toast,
        id,
        updateKey: 0,
        transitionStatus: "starting"
      };
      const updatedToasts = [toastToAdd, ...this.state.toasts];
      this.setToasts(applyLimited(updatedToasts, limit));
      const duration = toastToAdd.timeout ?? timeout;
      if (toastToAdd.type !== "loading" && duration > 0) {
        this.scheduleTimer(id, duration, () => this.closeToast(id));
      }
      if (selectors.expandedOrOutOfFocus(this.state)) {
        this.pauseTimers();
      }
      return id;
    });
    __publicField(this, "updateToast", (id, updates) => {
      const prevToast = selectors.toast(this.state, id);
      if (!prevToast || prevToast.transitionStatus === "ending") {
        return;
      }
      this.updateToastInternal(id, typeof updates === "function" ? updates(prevToast) : updates, false, true);
    });
    __publicField(this, "updateToastInternal", (id, updates, resetTimer = false, markUpdated = false) => {
      const {
        timeout,
        toasts
      } = this.state;
      const prevToast = selectors.toast(this.state, id);
      if (!prevToast) {
        return;
      }
      if (prevToast.transitionStatus === "ending") {
        return;
      }
      const nextToast = {
        ...prevToast,
        ...updates,
        ...markUpdated && {
          updateKey: prevToast.updateKey + 1
        }
      };
      this.setToasts(toasts.map((toast) => toast.id === id ? nextToast : toast));
      const nextTimeout = nextToast.timeout ?? timeout;
      const prevTimeout = prevToast.timeout ?? timeout;
      const timeoutUpdated = Object.hasOwn(updates, "timeout");
      const shouldHaveTimer = nextToast.transitionStatus !== "ending" && nextToast.type !== "loading" && nextTimeout > 0;
      const hasTimer = this.timers.has(id);
      const timeoutChanged = prevTimeout !== nextTimeout;
      const wasLoading = prevToast.type === "loading";
      if (!shouldHaveTimer && hasTimer) {
        this.clearTimer(id);
        return;
      }
      if (shouldHaveTimer && (!hasTimer || timeoutChanged || timeoutUpdated || wasLoading || resetTimer)) {
        this.clearTimer(id);
        this.scheduleTimer(id, nextTimeout, () => this.closeToast(id));
        if (selectors.expandedOrOutOfFocus(this.state)) {
          this.pauseTimers();
        }
      }
    });
    __publicField(this, "closeToast", (toastId) => {
      const closeAll = toastId === void 0;
      const {
        limit,
        toasts
      } = this.state;
      let toastsToClose;
      if (closeAll) {
        toastsToClose = toasts;
        this.clearTimers();
      } else {
        const toast = selectors.toast(this.state, toastId);
        if (!toast) {
          return;
        }
        toastsToClose = [toast];
        this.clearTimer(toastId);
      }
      const endingToasts = toasts.map((item) => closeAll || item.id === toastId ? {
        ...item,
        transitionStatus: "ending",
        height: 0
      } : item);
      const newToasts = applyLimited(endingToasts, limit);
      this.setToasts(newToasts, !newToasts.some((toast) => toast.transitionStatus !== "ending"));
      toastsToClose.forEach((toast) => {
        if (toast.transitionStatus !== "ending") {
          toast.onClose?.();
        }
      });
      this.handleFocusManagement(toastId);
    });
    __publicField(this, "promiseToast", (promiseValue, options) => {
      const loadingOptions = resolvePromiseOptions(options.loading);
      const id = this.addToast({
        ...loadingOptions,
        type: "loading"
      });
      const handledPromise = promiseValue.then((result) => {
        const successOptions = resolvePromiseOptions(options.success, result);
        this.updateToast(id, {
          ...successOptions,
          type: "success",
          timeout: successOptions.timeout
        });
        return result;
      }).catch((error2) => {
        const errorOptions = resolvePromiseOptions(options.error, error2);
        this.updateToast(id, {
          ...errorOptions,
          type: "error",
          timeout: errorOptions.timeout
        });
        return Promise.reject(error2);
      });
      if ({}.hasOwnProperty.call(options, "setPromise")) {
        options.setPromise(handledPromise);
      }
      return handledPromise;
    });
    __publicField(this, "handleDocumentPointerDown", (event) => {
      if (event.pointerType !== "touch") {
        return;
      }
      const target = getTarget(event);
      if (contains(this.state.viewport, target)) {
        return;
      }
      this.resumeTimers();
      this.update({
        hovering: false,
        focused: false
      });
    });
  }
  syncProviderProps(timeout, limit) {
    const limitChanged = this.state.limit !== limit;
    if (this.state.timeout === timeout && !limitChanged) {
      return;
    }
    const updates = {
      timeout,
      limit
    };
    if (limitChanged) {
      const newToasts = applyLimited(this.state.toasts, limit);
      updates.toasts = newToasts;
      updates.toastMetadata = createToastMetadata(newToasts);
    }
    this.update(updates);
  }
  removeToast(toastId, skipOnRemove = false) {
    const index3 = selectors.toastIndex(this.state, toastId);
    if (index3 === -1) {
      return;
    }
    const toast = this.state.toasts[index3];
    if (!skipOnRemove) {
      toast?.onRemove?.();
    }
    const newToasts = [...this.state.toasts];
    newToasts.splice(index3, 1);
    this.setToasts(newToasts);
  }
  pauseTimers() {
    if (this.areTimersPaused) {
      return;
    }
    this.areTimersPaused = true;
    this.timers.forEach((timer) => {
      if (timer.timeout) {
        timer.timeout.clear();
        timer.remaining = Math.max(timer.remaining - (Date.now() - timer.start), 0);
      }
    });
  }
  resumeTimers() {
    if (!this.areTimersPaused) {
      return;
    }
    this.areTimersPaused = false;
    this.timers.forEach((timer, id) => {
      timer.remaining = timer.remaining > 0 ? timer.remaining : timer.delay;
      timer.timeout ?? (timer.timeout = Timeout.create());
      timer.timeout.start(timer.remaining, () => {
        this.handleTimerFired(id);
        timer.callback();
      });
      timer.start = Date.now();
    });
  }
  restoreFocusToPrevElement() {
    this.state.prevFocusElement?.focus({
      preventScroll: true
    });
  }
  scheduleTimer(id, delay, callback) {
    const start = Date.now();
    const shouldStartActive = !selectors.expandedOrOutOfFocus(this.state);
    const currentTimeout = shouldStartActive ? Timeout.create() : void 0;
    currentTimeout?.start(delay, () => {
      this.handleTimerFired(id);
      callback();
    });
    this.timers.set(id, {
      timeout: currentTimeout,
      start,
      delay,
      remaining: delay,
      callback
    });
  }
  clearTimers() {
    this.timers.forEach((timer) => {
      timer.timeout?.clear();
    });
    this.timers.clear();
    this.areTimersPaused = false;
  }
  clearTimer(id) {
    const timer = this.timers.get(id);
    timer?.timeout?.clear();
    this.timers.delete(id);
    this.resetPausedStateIfNoTimersRemain();
  }
  handleTimerFired(id) {
    this.timers.delete(id);
    this.resetPausedStateIfNoTimersRemain();
  }
  resetPausedStateIfNoTimersRemain() {
    if (this.timers.size === 0) {
      this.areTimersPaused = false;
    }
  }
  setToasts(newToasts, clearInteraction = newToasts.length === 0) {
    const updates = {
      toasts: newToasts,
      toastMetadata: createToastMetadata(newToasts)
    };
    if (clearInteraction) {
      updates.hovering = false;
      updates.focused = false;
    }
    this.update(updates);
  }
  handleFocusManagement(toastId) {
    const activeEl = activeElement(ownerDocument(this.state.viewport));
    if (!this.state.viewport || !contains(this.state.viewport, activeEl) || !matchesFocusVisible(activeEl)) {
      return;
    }
    if (toastId === void 0) {
      this.restoreFocusToPrevElement();
      return;
    }
    const toasts = selectors.toasts(this.state);
    const currentIndex = selectors.toastIndex(this.state, toastId);
    const scan = (from, step) => {
      for (let index3 = from; index3 >= 0 && index3 < toasts.length; index3 += step) {
        if (toasts[index3].transitionStatus !== "ending") {
          return toasts[index3];
        }
      }
      return null;
    };
    const nextToast = scan(currentIndex + 1, 1) ?? scan(currentIndex - 1, -1);
    if (nextToast) {
      nextToast.ref?.current?.focus();
    } else {
      this.restoreFocusToPrevElement();
    }
  }
};
var ToastProvider = function ToastProvider2(props) {
  const {
    children,
    timeout = 5e3,
    limit = 3,
    toastManager
  } = props;
  const store = useRefWithInit(() => new ToastStore({
    timeout,
    limit,
    viewport: null,
    toasts: [],
    hovering: false,
    focused: false,
    isWindowFocused: true,
    prevFocusElement: null
  })).current;
  useOnMount(store.disposeEffect);
  React19__namespace.useEffect(function subscribeToToastManager() {
    if (!toastManager) {
      return void 0;
    }
    const unsubscribe = toastManager[" subscribe"](({
      action,
      options
    }) => {
      const id = options.id;
      if (action === "promise" && options.promise) {
        store.promiseToast(options.promise, options);
      } else if (action === "update" && id) {
        store.updateToast(id, options.updates);
      } else if (action === "close") {
        store.closeToast(id);
      } else {
        store.addToast(options);
      }
    });
    return unsubscribe;
  }, [store, toastManager]);
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastContext.Provider, {
    value: store,
    children: [/* @__PURE__ */ jsxRuntime.jsx(ToastProviderPropsSynchronizer, {
      store,
      timeout,
      limit
    }), children]
  });
};
if (process.env.NODE_ENV !== "production") ToastProvider.displayName = "ToastProvider";
function ToastProviderPropsSynchronizer(props) {
  const {
    store,
    timeout,
    limit
  } = props;
  useIsoLayoutEffect(() => {
    store.syncProviderProps(timeout, limit);
  }, [store, timeout, limit]);
  return null;
}

// node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
var visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  margin: 0,
  top: 0,
  left: 0
};
var FocusGuard = /* @__PURE__ */ React19__namespace.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React19__namespace.useState();
  useIsoLayoutEffect(() => {
    if (parts_exports.screenReader.voiceOver && parts_exports.engine.webkit) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ jsxRuntime.jsx("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (process.env.NODE_ENV !== "production") FocusGuard.displayName = "FocusGuard";

// node_modules/@base-ui/utils/useMergedRefs.mjs
function useMergedRefs(a, b, c, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index3) => ref !== newRefs[index3]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                void ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
          }
        }
      };
    }
  };
}
function getReactElementRef(element) {
  if (!/* @__PURE__ */ React19__namespace.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// node_modules/@base-ui/utils/mergeObjects.mjs
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return void 0;
}

// node_modules/@base-ui/utils/createLogOnce.mjs
var loggedMessages;
if (process.env.NODE_ENV !== "production") {
  loggedMessages = /* @__PURE__ */ new Set();
}
function createLogOnce(severity, prefix) {
  return function logOnce(...messages) {
    if (process.env.NODE_ENV !== "production") {
      const message = messages.join(" ");
      const output = `${prefix}: ${message}` ;
      const key = `${severity}:${output}`;
      if (!loggedMessages.has(key)) {
        loggedMessages.add(key);
        if (severity === "warn") {
          console.warn(output);
        } else {
          console.error(output);
        }
      }
    }
  };
}

// node_modules/@base-ui/utils/warn.mjs
var warn = createLogOnce("warn", "Base UI");

// node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@base-ui/react/utils/resolveClassName.mjs
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@base-ui/react/utils/resolveStyle.mjs
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@base-ui/react/merge-props/mergeProps.mjs
var EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  if (!c && !d && true && !a) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...inputProps(EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}
function useRenderElement(element, componentProps, params = {}) {
  let renderProp = componentProps.render;
  if (params.enabled !== false) {
    renderProp = unwrapLazyRenderProp(renderProp);
  }
  const outProps = useRenderElementProps(componentProps, params, renderProp);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params, renderProp) {
  const {
    className: classNameProp,
    style: styleProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      void useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function unwrapLazyRenderProp(render) {
  if (render?.$$typeof !== REACT_LAZY_TYPE) {
    return render;
  }
  const unwrapped = React19__namespace.Children.toArray(render)[0];
  return /* @__PURE__ */ React19__namespace.isValidElement(unwrapped) ? unwrapped : render;
}
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      if (process.env.NODE_ENV !== "production") {
        warnIfRenderPropLooksLikeComponent(render);
      }
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    if (process.env.NODE_ENV !== "production") {
      if (!/* @__PURE__ */ React19__namespace.isValidElement(render)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React19__namespace.cloneElement(render, mergedProps);
  }
  return renderTag(element, props);
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ React19.createElement("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ React19.createElement("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React19__namespace.createElement(Tag, props);
}

// node_modules/@base-ui/react/toast/viewport/ToastViewportCssVars.mjs
var frontmostHeight = "--toast-frontmost-height";
var ToastViewport = /* @__PURE__ */ React19__namespace.forwardRef(function ToastViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = useToastProviderContext();
  const windowFocusTimeout = useTimeout();
  const handlingFocusGuardRef = React19__namespace.useRef(false);
  const markedReadyForMouseLeaveRef = React19__namespace.useRef(false);
  const touchActiveRef = React19__namespace.useRef(false);
  const isEmpty = store.useState("isEmpty");
  const toasts = store.useState("toasts");
  const focused = store.useState("focused");
  const expanded = store.useState("expanded");
  const prevFocusElement = store.useState("prevFocusElement");
  const frontmostHeight2 = toasts[0]?.height;
  const hasTransitioningToasts = toasts.some((toast) => toast.transitionStatus === "ending");
  const highPriorityToasts = toasts.filter((toast) => toast.priority === "high");
  React19__namespace.useEffect(() => {
    const viewport = store.state.viewport;
    if (!viewport || isEmpty) {
      return void 0;
    }
    const win = getWindow(viewport);
    const doc = ownerDocument(viewport);
    function handleGlobalKeyDown(event) {
      if (event.key === "F6" && getTarget(event) !== viewport) {
        event.preventDefault();
        store.set("prevFocusElement", activeElement(doc));
        viewport?.focus({
          preventScroll: true
        });
        store.pauseTimers();
        store.set("focused", true);
      }
    }
    function handleWindowBlur(event) {
      if (getTarget(event) !== win) {
        return;
      }
      store.set("isWindowFocused", false);
      store.pauseTimers();
    }
    function handleWindowFocus(event) {
      if (event.relatedTarget) {
        return;
      }
      const target = getTarget(event);
      const activeEl = activeElement(ownerDocument(viewport));
      if (target === win || !contains(viewport, target) || !matchesFocusVisible(activeEl)) {
        store.resumeTimers();
      }
      windowFocusTimeout.start(0, () => store.set("isWindowFocused", true));
    }
    return mergeCleanups(addEventListener(win, "keydown", handleGlobalKeyDown), addEventListener(win, "blur", handleWindowBlur, true), addEventListener(win, "focus", handleWindowFocus, true), addEventListener(doc, "pointerdown", store.handleDocumentPointerDown, true));
  }, [store, windowFocusTimeout, isEmpty]);
  function handleFocusGuard(event) {
    handlingFocusGuardRef.current = true;
    const firstFocusableToast = event.relatedTarget === store.state.viewport ? toasts.find((toast) => toast.transitionStatus !== "ending" && !toast.limited) : void 0;
    if (firstFocusableToast) {
      firstFocusableToast.ref?.current?.focus();
    } else {
      store.restoreFocusToPrevElement();
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey && getTarget(event.nativeEvent) === store.state.viewport) {
      event.preventDefault();
      store.restoreFocusToPrevElement();
    }
  }
  function flushMouseLeave() {
    const hasEndingToasts = store.state.toasts.some((toast) => toast.transitionStatus === "ending");
    if (hasEndingToasts || touchActiveRef.current || !markedReadyForMouseLeaveRef.current) {
      return;
    }
    store.set("hovering", false);
    if (!store.select("expandedOrOutOfFocus")) {
      store.resumeTimers();
    }
    markedReadyForMouseLeaveRef.current = false;
  }
  React19__namespace.useEffect(flushMouseLeave, [hasTransitioningToasts, store]);
  function handleMouseEnter() {
    store.pauseTimers();
    store.set("hovering", true);
    markedReadyForMouseLeaveRef.current = false;
  }
  function handleMouseLeave() {
    markedReadyForMouseLeaveRef.current = true;
    flushMouseLeave();
  }
  function handlePointerDown(event) {
    if (event.pointerType === "touch") {
      touchActiveRef.current = true;
    }
  }
  function handlePointerEnd(event) {
    if (event.pointerType !== "touch") {
      return;
    }
    touchActiveRef.current = false;
    flushMouseLeave();
  }
  function handleFocus() {
    if (handlingFocusGuardRef.current) {
      handlingFocusGuardRef.current = false;
      return;
    }
    if (focused) {
      return;
    }
    if (matchesFocusVisible(activeElement(ownerDocument(store.state.viewport)))) {
      store.set("focused", true);
      store.pauseTimers();
    }
  }
  function handleBlur(event) {
    if (!focused || contains(store.state.viewport, event.relatedTarget)) {
      return;
    }
    store.set("focused", false);
    if (!store.select("expandedOrOutOfFocus")) {
      store.resumeTimers();
    }
  }
  const defaultProps = {
    tabIndex: -1,
    role: "region",
    "aria-live": "polite",
    "aria-atomic": false,
    "aria-relevant": "additions text",
    "aria-label": "Notifications",
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onClick: handleFocus,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerEnd,
    onPointerCancel: handlePointerEnd,
    style: {
      [frontmostHeight]: frontmostHeight2 ? `${frontmostHeight2}px` : void 0
    }
  };
  const state = {
    expanded
  };
  const focusGuard = !isEmpty && prevFocusElement && /* @__PURE__ */ jsxRuntime.jsx(FocusGuard, {
    onFocus: handleFocusGuard
  });
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.setViewport],
    state,
    props: [defaultProps, elementProps, {
      children: /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, {
        children: [focusGuard, children, focusGuard]
      })
    }]
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, {
    children: [focusGuard, element, !focused && highPriorityToasts.length > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", {
      style: visuallyHidden,
      children: highPriorityToasts.map((toast) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
        role: "alert",
        "aria-atomic": true,
        children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
          children: toast.title
        }), /* @__PURE__ */ jsxRuntime.jsx("div", {
          children: toast.description
        })]
      }, toast.id))
    })]
  });
});
if (process.env.NODE_ENV !== "production") ToastViewport.displayName = "ToastViewport";

// node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}
var ToastRootContext = /* @__PURE__ */ React19__namespace.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToastRootContext.displayName = "ToastRootContext";
function useToastRootContext() {
  const context = React19__namespace.useContext(ToastRootContext);
  if (!context) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>." : formatErrorMessage_default(66));
  }
  return context;
}

// node_modules/@base-ui/react/utils/resolveRef.mjs
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/@base-ui/react/utils/getFiniteAnimations.mjs
function getFiniteAnimations(element, options) {
  return element.getAnimations(options).filter((animation) => {
    const timing = animation.effect?.getTiming();
    return timing?.duration !== Infinity && timing?.iterations !== Infinity;
  });
}

// node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
var pendingCallbacks = null;
function flushBeforePaint(fn) {
  if (!pendingCallbacks) {
    const callbacks = [];
    pendingCallbacks = callbacks;
    queueMicrotask(() => {
      pendingCallbacks = null;
      ReactDOM__namespace.flushSync(() => {
        for (const callback of callbacks) {
          callback();
        }
      });
    });
  }
  pendingCallbacks.push(fn);
}
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, batch = false) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      if (!batch) {
        ReactDOM__namespace.flushSync(fnToExecute);
        return;
      }
      flushBeforePaint(() => {
        if (!signal?.aborted) {
          fnToExecute();
        }
      });
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(getFiniteAnimations(resolvedElement).map((animation) => animation.finished.then(NOOP))).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }, () => {
        if (signal?.aborted) {
          return;
        }
        const currentAnimations = getFiniteAnimations(resolvedElement);
        if (currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
          return;
        }
        done();
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open: open2,
    ref,
    batch = false,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open2, batch);
  React19__namespace.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open2, onComplete, runOnceAnimationsFinish]);
}

// node_modules/@base-ui/react/internals/constants.mjs
var DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none"
  }
};
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
var POPUP_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "end"
};
var ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};

// node_modules/@base-ui/react/utils/getElementTransform.mjs
function getElementTransform(element, computedStyle) {
  const transform = (getWindow(element).getComputedStyle(element)).transform;
  let translateX = 0;
  let translateY = 0;
  let scale = 1;
  if (transform && transform !== "none") {
    const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (matrix) {
      const values = matrix[1].split(", ").map(parseFloat);
      if (values.length === 6) {
        translateX = values[4];
        translateY = values[5];
        scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
      } else if (values.length === 16) {
        translateX = values[12];
        translateY = values[13];
        scale = values[0];
      }
    }
  }
  return {
    x: translateX,
    y: translateY,
    scale
  };
}

// node_modules/@base-ui/react/utils/useSwipeDismiss.mjs
function getDisplacement(direction, deltaX, deltaY) {
  switch (direction) {
    case "up":
      return -deltaY;
    case "down":
      return deltaY;
    case "left":
      return -deltaX;
    case "right":
      return deltaX;
    default:
      return 0;
  }
}

// node_modules/@base-ui/react/toast/root/ToastRootCssVars.mjs
var index = "--toast-index";
var offsetY = "--toast-offset-y";
var height = "--toast-height";
var swipeMovementX = "--toast-swipe-movement-x";
var swipeMovementY = "--toast-swipe-movement-y";

// node_modules/@base-ui/react/toast/root/ToastRootDataAttributes.mjs
var swipeDirection = "data-swipe-direction";
TransitionStatusDataAttributes_exports.startingStyle;
TransitionStatusDataAttributes_exports.endingStyle;
var toastRootStateAttributesMapping = {
  ...transitionStatusMapping,
  swipeDirection(value) {
    return value ? {
      [swipeDirection]: value
    } : null;
  }
};
var SWIPE_THRESHOLD = 40;
var REVERSE_CANCEL_THRESHOLD = 10;
var OPPOSITE_DIRECTION_DAMPING_FACTOR = 0.5;
var MIN_DRAG_THRESHOLD = 1;
var TOAST_SWIPE_IGNORE_SELECTOR = `${BASE_UI_SWIPE_IGNORE_SELECTOR},${LEGACY_SWIPE_IGNORE_SELECTOR}`;
var ToastRoot = /* @__PURE__ */ React19__namespace.forwardRef(function ToastRoot2(componentProps, forwardedRef) {
  const {
    toast,
    render,
    className,
    swipeDirection: swipeDirection2 = ["down", "right"],
    style,
    ...elementProps
  } = componentProps;
  const isAnchored = toast.positionerProps?.anchor !== void 0;
  let swipeDirections = [];
  if (!isAnchored) {
    swipeDirections = Array.isArray(swipeDirection2) ? swipeDirection2 : [swipeDirection2];
  }
  const swipeEnabled = swipeDirections.length > 0;
  const store = useToastProviderContext();
  const [currentSwipeDirection, setCurrentSwipeDirection] = React19__namespace.useState(void 0);
  const [isSwiping, setIsSwiping] = React19__namespace.useState(false);
  const [isRealSwipe, setIsRealSwipe] = React19__namespace.useState(false);
  const [dragOffset, setDragOffset] = React19__namespace.useState({
    x: 0,
    y: 0
  });
  const [initialTransform, setInitialTransform] = React19__namespace.useState({
    x: 0,
    y: 0,
    scale: 1
  });
  const [titleId, setTitleId] = React19__namespace.useState();
  const [descriptionId, setDescriptionId] = React19__namespace.useState();
  const [lockedDirection, setLockedDirection] = React19__namespace.useState(null);
  const rootRef = React19__namespace.useRef(null);
  const lastToastIdRef = React19__namespace.useRef(void 0);
  const dragStartPosRef = React19__namespace.useRef({
    x: 0,
    y: 0
  });
  const initialTransformRef = React19__namespace.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const intendedSwipeDirectionRef = React19__namespace.useRef(void 0);
  const maxSwipeDisplacementRef = React19__namespace.useRef(0);
  const cancelledSwipeRef = React19__namespace.useRef(false);
  const swipeCancelBaselineRef = React19__namespace.useRef({
    x: 0,
    y: 0
  });
  const isFirstPointerMoveRef = React19__namespace.useRef(false);
  const dragOffsetRef = React19__namespace.useRef({
    x: 0,
    y: 0
  });
  const activePointerIdRef = React19__namespace.useRef(null);
  const dragAbortControllerRef = React19__namespace.useRef(null);
  const domIndex = store.useState("toastIndex", toast.id);
  const visibleIndex = store.useState("toastVisibleIndex", toast.id);
  const offsetY2 = store.useState("toastOffsetY", toast.id);
  const focused = store.useState("focused");
  const expanded = store.useState("expanded");
  useOpenChangeComplete({
    open: toast.transitionStatus !== "ending",
    ref: rootRef,
    onComplete() {
      if (toast.transitionStatus === "ending") {
        store.removeToast(toast.id);
      }
    }
  });
  const recalculateHeight = useStableCallback((flushSync4 = false) => {
    const element2 = rootRef.current;
    if (!element2) {
      return;
    }
    const previousHeight = element2.style.height;
    element2.style.height = "auto";
    const height2 = element2.offsetHeight;
    element2.style.height = previousHeight;
    function update2() {
      store.updateToastInternal(toast.id, {
        ref: rootRef,
        height: height2,
        transitionStatus: void 0
      });
    }
    if (flushSync4) {
      ReactDOM__namespace.flushSync(update2);
    } else {
      update2();
    }
  });
  useIsoLayoutEffect(() => {
    const previousToastId = lastToastIdRef.current;
    if (toast.transitionStatus !== "starting" && previousToastId === toast.id) {
      return;
    }
    if (previousToastId !== void 0) {
      setCurrentSwipeDirection(void 0);
      setInitialTransform({
        x: 0,
        y: 0,
        scale: 1
      });
      setResolvedDragOffset({
        x: 0,
        y: 0
      });
    }
    lastToastIdRef.current = toast.id;
    recalculateHeight();
  }, [recalculateHeight, toast.id, toast.transitionStatus]);
  function setResolvedDragOffset(nextDragOffset) {
    dragOffsetRef.current = nextDragOffset;
    setDragOffset(nextDragOffset);
  }
  useIsoLayoutEffect(() => {
    return () => {
      dragAbortControllerRef.current?.abort();
    };
  }, []);
  function applyDirectionalDamping(deltaX, deltaY) {
    const damp = (delta) => delta > 0 ? delta ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(delta) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
    const dampX = deltaX > 0 && !swipeDirections.includes("right") || deltaX < 0 && !swipeDirections.includes("left");
    const dampY = deltaY > 0 && !swipeDirections.includes("down") || deltaY < 0 && !swipeDirections.includes("up");
    return {
      x: dampX ? damp(deltaX) : deltaX,
      y: dampY ? damp(deltaY) : deltaY
    };
  }
  const handleSwipeEnd = useStableCallback((event) => {
    if (event.pointerId !== activePointerIdRef.current) {
      return;
    }
    activePointerIdRef.current = null;
    dragAbortControllerRef.current?.abort();
    dragAbortControllerRef.current = null;
    setIsSwiping(false);
    setIsRealSwipe(false);
    setLockedDirection(null);
    const resolvedInitialTransform = initialTransformRef.current;
    if (event.type === "pointercancel" || cancelledSwipeRef.current) {
      setResolvedDragOffset({
        x: resolvedInitialTransform.x,
        y: resolvedInitialTransform.y
      });
      setCurrentSwipeDirection(void 0);
      return;
    }
    const resolvedDragOffset = dragOffsetRef.current;
    const deltaX = resolvedDragOffset.x - resolvedInitialTransform.x;
    const deltaY = resolvedDragOffset.y - resolvedInitialTransform.y;
    let dismissDirection;
    for (const direction of swipeDirections) {
      if (getDisplacement(direction, deltaX, deltaY) > SWIPE_THRESHOLD) {
        dismissDirection = direction;
        break;
      }
    }
    if (dismissDirection) {
      setCurrentSwipeDirection(dismissDirection);
      store.closeToast(toast.id);
    } else {
      setResolvedDragOffset({
        x: resolvedInitialTransform.x,
        y: resolvedInitialTransform.y
      });
      setCurrentSwipeDirection(void 0);
    }
  });
  function handlePointerDown(event) {
    if (event.button !== 0) {
      return;
    }
    if (event.pointerType === "touch") {
      store.pauseTimers();
    }
    const target = getTarget(event.nativeEvent);
    const isInteractiveElement = closest(target, `button,a,input,textarea,[role="button"],${TOAST_SWIPE_IGNORE_SELECTOR}`);
    if (isInteractiveElement) {
      return;
    }
    cancelledSwipeRef.current = false;
    intendedSwipeDirectionRef.current = void 0;
    maxSwipeDisplacementRef.current = 0;
    activePointerIdRef.current = event.pointerId;
    dragStartPosRef.current = {
      x: event.clientX,
      y: event.clientY
    };
    swipeCancelBaselineRef.current = dragStartPosRef.current;
    const element2 = event.currentTarget;
    const transform = getElementTransform(element2);
    initialTransformRef.current = transform;
    setInitialTransform(transform);
    setResolvedDragOffset({
      x: transform.x,
      y: transform.y
    });
    store.set("hovering", true);
    setIsSwiping(true);
    setIsRealSwipe(false);
    setLockedDirection(null);
    isFirstPointerMoveRef.current = true;
    dragAbortControllerRef.current?.abort();
    const dragAbortController = new AbortController();
    dragAbortControllerRef.current = dragAbortController;
    const doc = ownerDocument(element2);
    doc.addEventListener("pointerup", handleSwipeEnd, {
      signal: dragAbortController.signal
    });
    doc.addEventListener("pointercancel", handleSwipeEnd, {
      signal: dragAbortController.signal
    });
    element2.setPointerCapture?.(event.pointerId);
  }
  function handlePointerMove(event) {
    if (event.pointerId !== activePointerIdRef.current) {
      return;
    }
    event.preventDefault();
    if (isFirstPointerMoveRef.current) {
      dragStartPosRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      isFirstPointerMoveRef.current = false;
    }
    const {
      clientY,
      clientX,
      movementX,
      movementY
    } = event;
    if (movementY < 0 && clientY > swipeCancelBaselineRef.current.y || movementY > 0 && clientY < swipeCancelBaselineRef.current.y) {
      swipeCancelBaselineRef.current = {
        x: swipeCancelBaselineRef.current.x,
        y: clientY
      };
    }
    if (movementX < 0 && clientX > swipeCancelBaselineRef.current.x || movementX > 0 && clientX < swipeCancelBaselineRef.current.x) {
      swipeCancelBaselineRef.current = {
        x: clientX,
        y: swipeCancelBaselineRef.current.y
      };
    }
    const deltaX = clientX - dragStartPosRef.current.x;
    const deltaY = clientY - dragStartPosRef.current.y;
    const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
    const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
    let resolvedLockedDirection = lockedDirection;
    if (!isRealSwipe) {
      const movementDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (movementDistance >= MIN_DRAG_THRESHOLD) {
        setIsRealSwipe(true);
        const hasHorizontal = swipeDirections.includes("left") || swipeDirections.includes("right");
        const hasVertical = swipeDirections.includes("up") || swipeDirections.includes("down");
        if (hasHorizontal && hasVertical) {
          const absX = Math.abs(deltaX);
          const absY = Math.abs(deltaY);
          resolvedLockedDirection = absX > absY ? "horizontal" : "vertical";
          setLockedDirection(resolvedLockedDirection);
        }
      }
    }
    let candidate;
    if (!intendedSwipeDirectionRef.current) {
      if (resolvedLockedDirection === "vertical") {
        if (deltaY > 0) {
          candidate = "down";
        } else if (deltaY < 0) {
          candidate = "up";
        }
      } else if (resolvedLockedDirection === "horizontal") {
        if (deltaX > 0) {
          candidate = "right";
        } else if (deltaX < 0) {
          candidate = "left";
        }
      } else if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        candidate = deltaX > 0 ? "right" : "left";
      } else {
        candidate = deltaY > 0 ? "down" : "up";
      }
      if (candidate && swipeDirections.includes(candidate)) {
        intendedSwipeDirectionRef.current = candidate;
        maxSwipeDisplacementRef.current = getDisplacement(candidate, deltaX, deltaY);
        setCurrentSwipeDirection(candidate);
      }
    } else {
      const direction = intendedSwipeDirectionRef.current;
      const currentDisplacement = getDisplacement(direction, cancelDeltaX, cancelDeltaY);
      if (currentDisplacement > SWIPE_THRESHOLD) {
        cancelledSwipeRef.current = false;
        setCurrentSwipeDirection(direction);
      } else if (!(swipeDirections.includes("left") && swipeDirections.includes("right")) && !(swipeDirections.includes("up") && swipeDirections.includes("down")) && maxSwipeDisplacementRef.current - currentDisplacement >= REVERSE_CANCEL_THRESHOLD) {
        cancelledSwipeRef.current = true;
      }
    }
    const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
    let newOffsetX = initialTransformRef.current.x;
    let newOffsetY = initialTransformRef.current.y;
    const hasHorizontalDir = swipeDirections.includes("left") || swipeDirections.includes("right");
    const hasVerticalDir = swipeDirections.includes("up") || swipeDirections.includes("down");
    if (resolvedLockedDirection !== "vertical" && hasHorizontalDir) {
      newOffsetX += dampedDelta.x;
    }
    if (resolvedLockedDirection !== "horizontal" && hasVerticalDir) {
      newOffsetY += dampedDelta.y;
    }
    setResolvedDragOffset({
      x: newOffsetX,
      y: newOffsetY
    });
  }
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      if (!rootRef.current || !contains(rootRef.current, activeElement(ownerDocument(rootRef.current)))) {
        return;
      }
      store.closeToast(toast.id);
    }
  }
  React19__namespace.useEffect(() => {
    const element2 = rootRef.current;
    if (!swipeEnabled || !element2) {
      return void 0;
    }
    function preventDefaultTouchStart(event) {
      if (activePointerIdRef.current === null || !contains(element2, getTarget(event))) {
        return;
      }
      event.preventDefault();
    }
    return addEventListener(element2, "touchmove", preventDefaultTouchStart, {
      passive: false
    });
  }, [swipeEnabled]);
  function getDragStyles() {
    const deltaX = dragOffset.x - initialTransform.x;
    const deltaY = dragOffset.y - initialTransform.y;
    return {
      transition: isSwiping ? "none" : void 0,
      // While swiping, freeze the element at its current visual transform so it doesn't snap to the
      // end position.
      transform: isSwiping ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) scale(${initialTransform.scale})` : void 0,
      [swipeMovementX]: `${deltaX}px`,
      [swipeMovementY]: `${deltaY}px`
    };
  }
  const isHighPriority = toast.priority === "high";
  const defaultProps = {
    role: isHighPriority ? "alertdialog" : "dialog",
    tabIndex: 0,
    "aria-modal": false,
    "aria-labelledby": titleId,
    "aria-describedby": descriptionId,
    "aria-hidden": isHighPriority && !focused ? true : void 0,
    onPointerDown: swipeEnabled ? handlePointerDown : void 0,
    onPointerMove: swipeEnabled ? handlePointerMove : void 0,
    onPointerUp: swipeEnabled ? handleSwipeEnd : void 0,
    onPointerCancel: swipeEnabled ? handleSwipeEnd : void 0,
    onKeyDown: handleKeyDown,
    inert: inertValue(toast.limited),
    style: {
      ...getDragStyles(),
      [index]: toast.transitionStatus === "ending" ? domIndex : visibleIndex,
      [offsetY]: `${offsetY2}px`,
      [height]: toast.height ? `${toast.height}px` : void 0
    }
  };
  const toastRoot = React19__namespace.useMemo(() => ({
    toast,
    setTitleId,
    setDescriptionId,
    recalculateHeight,
    visibleIndex,
    expanded
  }), [toast, setTitleId, setDescriptionId, recalculateHeight, visibleIndex, expanded]);
  const state = {
    transitionStatus: toast.transitionStatus,
    expanded,
    limited: toast.limited || false,
    type: toast.type,
    swiping: isSwiping,
    swipeDirection: currentSwipeDirection
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, rootRef],
    state,
    stateAttributesMapping: toastRootStateAttributesMapping,
    props: [defaultProps, elementProps]
  });
  return /* @__PURE__ */ jsxRuntime.jsx(ToastRootContext.Provider, {
    value: toastRoot,
    children: element
  });
});
if (process.env.NODE_ENV !== "production") ToastRoot.displayName = "ToastRoot";
var ToastContent = /* @__PURE__ */ React19__namespace.forwardRef(function ToastContent2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    ...elementProps
  } = componentProps;
  const {
    visibleIndex,
    expanded,
    recalculateHeight
  } = useToastRootContext();
  const contentRef = React19__namespace.useRef(null);
  useIsoLayoutEffect(() => {
    recalculateHeight();
    const node = contentRef.current;
    if (!node || typeof ResizeObserver !== "function" || typeof MutationObserver !== "function") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver(() => recalculateHeight(true));
    const mutationObserver = new MutationObserver(() => recalculateHeight(true));
    resizeObserver.observe(node);
    mutationObserver.observe(node, {
      childList: true,
      subtree: true,
      characterData: true
    });
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [recalculateHeight]);
  const behind = visibleIndex > 0;
  const state = {
    expanded,
    behind
  };
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, contentRef],
    state,
    props: elementProps
  });
});
if (process.env.NODE_ENV !== "production") ToastContent.displayName = "ToastContent";
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const defaultId = React19__namespace.useRef(void 0);
  const forceRerender = useForcedRerendering();
  const id = idOverride ?? defaultId.current;
  React19__namespace.useEffect(() => {
    if (defaultId.current == null) {
      globalId += 1;
      defaultId.current = `${prefix}-${globalId}`;
      if (idOverride == null) {
        forceRerender();
      }
    }
  }, [idOverride, prefix, forceRerender]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (reactId);
  }
  return useGlobalId(idOverride, prefix);
}
function isRenderableNode(node) {
  if (node == null || typeof node === "boolean" || node === "") {
    return false;
  }
  if (Array.isArray(node)) {
    return node.some(isRenderableNode);
  }
  return true;
}
function hasRenderableChildren(element) {
  return /* @__PURE__ */ React19__namespace.isValidElement(element) && isRenderableNode(element.props.children);
}

// node_modules/@base-ui/react/toast/utils/useToastLabelPart.mjs
function useToastLabelPart(idProp, childrenProp, part) {
  const {
    toast,
    setTitleId,
    setDescriptionId
  } = useToastRootContext();
  const setId = part === "title" ? setTitleId : setDescriptionId;
  const children = childrenProp ?? (part === "title" ? toast.title : toast.description);
  const id = useId(idProp);
  return {
    id,
    children,
    type: toast.type,
    setId
  };
}
function useToastLabelElement(element, id, setId) {
  const shouldRender = hasRenderableChildren(element);
  useIsoLayoutEffect(() => {
    if (!shouldRender) {
      return void 0;
    }
    setId(id);
    return () => {
      setId((currentId) => currentId === id ? void 0 : currentId);
    };
  }, [shouldRender, id, setId]);
  return shouldRender ? element : null;
}

// node_modules/@base-ui/react/toast/description/ToastDescription.mjs
var ToastDescription = /* @__PURE__ */ React19__namespace.forwardRef(function ToastDescription2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    id: idProp,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    id,
    children,
    type,
    setId
  } = useToastLabelPart(idProp, childrenProp, "description");
  const state = {
    type
  };
  const element = useRenderElement("p", componentProps, {
    ref: forwardedRef,
    state,
    props: {
      ...elementProps,
      id,
      children
    }
  });
  return useToastLabelElement(element, id, setId);
});
if (process.env.NODE_ENV !== "production") ToastDescription.displayName = "ToastDescription";
var ToastTitle = /* @__PURE__ */ React19__namespace.forwardRef(function ToastTitle2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    id: idProp,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    id,
    children,
    type,
    setId
  } = useToastLabelPart(idProp, childrenProp, "title");
  const state = {
    type
  };
  const element = useRenderElement("h2", componentProps, {
    ref: forwardedRef,
    state,
    props: {
      ...elementProps,
      id,
      children
    }
  });
  return useToastLabelElement(element, id, setId);
});
if (process.env.NODE_ENV !== "production") ToastTitle.displayName = "ToastTitle";

// node_modules/@base-ui/utils/error.mjs
var error = createLogOnce("error", "Base UI");
var CompositeRootContext = /* @__PURE__ */ React19__namespace.createContext(void 0);
if (process.env.NODE_ENV !== "production") CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React19__namespace.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled2,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React19__namespace.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled2 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled2) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled2) {
      additionalProps["aria-disabled"] = disabled2;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled2;
    }
    return additionalProps;
  }, [composite, disabled2, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
function dispatchClickWithModifiers(target, sourceEvent, {
  detail = 0,
  pointerType = ""
} = {}) {
  target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail,
    pointerType,
    shiftKey: sourceEvent.shiftKey,
    ctrlKey: sourceEvent.ctrlKey,
    altKey: sourceEvent.altKey,
    metaKey: sourceEvent.metaKey
  }));
}

// node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
  const {
    disabled: disabled2 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React19__namespace.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled: disabled2,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (process.env.NODE_ENV !== "production") {
    React19__namespace.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React19__namespace.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React19__namespace.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    return mergeProps({
      onClick(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled2) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (!isNativeButton || isButton) {
            event.preventBaseUIHandler();
            dispatchClickWithModifiers(currentTarget, event);
          }
          return;
        }
        if (!shouldClick || isNativeButton || !isSpaceKey && !isEnterKey) {
          if (isCurrentTarget && isLink && isSpaceKey) {
            event.preventDefault();
          }
          return;
        }
        if (event.defaultPrevented) {
          return;
        }
        event.preventDefault();
        if (isEnterKey) {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(currentTarget, event);
        }
      },
      onKeyUp(event) {
        if (disabled2) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && !event.defaultPrevented && event.key === " ") {
          event.preventBaseUIHandler();
          dispatchClickWithModifiers(event.currentTarget, event);
        }
      },
      onPointerDown(event) {
        if (disabled2) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, isNativeButton ? {
      type: "button"
    } : {
      role: "button"
    }, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled2, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
}

// node_modules/@base-ui/react/toast/close/ToastClose.mjs
var ToastClose = /* @__PURE__ */ React19__namespace.forwardRef(function ToastClose2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    disabled: disabled2,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const store = useToastProviderContext();
  const {
    toast,
    expanded
  } = useToastRootContext();
  const [hasFocus, setHasFocus] = React19__namespace.useState(false);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    native: nativeButton
  });
  const state = {
    type: toast.type
  };
  return useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state,
    props: [{
      "aria-hidden": !expanded && !hasFocus,
      onClick() {
        store.closeToast(toast.id);
      },
      onFocus() {
        setHasFocus(true);
      },
      onBlur() {
        setHasFocus(false);
      }
    }, elementProps, getButtonProps]
  });
});
if (process.env.NODE_ENV !== "production") ToastClose.displayName = "ToastClose";
var ToastAction = /* @__PURE__ */ React19__namespace.forwardRef(function ToastAction2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    disabled: disabled2,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    toast
  } = useToastRootContext();
  const computedChildren = toast.actionProps?.children ?? elementProps.children;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled2,
    native: nativeButton
  });
  const state = {
    type: toast.type
  };
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state,
    props: [elementProps, toast.actionProps, getButtonProps, {
      children: computedChildren
    }]
  });
  return hasRenderableChildren(element) ? element : null;
});
if (process.env.NODE_ENV !== "production") ToastAction.displayName = "ToastAction";

// node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}

// node_modules/@base-ui/react/internals/reason-parts.mjs
var reason_parts_exports = {};
__export(reason_parts_exports, {
  cancelOpen: () => cancelOpen,
  chipRemovePress: () => chipRemovePress,
  clearPress: () => clearPress,
  closePress: () => closePress,
  closeWatcher: () => closeWatcher,
  decrementPress: () => decrementPress,
  disabled: () => disabled,
  drag: () => drag,
  escapeKey: () => escapeKey,
  focusOut: () => focusOut,
  imperativeAction: () => imperativeAction,
  incrementPress: () => incrementPress,
  initial: () => initial,
  inputBlur: () => inputBlur,
  inputChange: () => inputChange,
  inputClear: () => inputClear,
  inputPaste: () => inputPaste,
  inputPress: () => inputPress,
  itemPress: () => itemPress,
  keyboard: () => keyboard,
  linkPress: () => linkPress,
  listNavigation: () => listNavigation,
  missing: () => missing,
  none: () => none,
  outsidePress: () => outsidePress,
  pointer: () => pointer,
  popupClose: () => popupClose,
  scrub: () => scrub,
  siblingOpen: () => siblingOpen,
  swipe: () => swipe,
  trackPress: () => trackPress,
  triggerFocus: () => triggerFocus,
  triggerHover: () => triggerHover,
  triggerPress: () => triggerPress,
  wheel: () => wheel,
  windowResize: () => windowResize
});
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var linkPress = "link-press";
var clearPress = "clear-press";
var chipRemovePress = "chip-remove-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var inputPress = "input-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var closeWatcher = "close-watcher";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var drag = "drag";
var wheel = "wheel";
var scrub = "scrub";
var popupClose = "popup-close";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var missing = "missing";
var initial = "initial";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
  return `data-base-ui-${name}`;
}
var PortalContext = /* @__PURE__ */ React19__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") PortalContext.displayName = "PortalContext";
var usePortalContext = () => React19__namespace.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = React19__namespace.useState(null);
  const [portalNode, setPortalNode] = React19__namespace.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React19__namespace.useRef(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM__namespace.createPortal(portalElement, containerElement) : null;
  return {
    node: portalNode,
    // `id` and `render` props can override or remove the generated ID. Use the exact
    // rendered value so `aria-owns` never points at an ID absent from the DOM.
    nodeId: /* @__PURE__ */ React19__namespace.isValidElement(portalElement) ? portalElement.props.id : void 0,
    subtree: portalSubtree
  };
}
var FloatingPortal = /* @__PURE__ */ React19__namespace.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    container,
    portalOwnerRole,
    ...elementProps
  } = componentProps;
  const {
    node: portalNode,
    nodeId: portalNodeId,
    subtree: portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = React19__namespace.useRef(null);
  const afterOutsideRef = React19__namespace.useRef(null);
  const beforeInsideRef = React19__namespace.useRef(null);
  const afterInsideRef = React19__namespace.useRef(null);
  const [focusManagerState, setFocusManagerState] = React19__namespace.useState(null);
  const focusInsideDisabledRef = React19__namespace.useRef(false);
  const modal = focusManagerState?.modal;
  const open2 = focusManagerState?.open;
  const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  React19__namespace.useEffect(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  useIsoLayoutEffect(() => {
    if (!portalNode || open2 !== true || !focusInsideDisabledRef.current) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open2, portalNode]);
  const portalContextValue = React19__namespace.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, {
    children: [portalSubtree, /* @__PURE__ */ jsxRuntime.jsxs(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ jsxRuntime.jsx(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ jsxRuntime.jsx("span", {
        role: portalOwnerRole,
        "aria-owns": portalNodeId,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ ReactDOM__namespace.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ jsxRuntime.jsx(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (process.env.NODE_ENV !== "production") FloatingPortal.displayName = "FloatingPortal";
var FloatingPortalLite = /* @__PURE__ */ React19__namespace.forwardRef(function FloatingPortalLite2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render,
    style,
    ...elementProps
  } = componentProps;
  const {
    node: portalNode,
    subtree: portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  if (!portalSubtree && !portalNode) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(React19__namespace.Fragment, {
    children: [portalSubtree, portalNode && /* @__PURE__ */ ReactDOM__namespace.createPortal(children, portalNode)]
  });
});
if (process.env.NODE_ENV !== "production") FloatingPortalLite.displayName = "FloatingPortalLite";
var ToastPortal = /* @__PURE__ */ React19__namespace.forwardRef(function ToastPortal2(props, forwardedRef) {
  return /* @__PURE__ */ jsxRuntime.jsx(FloatingPortalLite, {
    ref: forwardedRef,
    ...props
  });
});
if (process.env.NODE_ENV !== "production") ToastPortal.displayName = "ToastPortal";

// node_modules/@base-ui/utils/useValueAsRef.mjs
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}

// node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    }
  };
}
var FloatingNodeContext = /* @__PURE__ */ React19__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React19__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React19__namespace.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React19__namespace.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};

// node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
var devElementIdsByMap;
function getDevElementIds(map) {
  devElementIdsByMap ?? (devElementIdsByMap = /* @__PURE__ */ new WeakMap());
  let elementIds = devElementIdsByMap.get(map);
  if (!elementIds) {
    elementIds = /* @__PURE__ */ new WeakMap();
    devElementIdsByMap.set(map, elementIds);
  }
  return elementIds;
}
var PopupTriggerMap = class {
  constructor() {
    __publicField(this, "idMap", /* @__PURE__ */ new Map());
  }
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    if (process.env.NODE_ENV !== "production") {
      const elementIds = getDevElementIds(this);
      const existingId = elementIds.get(element);
      if (existingId !== void 0 && existingId !== id) {
        throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
      }
      const previousElement = this.idMap.get(id);
      if (previousElement !== void 0 && previousElement !== element) {
        elementIds.delete(previousElement);
      }
      elementIds.set(element, id);
    }
    this.idMap.set(id, element);
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    if (process.env.NODE_ENV !== "production") {
      const element = this.idMap.get(id);
      if (element !== void 0) {
        devElementIdsByMap?.get(this)?.delete(element);
      }
    }
    this.idMap.delete(id);
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    for (const registered of this.idMap.values()) {
      if (registered === element) {
        return true;
      }
    }
    return false;
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.idMap.values()) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.idMap.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
};

// node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
var selectors2 = {
  open: (state) => state.open,
  transitionStatus: (state) => state.transitionStatus,
  domReferenceElement: (state) => state.domReferenceElement,
  referenceElement: (state) => state.positionReference ?? state.referenceElement,
  floatingElement: (state) => state.floatingElement,
  floatingId: (state) => state.floatingId
};
var FloatingRootStore = class extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, selectors2);
    /**
     * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
     */
    __publicField(this, "syncOpenEvent", (newOpen, event) => {
      if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
      // click events to upgrade a hover-open.
      event != null && isClickLikeEvent(event)) {
        this.context.dataRef.current.openEvent = newOpen ? event : void 0;
      }
    });
    /**
     * Runs the root-owned side effects for an open state change.
     */
    __publicField(this, "dispatchOpenChange", (newOpen, eventDetails) => {
      this.syncOpenEvent(newOpen, eventDetails.event);
      const details = {
        open: newOpen,
        reason: eventDetails.reason,
        nativeEvent: eventDetails.event,
        nested: this.context.nested,
        triggerElement: eventDetails.trigger
      };
      this.context.events.emit("openchange", details);
    });
    /**
     * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
     *
     * @param newOpen The new open state.
     * @param eventDetails Details about the event that triggered the open state change.
     */
    __publicField(this, "setOpen", (newOpen, eventDetails) => {
      if (this.syncOnly) {
        this.context.onOpenChange?.(newOpen, eventDetails);
        return;
      }
      this.dispatchOpenChange(newOpen, eventDetails);
      this.context.onOpenChange?.(newOpen, eventDetails);
    });
    this.syncOnly = syncOnly;
  }
};

// node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function useFloatingRootContext(options) {
  const {
    open: open2 = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  if (process.env.NODE_ENV !== "production") {
    const optionDomReference = elements.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
    }
  }
  const store = useRefWithInit(() => new FloatingRootStore({
    open: open2,
    transitionStatus: void 0,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open: open2,
      floatingId
    };
    if (elements.reference !== void 0) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== void 0) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open2, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform3,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform3.getClippingRect({
    element: ((_await$platform$isEle = await (platform3.isElement == null ? void 0 : platform3.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform3.getDocumentElement == null ? void 0 : platform3.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform3.getOffsetParent == null ? void 0 : platform3.getOffsetParent(elements.floating));
  const offsetScale = await (platform3.isElement == null ? void 0 : platform3.isElement(offsetParent)) && await (platform3.getScale == null ? void 0 : platform3.getScale(offsetParent)) || {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform3.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform3.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3
  } = config;
  const platformWithDetectOverflow = platform3.detectOverflow ? platform3 : {
    ...platform3,
    detectOverflow
  };
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(floating));
  let rects = await platform3.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform3.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform3,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform3,
    elements
  } = state;
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform: platform3
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) => clamp2(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      var _rawOffset$mainAxis, _rawOffset$crossAxis;
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
        crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform3,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height: height2
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height2 - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height2 - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight2 = overflowAvailableHeight;
      let availableWidth2 = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth2 = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight2 = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth2 = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight2 = height2 - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth: availableWidth2,
        availableHeight: availableHeight2
      });
      const nextDimensions = await platform3.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height2 !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height2 = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height2;
  const shouldFallback = round(width) !== offsetWidth || round(height2) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height2 = offsetHeight;
  }
  return {
    width,
    height: height2,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height: height2,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height2;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height2 = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height2 *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height: height2,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height2 = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height: height2,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === void 0) {
    rootBoundary = "viewport";
  }
  const isLayoutViewport = rootBoundary === "layoutViewport";
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height2 = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height2 = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height: height2,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height2 = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height: height2,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
    const shouldDropCurrentNode = !currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static");
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height: height2
  } = getCssDimensions(element);
  return {
    width,
    height: height2
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height: height2
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height2) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height2));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener("resize", handleResize);
  refresh(true);
  return () => {
    win.removeEventListener("resize", handleResize);
    cleanup();
  };
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2);
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2, ancestorResize) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = options != null ? options : {};
  const platformWithCache = {
    ...platform2,
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var isClient = typeof document !== "undefined";
var noop2 = function noop3() {
};
var index2 = isClient ? React19.useLayoutEffect : noop2;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React19__namespace.useRef(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open: open2
  } = options;
  const [data, setData] = React19__namespace.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React19__namespace.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React19__namespace.useState(null);
  const [_floating, _setFloating] = React19__namespace.useState(null);
  const setReference = React19__namespace.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React19__namespace.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React19__namespace.useRef(null);
  const floatingRef = React19__namespace.useRef(null);
  const dataRef = React19__namespace.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform3);
  const openRef = useLatestRef(open2);
  const update2 = React19__namespace.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM__namespace.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index2(() => {
    if (open2 === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open2]);
  const isMountedRef = React19__namespace.useRef(false);
  index2(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index2(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
      }
      update2();
    }
  }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React19__namespace.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React19__namespace.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React19__namespace.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React19__namespace.useMemo(() => ({
    ...data,
    update: update2,
    refs,
    elements,
    floatingStyles
  }), [data, update2, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var limitShift3 = (options, deps) => {
  const result = limitShift2(options);
  return {
    fn: result.fn,
    options: [options, deps]
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
function useBaseUIFloating(options) {
  const {
    nodeId,
    externalTree,
    rootContext: store
  } = options;
  const referenceElement = store.useState("referenceElement");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const open2 = store.useState("open");
  const floatingId = store.useState("floatingId");
  const [positionReference, setPositionReferenceRaw] = React19__namespace.useState(null);
  const domReferenceRef = React19__namespace.useRef(null);
  const tree = useFloatingTree(externalTree);
  const storeElements = React19__namespace.useMemo(() => ({
    reference: referenceElement,
    floating: floatingElement,
    domReference: domReferenceElement
  }), [referenceElement, floatingElement, domReferenceElement]);
  const position = useFloating({
    ...options,
    elements: {
      ...storeElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React19__namespace.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const refs = React19__namespace.useMemo(() => ({
    ...position.refs,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setPositionReference]);
  const elements = React19__namespace.useMemo(() => ({
    ...position.elements,
    domReference: domReferenceElement
  }), [position.elements, domReferenceElement]);
  const context = React19__namespace.useMemo(() => ({
    ...position,
    dataRef: store.context.dataRef,
    open: open2,
    onOpenChange: store.setOpen,
    events: store.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: store
  }), [position, refs, elements, nodeId, store, open2, floatingId]);
  useIsoLayoutEffect(() => {
    if (domReferenceElement) {
      domReferenceRef.current = domReferenceElement;
    }
  }, [domReferenceElement]);
  useIsoLayoutEffect(() => {
    store.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React19__namespace.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: store
  }), [position, refs, elements, context, store]);
}
var DirectionContext = /* @__PURE__ */ React19__namespace.createContext(void 0);
if (process.env.NODE_ENV !== "production") DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React19__namespace.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform3,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform3.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const clientSize = elements.floating[clientProp] || rects.floating[length];
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min2 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp2(min2, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min2 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min2 ? center - min2 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var arrow4 = (options, deps) => {
  const {
    name,
    fn
  } = baseArrow(options);
  return {
    name,
    fn,
    options: [options, deps]
  };
};

// node_modules/@base-ui/react/utils/hideMiddleware.mjs
var hide4 = {
  name: "hide",
  async fn(state) {
    const {
      width,
      height: height2,
      x,
      y
    } = state.rects.reference;
    const anchorHidden2 = width === 0 && height2 === 0 && x === 0 && y === 0;
    const overflow = await state.platform.detectOverflow(state, {
      elementContext: "reference"
    });
    const referenceHidden = overflow.top - height2 >= 0 || overflow.right - width >= 0 || overflow.bottom - height2 >= 0 || overflow.left - width >= 0;
    return {
      data: {
        referenceHidden: referenceHidden || anchorHidden2
      }
    };
  }
};

// node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};

// node_modules/@base-ui/react/utils/CommonPositionerCssVars.mjs
var availableWidth = "--available-width";
var availableHeight = "--available-height";
var anchorWidth = "--anchor-width";
var anchorHeight = "--anchor-height";
var transformOrigin = "--transform-origin";

// node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
var AVAILABLE_WIDTH_VAR = availableWidth;
var AVAILABLE_HEIGHT_VAR = availableHeight;
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left"
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
function useAnchorPositioning(params) {
  return useAnchorPositioningWithHook(params, useBaseUIFloating);
}
function useAnchorPositioningWithHook(params, useFloatingHook) {
  const {
    // Public parameters
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    inline: inlineMiddleware,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shift: shift4,
    nodeId,
    adaptiveOrigin,
    lazyFlip = false,
    externalTree
  } = params;
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
  const shiftCrossAxis = shift4?.crossAxis ?? false;
  const shiftRootBoundary = shift4?.rootBoundary;
  const anchorFn = typeof anchor === "function" ? anchor : void 0;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const [mountPlacement, setMountPlacement] = React19__namespace.useState(null);
  if (!mounted && mountPlacement !== null) {
    setMountPlacement(null);
  }
  const lockAlign = lazyFlip === "placement";
  const mountSide = mountPlacement ? getSide(mountPlacement) : null;
  const mountAlign = mountPlacement && lockAlign ? getAlignment(mountPlacement) || "center" : null;
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placementAlign = mountAlign || align;
  const placement = placementAlign === "center" ? side : `${side}-${placementAlign}`;
  let collisionPadding = collisionPaddingParam;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding,
      right: collisionPadding,
      bottom: collisionPadding,
      left: collisionPadding
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: collisionPadding.top || 0,
      right: collisionPadding.right || 0,
      bottom: collisionPadding.bottom || 0,
      left: collisionPadding.left || 0
    };
  }
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  const commonCollisionProps = {
    boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
    padding: collisionPadding
  };
  const arrowRef = React19__namespace.useRef(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [];
  if (inlineMiddleware) {
    middleware.push(inlineMiddleware);
  }
  middleware.push(offset3((state) => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam]));
  const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip3({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias + biasTop,
      right: collisionPadding.right + bias + biasRight,
      bottom: collisionPadding.bottom + bias + biasBottom,
      left: collisionPadding.left + bias + biasLeft
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
    crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : shift3({
    ...commonCollisionProps,
    // Use the Layout Viewport to avoid shifting around when pinch-zooming.
    rootBoundary: shiftRootBoundary,
    mainAxis: collisionAvoidanceAlign !== "none",
    crossAxis: crossAxisShiftEnabled,
    limiter: sticky || shiftCrossAxis ? void 0 : limitShift3((limitData) => {
      if (!arrowRef.current) {
        return {};
      }
      const {
        width,
        height: height2
      } = arrowRef.current.getBoundingClientRect();
      const sideAxis = getSideAxis(getSide(limitData.placement));
      const arrowSize = sideAxis === "y" ? width : height2;
      const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
      return {
        offset: arrowSize / 2 + offsetAmount / 2
      };
    })
  }, [commonCollisionProps, sticky, shiftCrossAxis, shiftRootBoundary, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || placementAlign === "center") {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(size3({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth: availableWidth2,
      availableHeight: availableHeight2,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth2}px`);
      floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight2}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x2,
        y: y2,
        width,
        height: height2
      } = rects.reference;
      const anchorWidth2 = (Math.round((x2 + width) * dpr) - Math.round(x2 * dpr)) / dpr;
      const anchorHeight2 = (Math.round((y2 + height2) * dpr) - Math.round(y2 * dpr)) / dpr;
      floatingStyle.setProperty(anchorWidth, `${anchorWidth2}px`);
      floatingStyle.setProperty(anchorHeight, `${anchorHeight2}px`);
    }
  }), arrow4((state) => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
    // No padding for the fake arrow: it would displace aligned popups on narrow anchors.
    padding: arrowRef.current ? arrowPadding : 0
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      const {
        elements: {
          floating
        },
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        platform: platform3,
        rects,
        y: y2
      } = state;
      const renderedSide2 = getSide(renderedPlacement2);
      const renderedAlign2 = getAlignment(renderedPlacement2);
      const isVertical = getSideAxis(renderedSide2) === "y";
      const arrowEl = arrowRef.current;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      let crossOrigin;
      if (!arrowEl && renderedAlign2 && Math.abs(isVertical ? middlewareData2.shift?.x || 0 : middlewareData2.shift?.y || 0) <= 1) {
        crossOrigin = renderedAlign2 === "start" === (isVertical && platform3.isRTL?.(floating) === true) ? "100%" : "0%";
      } else {
        const arrowOffset = isVertical ? middlewareData2.arrow?.x || 0 : middlewareData2.arrow?.y || 0;
        const arrowSize = isVertical ? arrowEl?.clientWidth || 0 : arrowEl?.clientHeight || 0;
        crossOrigin = `${arrowOffset + arrowSize / 2}px`;
      }
      let sideOrigin = renderedSide2 === "top" || renderedSide2 === "left" ? `calc(100% + ${sideOffsetValue}px)` : `${-sideOffsetValue}px`;
      if (crossAxisShiftEnabled && isVertical && Math.abs(middlewareData2.shift?.y || 0) > sideOffsetValue) {
        sideOrigin = `${rects.reference.y + rects.reference.height / 2 - y2}px`;
      }
      floating.style.setProperty(transformOrigin, isVertical ? `${crossOrigin} ${sideOrigin}` : `${sideOrigin} ${crossOrigin}`);
      return {};
    }
  }, hide4, adaptiveOrigin);
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = React19__namespace.useMemo(() => ({
    ancestorScroll: !disableAnchorTracking,
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x,
    y,
    middlewareData,
    update: update2,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloatingHook({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : void 0,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = React19__namespace.useMemo(() => {
    let base;
    if (!isPositioned) {
      base = {
        position: resolvedPosition,
        top: 0,
        left: 0
      };
    } else if (adaptiveOrigin) {
      base = {
        position: resolvedPosition,
        [sideX]: x,
        [sideY]: y
      };
    } else {
      base = {
        ...originalFloatingStyles,
        position: resolvedPosition
      };
    }
    base[AVAILABLE_WIDTH_VAR] = "100vw";
    base[AVAILABLE_HEIGHT_VAR] = "100vh";
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin, resolvedPosition, sideX, x, sideY, y, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = React19__namespace.useRef(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React19__namespace.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React19__namespace.useEffect(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return autoUpdate(elements.reference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden2 = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned && (renderedSide !== side || lockAlign && renderedAlign !== placementAlign)) {
      setMountPlacement(renderedPlacement);
    }
  }, [lazyFlip, lockAlign, mounted, isPositioned, renderedPlacement, renderedSide, renderedAlign, side, placementAlign]);
  const arrowStyles = React19__namespace.useMemo(() => ({
    position: "absolute",
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React19__namespace.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden: anchorHidden2,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden2, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}
var ToastPositionerContext = /* @__PURE__ */ React19__namespace.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToastPositionerContext.displayName = "ToastPositionerContext";
function useToastPositionerContext() {
  const context = React19__namespace.useContext(ToastPositionerContext);
  if (context === void 0) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ToastPositionerContext is missing. ToastPositioner parts must be placed within <Toast.Positioner>." : formatErrorMessage_default(84));
  }
  return context;
}

// node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}

// node_modules/@base-ui/react/utils/usePositioner.mjs
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement("div", componentProps, {
    state,
    ref: refs,
    props: [{
      role: "presentation",
      hidden,
      style
    }, getDisabledMountTransitionStyles(transitionStatus), props],
    stateAttributesMapping: popupStateMapping
  });
}
var ToastPositioner = /* @__PURE__ */ React19__namespace.forwardRef(function ToastPositioner2(componentProps, forwardedRef) {
  const {
    toast,
    ...props
  } = componentProps;
  const store = useToastProviderContext();
  const positionerProps = toast.positionerProps ?? EMPTY_OBJECT;
  const {
    render,
    className,
    anchor: anchorProp = positionerProps.anchor,
    positionMethod = positionerProps.positionMethod ?? "absolute",
    side = positionerProps.side ?? "top",
    align = positionerProps.align ?? "center",
    sideOffset = positionerProps.sideOffset ?? 0,
    alignOffset = positionerProps.alignOffset ?? 0,
    collisionBoundary = positionerProps.collisionBoundary ?? "clipping-ancestors",
    collisionPadding = positionerProps.collisionPadding ?? 5,
    arrowPadding = positionerProps.arrowPadding ?? 5,
    sticky = positionerProps.sticky ?? false,
    disableAnchorTracking = positionerProps.disableAnchorTracking ?? false,
    collisionAvoidance = positionerProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE,
    style,
    ...elementProps
  } = props;
  const [positionerElement, setPositionerElement] = React19__namespace.useState(null);
  const domIndex = store.useState("toastIndex", toast.id);
  const visibleIndex = store.useState("toastVisibleIndex", toast.id);
  const anchor = isElement(anchorProp) ? anchorProp : null;
  const floatingRootContext = useFloatingRootContext({
    open: true,
    onOpenChange: NOOP,
    elements: {
      floating: positionerElement,
      reference: anchor
    }
  });
  const positioning = useAnchorPositioning({
    anchor,
    positionMethod,
    floatingRootContext,
    mounted: true,
    side,
    sideOffset,
    align,
    alignOffset,
    collisionBoundary,
    collisionPadding,
    sticky,
    arrowPadding,
    disableAnchorTracking,
    keepMounted: true,
    collisionAvoidance
  });
  const state = {
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden
  };
  const element = usePositioner(componentProps, state, {
    styles: {
      ...positioning.positionerStyles,
      [index]: toast.transitionStatus === "ending" ? domIndex : visibleIndex
    },
    transitionStatus: toast.transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement]
  });
  return /* @__PURE__ */ jsxRuntime.jsx(ToastPositionerContext.Provider, {
    value: positioning,
    children: element
  });
});
if (process.env.NODE_ENV !== "production") ToastPositioner.displayName = "ToastPositioner";
var ToastArrow = /* @__PURE__ */ React19__namespace.forwardRef(function ToastArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    style,
    ...elementProps
  } = componentProps;
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useToastPositionerContext();
  const state = {
    side,
    align,
    uncentered: arrowUncentered
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps]
  });
});
if (process.env.NODE_ENV !== "production") ToastArrow.displayName = "ToastArrow";
function useToastManager() {
  const store = useToastProviderContext();
  const toasts = store.useState("toasts");
  return React19__namespace.useMemo(() => ({
    toasts,
    add: store.addToast,
    close: store.closeToast,
    update: store.updateToast,
    promise: store.promiseToast
  }), [toasts, store]);
}

// node_modules/@base-ui/react/toast/createToastManager.mjs
function createToastManager() {
  const listeners = /* @__PURE__ */ new Set();
  function emit(data) {
    listeners.forEach((listener) => listener(data));
  }
  return {
    // This should be private aside from ToastProvider needing to access it.
    // https://x.com/drosenwasser/status/1816947740032872664
    " subscribe": function subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    add(options) {
      const id = options.id || generateId("toast");
      const toastToAdd = {
        ...options,
        id,
        transitionStatus: "starting"
      };
      emit({
        action: "add",
        options: toastToAdd
      });
      return id;
    },
    close(id) {
      emit({
        action: "close",
        options: {
          id
        }
      });
    },
    update(id, updates) {
      emit({
        action: "update",
        options: {
          id,
          updates
        }
      });
    },
    promise(promiseValue, options) {
      let handledPromise = promiseValue;
      emit({
        action: "promise",
        options: {
          ...options,
          promise: promiseValue,
          setPromise(promise) {
            handledPromise = promise;
          }
        }
      });
      return handledPromise;
    }
  };
}
var TOAST_COLORS = {
  success: { accent: "#84f7c5", accentSoft: "rgba(132, 247, 197, 0.13)" },
  error: { accent: "#ff8f9d", accentSoft: "rgba(255, 143, 157, 0.13)" },
  warning: { accent: "#ffd479", accentSoft: "rgba(255, 212, 121, 0.13)" },
  info: { accent: "#8fc7ff", accentSoft: "rgba(143, 199, 255, 0.13)" }
};
var TOAST_ICONS = {
  success: CheckCircleRoundedIcon__default.default,
  error: ErrorRoundedIcon__default.default,
  warning: WarningAmberRoundedIcon__default.default,
  info: InfoRoundedIcon__default.default
};
var ToastViewport3 = styles.styled(index_parts_exports.Viewport)(({ theme }) => ({
  position: "fixed",
  right: theme.spacing(2.5),
  bottom: theme.spacing(2.5),
  zIndex: theme.zIndex.snackbar,
  display: "flex",
  width: "min(360px, calc(100vw - 32px))",
  maxHeight: "calc(100vh - 32px)",
  flexDirection: "column",
  gap: theme.spacing(1),
  margin: 0,
  padding: 0,
  outline: 0,
  listStyle: "none",
  pointerEvents: "none",
  [theme.breakpoints.down("sm")]: {
    right: theme.spacing(2),
    bottom: theme.spacing(2)
  }
}));
var ToastSurface = styles.styled(framerMotion.motion.div, {
  shouldForwardProp: (prop) => prop !== "severity"
})(({ theme, severity }) => ({
  "--toast-accent": TOAST_COLORS[severity].accent,
  "--toast-accent-soft": TOAST_COLORS[severity].accentSoft,
  width: "100%",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.09)",
  borderRadius: 14,
  background: "rgba(13, 18, 17, 0.96)",
  boxShadow: "0 18px 48px rgba(0, 0, 0, 0.32), 0 2px 8px rgba(0, 0, 0, 0.22)",
  color: "#f4f7f6",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  pointerEvents: "auto",
  touchAction: "pan-y",
  userSelect: "none",
  "&:focus-visible": {
    outline: "2px solid var(--toast-accent)",
    outlineOffset: 2
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 12
  }
}));
var ToastContent3 = styles.styled(index_parts_exports.Content)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "36px minmax(0, 1fr) 32px",
  alignItems: "center",
  gap: theme.spacing(1.25),
  minHeight: 68,
  padding: theme.spacing(1.25, 1.25, 1.25, 1.5)
}));
var ToastIcon = styles.styled("span")({
  display: "grid",
  width: 36,
  height: 36,
  placeItems: "center",
  borderRadius: 10,
  background: "var(--toast-accent-soft)",
  color: "var(--toast-accent)"
});
var ToastText = styles.styled("div")({
  minWidth: 0
});
var ToastTitle3 = styles.styled(index_parts_exports.Title)({
  margin: 0,
  color: "#f7faf9",
  fontSize: 14,
  fontWeight: 750,
  lineHeight: 1.35,
  letterSpacing: "-0.01em"
});
var ToastDescription3 = styles.styled(index_parts_exports.Description)({
  display: "-webkit-box",
  overflow: "hidden",
  marginTop: 2,
  color: "#99a6a2",
  fontSize: 12.5,
  lineHeight: 1.45,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3
});
var ToastClose3 = styles.styled(index_parts_exports.Close)({
  display: "grid",
  width: 32,
  height: 32,
  padding: 0,
  placeItems: "center",
  border: 0,
  borderRadius: 9,
  background: "transparent",
  color: "#80908a",
  cursor: "pointer",
  transition: "background-color 160ms ease, color 160ms ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.07)",
    color: "#f7faf9"
  },
  "&:focus-visible": {
    outline: "2px solid var(--toast-accent)",
    outlineOffset: 1
  }
});
var getSeverity = (type) => {
  if (type === "success" || type === "error" || type === "warning") return type;
  return "info";
};
var MotionToastViewport = () => {
  const { toasts, close } = index_parts_exports.useToastManager();
  const reduceMotion = framerMotion.useReducedMotion();
  return /* @__PURE__ */ jsxRuntime.jsx(index_parts_exports.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(ToastViewport3, { children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { initial: false, mode: "popLayout", children: toasts.map((toast) => {
    const severity = getSeverity(toast.type);
    const Icon = TOAST_ICONS[severity];
    return /* @__PURE__ */ jsxRuntime.jsx(
      index_parts_exports.Root,
      {
        toast,
        swipeDirection: "right",
        render: /* @__PURE__ */ jsxRuntime.jsx(
          ToastSurface,
          {
            severity,
            layout: !reduceMotion,
            initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: reduceMotion ? { opacity: 0 } : { opacity: 0, x: 90, scale: 0.96 },
            transition: { type: "spring", stiffness: 430, damping: 34, mass: 0.8 },
            drag: reduceMotion ? false : "x",
            dragConstraints: { left: 0, right: 0 },
            dragElastic: { left: 0.08, right: 0.7 },
            onDragEnd: (_, info) => {
              if (info.offset.x > 72 || info.velocity.x > 520) close(toast.id);
            }
          }
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs(ToastContent3, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(ToastIcon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { fontSize: "small" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs(ToastText, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(ToastTitle3, {}),
            /* @__PURE__ */ jsxRuntime.jsx(ToastDescription3, {})
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ToastClose3, { "aria-label": "Dismiss notification", children: /* @__PURE__ */ jsxRuntime.jsx(CloseRoundedIcon__default.default, { fontSize: "small" }) })
        ] })
      },
      toast.id
    );
  }) }) }) });
};
var SnackbarContext = React19.createContext(null);
var SEVERITY_TITLES = {
  success: "Success",
  error: "Something went wrong",
  warning: "Attention needed",
  info: "Notice"
};
var SnackbarBridge = ({ children }) => {
  const { t } = reactI18next.useTranslation();
  const toastManager = index_parts_exports.useToastManager();
  const show = React19.useCallback(
    (severity) => (message, params) => {
      toastManager.add({
        title: SEVERITY_TITLES[severity],
        description: t(message, params),
        type: severity,
        priority: severity === "error" ? "high" : "low"
      });
    },
    [t, toastManager]
  );
  const value = React19.useMemo(
    () => ({
      showSuccess: show("success"),
      showError: show("error"),
      showInfo: show("info"),
      showWarning: show("warning")
    }),
    [show]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(SnackbarContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(MotionToastViewport, {})
  ] });
};
var SnackbarProvider = ({ children }) => /* @__PURE__ */ jsxRuntime.jsx(index_parts_exports.Provider, { limit: 5, timeout: SNACKBAR_AUTOHIDE_MS, children: /* @__PURE__ */ jsxRuntime.jsx(SnackbarBridge, { children }) });
var useSnackbar = () => {
  const ctx = React19.useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
};
var DEFAULT_CURRENCY = "LKR";
function useLocaleFormat() {
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const locale = i18n2.language;
  return React19.useMemo(
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
  const initial2 = presetRange(initialPreset);
  const [from, setFrom] = React19.useState(initial2.from);
  const [to, setTo] = React19.useState(initial2.to);
  const [preset, setPreset] = React19.useState(initialPreset);
  const setRange = React19.useCallback((nextFrom, nextTo) => {
    setFrom(nextFrom);
    setTo(nextTo);
    setPreset(null);
  }, []);
  const applyPreset = React19.useCallback((next) => {
    const range = presetRange(next);
    setFrom(range.from);
    setTo(range.to);
    setPreset(next);
  }, []);
  const days = React19.useMemo(() => differenceInDays(from, to) + 1, [from, to]);
  return { from, to, setRange, preset, applyPreset, days };
}
function useContextMenu() {
  const [contextMenu, setContextMenu] = React19.useState({
    open: false,
    x: 0,
    y: 0,
    items: []
  });
  const openContextMenu = React19.useCallback(
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
  const closeContextMenu = React19.useCallback(() => {
    setContextMenu((prev) => prev.open ? { ...prev, open: false } : prev);
  }, []);
  return {
    contextMenu,
    openContextMenu,
    closeContextMenu
  };
}
function NamiosMarkSvg({ size: size4 = 28, color }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: size4, height: size4, viewBox: "65.4 0 357 357", role: "img", "aria-label": "Namios Logo", children: /* @__PURE__ */ jsxRuntime.jsx(
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
  size: size4 = 50,
  color,
  label,
  showLogo = true
}) {
  const theme = styles.useTheme();
  const loaderColor = color || (theme.palette.mode === "light" ? "#2563EB" : "#60A5FA");
  const thickness = Math.max(4, Math.round(size4 / 5));
  const lat = Math.round((size4 - thickness) / 2);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box6__default.default,
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
          Box6__default.default,
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
          Box6__default.default,
          {
            sx: {
              position: "relative",
              width: size4,
              height: size4,
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
var LoadingOverlay = ({ open: open2, label, size: size4 = 48 }) => {
  if (!open2) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(OverlayRoot, { children: /* @__PURE__ */ jsxRuntime.jsx(NamiosLoader, { size: size4, label }) });
};
var AppDialog = ({
  open: open2,
  titleKey,
  titleParams,
  size: size4 = "sm",
  actions,
  loading = false,
  disableClose = false,
  onClose,
  children
}) => {
  const { t } = reactI18next.useTranslation();
  const handleClose = (_event, reason) => {
    if (disableClose && (reason === "backdropClick" || reason === "escapeKeyDown")) return;
    onClose();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open: open2,
      onClose: handleClose,
      fullWidth: true,
      maxWidth: size4,
      TransitionComponent: AppleDialogTransition,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          t(titleKey, titleParams),
          /* @__PURE__ */ jsxRuntime.jsx(
            IconButton9__default.default,
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
};
var FormDialog = ({
  open: open2,
  titleKey,
  titleParams,
  size: size4 = "sm",
  schema,
  defaultValues,
  onSubmit,
  onClose,
  submitting = false,
  submitKey = "common:actions.save",
  cancelKey = "common:actions.cancel",
  children
}) => {
  const { t } = reactI18next.useTranslation();
  const form = reactHookForm.useForm({
    resolver: zod.zodResolver(schema),
    defaultValues,
    mode: "onBlur"
  });
  const { reset } = form;
  React19.useEffect(() => {
    if (open2) reset(defaultValues);
  }, [open2, defaultValues, reset]);
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    AppDialog,
    {
      open: open2,
      titleKey,
      titleParams,
      size: size4,
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
            startIcon: submitting ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress__default.default, { size: 16, color: "inherit" }) : void 0,
            children: submitting ? t("common:actions.saving", { defaultValue: "Saving..." }) : t(submitKey)
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
};
var AnimatedInbox = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, transition: { type: "spring", stiffness: 300, damping: 15 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.02, 1],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 15 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "12",
            y1: "7",
            x2: "12",
            y2: "10",
            variants: {
              idle: { opacity: 0.6, y: 0 },
              animate: {
                opacity: [0.3, 0.9, 0.3],
                y: [-2, 1, -2],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, opacity: 1, transition: { type: "spring" } }
            }
          }
        )
      ]
    }
  );
};
var EmptyStateContainer = styles.styled(Paper__default.default)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6, 3),
  textAlign: "center",
  borderRadius: 16,
  border: `1px dashed ${theme.palette.divider}`,
  backgroundColor: theme.palette.mode === "light" ? "rgba(248, 249, 250, 0.6)" : "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(8px)",
  width: "100%",
  minHeight: 280,
  transition: "all 0.2s ease"
}));
var IconGlowBadge = styles.styled(Box6__default.default)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  borderRadius: "24px",
  background: theme.palette.mode === "light" ? "linear-gradient(135deg, rgba(0, 122, 255, 0.08) 0%, rgba(88, 86, 214, 0.08) 100%)" : "linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(88, 86, 214, 0.15) 100%)",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.mode === "light" ? "rgba(0, 122, 255, 0.12)" : "rgba(0, 122, 255, 0.25)"}`,
  boxShadow: "0 8px 24px rgba(0, 122, 255, 0.08)",
  marginBottom: theme.spacing(1)
}));
var EmptyState = ({
  icon,
  titleKey = "common:states.noResults",
  title,
  descriptionKey,
  description,
  descriptionParams,
  action,
  compact = false
}) => {
  const { t } = reactI18next.useTranslation();
  const displayTitle = title || t(titleKey);
  const displayDesc = description || (descriptionKey ? t(descriptionKey, descriptionParams) : void 0);
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      initial: { opacity: 0, y: 10, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.35, ease: "easeOut" },
      style: { width: "100%" },
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        EmptyStateContainer,
        {
          variant: "outlined",
          sx: {
            py: compact ? 3.5 : 6,
            minHeight: compact ? 180 : 280
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(IconGlowBadge, { children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(AnimatedInbox, { size: 42, isAnimated: true }) }),
            /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { spacing: 0.75, alignItems: "center", sx: { maxWidth: 440, mt: 1, mb: action ? 2.5 : 0 }, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", fontWeight: 700, color: "text.primary", letterSpacing: "-0.2px", children: displayTitle }),
              displayDesc ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", fontWeight: 500, lineHeight: 1.5, children: displayDesc }) : null
            ] }),
            action ? /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { mt: 1 }, children: action }) : null
          ]
        }
      )
    }
  );
};
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
var idCounter = 0;
function generateId2(prefix = "mui") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}
function forwardRef17(component) {
  return React19__namespace.default.forwardRef(component);
}
function isInteractive(element) {
  const tag = element.tagName.toLowerCase();
  return tag === "button" || tag === "a" || tag === "input" || tag === "select" || tag === "textarea" || element.getAttribute("tabindex") !== null;
}
function clamp3(value, min2, max2) {
  return Math.min(Math.max(value, min2), max2);
}
function mapRange(value, inMin, inMax, outMin, outMax) {
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// node_modules/@namios/motionui-react/dist/esm/components/Accordion/Accordion.js
var AccordionSummary = ({ expandIcon, children, className, ...props }) => {
  return jsxRuntime.jsxs("button", { type: "button", className: cn("mui-accordion__summary", className), ...props, children: [jsxRuntime.jsx("div", { className: "mui-accordion__summary-content", children }), jsxRuntime.jsx("div", { className: "mui-accordion__expand-icon", children: expandIcon || jsxRuntime.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: jsxRuntime.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })] });
};
var AccordionDetails = ({ children, className, ...props }) => {
  return jsxRuntime.jsx("div", { className: cn("mui-accordion__details", className), ...props, children: jsxRuntime.jsx("div", { className: "mui-accordion__details-inner", children }) });
};
var Accordion = ({ expanded: controlledExpanded, defaultExpanded = false, onChange, className, children, ...props }) => {
  const [uncontrolledExpanded, setUncontrolledExpanded] = React19.useState(defaultExpanded);
  const isExpanded = controlledExpanded !== void 0 ? controlledExpanded : uncontrolledExpanded;
  const toggle = () => {
    const next = !isExpanded;
    if (controlledExpanded === void 0) {
      setUncontrolledExpanded(next);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(next);
  };
  return jsxRuntime.jsx("div", { className: cn("mui-accordion", isExpanded && "mui-accordion--expanded", className), ...props, children: React19__namespace.default.Children.map(children, (child) => {
    if (!React19__namespace.default.isValidElement(child))
      return child;
    if (child.type === AccordionSummary) {
      return React19__namespace.default.cloneElement(child, {
        onClick: toggle,
        role: "button",
        "aria-expanded": isExpanded
      });
    }
    return child;
  }) });
};
var AlertTitle = ({ className, children, ...props }) => {
  return jsxRuntime.jsx("h5", { className: cn("mui-alert__title", className), ...props, children });
};
var defaultIcons = {
  success: jsxRuntime.jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntime.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), jsxRuntime.jsx("polyline", { points: "22 4 12 14.01 9 11.01" })] }),
  info: jsxRuntime.jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "10" }), jsxRuntime.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), jsxRuntime.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] }),
  warning: jsxRuntime.jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntime.jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), jsxRuntime.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), jsxRuntime.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }),
  error: jsxRuntime.jsxs("svg", { className: "mui-alert__icon-svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "10" }), jsxRuntime.jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), jsxRuntime.jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] })
};
var Alert = React19__namespace.default.forwardRef(({ severity = "success", variant = "standard", icon, action, onClose, closeText = "Close", className, children, ...props }, ref) => {
  const renderIcon = () => {
    if (icon === false)
      return null;
    if (icon !== void 0)
      return jsxRuntime.jsx("div", { className: "mui-alert__icon", children: icon });
    return jsxRuntime.jsx("div", { className: "mui-alert__icon", children: defaultIcons[severity] });
  };
  return jsxRuntime.jsxs("div", { ref, role: "alert", className: cn("mui-alert", `mui-alert--${severity}`, `mui-alert--${variant}`, className), ...props, children: [renderIcon(), jsxRuntime.jsx("div", { className: "mui-alert__message", children }), action && jsxRuntime.jsx("div", { className: "mui-alert__action", children: action }), onClose && !action && jsxRuntime.jsx("div", { className: "mui-alert__action", children: jsxRuntime.jsx("button", { type: "button", className: "mui-alert__close-btn", "aria-label": closeText, onClick: onClose, children: jsxRuntime.jsxs("svg", { viewBox: "0 0 24 24", width: "18", height: "18", stroke: "currentColor", strokeWidth: "2", fill: "none", children: [jsxRuntime.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), jsxRuntime.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }) })] });
});
Alert.displayName = "Alert";
var Avatar = React19__namespace.default.forwardRef(({ src, alt, size: size4 = "medium", variant = "circular", children, className, ...props }, ref) => {
  const sizeStyle = typeof size4 === "number" ? { width: size4, height: size4 } : {};
  return jsxRuntime.jsx("div", { ref, className: cn("mui-avatar", `mui-avatar--${variant}`, typeof size4 === "string" && `mui-avatar--${size4}`, className), style: sizeStyle, ...props, children: src ? jsxRuntime.jsx("img", { src, alt: alt || "", className: "mui-avatar__img" }) : children || (alt ? alt.charAt(0).toUpperCase() : "?") });
});
Avatar.displayName = "Avatar";
var AvatarGroup = React19__namespace.default.forwardRef(({ max: max2 = 5, spacing = "medium", children, className, ...props }, ref) => {
  const childArray = React19__namespace.default.Children.toArray(children);
  const excess = childArray.length - max2;
  const visible = excess > 0 ? childArray.slice(0, max2) : childArray;
  return jsxRuntime.jsxs("div", { ref, className: cn("mui-avatar-group", `mui-avatar-group--${spacing}`, className), ...props, children: [visible, excess > 0 && jsxRuntime.jsxs("div", { className: "mui-avatar mui-avatar--circular mui-avatar--medium mui-avatar-group__excess", children: ["+", excess] })] });
});
AvatarGroup.displayName = "AvatarGroup";
var Badge = React19__namespace.default.forwardRef(({ badgeContent, color = "error", variant = "standard", invisible = false, max: max2 = 99, overlap = "rectangular", anchorOrigin = { vertical: "top", horizontal: "right" }, children, className, ...props }, ref) => {
  const displayContent = variant === "dot" ? null : typeof badgeContent === "number" && badgeContent > max2 ? `${max2}+` : badgeContent;
  const shouldHide = invisible || variant === "standard" && badgeContent == null;
  return jsxRuntime.jsxs("span", { ref, className: cn("mui-badge", className), ...props, children: [children, !shouldHide && jsxRuntime.jsx("span", { className: cn("mui-badge__badge", `mui-badge--${color}`, `mui-badge--${variant}`, `mui-badge--${overlap}`, `mui-badge--${anchorOrigin.vertical}-${anchorOrigin.horizontal}`), children: displayContent })] });
});
Badge.displayName = "Badge";
var Box4 = React19__namespace.default.forwardRef(({ component = "div", display, flexDirection, alignItems, justifyContent, gap, padding, margin, width, height: height2, minWidth, maxWidth, minHeight, maxHeight, overflow, position, className, children, style, ...props }, ref) => {
  const inlineStyle = {
    ...style,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
    padding: typeof padding === "number" ? `${padding * 0.25}rem` : padding,
    margin: typeof margin === "number" ? `${margin * 0.25}rem` : margin,
    width,
    height: height2,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    overflow,
    position
  };
  Object.keys(inlineStyle).forEach((key) => {
    if (inlineStyle[key] === void 0)
      delete inlineStyle[key];
  });
  return React19__namespace.default.createElement(component, { ref, className: cn("mui-box", className), style: inlineStyle, ...props }, children);
});
Box4.displayName = "Box";
var Button3 = React19__namespace.default.forwardRef(({ variant = "contained", color = "primary", size: size4 = "medium", fullWidth = false, disabled: disabled2 = false, loading = false, disableRipple = false, disableElevation = false, startIcon, endIcon, rounded = false, className, children, onClick, href, ...props }, ref) => {
  const buttonRef = React19.useRef(null);
  const [ripples, setRipples] = React19.useState([]);
  const handleClick = (e) => {
    if (disabled2 || loading)
      return;
    if (!disableRipple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const classes = cn("mui-button", `mui-button--${variant}`, `mui-button--${color}`, `mui-button--${size4}`, fullWidth && "mui-button--full-width", disabled2 && "mui-button--disabled", loading && "mui-button--loading", disableElevation && "mui-button--flat", rounded && "mui-button--rounded", className);
  const content = jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [loading && jsxRuntime.jsx("span", { className: "mui-button__spinner", "aria-hidden": "true", children: jsxRuntime.jsx("svg", { viewBox: "0 0 24 24", className: "mui-button__spinner-svg", children: jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "10", fill: "none", strokeWidth: "3" }) }) }), startIcon && jsxRuntime.jsx("span", { className: "mui-button__start-icon", children: startIcon }), jsxRuntime.jsx("span", { className: cn("mui-button__label", loading && "mui-button__label--hidden"), children }), endIcon && jsxRuntime.jsx("span", { className: "mui-button__end-icon", children: endIcon }), !disableRipple && ripples.map((ripple) => jsxRuntime.jsx("span", { className: "mui-button__ripple", style: { left: ripple.x, top: ripple.y } }, ripple.id))] });
  if (href && !disabled2) {
    return jsxRuntime.jsx("a", { className: classes, href, role: "button", tabIndex: 0, children: content });
  }
  return jsxRuntime.jsx("button", { ref: ref || buttonRef, className: classes, disabled: disabled2 || loading, onClick: handleClick, "aria-busy": loading, "aria-disabled": disabled2 || loading, ...props, children: content });
});
Button3.displayName = "Button";
var Card = React19__namespace.default.forwardRef(({ elevation = 1, variant = "elevation", interactive = false, className, children, ...props }, ref) => jsxRuntime.jsx("div", { ref, className: cn("mui-card", variant === "elevation" && `mui-card--elevation-${elevation}`, variant === "outlined" && "mui-card--outlined", interactive && "mui-card--interactive", className), ...props, children }));
Card.displayName = "Card";
var CardHeader = ({ avatar, title, subheader, action, className, ...props }) => jsxRuntime.jsxs("div", { className: cn("mui-card__header", className), ...props, children: [avatar && jsxRuntime.jsx("div", { className: "mui-card__header-avatar", children: avatar }), jsxRuntime.jsxs("div", { className: "mui-card__header-content", children: [title && jsxRuntime.jsx("div", { className: "mui-card__header-title", children: title }), subheader && jsxRuntime.jsx("div", { className: "mui-card__header-subheader", children: subheader })] }), action && jsxRuntime.jsx("div", { className: "mui-card__header-action", children: action })] });
var CardContent = ({ className, children, ...props }) => jsxRuntime.jsx("div", { className: cn("mui-card__content", className), ...props, children });
var CardMedia = ({ component = "img", className, ...props }) => React19__namespace.default.createElement(component, { className: cn("mui-card__media", className), ...props });
var CardActions = ({ disableSpacing, className, children, ...props }) => jsxRuntime.jsx("div", { className: cn("mui-card__actions", !disableSpacing && "mui-card__actions--spaced", className), ...props, children });
var Checkbox = React19__namespace.default.forwardRef(({ color = "primary", size: size4 = "medium", label, indeterminate, className, id, ...props }, ref) => {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2)}`;
  const inputRef = React19__namespace.default.useRef(null);
  React19__namespace.default.useEffect(() => {
    const el = (ref === null || ref === void 0 ? void 0 : ref.current) || inputRef.current;
    if (el)
      el.indeterminate = !!indeterminate;
  }, [indeterminate, ref]);
  return jsxRuntime.jsxs("label", { className: cn("mui-checkbox", `mui-checkbox--${color}`, `mui-checkbox--${size4}`, props.disabled && "mui-checkbox--disabled", className), htmlFor: inputId, children: [jsxRuntime.jsxs("span", { className: "mui-checkbox__box", children: [jsxRuntime.jsx("input", { ref: ref || inputRef, type: "checkbox", id: inputId, className: "mui-checkbox__input", ...props }), jsxRuntime.jsx("svg", { className: "mui-checkbox__icon", viewBox: "0 0 24 24", "aria-hidden": "true", children: indeterminate ? jsxRuntime.jsx("path", { d: "M6 12h12", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }) : jsxRuntime.jsx("path", { d: "M5 13l4 4L19 7", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), label && jsxRuntime.jsx("span", { className: "mui-checkbox__label", children: label })] });
});
Checkbox.displayName = "Checkbox";
var Chip = React19__namespace.default.forwardRef(({ label, variant = "filled", color = "primary", size: size4 = "medium", icon, avatar, deleteIcon, onDelete, clickable, disabled: disabled2, className, onClick, ...props }, ref) => {
  const isClickable = clickable || !!onClick;
  return jsxRuntime.jsxs("div", { ref, className: cn("mui-chip", `mui-chip--${variant}`, `mui-chip--${color}`, `mui-chip--${size4}`, isClickable && "mui-chip--clickable", disabled2 && "mui-chip--disabled", className), role: isClickable ? "button" : void 0, tabIndex: isClickable && !disabled2 ? 0 : void 0, onClick: !disabled2 ? onClick : void 0, ...props, children: [avatar && jsxRuntime.jsx("span", { className: "mui-chip__avatar", children: avatar }), icon && !avatar && jsxRuntime.jsx("span", { className: "mui-chip__icon", children: icon }), jsxRuntime.jsx("span", { className: "mui-chip__label", children: label }), onDelete && jsxRuntime.jsx("button", { className: "mui-chip__delete", onClick: (e) => {
    e.stopPropagation();
    onDelete();
  }, "aria-label": `Remove ${label}`, tabIndex: -1, children: deleteIcon || jsxRuntime.jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", children: jsxRuntime.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", fill: "none" }) }) })] });
});
Chip.displayName = "Chip";
var Container = React19__namespace.default.forwardRef(({ maxWidth = "lg", fixed = false, disableGutters = false, className, children, ...props }, ref) => {
  const classes = cn("mui-container", maxWidth && `mui-container--${maxWidth}`, fixed && "mui-container--fixed", !disableGutters && "mui-container--gutters", className);
  return jsxRuntime.jsx("div", { ref, className: classes, ...props, children });
});
Container.displayName = "Container";
var DialogTitle3 = ({ className, children, ...props }) => jsxRuntime.jsx("h2", { className: cn("mui-dialog__title", className), ...props, children });
var DialogContent3 = ({ className, children, ...props }) => jsxRuntime.jsx("div", { className: cn("mui-dialog__content", className), ...props, children });
var DialogActions3 = ({ className, children, ...props }) => jsxRuntime.jsx("div", { className: cn("mui-dialog__actions", className), ...props, children });
var Dialog3 = ({ open: open2, onClose, maxWidth = "sm", fullWidth = true, className, children, ...props }) => {
  React19.useEffect(() => {
    if (!open2)
      return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open2, onClose]);
  if (!open2)
    return null;
  return jsxRuntime.jsxs("div", { className: "mui-dialog__root", children: [jsxRuntime.jsx("div", { className: "mui-dialog__backdrop", onClick: onClose }), jsxRuntime.jsx("div", { className: "mui-dialog__container", children: jsxRuntime.jsx("div", { role: "dialog", "aria-modal": "true", className: cn("mui-dialog__paper", maxWidth && `mui-dialog--max-${maxWidth}`, fullWidth && "mui-dialog--full-width", className), ...props, children }) })] });
};
var Divider = React19__namespace.default.forwardRef(({ orientation = "horizontal", variant = "fullWidth", textAlign = "center", light = false, className, children, ...props }, ref) => {
  const hasContent = !!children;
  const classes = cn("mui-divider", `mui-divider--${orientation}`, `mui-divider--${variant}`, light && "mui-divider--light", hasContent && "mui-divider--with-content", hasContent && `mui-divider--text-${textAlign}`, className);
  if (hasContent) {
    return jsxRuntime.jsx("div", { ref, className: classes, role: "separator", ...props, children: jsxRuntime.jsx("span", { className: "mui-divider__content", children }) });
  }
  return jsxRuntime.jsx("hr", { ref, className: classes, role: "separator", ...props });
});
Divider.displayName = "Divider";
var Drawer = ({ open: open2, onClose, anchor = "bottom", className, children, ...props }) => {
  React19.useEffect(() => {
    if (!open2)
      return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open2, onClose]);
  if (!open2)
    return null;
  return jsxRuntime.jsxs("div", { className: "mui-drawer-root", children: [jsxRuntime.jsx("div", { className: "mui-drawer-backdrop", onClick: onClose }), jsxRuntime.jsxs("div", { role: "dialog", "aria-modal": "true", className: cn("mui-drawer-paper", `mui-drawer-paper--${anchor}`, className), ...props, children: [anchor === "bottom" && jsxRuntime.jsx("div", { className: "mui-drawer-handle-bar", children: jsxRuntime.jsx("div", { className: "mui-drawer-handle" }) }), jsxRuntime.jsx("div", { className: "mui-drawer-content", children })] })] });
};
var Grid = React19__namespace.default.forwardRef(({ container, item, spacing = 2, columns = 12, xs, sm, md, lg, xl, direction, alignItems, justifyContent, wrap = "wrap", component = "div", className, children, style, ...props }, ref) => {
  const classes = cn("mui-grid", container && "mui-grid--container", item && "mui-grid--item", typeof xs === "number" && `mui-grid--xs-${xs}`, xs === true && "mui-grid--xs-auto", typeof sm === "number" && `mui-grid--sm-${sm}`, typeof md === "number" && `mui-grid--md-${md}`, typeof lg === "number" && `mui-grid--lg-${lg}`, typeof xl === "number" && `mui-grid--xl-${xl}`, className);
  const inlineStyle = {
    ...style,
    ...container ? {
      "--grid-spacing": `${spacing * 0.25}rem`,
      "--grid-columns": columns,
      flexDirection: direction,
      alignItems,
      justifyContent,
      flexWrap: wrap
    } : {}
  };
  return React19__namespace.default.createElement(component, { ref, className: classes, style: inlineStyle, ...props }, children);
});
Grid.displayName = "Grid";
var IconButton3 = React19__namespace.default.forwardRef(({ color = "default", size: size4 = "medium", edge = false, className, disabled: disabled2 = false, children, ...props }, ref) => {
  return jsxRuntime.jsxs("button", { ref, type: "button", disabled: disabled2, className: cn("mui-icon-button", `mui-icon-button--${color}`, `mui-icon-button--${size4}`, edge && `mui-icon-button--edge-${edge}`, className), ...props, children: [jsxRuntime.jsx("span", { className: "mui-icon-button__content", children }), jsxRuntime.jsx("span", { className: "mui-icon-button__ripple" })] });
});
IconButton3.displayName = "IconButton";
var OtpInput = ({ length = 6, value: controlledValue, defaultValue = "", onChange, onComplete, disabled: disabled2 = false, error: error2 = false, autoFocus = false, className }) => {
  const [internalValue, setInternalValue] = React19.useState((controlledValue !== null && controlledValue !== void 0 ? controlledValue : defaultValue).padEnd(length, " ").slice(0, length));
  const inputsRef = React19.useRef([]);
  const digits = (controlledValue !== null && controlledValue !== void 0 ? controlledValue : internalValue).split("");
  React19.useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);
  const updateValue = (newDigits) => {
    const code = newDigits.join("").trimEnd();
    if (controlledValue === void 0) {
      setInternalValue(newDigits.join(""));
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(code);
    if (code.length === length) {
      onComplete === null || onComplete === void 0 ? void 0 : onComplete(code);
    }
  };
  const handleKeyDown = (index3, e) => {
    var _a, _b, _c;
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = [...digits];
      if (next[index3] && next[index3] !== " ") {
        next[index3] = " ";
        updateValue(next);
      } else if (index3 > 0) {
        next[index3 - 1] = " ";
        updateValue(next);
        (_a = inputsRef.current[index3 - 1]) === null || _a === void 0 ? void 0 : _a.focus();
      }
    } else if (e.key === "ArrowLeft" && index3 > 0) {
      (_b = inputsRef.current[index3 - 1]) === null || _b === void 0 ? void 0 : _b.focus();
    } else if (e.key === "ArrowRight" && index3 < length - 1) {
      (_c = inputsRef.current[index3 + 1]) === null || _c === void 0 ? void 0 : _c.focus();
    }
  };
  const handleChange = (index3, e) => {
    var _a;
    const inputVal = e.target.value.replace(/\D/g, "");
    if (!inputVal)
      return;
    const char = inputVal.slice(-1);
    const next = [...digits];
    next[index3] = char;
    updateValue(next);
    if (index3 < length - 1) {
      (_a = inputsRef.current[index3 + 1]) === null || _a === void 0 ? void 0 : _a.focus();
    }
  };
  const handlePaste = (e) => {
    var _a;
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted)
      return;
    const next = pasted.padEnd(length, " ").split("");
    updateValue(next);
    const focusIndex = Math.min(pasted.length, length - 1);
    (_a = inputsRef.current[focusIndex]) === null || _a === void 0 ? void 0 : _a.focus();
  };
  return jsxRuntime.jsx("div", { className: cn("mui-otp-input", error2 && "mui-otp-input--error", disabled2 && "mui-otp-input--disabled", className), onPaste: handlePaste, children: Array.from({ length }).map((_, i) => jsxRuntime.jsx("input", { ref: (el) => inputsRef.current[i] = el, type: "text", inputMode: "numeric", pattern: "[0-9]*", maxLength: 1, value: digits[i] === " " ? "" : digits[i] || "", disabled: disabled2, onKeyDown: (e) => handleKeyDown(i, e), onChange: (e) => handleChange(i, e), onFocus: (e) => e.target.select(), className: "mui-otp-input__slot", "aria-label": `Digit ${i + 1} of ${length}` }, i)) });
};
var Paper2 = React19__namespace.default.forwardRef(({ elevation = 1, variant = "elevation", square = false, className, children, ...props }, ref) => {
  const classes = cn("mui-paper", variant === "elevation" && `mui-paper--elevation-${elevation}`, variant === "outlined" && "mui-paper--outlined", !square && "mui-paper--rounded", className);
  return jsxRuntime.jsx("div", { ref, className: classes, ...props, children });
});
Paper2.displayName = "Paper";
var CircularProgress3 = React19__namespace.default.forwardRef(({ size: size4 = 40, thickness = 3.6, value = 0, variant = "indeterminate", color = "primary", className, style, ...props }, ref) => {
  const numericSize = typeof size4 === "number" ? size4 : 40;
  const radius = (numericSize - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = variant === "determinate" ? circumference - circumference * Math.min(100, Math.max(0, value)) / 100 : void 0;
  return jsxRuntime.jsx("div", { ref, role: "progressbar", "aria-valuenow": variant === "determinate" ? Math.round(value) : void 0, className: cn("mui-circular-progress", `mui-circular-progress--${variant}`, `mui-circular-progress--${color}`, className), style: {
    width: size4,
    height: size4,
    ...style
  }, ...props, children: jsxRuntime.jsx("svg", { className: "mui-circular-progress__svg", viewBox: `0 0 ${numericSize} ${numericSize}`, children: jsxRuntime.jsx("circle", { className: "mui-circular-progress__circle", cx: numericSize / 2, cy: numericSize / 2, r: radius, fill: "none", strokeWidth: thickness, strokeDasharray: variant === "determinate" ? circumference : void 0, strokeDashoffset }) }) });
});
CircularProgress3.displayName = "CircularProgress";
var LinearProgress = React19__namespace.default.forwardRef(({ value = 0, variant = "indeterminate", color = "primary", className, style, ...props }, ref) => {
  return jsxRuntime.jsx("div", { ref, role: "progressbar", "aria-valuenow": variant === "determinate" ? Math.round(value) : void 0, className: cn("mui-linear-progress", `mui-linear-progress--${variant}`, `mui-linear-progress--${color}`, className), style, ...props, children: variant === "determinate" ? jsxRuntime.jsx("div", { className: "mui-linear-progress__bar", style: { width: `${Math.min(100, Math.max(0, value))}%` } }) : jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: "mui-linear-progress__bar mui-linear-progress__bar--1" }), jsxRuntime.jsx("div", { className: "mui-linear-progress__bar mui-linear-progress__bar--2" })] }) });
});
LinearProgress.displayName = "LinearProgress";
var Radio = React19__namespace.default.forwardRef(({ color = "primary", size: size4 = "medium", label, className, ...props }, ref) => jsxRuntime.jsxs("label", { className: cn("mui-radio", `mui-radio--${color}`, `mui-radio--${size4}`, props.disabled && "mui-radio--disabled", className), children: [jsxRuntime.jsxs("span", { className: "mui-radio__circle", children: [jsxRuntime.jsx("input", { ref, type: "radio", className: "mui-radio__input", ...props }), jsxRuntime.jsx("span", { className: "mui-radio__dot" })] }), label && jsxRuntime.jsx("span", { className: "mui-radio__label", children: label })] }));
Radio.displayName = "Radio";
var RadioGroup = React19__namespace.default.forwardRef(({ name, value, defaultValue, onChange, row = false, children, className, ...props }, ref) => jsxRuntime.jsx("div", { ref, role: "radiogroup", className: cn("mui-radio-group", row && "mui-radio-group--row", className), ...props, children: React19__namespace.default.Children.map(children, (child) => {
  if (React19__namespace.default.isValidElement(child)) {
    return React19__namespace.default.cloneElement(child, { name, onChange, ...value !== void 0 ? { checked: child.props.value === value } : {} });
  }
  return child;
}) }));
RadioGroup.displayName = "RadioGroup";
var Rating = ({ value: controlledValue, defaultValue = 0, max: max2 = 5, onChange, readOnly = false, disabled: disabled2 = false, size: size4 = "medium", className }) => {
  const [internalValue, setInternalValue] = React19.useState(defaultValue);
  const [hoverValue, setHoverValue] = React19.useState(null);
  const activeValue = hoverValue !== null ? hoverValue : controlledValue !== null && controlledValue !== void 0 ? controlledValue : internalValue;
  const handleClick = (rating) => {
    if (readOnly || disabled2)
      return;
    if (controlledValue === void 0) {
      setInternalValue(rating);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(rating);
  };
  return jsxRuntime.jsx("div", { className: cn("mui-rating", `mui-rating--${size4}`, readOnly && "mui-rating--readonly", disabled2 && "mui-rating--disabled", className), onMouseLeave: () => setHoverValue(null), role: "radiogroup", children: Array.from({ length: max2 }).map((_, i) => {
    const starNumber = i + 1;
    const isFilled = starNumber <= activeValue;
    return jsxRuntime.jsx("button", { type: "button", disabled: disabled2 || readOnly, className: cn("mui-rating__star", isFilled && "mui-rating__star--filled"), onClick: () => handleClick(starNumber), onMouseEnter: () => !readOnly && !disabled2 && setHoverValue(starNumber), "aria-label": `${starNumber} Star${starNumber > 1 ? "s" : ""}`, children: jsxRuntime.jsx("svg", { viewBox: "0 0 24 24", className: "mui-rating__star-icon", fill: isFilled ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntime.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }) }, i);
  }) });
};
var Select = React19__namespace.default.forwardRef(({ label, options = [], variant = "outlined", fullWidth = false, helperText, error: error2 = false, className, children, value, defaultValue, onChange, disabled: disabled2, ...props }, ref) => {
  const [isFocused, setIsFocused] = React19.useState(false);
  return jsxRuntime.jsxs("div", { className: cn("mui-select-field", `mui-select-field--${variant}`, fullWidth && "mui-select-field--full-width", error2 && "mui-select-field--error", disabled2 && "mui-select-field--disabled", isFocused && "mui-select-field--focused", className), children: [label && jsxRuntime.jsx("label", { className: "mui-select-field__label", children: label }), jsxRuntime.jsxs("div", { className: "mui-select-field__wrapper", children: [jsxRuntime.jsx("select", { ref, value, defaultValue, disabled: disabled2, onChange, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), className: "mui-select-field__input", ...props, children: options.length > 0 ? options.map((opt) => jsxRuntime.jsx("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value)) : children }), jsxRuntime.jsx("div", { className: "mui-select-field__arrow", children: jsxRuntime.jsx("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "currentColor", children: jsxRuntime.jsx("path", { d: "M7 10l5 5 5-5z" }) }) })] }), helperText && jsxRuntime.jsx("p", { className: "mui-select-field__helper", children: helperText })] });
});
Select.displayName = "Select";
var Skeleton = React19__namespace.default.forwardRef(({ variant = "text", animation = "wave", width, height: height2, className, style, ...props }, ref) => {
  return jsxRuntime.jsx("div", { ref, className: cn("mui-skeleton", `mui-skeleton--${variant}`, animation && `mui-skeleton--${animation}`, className), style: {
    width,
    height: height2,
    ...style
  }, ...props });
});
Skeleton.displayName = "Skeleton";
var Slider = React19__namespace.default.forwardRef(({ value: propValue, defaultValue = 50, min: min2 = 0, max: max2 = 100, step = 1, color = "primary", size: size4 = "medium", disabled: disabled2 = false, marks = false, valueLabelDisplay = "auto", onChange, onChangeCommitted, className, ...props }, ref) => {
  const [internalValue, setInternalValue] = React19.useState(defaultValue);
  const [dragging, setDragging] = React19.useState(false);
  const [hovering, setHovering] = React19.useState(false);
  const trackRef = React19.useRef(null);
  const val = propValue !== void 0 ? propValue : internalValue;
  const percent = (val - min2) / (max2 - min2) * 100;
  const updateValue = React19.useCallback((clientX) => {
    if (!trackRef.current || disabled2)
      return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = clamp3((clientX - rect.left) / rect.width, 0, 1);
    const rawValue = min2 + ratio * (max2 - min2);
    const stepped = Math.round(rawValue / step) * step;
    const clamped = clamp3(stepped, min2, max2);
    setInternalValue(clamped);
    onChange === null || onChange === void 0 ? void 0 : onChange(clamped);
  }, [min2, max2, step, disabled2, onChange]);
  const handleMouseDown = (e) => {
    if (disabled2)
      return;
    setDragging(true);
    updateValue(e.clientX);
    const handleMouseMove = (ev) => updateValue(ev.clientX);
    const handleMouseUp = (ev) => {
      setDragging(false);
      updateValue(ev.clientX);
      onChangeCommitted === null || onChangeCommitted === void 0 ? void 0 : onChangeCommitted(val);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  const showLabel = valueLabelDisplay === "on" || valueLabelDisplay === "auto" && (dragging || hovering);
  return jsxRuntime.jsxs("div", { ref, className: cn("mui-slider", `mui-slider--${color}`, `mui-slider--${size4}`, disabled2 && "mui-slider--disabled", dragging && "mui-slider--active", className), onMouseDown: handleMouseDown, role: "slider", "aria-valuemin": min2, "aria-valuemax": max2, "aria-valuenow": val, "aria-disabled": disabled2, tabIndex: disabled2 ? -1 : 0, ...props, children: [jsxRuntime.jsxs("div", { ref: trackRef, className: "mui-slider__track-container", children: [jsxRuntime.jsx("div", { className: "mui-slider__rail" }), jsxRuntime.jsx("div", { className: "mui-slider__track", style: { width: `${percent}%` } }), jsxRuntime.jsx("div", { className: "mui-slider__thumb", style: { left: `${percent}%` }, onMouseEnter: () => setHovering(true), onMouseLeave: () => setHovering(false), children: showLabel && jsxRuntime.jsx("span", { className: "mui-slider__value-label", children: Math.round(val) }) })] }), marks && Array.isArray(marks) && jsxRuntime.jsx("div", { className: "mui-slider__marks", children: marks.map((m) => jsxRuntime.jsx("span", { className: "mui-slider__mark", style: { left: `${(m.value - min2) / (max2 - min2) * 100}%` }, children: m.label && jsxRuntime.jsx("span", { className: "mui-slider__mark-label", children: m.label }) }, m.value)) })] });
});
Slider.displayName = "Slider";
var Stack2 = React19__namespace.default.forwardRef(({ direction = "column", spacing = 2, alignItems, justifyContent, flexWrap, divider, component = "div", className, children, style, ...props }, ref) => {
  const classes = cn("mui-stack", `mui-stack--${direction}`, className);
  const inlineStyle = {
    ...style,
    gap: `${spacing * 0.25}rem`,
    alignItems,
    justifyContent,
    flexWrap
  };
  Object.keys(inlineStyle).forEach((k) => {
    if (inlineStyle[k] === void 0)
      delete inlineStyle[k];
  });
  let content = children;
  if (divider && React19__namespace.default.Children.count(children) > 1) {
    const childArray = React19__namespace.default.Children.toArray(children);
    const withDividers = [];
    childArray.forEach((child, i) => {
      withDividers.push(child);
      if (i < childArray.length - 1) {
        withDividers.push(React19__namespace.default.cloneElement(divider, { key: `divider-${i}` }));
      }
    });
    content = withDividers;
  }
  return React19__namespace.default.createElement(component, { ref, className: classes, style: inlineStyle, ...props }, content);
});
Stack2.displayName = "Stack";
var Switch = React19__namespace.default.forwardRef(({ color = "primary", size: size4 = "medium", label, labelPlacement = "end", className, ...props }, ref) => {
  return jsxRuntime.jsxs("label", { className: cn("mui-switch", `mui-switch--${color}`, `mui-switch--${size4}`, `mui-switch--label-${labelPlacement}`, props.disabled && "mui-switch--disabled", className), children: [label && labelPlacement === "start" && jsxRuntime.jsx("span", { className: "mui-switch__label", children: label }), jsxRuntime.jsxs("span", { className: "mui-switch__track", children: [jsxRuntime.jsx("input", { ref, type: "checkbox", className: "mui-switch__input", role: "switch", ...props }), jsxRuntime.jsx("span", { className: "mui-switch__thumb" })] }), label && labelPlacement === "end" && jsxRuntime.jsx("span", { className: "mui-switch__label", children: label })] });
});
Switch.displayName = "Switch";
var Tab = ({ value, label, icon, selected = false, className, children, ...props }) => {
  return jsxRuntime.jsxs("button", { type: "button", role: "tab", "aria-selected": selected, className: cn("mui-tab", selected && "mui-tab--selected", className), ...props, children: [icon && jsxRuntime.jsx("span", { className: "mui-tab__icon", children: icon }), jsxRuntime.jsx("span", { className: "mui-tab__label", children: label !== null && label !== void 0 ? label : children })] });
};
var Tabs = ({ value, onChange, items, variant = "line", fullWidth = false, className, children }) => {
  return jsxRuntime.jsx("div", { role: "tablist", className: cn("mui-tabs", `mui-tabs--${variant}`, fullWidth && "mui-tabs--full-width", className), children: items ? items.map((item) => jsxRuntime.jsx(Tab, { value: item.id, label: item.label, icon: item.icon, disabled: item.disabled, selected: value === item.id, onClick: () => onChange(item.id) }, item.id)) : React19__namespace.default.Children.map(children, (child) => {
    if (!React19__namespace.default.isValidElement(child))
      return child;
    const isSelected = child.props.value === value;
    return React19__namespace.default.cloneElement(child, {
      selected: isSelected,
      onClick: () => onChange(child.props.value)
    });
  }) });
};
var TextField = React19__namespace.default.forwardRef(({ variant = "outlined", color = "primary", size: size4 = "medium", label, helperText, error: error2 = false, fullWidth = false, multiline = false, rows = 4, startAdornment, endAdornment, inputRef, className, disabled: disabled2, value, defaultValue, onChange, onFocus, onBlur, id: propId, ...props }, ref) => {
  const autoId = React19.useId();
  const id = propId || autoId;
  const [focused, setFocused] = React19.useState(false);
  const [hasValue, setHasValue] = React19.useState(!!(value || defaultValue));
  const internalRef = React19.useRef(null);
  const handleFocus = (e) => {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  const handleBlur = (e) => {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const isFloating = focused || (value !== void 0 ? Boolean(value) : hasValue) || Boolean(defaultValue) || !!startAdornment;
  const wrapperClasses = cn("mui-textfield", `mui-textfield--${variant}`, `mui-textfield--${size4}`, `mui-textfield--${error2 ? "error" : color}`, focused && "mui-textfield--focused", error2 && "mui-textfield--error", disabled2 && "mui-textfield--disabled", fullWidth && "mui-textfield--full-width", isFloating && "mui-textfield--floating", className);
  const inputProps = {
    ref: inputRef || internalRef,
    id,
    className: "mui-textfield__input",
    disabled: disabled2,
    value,
    defaultValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    "aria-invalid": error2,
    "aria-describedby": helperText ? `${id}-helper` : void 0,
    ...props
  };
  return jsxRuntime.jsxs("div", { ref, className: wrapperClasses, children: [jsxRuntime.jsxs("div", { className: "mui-textfield__wrapper", children: [startAdornment && jsxRuntime.jsx("span", { className: "mui-textfield__adornment mui-textfield__adornment--start", children: startAdornment }), multiline ? jsxRuntime.jsx("textarea", { ...inputProps, rows, className: "mui-textfield__input mui-textfield__textarea" }) : jsxRuntime.jsx("input", { ...inputProps }), label && jsxRuntime.jsx("label", { htmlFor: id, className: "mui-textfield__label", children: label }), endAdornment && jsxRuntime.jsx("span", { className: "mui-textfield__adornment mui-textfield__adornment--end", children: endAdornment }), variant === "filled" && jsxRuntime.jsx("div", { className: "mui-textfield__fill-bg" }), variant === "standard" && jsxRuntime.jsx("div", { className: "mui-textfield__underline" })] }), helperText && jsxRuntime.jsx("p", { id: `${id}-helper`, className: cn("mui-textfield__helper", error2 && "mui-textfield__helper--error"), children: helperText })] });
});
TextField.displayName = "TextField";
var Tooltip = ({ title, children, placement = "top", arrow: arrow5 = true, enterDelay = 150, leaveDelay = 100, className }) => {
  const [open2, setOpen] = React19.useState(false);
  const enterTimer = React19.useRef(null);
  const leaveTimer = React19.useRef(null);
  const handleMouseEnter = () => {
    if (leaveTimer.current)
      clearTimeout(leaveTimer.current);
    enterTimer.current = window.setTimeout(() => {
      setOpen(true);
    }, enterDelay);
  };
  const handleMouseLeave = () => {
    if (enterTimer.current)
      clearTimeout(enterTimer.current);
    leaveTimer.current = window.setTimeout(() => {
      setOpen(false);
    }, leaveDelay);
  };
  React19.useEffect(() => {
    return () => {
      if (enterTimer.current)
        clearTimeout(enterTimer.current);
      if (leaveTimer.current)
        clearTimeout(leaveTimer.current);
    };
  }, []);
  return jsxRuntime.jsxs("div", { className: "mui-tooltip-wrapper", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleMouseEnter, onBlur: handleMouseLeave, children: [children, open2 && title && jsxRuntime.jsxs("div", { role: "tooltip", className: cn("mui-tooltip", `mui-tooltip--${placement}`, arrow5 && "mui-tooltip--arrow", className), children: [title, arrow5 && jsxRuntime.jsx("span", { className: "mui-tooltip__arrow" })] })] });
};
var variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  inherit: "span"
};
var Typography3 = React19__namespace.default.forwardRef(({ variant = "body1", component, align = "inherit", color = "inherit", gutterBottom = false, noWrap = false, paragraph = false, className, children, ...props }, ref) => {
  const Component = component || (paragraph ? "p" : variantMapping[variant] || "span");
  const classes = cn("mui-typography", `mui-typography--${variant}`, align !== "inherit" && `mui-typography--align-${align}`, `mui-typography--color-${color}`, gutterBottom && "mui-typography--gutter-bottom", noWrap && "mui-typography--no-wrap", className);
  return React19__namespace.default.createElement(Component, { ref, className: classes, ...props }, children);
});
Typography3.displayName = "Typography";

// node_modules/@namios/motionui-react/dist/esm/utils/colorEngine.js
function hexToRgb(color) {
  if (!color)
    return { r: 99, g: 102, b: 241 };
  const clean = color.trim().replace("#", "");
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return { r, g, b };
  }
  if (clean.length >= 6) {
    const num = parseInt(clean.slice(0, 6), 16);
    return {
      r: num >> 16 & 255,
      g: num >> 8 & 255,
      b: num & 255
    };
  }
  const rgbMatch = color.match(/\d+/g);
  if (rgbMatch && rgbMatch.length >= 3) {
    return {
      r: parseInt(rgbMatch[0], 10),
      g: parseInt(rgbMatch[1], 10),
      b: parseInt(rgbMatch[2], 10)
    };
  }
  return { r: 99, g: 102, b: 241 };
}
function rgbToHex({ r, g, b }) {
  const clamp4 = (n) => Math.min(255, Math.max(0, Math.round(n)));
  const toHex = (n) => clamp4(n).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function getRelativeLuminance(r, g, b) {
  const [rl, gl, bl] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}
function getContrastRatio(lumA, lumB) {
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}
function getContrastText(backgroundColor, darkTextColor = "#0f172a", lightTextColor = "#ffffff") {
  const { r, g, b } = hexToRgb(backgroundColor);
  const bgLum = getRelativeLuminance(r, g, b);
  return bgLum >= 0.5 ? darkTextColor : lightTextColor;
}
function adjustLightness(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const factor = percent / 100;
  let nr, ng, nb;
  if (percent > 0) {
    nr = r + (255 - r) * factor;
    ng = g + (255 - g) * factor;
    nb = b + (255 - b) * factor;
  } else {
    const darkFactor = 1 + factor;
    nr = r * darkFactor;
    ng = g * darkFactor;
    nb = b * darkFactor;
  }
  return rgbToHex({ r: nr, g: ng, b: nb });
}
function buildColorRole(color) {
  const rgb = hexToRgb(color);
  const main = rgbToHex(rgb);
  const lum = getRelativeLuminance(rgb.r, rgb.g, rgb.b);
  const isLight = lum >= 0.5;
  const contrastText = getContrastText(main);
  return {
    main,
    light: adjustLightness(main, isLight ? -15 : 20),
    dark: adjustLightness(main, isLight ? -30 : -20),
    contrastText,
    rgb: `${rgb.r}, ${rgb.g}, ${rgb.b}`,
    luminance: lum,
    isLight
  };
}
function injectThemeTokens(tokens, target = typeof document !== "undefined" ? document.documentElement : null) {
  if (!target)
    return;
  const applyRole = (prefix, colorHex) => {
    if (!colorHex)
      return;
    const role = buildColorRole(colorHex);
    target.style.setProperty(`--mui-color-${prefix}`, role.main);
    target.style.setProperty(`--mui-color-${prefix}-main`, role.main);
    target.style.setProperty(`--mui-color-${prefix}-light`, role.light);
    target.style.setProperty(`--mui-color-${prefix}-dark`, role.dark);
    target.style.setProperty(`--mui-color-${prefix}-contrast`, role.contrastText);
    target.style.setProperty(`--mui-color-${prefix}-rgb`, role.rgb);
  };
  if (tokens.primary)
    applyRole("primary", tokens.primary);
  if (tokens.secondary)
    applyRole("secondary", tokens.secondary);
  if (tokens.success)
    applyRole("success", tokens.success);
  if (tokens.warning)
    applyRole("warning", tokens.warning);
  if (tokens.error)
    applyRole("error", tokens.error);
  if (tokens.info)
    applyRole("info", tokens.info);
  if (tokens.mode) {
    target.setAttribute("data-theme", tokens.mode);
  }
  if (tokens.fontFamily) {
    target.style.setProperty("--mui-font-family", tokens.fontFamily);
  }
  if (tokens.borderRadius !== void 0) {
    target.style.setProperty("--mui-radius-md", `${tokens.borderRadius}px`);
  }
}

// node_modules/@namios/motionui-react/dist/esm/theme/ThemeProvider.js
function resolvePaletteColor(input, fallback) {
  if (!input)
    return fallback;
  if (typeof input === "string") {
    const role = buildColorRole(input);
    return {
      main: role.main,
      light: role.light,
      dark: role.dark,
      contrastText: role.contrastText,
      rgb: role.rgb
    };
  }
  if (input.main && (!input.contrastText || !input.light || !input.dark)) {
    const role = buildColorRole(input.main);
    return {
      main: input.main,
      light: input.light || role.light,
      dark: input.dark || role.dark,
      contrastText: input.contrastText || role.contrastText,
      rgb: input.rgb || role.rgb
    };
  }
  return { ...fallback, ...input };
}
var defaultPalette = {
  primary: {
    main: "#6366f1",
    light: "#818cf8",
    dark: "#4f46e5",
    contrastText: "#ffffff",
    rgb: "99, 102, 241"
  },
  secondary: {
    main: "#ec4899",
    light: "#f472b6",
    dark: "#db2777",
    contrastText: "#ffffff",
    rgb: "236, 72, 153"
  },
  success: {
    main: "#10b981",
    light: "#34d399",
    dark: "#059669",
    contrastText: "#ffffff",
    rgb: "16, 185, 129"
  },
  warning: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
    contrastText: "#0f172a",
    // WCAG auto-contrast on amber
    rgb: "245, 158, 11"
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
    contrastText: "#ffffff",
    rgb: "239, 68, 68"
  },
  info: {
    main: "#3b82f6",
    light: "#60a5fa",
    dark: "#2563eb",
    contrastText: "#ffffff",
    rgb: "59, 130, 246"
  }
};
function createTheme2(options = {}) {
  var _a;
  const p = options.palette;
  const palette = {
    mode: (_a = p === null || p === void 0 ? void 0 : p.mode) !== null && _a !== void 0 ? _a : "light",
    primary: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.primary, defaultPalette.primary),
    secondary: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.secondary, defaultPalette.secondary),
    success: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.success, defaultPalette.success),
    warning: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.warning, defaultPalette.warning),
    error: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.error, defaultPalette.error),
    info: resolvePaletteColor(p === null || p === void 0 ? void 0 : p.info, defaultPalette.info)
  };
  const typography2 = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyMono: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: 16,
    ...options.typography
  };
  const shape = {
    borderRadius: 8,
    ...options.shape
  };
  return {
    palette,
    typography: typography2,
    shape,
    spacing: (factor) => `${factor * 0.25}rem`
  };
}
var defaultTheme = createTheme2();
var ThemeContext = React19.createContext({
  theme: defaultTheme,
  mode: "light",
  toggleMode: () => {
  },
  setMode: () => {
  },
  setDynamicBrand: () => {
  }
});
function useTheme3() {
  return React19.useContext(ThemeContext);
}
var ThemeProvider2 = ({ theme: initialTheme = defaultTheme, children, defaultMode = "light" }) => {
  const [activeTheme, setActiveTheme] = React19.useState(initialTheme);
  const [mode, setModeState] = React19.useState(() => {
    if (defaultMode === "auto") {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    }
    return defaultMode;
  });
  React19.useEffect(() => {
    setActiveTheme(initialTheme);
  }, [initialTheme]);
  React19.useEffect(() => {
    if (defaultMode !== "auto" || typeof window === "undefined")
      return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      setModeState(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [defaultMode]);
  React19.useEffect(() => {
    if (typeof document === "undefined")
      return;
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  React19.useEffect(() => {
    if (typeof document === "undefined")
      return;
    injectThemeTokens({
      primary: activeTheme.palette.primary.main,
      secondary: activeTheme.palette.secondary.main,
      success: activeTheme.palette.success.main,
      warning: activeTheme.palette.warning.main,
      error: activeTheme.palette.error.main,
      info: activeTheme.palette.info.main,
      mode,
      fontFamily: activeTheme.typography.fontFamily,
      borderRadius: activeTheme.shape.borderRadius
    }, document.documentElement);
  }, [activeTheme, mode]);
  const toggleMode = React19.useCallback(() => {
    setModeState((prev) => prev === "light" ? "dark" : "light");
  }, []);
  const setMode = React19.useCallback((newMode) => {
    setModeState(newMode);
  }, []);
  const setDynamicBrand = React19.useCallback((colors) => {
    setActiveTheme((prev) => createTheme2({
      palette: {
        ...prev.palette,
        primary: colors.primary || prev.palette.primary,
        secondary: colors.secondary || prev.palette.secondary
      },
      typography: prev.typography,
      shape: prev.shape
    }));
  }, []);
  const contextValue = React19.useMemo(() => ({ theme: activeTheme, mode, toggleMode, setMode, setDynamicBrand }), [activeTheme, mode, toggleMode, setMode, setDynamicBrand]);
  return React19__namespace.default.createElement(ThemeContext.Provider, { value: contextValue }, children);
};
var AdaptiveThemeProvider = ({ remoteConfig = {}, children }) => {
  const customTheme = React19.useMemo(() => {
    return createTheme2({
      palette: {
        primary: remoteConfig.primaryColor,
        secondary: remoteConfig.secondaryColor,
        mode: remoteConfig.mode || "light"
      },
      typography: remoteConfig.fontFamily ? { fontFamily: remoteConfig.fontFamily } : void 0,
      shape: remoteConfig.borderRadius !== void 0 ? { borderRadius: remoteConfig.borderRadius } : void 0
    });
  }, [remoteConfig.primaryColor, remoteConfig.secondaryColor, remoteConfig.mode, remoteConfig.fontFamily, remoteConfig.borderRadius]);
  return jsxRuntime.jsx(ThemeProvider2, { theme: customTheme, defaultMode: remoteConfig.mode || "light", children });
};
function createMuiCompatiblePalette(theme) {
  return {
    mode: theme.palette.mode,
    primary: {
      main: theme.palette.primary.main,
      light: theme.palette.primary.light,
      dark: theme.palette.primary.dark,
      contrastText: theme.palette.primary.contrastText
    },
    secondary: {
      main: theme.palette.secondary.main,
      light: theme.palette.secondary.light,
      dark: theme.palette.secondary.dark,
      contrastText: theme.palette.secondary.contrastText
    },
    success: theme.palette.success,
    warning: theme.palette.warning,
    error: theme.palette.error,
    info: theme.palette.info
  };
}
function useMediaQuery2(query) {
  const [matches, setMatches] = React19.useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });
  React19.useEffect(() => {
    if (typeof window === "undefined")
      return;
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event) => {
      setMatches(event.matches);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);
  return matches;
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
var ErrorState = ({
  titleKey = "common:states.errorTitle",
  messageKey = "common:states.errorGeneric",
  onRetry,
  className
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(ErrorStateRoot, { role: "alert", className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(ErrorOutlineIcon__default.default, { color: "error", sx: { fontSize: 40 } }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography3, { variant: "h6", children: t(titleKey) }),
    /* @__PURE__ */ jsxRuntime.jsx(Typography3, { variant: "body2", color: "textSecondary", children: t(messageKey) }),
    onRetry ? /* @__PURE__ */ jsxRuntime.jsx(Button3, { onClick: onRetry, startIcon: /* @__PURE__ */ jsxRuntime.jsx(RefreshIcon__default.default, {}), variant: "outlined", children: t("common:actions.retry") }) : null
  ] });
};
var PageSkeleton = ({ label, className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box4,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "65vh",
      width: "100%",
      className,
      children: /* @__PURE__ */ jsxRuntime.jsx(NamiosLoader, { size: 54, label })
    }
  );
};
var StatusChip = ({ status, size: size4 = "small", className }) => {
  const { t } = reactI18next.useTranslation();
  const color = STATUS_COLORS[status];
  const muiColor = color === "default" ? void 0 : color;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Chip,
    {
      label: t(`common:status.${status}`),
      size: size4,
      color: muiColor,
      variant: color === "default" ? "outlined" : "filled",
      className
    }
  );
};
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
  open: open2,
  x,
  y,
  items,
  onClose,
  mode
}) => {
  const muiTheme = styles.useTheme();
  const isDark = (mode ?? muiTheme?.palette?.mode) === "dark";
  const [highlightedIndex, setHighlightedIndex] = React19.useState(-1);
  const [highlightedSubIndex, setHighlightedSubIndex] = React19.useState(-1);
  const [activeSubmenu, setActiveSubmenu] = React19.useState(null);
  const menuRef = React19.useRef(null);
  const [position, setPosition] = React19.useState({ x, y });
  React19.useEffect(() => {
    if (!open2) {
      setHighlightedIndex(-1);
      setHighlightedSubIndex(-1);
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
  }, [open2, x, y, items]);
  React19.useEffect(() => {
    if (!open2) return;
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
  }, [open2, onClose]);
  const handleItemClick = React19.useCallback(
    (item) => {
      if (item.disabled || item.separator) return;
      if (item.children && item.children.length > 0) return;
      onClose();
      item.onClick?.();
    },
    [onClose]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: open2 && /* @__PURE__ */ jsxRuntime.jsx(
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
        backgroundColor: isDark ? "rgba(17, 21, 30, 0.94)" : "rgba(255, 255, 255, 0.96)",
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: 12,
        padding: 5,
        minWidth: 210,
        maxWidth: 280,
        boxShadow: isDark ? "0 20px 48px -10px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0.5px 0 rgba(255, 255, 255, 0.12)" : "0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04), inset 0 0.5px 0 rgba(255, 255, 255, 0.8)",
        userSelect: "none",
        outline: "none"
      },
      onContextMenu: (e) => e.preventDefault(),
      children: items.map((item, index3) => {
        if (item.separator) {
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                height: 1,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.07)",
                margin: "4px 6px"
              }
            },
            `sep-${index3}`
          );
        }
        const isHighlighted = highlightedIndex === index3;
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isSubmenuOpen = activeSubmenu === item.label;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: { position: "relative" },
            onMouseEnter: () => {
              if (!item.disabled) {
                setHighlightedIndex(index3);
                setHighlightedSubIndex(-1);
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
                    color: item.disabled ? isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.28)" : item.danger ? isDark ? "#FF453A" : "#FF3B30" : isDark ? "#FFFFFF" : "#1C1C1E",
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
                          backgroundColor: item.danger ? isDark ? "rgba(255, 69, 58, 0.18)" : "rgba(255, 59, 48, 0.10)" : isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
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
                                color: isDark ? isHighlighted ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.35)" : isHighlighted ? "rgba(0, 0, 0, 0.65)" : "rgba(0, 0, 0, 0.40)",
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
                                color: isDark ? isHighlighted ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)" : isHighlighted ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.35)"
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
                    backgroundColor: isDark ? "rgba(17, 21, 30, 0.94)" : "rgba(255, 255, 255, 0.96)",
                    backdropFilter: "blur(24px) saturate(1.6)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.6)",
                    border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.08)",
                    borderRadius: 12,
                    padding: 5,
                    minWidth: 180,
                    boxShadow: isDark ? "0 20px 48px -10px rgba(0, 0, 0, 0.55)" : "0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)",
                    zIndex: 1e6
                  },
                  children: item.children.map((sub, subIdx) => {
                    if (sub.separator) {
                      return /* @__PURE__ */ jsxRuntime.jsx(
                        "div",
                        {
                          style: {
                            height: 1,
                            backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.07)",
                            margin: "4px 6px"
                          }
                        },
                        `sub-sep-${subIdx}`
                      );
                    }
                    const isSubHighlighted = highlightedSubIndex === subIdx;
                    return /* @__PURE__ */ jsxRuntime.jsxs(
                      "div",
                      {
                        onMouseEnter: () => {
                          if (!sub.disabled) setHighlightedSubIndex(subIdx);
                        },
                        onMouseLeave: () => setHighlightedSubIndex(-1),
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
                          color: sub.disabled ? isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.28)" : sub.danger ? isDark ? "#FF453A" : "#FF3B30" : isDark ? "#FFFFFF" : "#1C1C1E",
                          gap: 12
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntime.jsx(
                            framerMotion.motion.div,
                            {
                              initial: false,
                              animate: { opacity: isSubHighlighted ? 1 : 0 },
                              transition: HIGHLIGHT_SPRING,
                              style: {
                                position: "absolute",
                                inset: 0,
                                borderRadius: 8,
                                backgroundColor: sub.danger ? isDark ? "rgba(255, 69, 58, 0.18)" : "rgba(255, 59, 48, 0.10)" : isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
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
                                sub.icon && /* @__PURE__ */ jsxRuntime.jsx(
                                  "span",
                                  {
                                    style: {
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontSize: 16,
                                      width: 16,
                                      height: 16,
                                      opacity: sub.disabled ? 0.3 : 0.9
                                    },
                                    children: sub.icon
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntime.jsx("span", { children: sub.label })
                              ]
                            }
                          ),
                          sub.shortcut && /* @__PURE__ */ jsxRuntime.jsx(
                            "span",
                            {
                              style: {
                                position: "relative",
                                zIndex: 1,
                                fontSize: "11px",
                                fontWeight: 600,
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                color: isDark ? isSubHighlighted ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.35)" : isSubHighlighted ? "rgba(0, 0, 0, 0.65)" : "rgba(0, 0, 0, 0.40)",
                                letterSpacing: "0.04em"
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
          item.key || item.label || `item-${index3}`
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
var DataTable = ({
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
}) => {
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
        !isLoading && isError ? /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { p: 3 }, children: /* @__PURE__ */ jsxRuntime.jsx(ErrorState, { onRetry }) }) : null,
        !isLoading && !isError && rows.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { p: 2 }, children: emptyState ?? /* @__PURE__ */ jsxRuntime.jsx(EmptyState, { titleKey: "common:states.noResults" }) }) : null,
        (isLoading || rows.length > 0) && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(TableContainer__default.default, { children: /* @__PURE__ */ jsxRuntime.jsxs(Table__default.default, { size: "small", "aria-busy": isLoading, children: [
            /* @__PURE__ */ jsxRuntime.jsx(TableHead__default.default, { sx: { backgroundColor: "action.hover" }, children: /* @__PURE__ */ jsxRuntime.jsxs(TableRow__default.default, { children: [
              selectable ? /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntime.jsx(
                Checkbox2__default.default,
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
            /* @__PURE__ */ jsxRuntime.jsx(TableBody__default.default, { children: isLoading ? Array.from({ length: compact ? 5 : pageSize }, (_, i) => /* @__PURE__ */ jsxRuntime.jsx(TableRow__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell__default.default, { colSpan, children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { variant: "text", height: 28 }) }) }, i)) : rows.map((row) => /* @__PURE__ */ jsxRuntime.jsxs(
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
                    Checkbox2__default.default,
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
            )) })
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
          ) : null
        ] }),
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
};
var StatCardRoot = styles.styled(Card2__default.default, {
  shouldForwardProp: (prop) => prop !== "compactSize"
})(({ theme, compactSize }) => ({
  padding: compactSize ? theme.spacing(1, 1.25) : theme.spacing(1.25, 1.75),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  borderRadius: "4px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
  border: `0.5px solid ${theme.palette.mode === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"}`,
  transition: "border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease",
  "&:hover": {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    borderColor: theme.palette.mode === "light" ? "rgba(15, 23, 42, 0.18)" : "rgba(255, 255, 255, 0.18)",
    transform: "none"
  }
}));
var IconTile = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "colorKey" && prop !== "compact"
})(({ theme, colorKey, compact }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: compact ? 36 : 40,
  height: compact ? 36 : 40,
  minWidth: compact ? 36 : 40,
  borderRadius: "4px",
  backgroundColor: styles.alpha(theme.palette[colorKey].main, 0.1),
  color: theme.palette[colorKey].main,
  flexShrink: 0
}));
var DeltaRow = styles.styled("div", {
  shouldForwardProp: (prop) => prop !== "trend"
})(({ theme, trend }) => {
  const color = trend === "up" ? theme.palette.success.main : trend === "down" ? theme.palette.error.main : theme.palette.text.secondary;
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 3,
    fontWeight: 600,
    fontSize: "0.75rem",
    lineHeight: 1.2,
    color,
    "& svg": {
      fontSize: "0.875rem"
    }
  };
});
var TREND_ICONS = {
  up: /* @__PURE__ */ jsxRuntime.jsx(TrendingUpIcon__default.default, { fontSize: "inherit" }),
  down: /* @__PURE__ */ jsxRuntime.jsx(TrendingDownIcon__default.default, { fontSize: "inherit" }),
  flat: /* @__PURE__ */ jsxRuntime.jsx(TrendingFlatIcon__default.default, { fontSize: "inherit" })
};
var StatCard = ({
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
  size: size4 = "small",
  compactSize
}) => {
  const { t } = reactI18next.useTranslation();
  const isCompact = size4 === "small" || size4 === "mini" || Boolean(compactSize);
  const valueNode = loading ? /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { variant: "text", width: 80, height: isCompact ? 28 : 40 }) : /* @__PURE__ */ jsxRuntime.jsx(
    Typography4__default.default,
    {
      variant: isCompact ? "h5" : "h4",
      component: "div",
      sx: isCompact ? { fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.15 } : { fontWeight: 800, lineHeight: 1.15 },
      children: value
    }
  );
  const deltaNode = delta && !loading ? /* @__PURE__ */ jsxRuntime.jsxs(DeltaRow, { trend, children: [
    TREND_ICONS[trend],
    delta
  ] }) : null;
  const subtitleNode = subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(
    Typography4__default.default,
    {
      variant: "caption",
      color: "text.secondary",
      sx: { fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.2 },
      children: t(subtitleKey, subtitleParams)
    }
  ) : null;
  if (layout === "kpi") {
    return /* @__PURE__ */ jsxRuntime.jsx(StatCardRoot, { compactSize: isCompact, children: /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1.5, width: "100%" }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1, gap: 0.25 }, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "caption",
            color: "text.secondary",
            noWrap: true,
            title: t(labelKey),
            sx: {
              fontSize: isCompact ? "0.75rem" : "0.8125rem",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "0.01em"
            },
            children: t(labelKey)
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "baseline", gap: 1, flexWrap: "wrap" }, children: [
          valueNode,
          deltaNode && subtitleNode ? /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "inline-flex", alignItems: "center", gap: 0.75, flexWrap: "wrap" }, children: [
            deltaNode,
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { component: "span", variant: "caption", color: "text.disabled", sx: { fontSize: "0.65rem" }, children: "\u2022" }),
            subtitleNode
          ] }) : deltaNode ?? subtitleNode,
          icon && badge ? badge : null
        ] })
      ] }),
      icon ? /* @__PURE__ */ jsxRuntime.jsx(IconTile, { colorKey: iconColor, compact: isCompact, children: icon }) : badge ? /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { flexShrink: 0 }, children: badge }) : null
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(StatCardRoot, { compactSize: isCompact, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, width: "100%", mb: 0.25 }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Typography4__default.default,
        {
          variant: "body2",
          color: "text.secondary",
          noWrap: true,
          title: t(labelKey),
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            fontSize: isCompact ? "0.75rem" : "0.8125rem",
            fontWeight: 600
          },
          children: [
            icon,
            t(labelKey)
          ]
        }
      ),
      badge
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "baseline", gap: 1, flexWrap: "wrap" }, children: [
      valueNode,
      deltaNode && subtitleNode ? /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "inline-flex", alignItems: "center", gap: 0.75, flexWrap: "wrap" }, children: [
        deltaNode,
        /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { component: "span", variant: "caption", color: "text.disabled", sx: { fontSize: "0.65rem" }, children: "\u2022" }),
        subtitleNode
      ] }) : deltaNode ?? subtitleNode
    ] })
  ] });
};
var SectionCard = ({
  titleKey,
  titleParams,
  action,
  children,
  className
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, { elevation: 1, className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      CardHeader,
      {
        title: /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontWeight: 600, fontSize: "1.125rem" }, children: t(titleKey, titleParams) }),
        action
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { style: { paddingTop: 0 }, children })
  ] });
};
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
var DescriptionList = ({ items, className }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(ListRoot, { className, children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(React19.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Term, { children: t(item.labelKey, item.labelParams) }),
    /* @__PURE__ */ jsxRuntime.jsx(Detail, { children: item.value })
  ] }, item.labelKey)) });
};
var SearchField = ({
  value,
  onChange,
  placeholderKey = "common:actions.search",
  fullWidth = false,
  autoFocus = false
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    TextField5__default.default,
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
          IconButton9__default.default,
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
};
var SelectField = ({
  value,
  onChange,
  options,
  labelKey,
  emptyOptionKey,
  fullWidth = false,
  minWidth = 160,
  disabled: disabled2 = false
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    TextField5__default.default,
    {
      select: true,
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      label: labelKey ? t(labelKey) : void 0,
      fullWidth,
      disabled: disabled2,
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
};
var PasswordField = React19.forwardRef(
  function PasswordField2(props, ref) {
    const { t } = reactI18next.useTranslation();
    const [visible, setVisible] = React19.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsx(
      TextField5__default.default,
      {
        ...props,
        inputRef: ref ?? props.inputRef,
        type: visible ? "text" : "password",
        InputProps: {
          ...props.InputProps,
          endAdornment: /* @__PURE__ */ jsxRuntime.jsx(InputAdornment__default.default, { position: "end", children: /* @__PURE__ */ jsxRuntime.jsx(
            IconButton9__default.default,
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
var FormTextField = ({
  control,
  name,
  labelKey,
  type,
  multiline,
  rows,
  autoFocus,
  autoComplete,
  placeholderKey,
  disabled: disabled2
}) => {
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
          disabled: disabled2
        };
        return type === "password" ? /* @__PURE__ */ jsxRuntime.jsx(PasswordField, { ...shared }) : /* @__PURE__ */ jsxRuntime.jsx(TextField5__default.default, { ...shared, type });
      }
    }
  );
};
var FormSelect = ({
  control,
  name,
  labelKey,
  options
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsxRuntime.jsx(
        TextField5__default.default,
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
};
var FormSwitch = ({
  control,
  name,
  labelKey
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactHookForm.Controller,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ jsxRuntime.jsx(
        FormControlLabel__default.default,
        {
          control: /* @__PURE__ */ jsxRuntime.jsx(Switch2__default.default, { checked: Boolean(field.value), onChange: field.onChange }),
          label: t(labelKey)
        }
      )
    }
  );
};
var LanguageSwitcher = ({ variant = "text" }) => {
  const { i18n: i18n2, t } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = React19.useState(null);
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
};
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
var AppTopBar = ({ appsLauncher, logo, nav, actions, onMenuClick }) => {
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
            IconButton9__default.default,
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
};
var TIMELINE_DIMENSIONS = {
  comfortable: {
    resourceColWidth: 148,
    dayColWidth: 76,
    rowHeight: 52,
    spanInset: 8
  },
  compact: {
    resourceColWidth: 128,
    dayColWidth: 48,
    rowHeight: 38,
    spanInset: 4
  }
};
var MatrixRoot = styles.styled("div", {
  shouldForwardProp: (p) => p !== "disableBorder"
})(({ theme, disableBorder }) => ({
  overflowX: "auto",
  border: disableBorder ? "none" : `1px solid ${theme.palette.divider}`,
  borderRadius: disableBorder ? 0 : theme.shape.borderRadius
}));
var HeaderRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  zIndex: 3
}));
var ResourceCell = styles.styled("div", {
  shouldForwardProp: (p) => p !== "density"
})(({ theme, density }) => {
  const isCompact = density === "compact";
  return {
    padding: isCompact ? theme.spacing(0.5, 1) : theme.spacing(1, 2),
    display: "flex",
    alignItems: "center",
    position: "sticky",
    left: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    boxSizing: "border-box"
  };
});
var DayHeaderCell = styles.styled("div", {
  shouldForwardProp: (p) => p !== "density"
})(({ theme, density }) => {
  const isCompact = density === "compact";
  return {
    padding: isCompact ? theme.spacing(0.5, 0) : theme.spacing(1, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: isCompact ? 1 : 2,
    boxSizing: "border-box"
  };
});
var TodayBubble = styles.styled("span", {
  shouldForwardProp: (p) => p !== "density"
})(({ theme, density }) => {
  const isCompact = density === "compact";
  const size4 = isCompact ? 22 : 26;
  return {
    width: size4,
    height: size4,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: isCompact ? "0.72rem" : theme.typography.body2.fontSize
  };
});
var BodyRow = styles.styled("div")(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": { borderBottom: "none" },
  backgroundColor: theme.palette.background.paper
}));
var RowTrack = styles.styled("div")({
  position: "relative",
  display: "flex"
});
var DayCell = styles.styled("button")(({ theme }) => ({
  height: "100%",
  border: "none",
  borderLeft: `1px solid ${theme.palette.divider}`,
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  boxSizing: "border-box",
  transition: "background-color 0.15s ease",
  "&:hover": { backgroundColor: theme.palette.action.hover },
  "&:disabled": { cursor: "default" }
}));
var SpanBar = styles.styled("button", {
  shouldForwardProp: (p) => p !== "density"
})(({ theme, density }) => {
  const isCompact = density === "compact";
  return {
    position: "absolute",
    borderRadius: isCompact ? 4 : theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    paddingLeft: isCompact ? theme.spacing(0.75) : theme.spacing(1.5),
    paddingRight: isCompact ? theme.spacing(0.5) : theme.spacing(1),
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: isCompact ? "0.75rem" : theme.typography.body2.fontSize,
    fontWeight: 600,
    lineHeight: 1.2,
    textAlign: "left",
    zIndex: 1,
    boxSizing: "border-box",
    transition: "transform 0.1s ease, box-shadow 0.15s ease",
    "&:hover": {
      zIndex: 5,
      transform: "translateY(-1px)",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.14)"
    }
  };
});
var TimelineMatrix = ({
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
  today,
  initialScrollDate,
  density = "compact",
  customDimensions,
  renderSpanTooltip,
  renderCellTooltip,
  disableBorder = false
}) => {
  const { t, i18n: i18n2 } = reactI18next.useTranslation();
  const theme = styles.useTheme();
  const scrollContainerRef = React19.useRef(null);
  const dayList = dateRangeDays(startDate, days);
  const todayDate = today ?? todayIso();
  const endDate = addDays(startDate, days);
  const dimensions = {
    ...TIMELINE_DIMENSIONS[density],
    ...customDimensions
  };
  const { resourceColWidth, dayColWidth, rowHeight, spanInset } = dimensions;
  React19.useEffect(() => {
    if (!initialScrollDate || !scrollContainerRef.current) return;
    const dayIndex = differenceInDays(startDate, initialScrollDate);
    if (dayIndex < 0 || dayIndex >= days) return;
    scrollContainerRef.current.scrollLeft = dayIndex * dayColWidth;
  }, [days, initialScrollDate, startDate, dayColWidth]);
  const spanColor = (key) => {
    const paletteColor = key === "neutral" ? theme.palette.neutral : theme.palette[key];
    return {
      backgroundColor: styles.alpha(paletteColor.main, theme.palette.mode === "light" ? 0.12 : 0.24),
      border: `1px solid ${styles.alpha(paletteColor.main, 0.55)}`,
      color: theme.palette.mode === "light" ? paletteColor.dark : paletteColor.light
    };
  };
  const monthFormat = new Intl.DateTimeFormat(i18n2.language, { month: "short" });
  const dayFormat = new Intl.DateTimeFormat(i18n2.language, { day: "numeric" });
  if (loading) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton2__default.default, { variant: "rounded", height: rowHeight * 6 }) });
  }
  const tooltipSx = {
    bgcolor: "background.paper",
    color: "text.primary",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.16)",
    border: "1px solid",
    borderColor: "divider",
    p: 0,
    borderRadius: 2,
    maxWidth: 320
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    legend ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { component: "div", variant: "body2", sx: { display: "flex", justifyContent: "flex-end", mb: 1 }, children: legend }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(MatrixRoot, { ref: scrollContainerRef, disableBorder, "data-testid": "timeline-matrix-scroll-container", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: resourceColWidth + days * dayColWidth }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(HeaderRow, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { density, style: { width: resourceColWidth, minWidth: resourceColWidth }, children: /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: density === "compact" ? "caption" : "overline",
            color: "text.secondary",
            fontWeight: 700,
            sx: { letterSpacing: density === "compact" ? "0.5px" : void 0 },
            children: t(resourceLabelKey)
          }
        ) }),
        dayList.map((date) => {
          const isToday = date === todayDate;
          const dateObj = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
          return /* @__PURE__ */ jsxRuntime.jsxs(
            DayHeaderCell,
            {
              density,
              "aria-current": isToday ? "date" : void 0,
              style: { width: dayColWidth, minWidth: dayColWidth },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  Typography4__default.default,
                  {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                      textTransform: "uppercase",
                      fontSize: density === "compact" ? "0.65rem" : void 0,
                      lineHeight: 1.1,
                      fontWeight: 600
                    },
                    children: monthFormat.format(dateObj)
                  }
                ),
                isToday ? /* @__PURE__ */ jsxRuntime.jsx(TodayBubble, { density, "aria-label": t("common:timeline.today"), children: dayFormat.format(dateObj) }) : /* @__PURE__ */ jsxRuntime.jsx(
                  Typography4__default.default,
                  {
                    variant: density === "compact" ? "caption" : "body2",
                    sx: {
                      fontSize: density === "compact" ? "0.75rem" : void 0,
                      fontWeight: 600
                    },
                    children: dayFormat.format(dateObj)
                  }
                )
              ]
            },
            date
          );
        })
      ] }),
      resources.map((resource) => {
        const rowSpans = spans.filter(
          (span) => span.resourceId === resource.id && span.startDate < endDate && span.endDate > startDate
        );
        return /* @__PURE__ */ jsxRuntime.jsxs(BodyRow, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(ResourceCell, { density, style: { width: resourceColWidth, minWidth: resourceColWidth }, children: renderResource(resource, density) }),
          /* @__PURE__ */ jsxRuntime.jsxs(RowTrack, { style: { width: days * dayColWidth, height: rowHeight }, children: [
            dayList.map((date) => {
              const cellTooltip = renderCellTooltip?.(resource.id, date);
              const cellButton = /* @__PURE__ */ jsxRuntime.jsx(
                DayCell,
                {
                  type: "button",
                  "aria-label": `${resource.id} ${date}`,
                  disabled: !onCellClick,
                  onClick: () => onCellClick?.(resource.id, date),
                  style: { width: dayColWidth, minWidth: dayColWidth }
                },
                date
              );
              if (!cellTooltip) return cellButton;
              return /* @__PURE__ */ jsxRuntime.jsx(
                Tooltip2__default.default,
                {
                  title: cellTooltip,
                  arrow: true,
                  placement: "top",
                  enterDelay: 350,
                  leaveDelay: 50,
                  componentsProps: {
                    tooltip: { sx: tooltipSx },
                    arrow: { sx: { color: "background.paper", "&::before": { border: "1px solid", borderColor: "divider" } } }
                  },
                  children: cellButton
                },
                date
              );
            }),
            rowSpans.map((span) => {
              const clampedStart = span.startDate < startDate ? startDate : span.startDate;
              const clampedEnd = span.endDate > endDate ? endDate : span.endDate;
              const offset4 = differenceInDays(startDate, clampedStart);
              const length = Math.max(1, differenceInDays(clampedStart, clampedEnd));
              const defaultTooltip = /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { p: 1, minWidth: 140 }, children: [
                /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", sx: { fontWeight: 700, fontSize: "0.8125rem" }, noWrap: true, children: span.labelKey ? t(span.labelKey) : span.label }),
                /* @__PURE__ */ jsxRuntime.jsxs(Typography4__default.default, { variant: "caption", color: "text.secondary", sx: { display: "block", mt: 0.25 }, children: [
                  span.startDate,
                  " \u2192 ",
                  span.endDate
                ] })
              ] });
              const tooltipContent = renderSpanTooltip ? renderSpanTooltip(span) : span.tooltip ?? defaultTooltip;
              const spanButton = /* @__PURE__ */ jsxRuntime.jsx(
                SpanBar,
                {
                  type: "button",
                  density,
                  onClick: (e) => {
                    e.stopPropagation();
                    onSpanClick?.(span);
                  },
                  style: {
                    left: offset4 * dayColWidth + 2,
                    width: length * dayColWidth - 4,
                    height: rowHeight - spanInset * 2,
                    top: spanInset,
                    ...spanColor(span.colorKey)
                  },
                  children: span.labelKey ? t(span.labelKey) : span.label
                },
                span.id
              );
              return /* @__PURE__ */ jsxRuntime.jsx(
                Tooltip2__default.default,
                {
                  title: tooltipContent,
                  arrow: true,
                  placement: "top",
                  enterDelay: 150,
                  leaveDelay: 50,
                  componentsProps: {
                    tooltip: { sx: tooltipSx },
                    arrow: { sx: { color: "background.paper", "&::before": { border: "1px solid", borderColor: "divider" } } }
                  },
                  children: spanButton
                },
                span.id
              );
            })
          ] })
        ] }, resource.id);
      })
    ] }) })
  ] });
};
var StatusFilterChips = ({
  options,
  value,
  onChange,
  className
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(Stack2, { direction: "row", spacing: 1, flexWrap: "wrap", className, role: "tablist", children: options.map((option) => {
    const active = option.value === value;
    const label = option.count !== void 0 ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
    return /* @__PURE__ */ jsxRuntime.jsx(
      Chip,
      {
        label,
        color: active ? "primary" : void 0,
        variant: active ? "filled" : "outlined",
        clickable: true,
        onClick: () => {
          onChange(option.value);
        },
        role: "tab",
        "aria-selected": active
      },
      option.value
    );
  }) });
};
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
var AppDrawer = ({
  open: open2,
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
}) => {
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
      open: open2,
      onClose: (_event, reason) => {
        if (reason !== "backdropClick") onClose();
      },
      maxWidth: getMaxWidth(),
      fullWidth: true,
      PaperProps: {
        sx: {
          borderRadius: "4px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
          border: "0.5px solid rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          ...getPaperWidthSx()
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DrawerHeader, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 1.5, alignItems: "center", sx: { flexGrow: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h5", fontWeight: 800, letterSpacing: "-0.3px", noWrap: true, children: title ?? (titleKey ? t(titleKey, titleParams) : null) }),
            statusChip
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton9__default.default, { "aria-label": t("common:actions.close"), onClick: onClose, size: "small", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" }) })
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
};
var WizardDialog = ({
  open: open2,
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
  maxWidth = "md",
  paperSx,
  children
}) => {
  const { t } = reactI18next.useTranslation();
  const isLast = activeStep === steps.length - 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Dialog__default.default,
    {
      open: open2,
      onClose: onCancel,
      fullWidth: true,
      maxWidth,
      TransitionComponent: AppleDialogTransition,
      PaperProps: {
        sx: {
          maxWidth: { xs: "calc(100vw - 32px)", sm: 780, md: 960 },
          width: "100%",
          borderRadius: "4px",
          border: "0.5px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
          ...paperSx
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(DialogTitle__default.default, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, pt: 2.5, px: 3 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", alignItems: "center", spacing: 1.5, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h6", sx: { fontWeight: 700, letterSpacing: "-0.01em" }, children: t(titleKey) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Chip,
              {
                label: `${activeStep + 1} / ${steps.length}`,
                size: "small",
                color: "primary",
                variant: "outlined",
                style: { fontWeight: 700, fontSize: "0.75rem", height: 22 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(IconButton9__default.default, { "aria-label": t("common:actions.close"), onClick: onCancel, size: "small", edge: "end", children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { fontSize: "small" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Stepper__default.default,
          {
            activeStep,
            sx: {
              px: 3,
              pb: 2.5,
              "& .MuiStepLabel-label": {
                fontSize: "0.8125rem",
                fontWeight: 500,
                "&.Mui-active": {
                  fontWeight: 700,
                  color: "primary.main"
                },
                "&.Mui-completed": {
                  fontWeight: 600,
                  color: "text.primary"
                }
              },
              "& .MuiStepIcon-root": {
                width: 26,
                height: 26,
                "&.Mui-active": {
                  color: "primary.main"
                },
                "&.Mui-completed": {
                  color: "success.main"
                }
              }
            },
            children: steps.map((step) => /* @__PURE__ */ jsxRuntime.jsx(Step__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(StepLabel__default.default, { children: t(step.labelKey) }) }, step.labelKey))
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogContent__default.default, { dividers: true, sx: { position: "relative", minHeight: 320, p: 3 }, children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(LoadingOverlay, { open: submitting })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { sx: { justifyContent: "space-between", px: 3, py: 2 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button5__default.default, { onClick: onCancel, color: "inherit", disabled: submitting, sx: { borderRadius: "3px" }, children: t("common:actions.cancel") }),
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 1.5, alignItems: "center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button5__default.default,
              {
                onClick: onBack,
                color: "inherit",
                disabled: activeStep === 0 || submitting,
                sx: { borderRadius: "3px" },
                children: t(backKey)
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button5__default.default,
              {
                variant: "contained",
                onClick: isLast ? onFinish : onNext,
                disabled: !canNext || submitting,
                startIcon: submitting && isLast ? /* @__PURE__ */ jsxRuntime.jsx(CircularProgress__default.default, { size: 16, color: "inherit" }) : void 0,
                sx: {
                  borderRadius: "3px",
                  px: 3,
                  fontWeight: 700
                },
                children: submitting && isLast ? t("common:actions.saving", { defaultValue: "Saving..." }) : t(isLast ? finishKey : nextKey)
              }
            )
          ] })
        ] })
      ]
    }
  );
};
var DateRangeButton = ({ range }) => {
  const { t, i18n: i18n2 } = reactI18next.useTranslation();
  const [anchorEl, setAnchorEl] = React19.useState(null);
  const [draftFrom, setDraftFrom] = React19.useState(range.from);
  const [draftTo, setDraftTo] = React19.useState(range.to);
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
        children: /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { spacing: 2, sx: { p: 2, width: 300 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Stack4__default.default, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true, children: Object.values(DateRangePreset).map((preset) => /* @__PURE__ */ jsxRuntime.jsx(
            Chip,
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
            TextField5__default.default,
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
            TextField5__default.default,
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
};
var NavItemButton = styles.styled(ListItemButton__default.default)(({ theme }) => ({
  borderRadius: "4px",
  margin: theme.spacing(0.35, 1.25),
  paddingTop: 8,
  paddingBottom: 8,
  transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&.Mui-selected": {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 122, 255, 0.10)" : "rgba(10, 132, 255, 0.18)",
    color: theme.palette.mode === "light" ? "#0A2540" : "#E8F0FE",
    fontWeight: 700,
    boxShadow: theme.palette.mode === "light" ? "0 2px 8px rgba(0, 122, 255, 0.12), inset 0 0 0 1px rgba(0, 122, 255, 0.15)" : "0 2px 8px rgba(10, 132, 255, 0.20)",
    "& .MuiListItemIcon-root": {
      color: theme.palette.mode === "light" ? "#005EC4" : "#90CAFF"
    },
    "& .MuiTypography-root": { fontWeight: 700 },
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "rgba(0, 122, 255, 0.15)" : "rgba(10, 132, 255, 0.25)"
    }
  }
}));
var NavList = ({
  items,
  activePath,
  onNavigate,
  depth = 0,
  compact = false
}) => {
  const { t } = reactI18next.useTranslation();
  const [openMap, setOpenMap] = React19.useState({});
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
          sx: {
            pl: (compact ? 1.25 : 2) + depth * 2,
            py: compact ? 0.55 : 1,
            minHeight: compact ? 38 : 48,
            borderRadius: "4px",
            mx: compact ? 0.75 : 1.25,
            my: compact ? 0.2 : 0.35,
            "& .MuiListItemIcon-root": { minWidth: compact ? 32 : 40 },
            "& .MuiTypography-root": { fontSize: compact ? "0.78rem" : "0.875rem", lineHeight: 1.2 }
          },
          children: [
            item.icon ? /* @__PURE__ */ jsxRuntime.jsx(ListItemIcon__default.default, { children: item.icon }) : null,
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
          depth: depth + 1,
          compact
        }
      ) }) : null
    ] }, item.path);
  }) });
};
var AppSideNav = ({
  items,
  activePath,
  onNavigate,
  mobileOpen = false,
  onMobileClose,
  temporary = false,
  compact = false,
  width
}) => {
  const drawerWidth = width;
  const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { sx: (theme) => ({ minHeight: theme.custom.topBarHeight }) }),
    /* @__PURE__ */ jsxRuntime.jsx(NavList, { items, activePath, onNavigate, compact })
  ] });
  if (temporary) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Drawer2__default.default,
      {
        variant: "temporary",
        open: mobileOpen,
        onClose: onMobileClose,
        ModalProps: { keepMounted: true },
        sx: (theme) => ({
          "& .MuiDrawer-paper": { width: drawerWidth ?? theme.custom.sidebarWidth }
        }),
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    Drawer2__default.default,
    {
      variant: "permanent",
      sx: (theme) => ({
        width: drawerWidth ?? theme.custom.sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth ?? theme.custom.sidebarWidth,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`
        }
      }),
      children: content
    }
  );
};
var HeaderRoot = styles.styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));
var PageHeader = ({
  titleKey,
  titleParams,
  title,
  subtitleKey,
  subtitleParams,
  breadcrumbs,
  onNavigate,
  actions
}) => {
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
      /* @__PURE__ */ jsxRuntime.jsx(
        Typography4__default.default,
        {
          variant: "h5",
          component: "h1",
          sx: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25 },
          children: title ?? t(titleKey, titleParams)
        }
      ),
      subtitleKey ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: t(subtitleKey, subtitleParams) }) : null
    ] }),
    actions ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: actions }) : null
  ] });
};
var AuthPageRoot = styles.styled("main", {
  shouldForwardProp: (prop) => prop !== "hasSplitBrand"
})(({ theme, hasSplitBrand }) => ({
  minHeight: "100dvh",
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    display: "grid",
    height: "100dvh",
    minHeight: "100dvh",
    maxHeight: "100dvh",
    overflow: "hidden",
    gridTemplateColumns: hasSplitBrand ? "minmax(0, 5fr) minmax(0, 7fr)" : "minmax(0, 1fr)",
    gridTemplateRows: "minmax(0, 1fr)"
  },
  ...hasSplitBrand && {
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "minmax(0, 5.2fr) minmax(0, 6.8fr)"
    }
  }
}));
var AuthBrandPanel = styles.styled("section", {
  shouldForwardProp: (prop) => prop !== "customGradient"
})(({ theme, customGradient }) => ({
  display: "none",
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  minHeight: 0,
  padding: theme.spacing(6, 6, 5),
  color: theme.palette.common.white,
  background: customGradient || `linear-gradient(145deg, #090e17 0%, #0f172a 45%, ${theme.palette.primary.dark || "#1e3a8a"} 100%)`,
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden"
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: theme.spacing(52),
    height: theme.spacing(52),
    top: theme.spacing(-14),
    right: theme.spacing(-14),
    borderRadius: "50%",
    border: `${theme.spacing(5)} solid ${styles.alpha(theme.palette.common.white, 0.04)}`,
    pointerEvents: "none"
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: theme.spacing(40),
    height: theme.spacing(40),
    bottom: theme.spacing(-14),
    left: theme.spacing(-12),
    borderRadius: "50%",
    backgroundColor: styles.alpha(theme.palette.common.white, 0.03),
    pointerEvents: "none"
  }
}));
var BrandPanelContent = styles.styled("div")({
  position: "relative",
  zIndex: 1
});
var BrandMarkTile = styles.styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(6),
  height: theme.spacing(6),
  borderRadius: theme.shape.borderRadius * 1.5,
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.common.white,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)"
}));
var FeatureList = styles.styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2.25),
  marginTop: theme.spacing(4.5)
}));
var FeatureItem = styles.styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.75),
  alignItems: "center",
  color: styles.alpha(theme.palette.common.white, 0.88)
}));
var AuthFormPanel = styles.styled("section")(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  /* Use flex-start instead of center to prevent scroll-loop glitch.
     Vertical centering is achieved via margin: 'auto 0' on the form shell. */
  justifyContent: "flex-start",
  padding: theme.spacing(3, 2),
  position: "relative",
  overflowY: "auto",
  overflowX: "hidden",
  /* Override global scroll-behavior: smooth to stop the auto-scroll loop
     when the browser tries to scrollIntoView the focused input. */
  scrollBehavior: "auto",
  boxSizing: "border-box",
  WebkitOverflowScrolling: "touch",
  backgroundColor: theme.palette.background.paper,
  "& .MuiInputBase-input": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 4)
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
    minHeight: 0,
    padding: theme.spacing(4, 5)
  }
}));
var StyledPaper = styles.styled(Paper__default.default)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 450,
  flexShrink: 0,
  /* Safe vertical centering — replaces parent justifyContent:'center'
     which caused a scroll-loop when content overflowed. */
  margin: "auto 0",
  padding: theme.spacing(3.5, 2.5),
  borderRadius: 20,
  border: "none",
  boxShadow: "none",
  backgroundImage: "none",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5)
  }
}));
var AuthFormShell = ({ children, sx, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(StyledPaper, { elevation: 0, sx, ...props, children });
};
var AuthTopBar = styles.styled(Box6__default.default)(({ theme }) => ({
  position: "relative",
  width: "100%",
  zIndex: 2,
  flexShrink: 0,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pointerEvents: "auto",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    padding: theme.spacing(3, 3, 0, 0)
  }
}));
var MobileBrand = styles.styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none"
  }
}));
var AuthLayout = ({
  children,
  logo,
  topRight,
  appName,
  tagline,
  headline,
  description,
  features,
  footer,
  brandGradient,
  centeredOnly = false
}) => {
  const hasSplitBrand = !centeredOnly && Boolean(appName || headline);
  return /* @__PURE__ */ jsxRuntime.jsxs(AuthPageRoot, { hasSplitBrand, children: [
    hasSplitBrand ? /* @__PURE__ */ jsxRuntime.jsxs(AuthBrandPanel, { customGradient: brandGradient, children: [
      /* @__PURE__ */ jsxRuntime.jsx(BrandPanelContent, { children: /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 2, alignItems: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(BrandMarkTile, { children: /* @__PURE__ */ jsxRuntime.jsx(NamiosMarkSvg, { size: 28, color: "#0f172a" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h5", component: "p", sx: { fontWeight: 800, letterSpacing: "-0.01em" }, children: appName }),
          tagline ? /* @__PURE__ */ jsxRuntime.jsx(
            Typography4__default.default,
            {
              variant: "caption",
              sx: {
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "inherit",
                opacity: 0.72,
                fontWeight: 600
              },
              children: tagline
            }
          ) : null
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(BrandPanelContent, { children: [
        headline ? /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "h3",
            component: "h1",
            sx: {
              fontWeight: 750,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              maxWidth: (theme) => theme.spacing(60)
            },
            children: headline
          }
        ) : null,
        description ? /* @__PURE__ */ jsxRuntime.jsx(
          Typography4__default.default,
          {
            variant: "body1",
            sx: {
              mt: 2,
              maxWidth: (theme) => theme.spacing(58),
              color: "inherit",
              opacity: 0.76,
              lineHeight: 1.6
            },
            children: description
          }
        ) : null,
        features && features.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(FeatureList, { children: features.map((feature, idx) => {
          const text = typeof feature === "string" ? feature : feature.text;
          const icon = typeof feature === "object" && feature.icon ? feature.icon : /* @__PURE__ */ jsxRuntime.jsx(CheckCircleRoundedIcon__default.default, { sx: { fontSize: 20, color: "#38bdf8" } });
          return /* @__PURE__ */ jsxRuntime.jsxs(FeatureItem, { children: [
            icon,
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "inherit", sx: { fontWeight: 500, fontSize: "0.9rem" }, children: text })
          ] }, idx);
        }) }) : null
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(BrandPanelContent, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", sx: { opacity: 0.6, fontSize: "0.75rem" }, children: footer || "Hotel operations, thoughtfully connected." }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntime.jsxs(AuthFormPanel, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(AuthTopBar, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(MobileBrand, { children: logo }),
        topRight
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(AuthFormShell, { elevation: 0, children: /* @__PURE__ */ jsxRuntime.jsx(Stack4__default.default, { spacing: 3, children }) })
    ] })
  ] });
};
var AuthFormHeader = ({ title, subtitle, badge }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { spacing: 0.75, sx: { mb: 1 }, children: [
    badge ? /* @__PURE__ */ jsxRuntime.jsx("div", { children: badge }) : null,
    /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "h4", component: "h1", sx: { fontWeight: 700, letterSpacing: "-0.02em" }, children: title }),
    subtitle ? /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", color: "text.secondary", sx: { fontSize: "0.875rem" }, children: subtitle }) : null
  ] });
};
var FALLOFF_CURVES = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  sharp: (t) => t * t * t
};
var hexToRgb2 = (hex) => {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = parseInt(v.slice(0, 6), 16);
  return [num >> 16 & 255, num >> 8 & 255, num & 255];
};
var CursorGrid = ({
  cellSize = 70,
  color = "#231924",
  radius = 140,
  falloff = "smooth",
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  fillOpacity = 0,
  gridOpacity = 0,
  cellRadius = 0,
  clickPulse = true,
  pulseSpeed = 600,
  className = ""
}) => {
  const containerRef = React19.useRef(null);
  const canvasRef = React19.useRef(null);
  const propsRef = React19.useRef({});
  const wakeRef = React19.useRef(null);
  propsRef.current = {
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed
  };
  React19.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const isTouch = typeof window !== "undefined" && (window.matchMedia("(hover: none) and (pointer: coarse)").matches || window.innerWidth < 900);
    if (isTouch) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    let cols = 0;
    let rows = 0;
    let offX = 0;
    let offY = 0;
    let alphas = new Float32Array(0);
    let touched = new Float64Array(0);
    let w = 0;
    let h = 0;
    const pulses = [];
    let raf = 0;
    let running = false;
    let lastFrame = 0;
    const rebuild = () => {
      const p = propsRef.current;
      w = container.offsetWidth;
      h = container.offsetHeight;
      if (w <= 0 || h <= 0) return;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / p.cellSize) + 1;
      rows = Math.ceil(h / p.cellSize) + 1;
      offX = (w - cols * p.cellSize) / 2;
      offY = (h - rows * p.cellSize) / 2;
      alphas = new Float32Array(cols * rows);
      touched = new Float64Array(cols * rows);
    };
    const cellCenter = (i) => {
      const p = propsRef.current;
      const cx = offX + i % cols * p.cellSize + p.cellSize / 2;
      const cy = offY + Math.floor(i / cols) * p.cellSize + p.cellSize / 2;
      return [cx, cy];
    };
    const energize = (x, y, boost) => {
      const p = propsRef.current;
      const r = Math.max(p.radius, 1);
      const ease = FALLOFF_CURVES[p.falloff] ?? FALLOFF_CURVES.linear;
      const now = performance.now();
      const minCol = Math.max(0, Math.floor((x - r - offX) / p.cellSize));
      const maxCol = Math.min(cols - 1, Math.floor((x + r - offX) / p.cellSize));
      const minRow = Math.max(0, Math.floor((y - r - offY) / p.cellSize));
      const maxRow = Math.min(rows - 1, Math.floor((y + r - offY) / p.cellSize));
      for (let cRow = minRow; cRow <= maxRow; cRow++) {
        for (let cCol = minCol; cCol <= maxCol; cCol++) {
          const i = cRow * cols + cCol;
          const [cx, cy] = cellCenter(i);
          const dist = Math.hypot(cx - x, cy - y);
          if (dist > r) continue;
          const level = ease(1 - dist / r) * p.maxOpacity * (1);
          const currentAlpha = alphas[i] ?? 0;
          if (level > currentAlpha) {
            alphas[i] = level;
            touched[i] = now;
          } else if (level > 0) {
            touched[i] = now;
          }
        }
      }
    };
    const draw = (now) => {
      const p = propsRef.current;
      const dt = Math.min(now - lastFrame, 50);
      lastFrame = now;
      ctx.clearRect(0, 0, w, h);
      const [cr, cg, cb] = hexToRgb2(p.color);
      if (p.gridOpacity > 0) {
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${p.gridOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let cCol = 0; cCol <= cols; cCol++) {
          const x = Math.round(offX + cCol * p.cellSize) + 0.5;
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }
        for (let cRow = 0; cRow <= rows; cRow++) {
          const y = Math.round(offY + cRow * p.cellSize) + 0.5;
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }
        ctx.stroke();
      }
      for (let pi = pulses.length - 1; pi >= 0; pi--) {
        const pulse = pulses[pi];
        if (!pulse) continue;
        const age = (now - pulse.t0) / 1e3;
        const ringR = age * p.pulseSpeed;
        if (ringR > Math.hypot(w, h)) {
          pulses.splice(pi, 1);
          continue;
        }
        const band = p.cellSize;
        const minCol = Math.max(0, Math.floor((pulse.x - ringR - band - offX) / p.cellSize));
        const maxCol = Math.min(cols - 1, Math.floor((pulse.x + ringR + band - offX) / p.cellSize));
        const minRow = Math.max(0, Math.floor((pulse.y - ringR - band - offY) / p.cellSize));
        const maxRow = Math.min(rows - 1, Math.floor((pulse.y + ringR + band - offY) / p.cellSize));
        for (let cRow = minRow; cRow <= maxRow; cRow++) {
          for (let cCol = minCol; cCol <= maxCol; cCol++) {
            const i = cRow * cols + cCol;
            const [cx, cy] = cellCenter(i);
            const dist = Math.hypot(cx - pulse.x, cy - pulse.y);
            const currentAlpha = alphas[i] ?? 0;
            if (Math.abs(dist - ringR) < band / 2 && p.maxOpacity > currentAlpha) {
              alphas[i] = p.maxOpacity;
              touched[i] = now;
            }
          }
        }
      }
      let anyVisible = pulses.length > 0;
      const fadeStep = dt / Math.max(p.fadeDuration, 16);
      const half = p.cellSize / 2;
      for (let i = 0; i < alphas.length; i++) {
        let a = alphas[i] ?? 0;
        if (a <= 0) continue;
        const lastTouch = touched[i] ?? 0;
        if (now - lastTouch > p.holdTime) {
          a = Math.max(0, a - fadeStep);
          alphas[i] = a;
          if (a <= 0) continue;
        }
        anyVisible = true;
        const [cx, cy] = cellCenter(i);
        const gradient = ctx.createRadialGradient(cx, cy, half * 0.1, cx, cy, p.cellSize);
        gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${a})`);
        gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        const x = cx - half + 0.5;
        const y = cy - half + 0.5;
        const s = p.cellSize - 1;
        ctx.beginPath();
        if (p.cellRadius > 0) {
          ctx.roundRect(x, y, s, s, p.cellRadius);
        } else {
          ctx.rect(x, y, s, s);
        }
        if (p.fillOpacity > 0) {
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a * p.fillOpacity})`;
          ctx.fill();
        }
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.lineWidth;
        ctx.stroke();
      }
      if (anyVisible) {
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
        if (propsRef.current.gridOpacity <= 0) ctx.clearRect(0, 0, w, h);
      }
    };
    const wake = () => {
      if (running) return;
      running = true;
      lastFrame = performance.now();
      raf = requestAnimationFrame(draw);
    };
    wakeRef.current = wake;
    const toLocal = (e) => {
      const rect = canvas.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    };
    const onPointerMove = (e) => {
      const [x, y] = toLocal(e);
      energize(x, y);
      wake();
    };
    const onPointerDown = (e) => {
      if (!propsRef.current.clickPulse) return;
      const [x, y] = toLocal(e);
      pulses.push({ x, y, t0: performance.now() });
      wake();
    };
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const newW = entry.contentRect.width;
      const newH = entry.contentRect.height;
      if (Math.abs(newW - w) >= 2 || Math.abs(newH - h) >= 2) {
        rebuild();
        wake();
      }
    }) : null;
    if (ro) ro.observe(container);
    rebuild();
    wake();
    const target = container.parentElement || container;
    target.addEventListener("pointermove", onPointerMove, { passive: true });
    target.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      target.removeEventListener("pointermove", onPointerMove);
      target.removeEventListener("pointerdown", onPointerDown);
    };
  }, [cellSize]);
  React19.useEffect(() => {
    wakeRef.current?.();
  }, [gridOpacity, color, lineWidth, maxOpacity, fillOpacity, cellRadius]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: containerRef, className: `cursor-grid${className ? ` ${className}` : ""}`, children: /* @__PURE__ */ jsxRuntime.jsx("canvas", { ref: canvasRef, className: "cursor-grid__canvas" }) });
};

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
var PRODUCTION_APP_URLS = {
  "stay-os": "https://stay.namios.app",
  "dine-os": "https://dine.namios.app",
  "people-hr": "https://people.namios.app",
  "super-admin": "https://admin.namios.app",
  "payments-os": "https://payments.namios.app",
  "inventory-os": "https://inventory.namios.app",
  "nami-ai": "https://ai.namios.app",
  "public-web": "https://booking.namios.app"
};
var VERCEL_APP_URLS = {
  "stay-os": "https://hotelos-stay-os.vercel.app",
  "dine-os": "https://hotelos-dine-os.vercel.app",
  "super-admin": "https://hotelos-super-admin.vercel.app"
};
function resolveAppUrl(app) {
  if (typeof window === "undefined") {
    return app.url || PRODUCTION_APP_URLS[app.id] || "";
  }
  const hostname = window.location.hostname;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local");
  if (isLocalhost && app.url) {
    return app.url;
  }
  const isLocalhostUrl = !app.url || app.url.includes("localhost") || app.url.includes("127.0.0.1");
  if (isLocalhostUrl) {
    const vercelUrl = VERCEL_APP_URLS[app.id];
    if (hostname.endsWith(".vercel.app") && vercelUrl) {
      return vercelUrl;
    }
    return PRODUCTION_APP_URLS[app.id] || app.url || "";
  }
  return app.url || "";
}
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
  return /* @__PURE__ */ jsxRuntime.jsx(Tooltip2__default.default, { title: tooltip, arrow: true, placement: "bottom", children: /* @__PURE__ */ jsxRuntime.jsx(
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
  const [imgError, setImgError] = React19.useState(false);
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
          Chip,
          {
            label: app.badge,
            size: "small",
            color: app.badgeColor === "default" ? void 0 : app.badgeColor,
            variant: app.badgeColor === "default" ? "outlined" : "filled",
            style: {
              marginTop: 4,
              height: 16,
              fontSize: "0.6rem",
              fontWeight: 800,
              borderRadius: 5
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
  const [search, setSearch] = React19.useState("");
  const [selectedCategory, setSelectedCategory] = React19.useState("all");
  const modalRef = React19.useRef(null);
  React19.useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setSelectedCategory("all");
    }
  }, [isOpen]);
  React19.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  const categories = React19.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    apps.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [apps]);
  const filteredApps = React19.useMemo(() => {
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
  return ReactDOM.createPortal(
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
                /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }, children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { pr: 2 }, children: [
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
                    IconButton9__default.default,
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
                  Box6__default.default,
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
                      search && /* @__PURE__ */ jsxRuntime.jsx(IconButton9__default.default, { size: "small", onClick: () => setSearch(""), sx: { p: 0.25 }, children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5__default.default, { sx: { fontSize: 14 } }) })
                    ]
                  }
                ),
                categories.length > 1 && !search && /* @__PURE__ */ jsxRuntime.jsxs(
                  Box6__default.default,
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
                        Chip,
                        {
                          label: "All Apps",
                          size: "small",
                          onClick: () => setSelectedCategory("all"),
                          variant: selectedCategory === "all" ? "filled" : "outlined",
                          color: selectedCategory === "all" ? "primary" : void 0,
                          style: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: 8
                          }
                        }
                      ),
                      categories.map((cat) => /* @__PURE__ */ jsxRuntime.jsx(
                        Chip,
                        {
                          label: getCategoryLabel(cat),
                          size: "small",
                          onClick: () => setSelectedCategory(cat),
                          variant: selectedCategory === cat ? "filled" : "outlined",
                          color: selectedCategory === cat ? "primary" : void 0,
                          style: {
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            height: 26,
                            cursor: "pointer",
                            borderRadius: 8
                          }
                        },
                        cat
                      ))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  Box6__default.default,
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
                    children: filteredApps.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { py: 6, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsxs(Typography4__default.default, { variant: "body2", color: "text.secondary", fontWeight: 600, children: [
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
                  Box6__default.default,
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

// src/components/AppLauncher/functions/navigateApp.ts
var isReachableUrl = (url) => {
  if (!url) return false;
  try {
    const { hostname } = new URL(url);
    return hostname !== "localhost" && hostname !== "127.0.0.1";
  } catch {
    return false;
  }
};
var navigateApp = ({
  app,
  currentAppId,
  onSelectApp
}) => {
  if (onSelectApp) {
    onSelectApp(app);
    return;
  }
  const isCurrentApp = Boolean(currentAppId && app.id === currentAppId);
  if (isCurrentApp) return;
  const targetUrl = app.url;
  if (app.disabled || !isReachableUrl(targetUrl ?? "")) {
    window.location.href = "/404";
    return;
  }
  window.open(targetUrl, "_blank", "noopener,noreferrer");
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
  const [isOpen, setIsOpen] = React19.useState(false);
  const resolvedApps = React19.useMemo(() => {
    return apps.map((app) => ({
      ...app,
      url: resolveAppUrl(app)
    }));
  }, [apps]);
  const handleOpen = React19.useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = React19.useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleSelectApp = React19.useCallback(
    (app) => {
      const resolvedApp = {
        ...app,
        url: resolveAppUrl(app)
      };
      navigateApp({
        app: resolvedApp,
        currentAppId,
        onSelectApp
      });
    },
    [currentAppId, onSelectApp]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(framerMotion.MotionConfig, { transition: FOLDER_LAYOUT_SPRING, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      AppFolderMiniPreview,
      {
        apps: resolvedApps,
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
        apps: resolvedApps,
        currentAppId,
        isOpen,
        onClose: handleClose,
        onSelectApp: handleSelectApp
      }
    )
  ] });
};

// src/components/AppLauncher/functions/isPwa.ts
var isPwa = () => {
  if (typeof window === "undefined") return false;
  const isStandaloneMedia = window.matchMedia?.("(display-mode: standalone)")?.matches || window.matchMedia?.("(display-mode: window-controls-overlay)")?.matches || window.matchMedia?.("(display-mode: minimal-ui)")?.matches || window.matchMedia?.("(display-mode: fullscreen)")?.matches;
  const isIosStandalone = Boolean(
    window.navigator?.standalone
  );
  const isAndroidTwa = Boolean(document.referrer?.startsWith("android-app://"));
  return Boolean(isStandaloneMedia || isIosStandalone || isAndroidTwa);
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
var DashboardLayout = ({
  navItems,
  activePath,
  onNavigate,
  appsLauncher = /* @__PURE__ */ jsxRuntime.jsx(AppLauncher, {}),
  logo,
  topBarActions,
  children
}) => {
  const { isDesktop } = useMediaBreakpoint();
  const [mobileOpen, setMobileOpen] = React19.useState(false);
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
          setMobileOpen((open2) => !open2);
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
};
var LaneContainer = styles.styled(Box6__default.default)(({ theme }) => ({
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
var ColumnHeader = styles.styled(Box6__default.default)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1.5),
  borderBottom: `2px solid ${theme.palette.divider}`
}));
var ItemsScrollArea = styles.styled(Box6__default.default)(({ theme }) => ({
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
var KanbanBoard = ({
  columns,
  items,
  getItemId,
  getItemColumnId,
  renderItem
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Stack4__default.default,
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
            /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 1.5, alignItems: "center", children: [
              column.color && /* @__PURE__ */ jsxRuntime.jsx(
                Box6__default.default,
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
              Chip,
              {
                label: String(laneItems.length),
                size: "small",
                variant: "outlined",
                style: { height: 22, fontSize: "0.75rem", fontWeight: 700 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ItemsScrollArea, { children: laneItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { position: "relative" }, children: renderItem(item) }, getItemId(item))) })
        ] }, column.id);
      })
    }
  );
};
var SplitPaneLayout = ({
  leftPane,
  rightPane,
  rightWidth = 400
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box6__default.default,
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
          Box6__default.default,
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
          Box6__default.default,
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
};
var StyledCard = styles.styled(Card2__default.default, {
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
var ImageContainer = styles.styled(Box6__default.default)({
  position: "relative",
  paddingTop: "60%",
  // 5:3 Aspect Ratio
  width: "100%",
  overflow: "hidden"
});
var MediaOverlay = styles.styled(Box6__default.default)({
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
var MenuCard = ({
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
}) => {
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
            CardMedia2__default.default,
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
            Box6__default.default,
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
        /* @__PURE__ */ jsxRuntime.jsxs(CardContent2__default.default, { sx: { p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 1, children: [
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
          /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { flexGrow: 1 } }),
          /* @__PURE__ */ jsxRuntime.jsxs(Stack4__default.default, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, alignItems: "center", sx: { mt: 1 }, children: [
            badges?.map((badge, idx) => /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { children: badge }, idx)),
            /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { flexGrow: 1 } }),
            stockLabel && /* @__PURE__ */ jsxRuntime.jsx(
              Chip,
              {
                label: stockLabel,
                size: "small",
                color: stockColor === "default" ? void 0 : stockColor,
                variant: stockColor === "default" ? "outlined" : "filled",
                style: { fontWeight: 700, fontSize: "0.65rem", height: 20 }
              }
            )
          ] })
        ] })
      ]
    }
  );
};
var DETERMINISTIC_COLORS = [
  "#1565C0",
  // Blue
  "#4527A0",
  // Deep Purple
  "#7B1FA2",
  // Purple
  "#C62828",
  // Red
  "#E65100",
  // Deep Orange
  "#2E7D32",
  // Green
  "#00695C",
  // Teal
  "#0277BD"
  // Light Blue
];
function hexToRgb3(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1] ?? "0", 16),
    g: parseInt(result[2] ?? "0", 16),
    b: parseInt(result[3] ?? "0", 16)
  } : { r: 25, g: 118, d: 210 };
}
var getAvatarBgColor = (seed) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index3 = Math.abs(hash) % DETERMINISTIC_COLORS.length;
  return DETERMINISTIC_COLORS[index3] ?? "#1565C0";
};
var getAvatarColors = (seed) => {
  const textColor = getAvatarBgColor(seed);
  const { r, g, b } = hexToRgb3(textColor);
  const bg = `rgba(${r}, ${g}, ${b}, 0.14)`;
  return { bg, text: textColor };
};
var UserAvatar = ({
  name = "",
  email = "",
  avatarUrl,
  size: size4 = 36,
  sx,
  style,
  fontSize,
  className
}) => {
  const [imageSrc, setImageSrc] = React19.useState(avatarUrl);
  React19.useEffect(() => {
    if (avatarUrl) {
      setImageSrc(avatarUrl);
      return;
    }
    try {
      const stored = window.localStorage.getItem("hotelos.avatar");
      if (stored) {
        setImageSrc(stored);
      }
    } catch {
    }
  }, [avatarUrl]);
  const displayName = name.trim() || email.trim() || "User";
  const initials = initialsFromName(displayName);
  const { bg, text } = getAvatarColors(displayName);
  const sxStyle = sx && typeof sx === "object" && !Array.isArray(sx) ? sx : void 0;
  const combinedStyle = {
    width: size4,
    height: size4,
    backgroundColor: bg,
    color: text,
    fontWeight: 800,
    fontSize: fontSize ?? Math.max(12, Math.floor(size4 * 0.4)),
    boxShadow: "none",
    border: `1.5px solid ${text}26`,
    // ~15% opacity border
    ...sxStyle,
    ...style
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    Avatar,
    {
      src: imageSrc,
      alt: displayName,
      size: size4,
      variant: "circular",
      className,
      style: combinedStyle,
      children: initials
    }
  );
};
var AnimatedBed = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4v16" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 17h20" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M6 8v9",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, transition: { type: "spring", stiffness: 300 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M6 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H6v-1z",
            variants: {
              idle: { y: 0, scale: 1 },
              animate: {
                y: [0, -1, 0],
                scale: [1, 1.05, 1],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.1, y: -1.5, transition: { type: "spring" } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedUsers = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "9",
            cy: "7",
            r: "4",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -3, transition: { type: "spring", stiffness: 400, damping: 10 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.02, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.05, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1, 0],
                transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              },
              hover: { y: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M21 21v-2a4 4 0 0 0-3-3.87",
            variants: {
              idle: { opacity: 0.8 },
              animate: {
                opacity: [0.7, 1, 0.7],
                transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              },
              hover: { opacity: 1 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedCalendar = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "8",
            y1: "2",
            x2: "8",
            y2: "6",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "16",
            y1: "2",
            x2: "16",
            y2: "6",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1.5, 0],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              },
              hover: { y: -2, transition: { type: "spring", delay: 0.05 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "8",
            cy: "14",
            r: "1",
            fill: color,
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.3 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "12",
            cy: "14",
            r: "1",
            fill: color,
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              },
              hover: { scale: 1.3 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "16",
            cy: "14",
            r: "1",
            fill: color,
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              },
              hover: { scale: 1.3 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedFolderOpen = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.02, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.03, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M2 10h20l-2 10H4L2 10z",
            variants: {
              idle: { y: 0, skewX: 0 },
              animate: {
                y: [0, 1.5, 0],
                skewX: [0, -3, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: 2, skewX: -6, transition: { type: "spring", stiffness: 300 } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedLayers = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polygon,
          {
            points: "12 2 2 7 12 12 22 7 12 2",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -3, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -5, transition: { type: "spring", stiffness: 400, damping: 12 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "2 12 12 17 22 12",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, -1, 0],
                transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }
              },
              hover: { y: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "2 17 12 22 22 17",
            variants: {
              idle: { y: 0 },
              animate: {
                y: [0, 0, 0]
              },
              hover: { y: 0 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedCreditCard = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            variants: {
              idle: { y: 0, rotate: 0 },
              animate: {
                y: [0, -1.5, 0],
                rotate: [0, -1, 0, 1, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { y: -3, rotate: -2, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.line,
          {
            x1: "2",
            y1: "10",
            x2: "22",
            y2: "10",
            variants: {
              idle: { opacity: 0.8 },
              animate: {
                opacity: [0.6, 1, 0.6],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "5",
            y: "13",
            width: "3",
            height: "2.5",
            rx: "0.5",
            fill: color,
            variants: {
              idle: { opacity: 0.8 },
              animate: {
                opacity: [0.5, 1, 0.5],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.2 }
            }
          }
        )
      ]
    }
  );
};
var AnimatedBrush = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          framerMotion.motion.g,
          {
            variants: {
              idle: { rotate: 0, originX: "18px", originY: "6px" },
              animate: {
                rotate: [0, -12, 6, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { rotate: -18, transition: { type: "spring", stiffness: 300 } }
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }),
              /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 13 9 7l4-4 6 6z" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M19 2v3",
            variants: {
              idle: { opacity: 0.5, scale: 1 },
              animate: {
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M22 5h-3",
            variants: {
              idle: { opacity: 0.5, scale: 1 },
              animate: {
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }
            }
          }
        )
      ]
    }
  );
};
var AnimatedSparkles = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
            variants: {
              idle: { scale: 1, rotate: 0, originX: "12px", originY: "12px" },
              animate: {
                scale: [1, 1.1, 1],
                rotate: [0, 15, -10, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.2, rotate: 45, transition: { type: "spring", stiffness: 300 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M5 3v4",
            variants: {
              idle: { opacity: 0.6 },
              animate: {
                opacity: [0.2, 1, 0.2],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M7 5H3",
            variants: {
              idle: { opacity: 0.6 },
              animate: {
                opacity: [0.2, 1, 0.2],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        )
      ]
    }
  );
};
var AnimatedShieldCheck = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.03, 1],
                transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.05, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "m9 12 2 2 4-4",
            variants: {
              idle: { pathLength: 1 },
              animate: {
                pathLength: [0.8, 1, 0.8],
                transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { pathLength: 1, scale: 1.1, originX: "12px", originY: "12px" }
            }
          }
        )
      ]
    }
  );
};
var AnimatedTrendingUp = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            variants: {
              idle: { pathLength: 1 },
              animate: {
                pathLength: [0.7, 1, 0.7],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { pathLength: 1 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.polyline,
          {
            points: "16 7 22 7 22 13",
            variants: {
              idle: { x: 0, y: 0 },
              animate: {
                x: [0, 2, 0],
                y: [0, -2, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { x: 3, y: -3, transition: { type: "spring", stiffness: 400 } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedRadio = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "12",
            cy: "12",
            r: "2",
            fill: color,
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.3, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.4 }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14",
            variants: {
              idle: { opacity: 0.7 },
              animate: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { opacity: 1, scale: 1.05, originX: "12px", originY: "12px" }
            }
          }
        )
      ]
    }
  );
};
var AnimatedSettings = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        framerMotion.motion.g,
        {
          variants: {
            idle: { rotate: 0, originX: "12.5px", originY: "12.5px" },
            animate: {
              rotate: [0, 90, 180, 270, 360],
              transition: { duration: 12, repeat: Infinity, ease: "linear" }
            },
            hover: { rotate: 90, transition: { type: "spring", stiffness: 300, damping: 15 } }
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
            /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }
      )
    }
  );
};
var AnimatedDashboard = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "3",
            y: "3",
            width: "7",
            height: "9",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "14",
            y: "3",
            width: "7",
            height: "5",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "14",
            y: "12",
            width: "7",
            height: "9",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            x: "3",
            y: "16",
            width: "7",
            height: "5",
            rx: "1",
            variants: {
              idle: { scale: 1 },
              animate: {
                scale: [1, 1.05, 1],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              },
              hover: { scale: 1.1, transition: { type: "spring" } }
            }
          }
        )
      ]
    }
  );
};
var AnimatedSearch = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        framerMotion.motion.g,
        {
          variants: {
            idle: { rotate: 0, x: 0, y: 0, originX: "11px", originY: "11px" },
            animate: {
              rotate: [0, -8, 8, 0],
              x: [0, -1, 1, 0],
              y: [0, -1, 0, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            },
            hover: { rotate: -15, scale: 1.1, transition: { type: "spring", stiffness: 300 } }
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ]
        }
      )
    }
  );
};
var AnimatedDoorOpen = ({
  size: size4 = 48,
  color = "currentColor",
  isAnimated = true,
  animateOnHover = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      width: size4,
      height: size4,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      initial: "idle",
      animate: isAnimated && !animateOnHover ? "animate" : "idle",
      whileHover: animateOnHover ? "hover" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 20h20" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M13 20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16",
            variants: {
              idle: { skewY: 0, originX: "4px", originY: "12px" },
              animate: {
                skewY: [0, -6, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              },
              hover: { skewY: -12, transition: { type: "spring", stiffness: 300 } }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.circle,
          {
            cx: "10",
            cy: "12",
            r: "1",
            fill: color,
            variants: {
              idle: { x: 0 },
              animate: {
                x: [0, -1, 0],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            }
          }
        )
      ]
    }
  );
};
function useWebGlSupport() {
  const [supported, setSupported] = React19.useState(true);
  React19.useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("webgl2");
      setSupported(Boolean(gl && gl instanceof WebGLRenderingContext));
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}
function ThreeOverviewCanvas({
  height: height2 = 280,
  fallback,
  children,
  title,
  subtitle,
  onRenderScene
}) {
  const theme = styles.useTheme();
  const isDark = theme.palette.mode === "dark";
  const hasWebGl = useWebGlSupport();
  const canvasRef = React19.useRef(null);
  const containerRef = React19.useRef(null);
  const [rotation, setRotation] = React19.useState({ x: 0.55, y: -0.65 });
  const isDraggingRef = React19.useRef(false);
  const lastPointerRef = React19.useRef({ x: 0, y: 0 });
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    e.target.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    setRotation((prev) => ({
      x: Math.max(0.1, Math.min(1.2, prev.x + dy * 8e-3)),
      y: prev.y + dx * 8e-3
    }));
  };
  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };
  React19.useEffect(() => {
    if (!canvasRef.current || !hasWebGl) return;
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.floor(rect.width * dpr);
    const heightPx = Math.floor(rect.height * dpr);
    if (canvas.width !== width || canvas.height !== heightPx) {
      canvas.width = width;
      canvas.height = heightPx;
    }
    gl.viewport(0, 0, width, heightPx);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    if (isDark) {
      gl.clearColor(0.043, 0.051, 0.07, 1);
    } else {
      gl.clearColor(0.972, 0.98, 0.988, 1);
    }
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (onRenderScene) {
      onRenderScene(gl, width, heightPx, rotation, isDark);
    }
  }, [rotation, isDark, hasWebGl, onRenderScene]);
  if (!hasWebGl && fallback) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: fallback });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box6__default.default,
    {
      ref: containerRef,
      sx: {
        width: "100%",
        height: height2,
        position: "relative",
        borderRadius: "4px",
        border: `0.5px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"}`,
        backgroundColor: isDark ? "#0B0D12" : "#F8FAFC",
        overflow: "hidden",
        userSelect: "none"
      },
      children: [
        (title || subtitle) && /* @__PURE__ */ jsxRuntime.jsxs(
          Box6__default.default,
          {
            sx: {
              position: "absolute",
              top: 10,
              left: 12,
              zIndex: 2,
              pointerEvents: "none"
            },
            children: [
              title && /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", sx: { fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: isDark ? "#94A3B8" : "#64748B", display: "block", fontSize: "0.68rem" }, children: title }),
              subtitle && /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "body2", sx: { fontWeight: 600, fontSize: "0.8rem", color: isDark ? "#F8FAFC" : "#0F172A" }, children: subtitle })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "canvas",
          {
            ref: canvasRef,
            style: { width: "100%", height: "100%", display: "block", cursor: "grab" },
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp
          }
        ),
        children && /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { position: "absolute", bottom: 8, right: 10, zIndex: 2 }, children })
      ]
    }
  );
}
function IsometricBarOverview({
  data,
  title,
  subtitle,
  height: height2 = 280,
  fallback
}) {
  const theme = styles.useTheme();
  const isDark = theme.palette.mode === "dark";
  const maxValue = React19.useMemo(() => {
    return Math.max(...data.map((d) => d.value), 1);
  }, [data]);
  const renderScene = React19__namespace.default.useCallback(
    (gl, width, heightPx, rotation) => {
      const vsSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        uniform mat4 uMatrix;
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_Position = uMatrix * vec4(aPosition, 1.0);
          vec3 lightDir = normalize(vec3(0.5, 1.0, 0.7));
          float diffuse = max(dot(aNormal, lightDir), 0.0);
          vLight = 0.55 + 0.45 * diffuse;
          vColor = uColor;
        }
      `;
      const fsSource = `
        precision mediump float;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_FragColor = vec4(vColor * vLight, 1.0);
        }
      `;
      const createShader = (type, src) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;
      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);
      const aPos = gl.getAttribLocation(program, "aPosition");
      const aNorm = gl.getAttribLocation(program, "aNormal");
      const uMatrix = gl.getUniformLocation(program, "uMatrix");
      const uColor = gl.getUniformLocation(program, "uColor");
      const vertices = new Float32Array([
        // Front face
        -0.5,
        0,
        0.5,
        0.5,
        0,
        0.5,
        0.5,
        1,
        0.5,
        -0.5,
        0,
        0.5,
        0.5,
        1,
        0.5,
        -0.5,
        1,
        0.5,
        // Back face
        -0.5,
        0,
        -0.5,
        -0.5,
        1,
        -0.5,
        0.5,
        1,
        -0.5,
        -0.5,
        0,
        -0.5,
        0.5,
        1,
        -0.5,
        0.5,
        0,
        -0.5,
        // Top face
        -0.5,
        1,
        -0.5,
        -0.5,
        1,
        0.5,
        0.5,
        1,
        0.5,
        -0.5,
        1,
        -0.5,
        0.5,
        1,
        0.5,
        0.5,
        1,
        -0.5,
        // Left face
        -0.5,
        0,
        -0.5,
        -0.5,
        0,
        0.5,
        -0.5,
        1,
        0.5,
        -0.5,
        0,
        -0.5,
        -0.5,
        1,
        0.5,
        -0.5,
        1,
        -0.5,
        // Right face
        0.5,
        0,
        -0.5,
        0.5,
        1,
        -0.5,
        0.5,
        1,
        0.5,
        0.5,
        0,
        -0.5,
        0.5,
        1,
        0.5,
        0.5,
        0,
        0.5
      ]);
      const normals = new Float32Array([
        // Front
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        // Back
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        // Top
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        // Left
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        // Right
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0
      ]);
      const vBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      const nBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, nBuf);
      gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aNorm);
      gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);
      const aspect = width / heightPx;
      const count = data.length;
      const spacing = 1.3;
      data.forEach((item, index3) => {
        const heightNorm = Math.max(0.08, item.value / maxValue * 2.2);
        const xPos = (index3 - count / 2 + 0.5) * spacing;
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);
        const scale = 0.38;
        const mat = new Float32Array([
          cosY * scale / aspect,
          sinX * sinY * scale,
          -cosX * sinY * scale,
          0,
          0,
          cosX * scale * heightNorm,
          sinX * scale,
          0,
          sinY * scale / aspect,
          -sinX * cosY * scale,
          cosX * cosY * scale,
          0,
          xPos * scale * 0.9 / aspect,
          -0.45,
          0,
          1
        ]);
        gl.uniformMatrix4fv(uMatrix, false, mat);
        const hex = item.color || "#007AFF";
        const r = parseInt(hex.slice(1, 3), 16) / 255 || 0;
        const g = parseInt(hex.slice(3, 5), 16) / 255 || 0.48;
        const b = parseInt(hex.slice(5, 7), 16) / 255 || 1;
        gl.uniform3f(uColor, r, g, b);
        gl.drawArrays(gl.TRIANGLES, 0, 30);
      });
    },
    [data, maxValue]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { width: "100%", position: "relative" }, children: /* @__PURE__ */ jsxRuntime.jsx(
    ThreeOverviewCanvas,
    {
      height: height2,
      title,
      subtitle,
      fallback,
      onRenderScene: renderScene,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Box6__default.default,
        {
          sx: {
            display: "flex",
            gap: 1.5,
            bgcolor: isDark ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
            px: 1.25,
            py: 0.5,
            borderRadius: "3px",
            border: `0.5px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`
          },
          children: data.slice(0, 4).map((d) => /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "center", gap: 0.75 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Box6__default.default,
              {
                sx: {
                  width: 8,
                  height: 8,
                  borderRadius: "1.5px",
                  bgcolor: d.color || "#007AFF"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(Typography4__default.default, { variant: "caption", sx: { fontSize: "0.7rem", fontWeight: 600, color: "text.secondary" }, children: [
              d.label,
              ": ",
              /* @__PURE__ */ jsxRuntime.jsx("strong", { children: d.formattedValue || d.value })
            ] })
          ] }, d.label))
        }
      )
    }
  ) });
}
var STATUS_HEX = {
  available: "#34C759",
  // Apple Green
  occupied: "#007AFF",
  // Blue
  reserved: "#FF9500",
  // Amber
  cleaning: "#AF52DE"
  // Purple
};
function PropertyDigitalTwin({
  rooms,
  title,
  subtitle,
  height: height2 = 300,
  fallback
}) {
  const theme = styles.useTheme();
  const isDark = theme.palette.mode === "dark";
  const floors = React19.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    rooms.forEach((r) => {
      const list = map.get(r.floor) || [];
      list.push(r);
      map.set(r.floor, list);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [rooms]);
  const renderScene = React19__namespace.default.useCallback(
    (gl, width, heightPx, rotation) => {
      const vsSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        uniform mat4 uMatrix;
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_Position = uMatrix * vec4(aPosition, 1.0);
          vec3 lightDir = normalize(vec3(0.6, 1.0, 0.5));
          float diffuse = max(dot(aNormal, lightDir), 0.0);
          vLight = 0.6 + 0.4 * diffuse;
          vColor = uColor;
        }
      `;
      const fsSource = `
        precision mediump float;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_FragColor = vec4(vColor * vLight, 1.0);
        }
      `;
      const createShader = (type, src) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;
      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);
      const aPos = gl.getAttribLocation(program, "aPosition");
      const aNorm = gl.getAttribLocation(program, "aNormal");
      const uMatrix = gl.getUniformLocation(program, "uMatrix");
      const uColor = gl.getUniformLocation(program, "uColor");
      const vertices = new Float32Array([
        // Front
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        // Back
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        // Top
        -0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        // Left
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        // Right
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5
      ]);
      const normals = new Float32Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0
      ]);
      const vBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
      const nBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, nBuf);
      gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aNorm);
      gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);
      const aspect = width / heightPx;
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);
      const scale = 0.22;
      floors.forEach(([, floorRooms], fIdx) => {
        const floorY = (fIdx - floors.length / 2) * 1.1;
        floorRooms.forEach((rm, rIdx) => {
          const row = Math.floor(rIdx / 4);
          const col = rIdx % 4;
          const xPos = (col - 1.5) * 1.1;
          const zPos = (row - 0.5) * 1.1;
          const mat = new Float32Array([
            cosY * scale / aspect,
            sinX * sinY * scale,
            -cosX * sinY * scale,
            0,
            0,
            cosX * scale,
            sinX * scale,
            0,
            sinY * scale / aspect,
            -sinX * cosY * scale,
            cosX * cosY * scale,
            0,
            (xPos * cosY + zPos * sinY) * scale / aspect,
            floorY * scale + (-xPos * sinX * sinY + zPos * sinX * cosY) * scale,
            0,
            1
          ]);
          gl.uniformMatrix4fv(uMatrix, false, mat);
          const hex = STATUS_HEX[rm.status] || "#007AFF";
          const r = parseInt(hex.slice(1, 3), 16) / 255 || 0;
          const g = parseInt(hex.slice(3, 5), 16) / 255 || 0.48;
          const b = parseInt(hex.slice(5, 7), 16) / 255 || 1;
          gl.uniform3f(uColor, r, g, b);
          gl.drawArrays(gl.TRIANGLES, 0, 30);
        });
      });
    },
    [floors]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { width: "100%", position: "relative" }, children: /* @__PURE__ */ jsxRuntime.jsx(
    ThreeOverviewCanvas,
    {
      height: height2,
      title,
      subtitle,
      fallback,
      onRenderScene: renderScene,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        Box6__default.default,
        {
          sx: {
            display: "flex",
            gap: 1.5,
            bgcolor: isDark ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
            px: 1.25,
            py: 0.5,
            borderRadius: "3px",
            border: `0.5px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`
          },
          children: Object.entries(STATUS_HEX).map(([status, color]) => /* @__PURE__ */ jsxRuntime.jsxs(Box6__default.default, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Box6__default.default, { sx: { width: 8, height: 8, borderRadius: "1.5px", bgcolor: color } }),
            /* @__PURE__ */ jsxRuntime.jsx(Typography4__default.default, { variant: "caption", sx: { fontSize: "0.68rem", fontWeight: 600, color: "text.secondary", textTransform: "capitalize" }, children: status })
          ] }, status))
        }
      )
    }
  ) });
}

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
exports.Accordion = Accordion;
exports.AccordionDetails = AccordionDetails;
exports.AccordionSummary = AccordionSummary;
exports.AdaptiveThemeProvider = AdaptiveThemeProvider;
exports.Alert = Alert;
exports.AlertTitle = AlertTitle;
exports.AnimatedBed = AnimatedBed;
exports.AnimatedBrush = AnimatedBrush;
exports.AnimatedCalendar = AnimatedCalendar;
exports.AnimatedCreditCard = AnimatedCreditCard;
exports.AnimatedDashboard = AnimatedDashboard;
exports.AnimatedDoorOpen = AnimatedDoorOpen;
exports.AnimatedFolderOpen = AnimatedFolderOpen;
exports.AnimatedInbox = AnimatedInbox;
exports.AnimatedLayers = AnimatedLayers;
exports.AnimatedRadio = AnimatedRadio;
exports.AnimatedSearch = AnimatedSearch;
exports.AnimatedSettings = AnimatedSettings;
exports.AnimatedShieldCheck = AnimatedShieldCheck;
exports.AnimatedSparkles = AnimatedSparkles;
exports.AnimatedTrendingUp = AnimatedTrendingUp;
exports.AnimatedUsers = AnimatedUsers;
exports.AppDialog = AppDialog;
exports.AppDrawer = AppDrawer;
exports.AppFolderMiniPreview = AppFolderMiniPreview;
exports.AppFolderModal = AppFolderModal;
exports.AppLauncher = AppLauncher;
exports.AppSideNav = AppSideNav;
exports.AppTile = AppTile;
exports.AppTopBar = AppTopBar;
exports.AppleDialogTransition = AppleDialogTransition;
exports.AuthFormHeader = AuthFormHeader;
exports.AuthFormShell = AuthFormShell;
exports.AuthLayout = AuthLayout;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.BACKDROP_TRANSITION = BACKDROP_TRANSITION;
exports.BORDERS = BORDERS;
exports.BRAND = BRAND;
exports.Badge = Badge;
exports.BillingCycle = BillingCycle;
exports.Box = Box4;
exports.Button = Button3;
exports.COMMON_NAMESPACE = COMMON_NAMESPACE;
exports.CONTAINER_VARIANTS = CONTAINER_VARIANTS;
exports.Card = Card;
exports.CardActions = CardActions;
exports.CardContent = CardContent;
exports.CardHeader = CardHeader;
exports.CardMedia = CardMedia;
exports.Checkbox = Checkbox;
exports.Chip = Chip;
exports.CircularProgress = CircularProgress3;
exports.ConfirmDialog = ConfirmDialog;
exports.ConfirmProvider = ConfirmProvider;
exports.Container = Container;
exports.ContextMenu = ContextMenu;
exports.CursorGrid = CursorGrid;
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
exports.Dialog = Dialog3;
exports.DialogActions = DialogActions3;
exports.DialogContent = DialogContent3;
exports.DialogSize = DialogSize;
exports.DialogTitle = DialogTitle3;
exports.Divider = Divider;
exports.Drawer = Drawer;
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
exports.Grid = Grid;
exports.IconButton = IconButton3;
exports.IsometricBarOverview = IsometricBarOverview;
exports.KanbanBoard = KanbanBoard;
exports.LanguageSwitcher = LanguageSwitcher;
exports.LinearProgress = LinearProgress;
exports.LoadState = LoadState;
exports.LoadingOverlay = LoadingOverlay;
exports.MAX_IMAGE_BYTES = MAX_IMAGE_BYTES;
exports.MAX_VIDEO_BYTES = MAX_VIDEO_BYTES;
exports.MOTION = MOTION;
exports.MenuCard = MenuCard;
exports.NamiosLoader = NamiosLoader;
exports.NamiosMarkSvg = NamiosMarkSvg;
exports.OUTLINES = OUTLINES;
exports.OtpInput = OtpInput;
exports.PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;
exports.PASSWORD_REGEX = PASSWORD_REGEX;
exports.PHONE_REGEX = PHONE_REGEX;
exports.PRODUCTION_APP_URLS = PRODUCTION_APP_URLS;
exports.PageHeader = PageHeader;
exports.PageSkeleton = PageSkeleton;
exports.Paper = Paper2;
exports.PasswordField = PasswordField;
exports.PropertyDigitalTwin = PropertyDigitalTwin;
exports.RADII = RADII;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Rating = Rating;
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
exports.Select = Select;
exports.SelectField = SelectField;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.SnackbarProvider = SnackbarProvider;
exports.SplitPaneLayout = SplitPaneLayout;
exports.Stack = Stack2;
exports.StatCard = StatCard;
exports.Status = Status;
exports.StatusChip = StatusChip;
exports.StatusFilterChips = StatusFilterChips;
exports.SubscriptionPlanTier = SubscriptionPlanTier;
exports.Switch = Switch;
exports.TIMELINE_DIMENSIONS = TIMELINE_DIMENSIONS;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.TextField = TextField;
exports.ThemeModeProvider = ThemeModeProvider;
exports.ThemeProvider = ThemeProvider2;
exports.ThreeOverviewCanvas = ThreeOverviewCanvas;
exports.TimelineMatrix = TimelineMatrix;
exports.Tooltip = Tooltip;
exports.Typography = Typography3;
exports.UserAvatar = UserAvatar;
exports.UserRole = UserRole;
exports.VERCEL_APP_URLS = VERCEL_APP_URLS;
exports.WizardDialog = WizardDialog;
exports.addDays = addDays;
exports.adjustLightness = adjustLightness;
exports.assertNever = assertNever;
exports.buildColorRole = buildColorRole;
exports.buildQueryString = buildQueryString;
exports.clamp = clamp;
exports.cn = cn;
exports.commonKey = commonKey;
exports.createHotelOsTheme = createHotelOsTheme;
exports.createMuiCompatiblePalette = createMuiCompatiblePalette;
exports.createTheme = createTheme2;
exports.dateRangeDays = dateRangeDays;
exports.diffTranslationKeys = diffTranslationKeys;
exports.differenceInDays = differenceInDays;
exports.flattenTranslationKeys = flattenTranslationKeys;
exports.formatBytes = formatBytes;
exports.forwardRef = forwardRef17;
exports.generateId = generateId2;
exports.getAvatarBgColor = getAvatarBgColor;
exports.getContrastRatio = getContrastRatio;
exports.getContrastText = getContrastText;
exports.getRelativeLuminance = getRelativeLuminance;
exports.groupBy = groupBy;
exports.hexToRgb = hexToRgb;
exports.initI18n = initI18n;
exports.initialsFromName = initialsFromName;
exports.injectThemeTokens = injectThemeTokens;
exports.isDefined = isDefined;
exports.isInteractive = isInteractive;
exports.isPwa = isPwa;
exports.isoDate = isoDate;
exports.mapRange = mapRange;
exports.navigateApp = navigateApp;
exports.omit = omit;
exports.pick = pick;
exports.resolveAppUrl = resolveAppUrl;
exports.rgbToHex = rgbToHex;
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
exports.useMediaQuery = useMediaQuery2;
exports.usePagination = usePagination;
exports.usePrevious = usePrevious;
exports.useSnackbar = useSnackbar;
exports.useTableQuery = useTableQuery;
exports.useTheme = useTheme3;
exports.useThemeMode = useThemeMode;
exports.useToggle = useToggle;
exports.useWebGlSupport = useWebGlSupport;
exports.validateImageFile = validateImageFile;
exports.validateVideoFile = validateVideoFile;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map