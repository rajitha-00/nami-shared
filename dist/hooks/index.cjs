'use strict';

var react = require('react');
var Button = require('@mui/material/Button');
var Dialog = require('@mui/material/Dialog');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogContentText = require('@mui/material/DialogContentText');
var DialogTitle = require('@mui/material/DialogTitle');
var reactI18next = require('react-i18next');
var jsxRuntime = require('react/jsx-runtime');
var styles = require('@mui/material/styles');
var useMediaQuery = require('@mui/material/useMediaQuery');
var Alert = require('@mui/material/Alert');
var Snackbar = require('@mui/material/Snackbar');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Button__default = /*#__PURE__*/_interopDefault(Button);
var Dialog__default = /*#__PURE__*/_interopDefault(Dialog);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefault(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var useMediaQuery__default = /*#__PURE__*/_interopDefault(useMediaQuery);
var Alert__default = /*#__PURE__*/_interopDefault(Alert);
var Snackbar__default = /*#__PURE__*/_interopDefault(Snackbar);

// src/hooks/useDialog.ts
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
var VARIANT_COLOR = {
  danger: "error",
  warning: "warning",
  info: "primary"
};
function ConfirmDialog({
  open,
  titleKey,
  messageKey,
  messageParams,
  variant = "info",
  confirmKey = "common:actions.confirm",
  cancelKey = "common:actions.cancel",
  onConfirm,
  onCancel
}) {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(Dialog__default.default, { open, onClose: onCancel, maxWidth: "xs", fullWidth: true, sx: { zIndex: (theme) => theme.zIndex.modal + 200 }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogTitle__default.default, { children: t(titleKey) }),
    /* @__PURE__ */ jsxRuntime.jsx(DialogContent__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(DialogContentText__default.default, { children: t(messageKey, messageParams) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogActions__default.default, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Button__default.default, { onClick: onCancel, color: "inherit", children: t(cancelKey) }),
      /* @__PURE__ */ jsxRuntime.jsx(Button__default.default, { onClick: onConfirm, variant: "contained", color: VARIANT_COLOR[variant], autoFocus: true, children: t(confirmKey) })
    ] })
  ] });
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

// src/constants/app.ts
var DATE_FORMATS = {
  DATE: { year: "numeric", month: "short", day: "numeric" },
  DATE_TIME: { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" },
  MONTH_YEAR: { year: "numeric", month: "short" }
};
var DEBOUNCE_MS = 300;
var DEFAULT_PAGE_SIZE = 10;
var SNACKBAR_AUTOHIDE_MS = 4e3;

// src/hooks/useDebounce.ts
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
  const [sortBy, setSortBy] = react.useState(defaults?.sortBy);
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
      sortBy,
      sortDir: sortBy ? sortDir : void 0,
      filters: Object.keys(activeFilters).length > 0 ? activeFilters : void 0
    };
  }, [page, pageSize, debouncedSearch, sortBy, sortDir, filters]);
  return {
    params,
    page,
    pageSize,
    setPage,
    setPageSize,
    search,
    setSearch,
    sortBy,
    sortDir,
    onSortChange,
    filters,
    setFilter,
    clearFilters,
    reset
  };
}

// src/utils/object.ts
function safeJsonParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return void 0;
  }
}

// src/hooks/useLocalStorage.ts
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
  const { i18n } = reactI18next.useTranslation();
  const locale = i18n.language;
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

// src/hooks/useDateRange.ts
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

exports.ConfirmProvider = ConfirmProvider;
exports.DateRangePreset = DateRangePreset;
exports.SnackbarProvider = SnackbarProvider;
exports.useBoolean = useBoolean;
exports.useConfirm = useConfirm;
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
exports.useToggle = useToggle;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map