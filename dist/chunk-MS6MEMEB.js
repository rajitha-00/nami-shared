import { ConfirmDialog } from './chunk-2AA7TM6P.js';
import { DEBOUNCE_MS, DEFAULT_PAGE_SIZE, SNACKBAR_AUTOHIDE_MS } from './chunk-PGMOSXPC.js';
import { safeJsonParse } from './chunk-FOGQ5DCD.js';
import { createContext, useState, useCallback, useRef, useContext, useEffect, useMemo } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Toast } from '@base-ui/react/toast';
import { useTranslation } from 'react-i18next';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { styled } from '@mui/material/styles';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

function useDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(void 0);
  const open = useCallback((next) => {
    setData(next);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return { isOpen, data, open, close, toggle };
}
var ConfirmContext = createContext(null);
function ConfirmProvider({ children }) {
  const [options, setOptions] = useState(null);
  const resolverRef = useRef(null);
  const confirm = useCallback((next) => {
    setOptions(next);
    return new Promise((resolve) => {
      resolverRef.current = resolve;
    });
  }, []);
  const settle = useCallback((confirmed) => {
    resolverRef.current?.(confirmed);
    resolverRef.current = null;
    setOptions(null);
  }, []);
  return /* @__PURE__ */ jsxs(ConfirmContext.Provider, { value: confirm, children: [
    children,
    /* @__PURE__ */ jsx(
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
  const ctx = useContext(ConfirmContext);
  if (!ctx) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return ctx;
}
function useDebounce(value, delay = DEBOUNCE_MS) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
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
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  const timerRef = useRef(void 0);
  useEffect(
    () => () => {
      window.clearTimeout(timerRef.current);
    },
    []
  );
  return useMemo(
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
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSizeState] = useState(initialPageSize);
  const setPageSize = useCallback((next) => {
    setPageSizeState(next);
    setPage(1);
  }, []);
  const reset = useCallback(() => {
    setPage(initialPage);
    setPageSizeState(initialPageSize);
  }, [initialPage, initialPageSize]);
  return { page, pageSize, setPage, setPageSize, reset, offset: (page - 1) * pageSize };
}
function useTableQuery(defaults) {
  const defaultFilters = useMemo(() => defaults?.filters ?? {}, [defaults?.filters]);
  const [page, setPage] = useState(defaults?.initial?.page ?? 1);
  const [pageSize, setPageSizeState] = useState(defaults?.pageSize ?? DEFAULT_PAGE_SIZE);
  const [search, setSearchState] = useState(defaults?.initial?.search ?? "");
  const [sortBy, setSortBy] = useState(defaults?.sortBy);
  const [sortDir, setSortDir] = useState(defaults?.sortDir ?? "asc");
  const [filters, setFilters] = useState(defaultFilters);
  const debouncedSearch = useDebounce(search);
  const setSearch = useCallback((next) => {
    setSearchState(next);
    setPage(1);
  }, []);
  const setPageSize = useCallback((next) => {
    setPageSizeState(next);
    setPage(1);
  }, []);
  const onSortChange = useCallback((key) => {
    setSortBy((prevKey) => {
      setSortDir((prevDir) => prevKey === key && prevDir === "asc" ? "desc" : "asc");
      return key;
    });
  }, []);
  const setFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }, []);
  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
    setSearchState("");
    setPage(1);
  }, [defaultFilters]);
  const reset = useCallback(() => {
    setPage(1);
    setSearchState("");
    setSortBy(defaults?.sortBy);
    setSortDir(defaults?.sortDir ?? "asc");
    setFilters(defaultFilters);
  }, [defaultFilters, defaults?.sortBy, defaults?.sortDir]);
  const params = useMemo(() => {
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
    debouncedSearch,
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
function useLocalStorage(key, initial) {
  const [value, setValueState] = useState(() => {
    if (typeof window === "undefined") return initial;
    const raw = window.localStorage.getItem(key);
    if (raw === null) return initial;
    return safeJsonParse(raw) ?? initial;
  });
  const setValue = useCallback(
    (next) => {
      setValueState((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        window.localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key]
  );
  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);
  return { value, setValue, remove };
}
function useBoolean(initial = false) {
  const [value, setValue] = useState(initial);
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return { value, setTrue, setFalse, toggle, setValue };
}
function useToggle(initial = false) {
  const { value, toggle, setValue } = useBoolean(initial);
  return { value, toggle, setValue };
}
function usePrevious(value) {
  const ref = useRef(void 0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
function useIsMounted() {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return useCallback(() => mountedRef.current, []);
}
var TOAST_COLORS = {
  success: { accent: "#84f7c5", accentSoft: "rgba(132, 247, 197, 0.13)" },
  error: { accent: "#ff8f9d", accentSoft: "rgba(255, 143, 157, 0.13)" },
  warning: { accent: "#ffd479", accentSoft: "rgba(255, 212, 121, 0.13)" },
  info: { accent: "#8fc7ff", accentSoft: "rgba(143, 199, 255, 0.13)" }
};
var TOAST_ICONS = {
  success: CheckCircleRoundedIcon,
  error: ErrorRoundedIcon,
  warning: WarningAmberRoundedIcon,
  info: InfoRoundedIcon
};
var ToastViewport = styled(Toast.Viewport)(({ theme }) => ({
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
var ToastSurface = styled(motion.div, {
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
var ToastContent = styled(Toast.Content)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "36px minmax(0, 1fr) 32px",
  alignItems: "center",
  gap: theme.spacing(1.25),
  minHeight: 68,
  padding: theme.spacing(1.25, 1.25, 1.25, 1.5)
}));
var ToastIcon = styled("span")({
  display: "grid",
  width: 36,
  height: 36,
  placeItems: "center",
  borderRadius: 10,
  background: "var(--toast-accent-soft)",
  color: "var(--toast-accent)"
});
var ToastText = styled("div")({
  minWidth: 0
});
var ToastTitle = styled(Toast.Title)({
  margin: 0,
  color: "#f7faf9",
  fontSize: 14,
  fontWeight: 750,
  lineHeight: 1.35,
  letterSpacing: "-0.01em"
});
var ToastDescription = styled(Toast.Description)({
  display: "-webkit-box",
  overflow: "hidden",
  marginTop: 2,
  color: "#99a6a2",
  fontSize: 12.5,
  lineHeight: 1.45,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3
});
var ToastClose = styled(Toast.Close)({
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
  const { toasts, close } = Toast.useToastManager();
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsx(Toast.Portal, { children: /* @__PURE__ */ jsx(ToastViewport, { children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "popLayout", children: toasts.map((toast) => {
    const severity = getSeverity(toast.type);
    const Icon = TOAST_ICONS[severity];
    return /* @__PURE__ */ jsx(
      Toast.Root,
      {
        toast,
        swipeDirection: "right",
        render: /* @__PURE__ */ jsx(
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
        children: /* @__PURE__ */ jsxs(ToastContent, { children: [
          /* @__PURE__ */ jsx(ToastIcon, { "aria-hidden": "true", children: /* @__PURE__ */ jsx(Icon, { fontSize: "small" }) }),
          /* @__PURE__ */ jsxs(ToastText, { children: [
            /* @__PURE__ */ jsx(ToastTitle, {}),
            /* @__PURE__ */ jsx(ToastDescription, {})
          ] }),
          /* @__PURE__ */ jsx(ToastClose, { "aria-label": "Dismiss notification", children: /* @__PURE__ */ jsx(CloseRoundedIcon, { fontSize: "small" }) })
        ] })
      },
      toast.id
    );
  }) }) }) });
};
var SnackbarContext = createContext(null);
var SEVERITY_TITLES = {
  success: "Success",
  error: "Something went wrong",
  warning: "Attention needed",
  info: "Notice"
};
var SnackbarBridge = ({ children }) => {
  const { t } = useTranslation();
  const toastManager = Toast.useToastManager();
  const show = useCallback(
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
  const value = useMemo(
    () => ({
      showSuccess: show("success"),
      showError: show("error"),
      showInfo: show("info"),
      showWarning: show("warning")
    }),
    [show]
  );
  return /* @__PURE__ */ jsxs(SnackbarContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx(MotionToastViewport, {})
  ] });
};
var SnackbarProvider = ({ children }) => /* @__PURE__ */ jsx(Toast.Provider, { limit: 5, timeout: SNACKBAR_AUTOHIDE_MS, children: /* @__PURE__ */ jsx(SnackbarBridge, { children }) });
var useSnackbar = () => {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
};

export { ConfirmProvider, SnackbarProvider, useBoolean, useConfirm, useDebounce, useDebouncedCallback, useDialog, useIsMounted, useLocalStorage, usePagination, usePrevious, useSnackbar, useTableQuery, useToggle };
//# sourceMappingURL=chunk-MS6MEMEB.js.map
//# sourceMappingURL=chunk-MS6MEMEB.js.map