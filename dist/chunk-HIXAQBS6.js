import { ConfirmDialog } from './chunk-2AA7TM6P.js';
import { DEBOUNCE_MS, DEFAULT_PAGE_SIZE, SNACKBAR_AUTOHIDE_MS } from './chunk-PGMOSXPC.js';
import { safeJsonParse } from './chunk-FOGQ5DCD.js';
import { createContext, useState, useCallback, useRef, useContext, useEffect, useMemo } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';

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
var SnackbarContext = createContext(null);
function SnackbarProvider({ children }) {
  const [current, setCurrent] = useState(null);
  const { t } = useTranslation();
  const show = useCallback(
    (severity) => (message, params) => {
      setCurrent({ key: Date.now(), severity, message, params });
    },
    []
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
  const handleClose = useCallback((_event, reason) => {
    if (reason === "clickaway") return;
    setCurrent(null);
  }, []);
  return /* @__PURE__ */ jsxs(SnackbarContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx(
      Snackbar,
      {
        open: current !== null,
        autoHideDuration: SNACKBAR_AUTOHIDE_MS,
        onClose: handleClose,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: current ? /* @__PURE__ */ jsx(Alert, { severity: current.severity, variant: "filled", onClose: handleClose, children: t(current.message, current.params) }) : void 0
      },
      current?.key
    )
  ] });
}
function useSnackbar() {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
}

export { ConfirmProvider, SnackbarProvider, useBoolean, useConfirm, useDebounce, useDebouncedCallback, useDialog, useIsMounted, useLocalStorage, usePagination, usePrevious, useSnackbar, useTableQuery, useToggle };
//# sourceMappingURL=chunk-HIXAQBS6.js.map
//# sourceMappingURL=chunk-HIXAQBS6.js.map