'use strict';

var react = require('react');
var Button = require('@mui/material/Button');
var Dialog = require('@mui/material/Dialog');
var Popover = require('@mui/material/Popover');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogContentText = require('@mui/material/DialogContentText');
var DialogTitle = require('@mui/material/DialogTitle');
var Box = require('@mui/material/Box');
var IconButton = require('@mui/material/IconButton');
var CloseIcon = require('@mui/icons-material/Close');
var reactI18next = require('react-i18next');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');
var styles = require('@mui/material/styles');
var useMediaQuery = require('@mui/material/useMediaQuery');
var toast = require('@base-ui/react/toast');
var CloseRoundedIcon = require('@mui/icons-material/CloseRounded');
var CheckCircleRoundedIcon = require('@mui/icons-material/CheckCircleRounded');
var ErrorRoundedIcon = require('@mui/icons-material/ErrorRounded');
var InfoRoundedIcon = require('@mui/icons-material/InfoRounded');
var WarningAmberRoundedIcon = require('@mui/icons-material/WarningAmberRounded');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Button__default = /*#__PURE__*/_interopDefault(Button);
var Dialog__default = /*#__PURE__*/_interopDefault(Dialog);
var Popover__default = /*#__PURE__*/_interopDefault(Popover);
var DialogActions__default = /*#__PURE__*/_interopDefault(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefault(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefault(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefault(DialogTitle);
var Box__default = /*#__PURE__*/_interopDefault(Box);
var IconButton__default = /*#__PURE__*/_interopDefault(IconButton);
var CloseIcon__default = /*#__PURE__*/_interopDefault(CloseIcon);
var useMediaQuery__default = /*#__PURE__*/_interopDefault(useMediaQuery);
var CloseRoundedIcon__default = /*#__PURE__*/_interopDefault(CloseRoundedIcon);
var CheckCircleRoundedIcon__default = /*#__PURE__*/_interopDefault(CheckCircleRoundedIcon);
var ErrorRoundedIcon__default = /*#__PURE__*/_interopDefault(ErrorRoundedIcon);
var InfoRoundedIcon__default = /*#__PURE__*/_interopDefault(InfoRoundedIcon);
var WarningAmberRoundedIcon__default = /*#__PURE__*/_interopDefault(WarningAmberRoundedIcon);

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
  const content = /* @__PURE__ */ jsxRuntime.jsxs(Box__default.default, { sx: { width: "100%", maxWidth: "380px" }, children: [
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
            IconButton__default.default,
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
              children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon__default.default, { sx: { fontSize: 16 } })
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
        Button__default.default,
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
        Button__default.default,
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

// src/constants/app.ts
var DATE_FORMATS = {
  DATE: { year: "numeric", month: "short", day: "numeric" },
  DATE_TIME: { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" },
  MONTH_YEAR: { year: "numeric", month: "short" }
};
var DEBOUNCE_MS = 300;
var DEFAULT_PAGE_SIZE = 15;
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
var ToastViewport = styles.styled(toast.Toast.Viewport)(({ theme }) => ({
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
var ToastContent = styles.styled(toast.Toast.Content)(({ theme }) => ({
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
var ToastTitle = styles.styled(toast.Toast.Title)({
  margin: 0,
  color: "#f7faf9",
  fontSize: 14,
  fontWeight: 750,
  lineHeight: 1.35,
  letterSpacing: "-0.01em"
});
var ToastDescription = styles.styled(toast.Toast.Description)({
  display: "-webkit-box",
  overflow: "hidden",
  marginTop: 2,
  color: "#99a6a2",
  fontSize: 12.5,
  lineHeight: 1.45,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3
});
var ToastClose = styles.styled(toast.Toast.Close)({
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
  const { toasts, close } = toast.Toast.useToastManager();
  const reduceMotion = framerMotion.useReducedMotion();
  return /* @__PURE__ */ jsxRuntime.jsx(toast.Toast.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(ToastViewport, { children: /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { initial: false, mode: "popLayout", children: toasts.map((toast$1) => {
    const severity = getSeverity(toast$1.type);
    const Icon = TOAST_ICONS[severity];
    return /* @__PURE__ */ jsxRuntime.jsx(
      toast.Toast.Root,
      {
        toast: toast$1,
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
              if (info.offset.x > 72 || info.velocity.x > 520) close(toast$1.id);
            }
          }
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs(ToastContent, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(ToastIcon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { fontSize: "small" }) }),
          /* @__PURE__ */ jsxRuntime.jsxs(ToastText, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(ToastTitle, {}),
            /* @__PURE__ */ jsxRuntime.jsx(ToastDescription, {})
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ToastClose, { "aria-label": "Dismiss notification", children: /* @__PURE__ */ jsxRuntime.jsx(CloseRoundedIcon__default.default, { fontSize: "small" }) })
        ] })
      },
      toast$1.id
    );
  }) }) }) });
};
var SnackbarContext = react.createContext(null);
var SEVERITY_TITLES = {
  success: "Success",
  error: "Something went wrong",
  warning: "Attention needed",
  info: "Notice"
};
var SnackbarBridge = ({ children }) => {
  const { t } = reactI18next.useTranslation();
  const toastManager = toast.Toast.useToastManager();
  const show = react.useCallback(
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
  const value = react.useMemo(
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
var SnackbarProvider = ({ children }) => /* @__PURE__ */ jsxRuntime.jsx(toast.Toast.Provider, { limit: 5, timeout: SNACKBAR_AUTOHIDE_MS, children: /* @__PURE__ */ jsxRuntime.jsx(SnackbarBridge, { children }) });
var useSnackbar = () => {
  const ctx = react.useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
};
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

exports.ConfirmProvider = ConfirmProvider;
exports.DateRangePreset = DateRangePreset;
exports.SnackbarProvider = SnackbarProvider;
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
exports.useToggle = useToggle;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map