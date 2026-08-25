'use strict';

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

// src/types/entities.ts
var Status = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED"
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

exports.DATE_FORMATS = DATE_FORMATS;
exports.DEBOUNCE_MS = DEBOUNCE_MS;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.DEFAULT_PAGE_SIZE = DEFAULT_PAGE_SIZE;
exports.EMAIL_REGEX = EMAIL_REGEX;
exports.PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;
exports.PASSWORD_REGEX = PASSWORD_REGEX;
exports.PHONE_REGEX = PHONE_REGEX;
exports.SHARED_ROUTES = SHARED_ROUTES;
exports.SNACKBAR_AUTOHIDE_MS = SNACKBAR_AUTOHIDE_MS;
exports.STATUS_COLORS = STATUS_COLORS;
exports.STORAGE_KEYS = STORAGE_KEYS;
exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map