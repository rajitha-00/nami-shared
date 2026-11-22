import { ConfirmDialog } from './chunk-ETBGGCC7.js';
import { safeJsonParse } from './chunk-FOGQ5DCD.js';
import { DEBOUNCE_MS, DEFAULT_PAGE_SIZE, SNACKBAR_AUTOHIDE_MS } from './chunk-PGMOSXPC.js';
import { __export, __publicField } from './chunk-UVKRO5ER.js';
import * as React18 from 'react';
import { createContext, createElement, useState, useCallback, useRef, useContext, useEffect, useMemo, useLayoutEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import * as ReactDOM3 from 'react-dom';
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
function usePagination(initial2) {
  const initialPage = initial2?.page ?? 1;
  const initialPageSize = initial2?.pageSize ?? DEFAULT_PAGE_SIZE;
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
function useLocalStorage(key, initial2) {
  const [value, setValueState] = useState(() => {
    if (typeof window === "undefined") return initial2;
    const raw = window.localStorage.getItem(key);
    if (raw === null) return initial2;
    return safeJsonParse(raw) ?? initial2;
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
function useBoolean(initial2 = false) {
  const [value, setValue] = useState(initial2);
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
function useToggle(initial2 = false) {
  const { value, toggle, setValue } = useBoolean(initial2);
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/index.parts.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/empty.mjs
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/useOnMount.mjs
function useOnMount(fn) {
  React18.useEffect(fn, EMPTY_ARRAY);
}
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React18.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React18.useLayoutEffect : noop;

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/formatErrorMessage.mjs
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
var ToastContext = /* @__PURE__ */ React18.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToastContext.displayName = "ToastContext";
function useToastProviderContext() {
  const context = React18.useContext(ToastContext);
  if (!context) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: useToastManager must be used within <Toast.Provider>." : formatErrorMessage_default(73));
  }
  return context;
}
var majorVersion = parseInt(React18.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/store/useStore.mjs
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React18.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return useSyncExternalStore(store.subscribe, getSelection, getSelection);
}
function useStoreFast(store, selector, a1, a2, a3) {
  {
    return useStoreR19(store, selector, a1, a2, a3);
  }
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/store/Store.mjs
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
  ...React18
};

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/useStableCallback.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/store/ReactStore.mjs
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
    React18.useDebugValue(key);
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
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart) {
    const store = this;
    if (process.env.NODE_ENV !== "production") {
      React18.useDebugValue(statePart, (p) => Object.keys(p));
      const keys = React18.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (keys.length !== nextKeys.length || keys.some((key, index2) => key !== nextKeys[index2])) {
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
    React18.useDebugValue(key);
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
        console.error(`A component is changing the ${isControlled ? "" : "un"}controlled state of ${key.toString()} to be ${isControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
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
    React18.useDebugValue(key);
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
    React18.useDebugValue(key);
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
    const ref = React18.useRef(void 0);
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

// node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/mergeCleanups.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/owner.mjs
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/addEventListener.mjs
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/useAnimationFrame.mjs
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
    const index2 = id - this.startId;
    if (index2 < 0 || index2 >= this.callbacks.length) {
      return;
    }
    this.callbacks[index2] = null;
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/useTimeout.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/generateId.mjs
var counter = 0;
function generateId(prefix) {
  counter += 1;
  return `${prefix}-${Math.random().toString(36).slice(2, 6)}-${counter}`;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/utils/resolvePromiseOptions.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/parts.mjs
var parts_exports = {};
__export(parts_exports, {
  engine: () => engine_exports,
  env: () => env_exports,
  os: () => os_exports,
  screenReader: () => screen_reader_exports
});

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/os.mjs
var os_exports = {};
__export(os_exports, {
  android: () => android,
  apple: () => apple,
  ios: () => ios,
  linux: () => linux,
  mac: () => mac,
  windows: () => windows
});

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/shared.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/os.mjs
var ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
var ANDROID_STRING = "android";
var android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
var mac = !ios && lowerPlatform.startsWith("mac");
var windows = lowerPlatform.startsWith("win");
var linux = !android && /^(linux|chrome os)/.test(lowerPlatform);
var apple = mac || ios;

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/engine.mjs
var engine_exports = {};
__export(engine_exports, {
  blink: () => blink,
  gecko: () => gecko,
  webkit: () => webkit
});
var webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
var gecko = !webkit && lowerUserAgent.includes("firefox");
var blink = !webkit && lowerUserAgent.includes("chrom");

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/screen-reader.mjs
var screen_reader_exports = {};
__export(screen_reader_exports, {
  voiceOver: () => voiceOver
});
var voiceOver = apple;

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/platform/env.mjs
var env_exports = {};
__export(env_exports, {
  jsdom: () => jsdom
});
var jsdom = /jsdom|happydom/.test(lowerUserAgent);

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/shadowDom.mjs
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
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}

// node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
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
function clamp(start, value, end) {
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
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
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
  const index2 = list.indexOf(active);
  const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/store.mjs
function createToastMetadata(toasts) {
  const metadata = /* @__PURE__ */ new Map();
  let visibleIndex = 0;
  let offsetY = 0;
  toasts.forEach((toast, toastIndex) => {
    const isEnding = toast.transitionStatus === "ending";
    metadata.set(toast.id, {
      value: toast,
      domIndex: toastIndex,
      visibleIndex: isEnding ? -1 : visibleIndex,
      offsetY
    });
    offsetY += toast.height || 0;
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
      this.updateToastInternal(id, updates, false, true);
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
    const index2 = selectors.toastIndex(this.state, toastId);
    if (index2 === -1) {
      return;
    }
    const toast = this.state.toasts[index2];
    if (!skipOnRemove) {
      toast?.onRemove?.();
    }
    const newToasts = [...this.state.toasts];
    newToasts.splice(index2, 1);
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
      for (let index2 = from; index2 >= 0 && index2 < toasts.length; index2 += step) {
        if (toasts[index2].transitionStatus !== "ending") {
          return toasts[index2];
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
  React18.useEffect(function subscribeToToastManager() {
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
        store.updateToast(id, options);
      } else if (action === "close") {
        store.closeToast(id);
      } else {
        store.addToast(options);
      }
    });
    return unsubscribe;
  }, [store, toastManager]);
  return /* @__PURE__ */ jsxs(ToastContext.Provider, {
    value: store,
    children: [/* @__PURE__ */ jsx(ToastProviderPropsSynchronizer, {
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/visuallyHidden.mjs
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
  top: 0,
  left: 0
};
var FocusGuard = /* @__PURE__ */ React18.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React18.useState();
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
  return /* @__PURE__ */ jsx("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (process.env.NODE_ENV !== "production") FocusGuard.displayName = "FocusGuard";

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/useMergedRefs.mjs
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
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index2) => ref !== newRefs[index2]);
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
  if (!/* @__PURE__ */ React18.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/mergeObjects.mjs
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/warn.mjs
var set;
if (process.env.NODE_ENV !== "production") {
  set = /* @__PURE__ */ new Set();
}
function warn(...messages) {
  if (process.env.NODE_ENV !== "production") {
    const messageKey = messages.join(" ");
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.warn(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/resolveClassName.mjs
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/resolveStyle.mjs
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/merge-props/mergeProps.mjs
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
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
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
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
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
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
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
    let newElement = render;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = React18.Children.toArray(render);
      newElement = children[0];
    }
    if (process.env.NODE_ENV !== "production") {
      if (!/* @__PURE__ */ React18.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React18.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
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
    return /* @__PURE__ */ createElement("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ createElement("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React18.createElement(Tag, props);
}
var ToastViewport = /* @__PURE__ */ React18.forwardRef(function ToastViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = useToastProviderContext();
  const windowFocusTimeout = useTimeout();
  const handlingFocusGuardRef = React18.useRef(false);
  const markedReadyForMouseLeaveRef = React18.useRef(false);
  const touchActiveRef = React18.useRef(false);
  const isEmpty = store.useState("isEmpty");
  const toasts = store.useState("toasts");
  const focused = store.useState("focused");
  const expanded = store.useState("expanded");
  const prevFocusElement = store.useState("prevFocusElement");
  const frontmostHeight = toasts[0]?.height;
  const hasTransitioningToasts = toasts.some((toast) => toast.transitionStatus === "ending");
  const highPriorityToasts = toasts.filter((toast) => toast.priority === "high");
  React18.useEffect(() => {
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
    if (store.state.isWindowFocused) {
      store.resumeTimers();
    }
    store.set("hovering", false);
    markedReadyForMouseLeaveRef.current = false;
  }
  React18.useEffect(flushMouseLeave, [hasTransitioningToasts, store]);
  function handleMouseEnter() {
    store.pauseTimers();
    store.set("hovering", true);
    markedReadyForMouseLeaveRef.current = false;
  }
  function resumeTimersIfWindowFocused() {
    if (store.state.isWindowFocused) {
      store.resumeTimers();
    }
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
    resumeTimersIfWindowFocused();
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
      ["--toast-frontmost-height"]: frontmostHeight ? `${frontmostHeight}px` : void 0
    }
  };
  const state = {
    expanded
  };
  const focusGuard = !isEmpty && prevFocusElement && /* @__PURE__ */ jsx(FocusGuard, {
    onFocus: handleFocusGuard
  });
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.setViewport],
    state,
    props: [defaultProps, elementProps, {
      children: /* @__PURE__ */ jsxs(React18.Fragment, {
        children: [focusGuard, children, focusGuard]
      })
    }]
  });
  return /* @__PURE__ */ jsxs(React18.Fragment, {
    children: [focusGuard, element, !focused && highPriorityToasts.length > 0 && /* @__PURE__ */ jsx("div", {
      style: visuallyHidden,
      children: highPriorityToasts.map((toast) => /* @__PURE__ */ jsxs("div", {
        role: "alert",
        "aria-atomic": true,
        children: [/* @__PURE__ */ jsx("div", {
          children: toast.title
        }), /* @__PURE__ */ jsx("div", {
          children: toast.description
        })]
      }, toast.id))
    })]
  });
});
if (process.env.NODE_ENV !== "production") ToastViewport.displayName = "ToastViewport";

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}
var ToastRootContext = /* @__PURE__ */ React18.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToastRootContext.displayName = "ToastRootContext";
function useToastRootContext() {
  const context = React18.useContext(ToastRootContext);
  if (!context) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>." : formatErrorMessage_default(66));
  }
  return context;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
var STARTING_HOOK = {
  "data-starting-style": ""
};
var ENDING_HOOK = {
  "data-ending-style": ""
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/resolveRef.mjs
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      ReactDOM3.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }, () => {
        if (signal?.aborted) {
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
          return;
        }
        done();
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = "data-starting-style";
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open);
  React18.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/constants.mjs
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
function getElementTransform(element) {
  const computedStyle = getWindow(element).getComputedStyle(element);
  const transform = computedStyle.transform;
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
var toastRootStateAttributesMapping = {
  ...transitionStatusMapping,
  swipeDirection(value) {
    return value ? {
      "data-swipe-direction": value
    } : null;
  }
};
var SWIPE_THRESHOLD = 40;
var REVERSE_CANCEL_THRESHOLD = 10;
var OPPOSITE_DIRECTION_DAMPING_FACTOR = 0.5;
var MIN_DRAG_THRESHOLD = 1;
var TOAST_SWIPE_IGNORE_SELECTOR = `${BASE_UI_SWIPE_IGNORE_SELECTOR},${LEGACY_SWIPE_IGNORE_SELECTOR}`;
var ToastRoot = /* @__PURE__ */ React18.forwardRef(function ToastRoot2(componentProps, forwardedRef) {
  const {
    toast,
    render,
    className,
    swipeDirection = ["down", "right"],
    style,
    ...elementProps
  } = componentProps;
  const isAnchored = toast.positionerProps?.anchor !== void 0;
  let swipeDirections = [];
  if (!isAnchored) {
    swipeDirections = Array.isArray(swipeDirection) ? swipeDirection : [swipeDirection];
  }
  const swipeEnabled = swipeDirections.length > 0;
  const store = useToastProviderContext();
  const [currentSwipeDirection, setCurrentSwipeDirection] = React18.useState(void 0);
  const [isSwiping, setIsSwiping] = React18.useState(false);
  const [isRealSwipe, setIsRealSwipe] = React18.useState(false);
  const [dragOffset, setDragOffset] = React18.useState({
    x: 0,
    y: 0
  });
  const [initialTransform, setInitialTransform] = React18.useState({
    x: 0,
    y: 0,
    scale: 1
  });
  const [titleId, setTitleId] = React18.useState();
  const [descriptionId, setDescriptionId] = React18.useState();
  const [lockedDirection, setLockedDirection] = React18.useState(null);
  const rootRef = React18.useRef(null);
  const lastToastIdRef = React18.useRef(void 0);
  const dragStartPosRef = React18.useRef({
    x: 0,
    y: 0
  });
  const initialTransformRef = React18.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const intendedSwipeDirectionRef = React18.useRef(void 0);
  const maxSwipeDisplacementRef = React18.useRef(0);
  const cancelledSwipeRef = React18.useRef(false);
  const swipeCancelBaselineRef = React18.useRef({
    x: 0,
    y: 0
  });
  const isFirstPointerMoveRef = React18.useRef(false);
  const dragOffsetRef = React18.useRef({
    x: 0,
    y: 0
  });
  const activePointerIdRef = React18.useRef(null);
  const dragAbortControllerRef = React18.useRef(null);
  const domIndex = store.useState("toastIndex", toast.id);
  const visibleIndex = store.useState("toastVisibleIndex", toast.id);
  const offsetY = store.useState("toastOffsetY", toast.id);
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
    const height = element2.offsetHeight;
    element2.style.height = previousHeight;
    function update2() {
      store.updateToastInternal(toast.id, {
        ref: rootRef,
        height,
        transitionStatus: void 0
      });
    }
    if (flushSync4) {
      ReactDOM3.flushSync(update2);
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
    const isInteractiveElement = target?.closest(`button,a,input,textarea,[role="button"],${TOAST_SWIPE_IGNORE_SELECTOR}`);
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
  React18.useEffect(() => {
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
      ["--toast-swipe-movement-x"]: `${deltaX}px`,
      ["--toast-swipe-movement-y"]: `${deltaY}px`
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
      ["--toast-index"]: toast.transitionStatus === "ending" ? domIndex : visibleIndex,
      ["--toast-offset-y"]: `${offsetY}px`,
      ["--toast-height"]: toast.height ? `${toast.height}px` : void 0
    }
  };
  const toastRoot = React18.useMemo(() => ({
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
  return /* @__PURE__ */ jsx(ToastRootContext.Provider, {
    value: toastRoot,
    children: element
  });
});
if (process.env.NODE_ENV !== "production") ToastRoot.displayName = "ToastRoot";
var ToastContent = /* @__PURE__ */ React18.forwardRef(function ToastContent2(componentProps, forwardedRef) {
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
  const contentRef = React18.useRef(null);
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
  const [defaultId, setDefaultId] = React18.useState(idOverride);
  const id = idOverride || defaultId;
  React18.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
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
  return /* @__PURE__ */ React18.isValidElement(element) && isRenderableNode(element.props.children);
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/utils/useToastLabelPart.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/description/ToastDescription.mjs
var ToastDescription = /* @__PURE__ */ React18.forwardRef(function ToastDescription2(componentProps, forwardedRef) {
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
var ToastTitle = /* @__PURE__ */ React18.forwardRef(function ToastTitle2(componentProps, forwardedRef) {
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

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/error.mjs
var set2;
if (process.env.NODE_ENV !== "production") {
  set2 = /* @__PURE__ */ new Set();
}
function error(...messages) {
  if (process.env.NODE_ENV !== "production") {
    const messageKey = messages.join(" ");
    if (!set2.has(messageKey)) {
      set2.add(messageKey);
      console.error(`Base UI: ${messageKey}`);
    }
  }
}
var CompositeRootContext = /* @__PURE__ */ React18.createContext(void 0);
if (process.env.NODE_ENV !== "production") CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React18.useContext(CompositeRootContext);
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
  const props = React18.useMemo(() => {
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
function dispatchClickWithModifiers(target, sourceEvent, {
  detail = 0
} = {}) {
  target.dispatchEvent(new (getWindow(target)).PointerEvent("click", {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail,
    shiftKey: sourceEvent.shiftKey,
    ctrlKey: sourceEvent.ctrlKey,
    altKey: sourceEvent.altKey,
    metaKey: sourceEvent.metaKey
  }));
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
  const {
    disabled: disabled2 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React18.useRef(null);
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
    React18.useEffect(() => {
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
  const updateDisabled = React18.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled2 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled2, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React18.useCallback((externalProps = {}) => {
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/close/ToastClose.mjs
var ToastClose = /* @__PURE__ */ React18.forwardRef(function ToastClose2(componentProps, forwardedRef) {
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
  const [hasFocus, setHasFocus] = React18.useState(false);
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
var ToastAction = /* @__PURE__ */ React18.forwardRef(function ToastAction2(componentProps, forwardedRef) {
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/reason-parts.mjs
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
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var missing = "missing";
var initial = "initial";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
  return `data-base-ui-${name}`;
}
var PortalContext = /* @__PURE__ */ React18.createContext(null);
if (process.env.NODE_ENV !== "production") PortalContext.displayName = "PortalContext";
var usePortalContext = () => React18.useContext(PortalContext);
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
  const [containerElement, setContainerElement] = React18.useState(null);
  const [portalNode, setPortalNode] = React18.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React18.useRef(null);
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
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM3.createPortal(portalElement, containerElement) : null;
  return {
    node: portalNode,
    // `id` and `render` props can override or remove the generated ID. Use the exact
    // rendered value so `aria-owns` never points at an ID absent from the DOM.
    nodeId: /* @__PURE__ */ React18.isValidElement(portalElement) ? portalElement.props.id : void 0,
    subtree: portalSubtree
  };
}
var FloatingPortal = /* @__PURE__ */ React18.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    children,
    container,
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
  const beforeOutsideRef = React18.useRef(null);
  const afterOutsideRef = React18.useRef(null);
  const beforeInsideRef = React18.useRef(null);
  const afterInsideRef = React18.useRef(null);
  const [focusManagerState, setFocusManagerState] = React18.useState(null);
  const focusInsideDisabledRef = React18.useRef(false);
  const modal = focusManagerState?.modal;
  const open = focusManagerState?.open;
  const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  React18.useEffect(() => {
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
    if (!portalNode || open !== true || !focusInsideDisabledRef.current) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = React18.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ jsxs(React18.Fragment, {
    children: [portalSubtree, /* @__PURE__ */ jsxs(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ jsx(FocusGuard, {
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
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ jsx("span", {
        "aria-owns": portalNodeId,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ ReactDOM3.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ jsx(FocusGuard, {
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
var FloatingPortalLite = /* @__PURE__ */ React18.forwardRef(function FloatingPortalLite2(componentProps, forwardedRef) {
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
  return /* @__PURE__ */ jsxs(React18.Fragment, {
    children: [portalSubtree, portalNode && /* @__PURE__ */ ReactDOM3.createPortal(children, portalNode)]
  });
});
if (process.env.NODE_ENV !== "production") FloatingPortalLite.displayName = "FloatingPortalLite";
var ToastPortal = /* @__PURE__ */ React18.forwardRef(function ToastPortal2(props, forwardedRef) {
  return /* @__PURE__ */ jsx(FloatingPortalLite, {
    ref: forwardedRef,
    ...props
  });
});
if (process.env.NODE_ENV !== "production") ToastPortal.displayName = "ToastPortal";

// node_modules/.pnpm/@base-ui+utils@0.3.2_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/utils/useValueAsRef.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
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
var FloatingNodeContext = /* @__PURE__ */ React18.createContext(null);
if (process.env.NODE_ENV !== "production") FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React18.createContext(null);
if (process.env.NODE_ENV !== "production") FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React18.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React18.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};

// node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
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
      const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
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
        height
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
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform3.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
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

// node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
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
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
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
  let height = clientRect.height / scale.y;
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
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
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
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
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
  let height = html.clientHeight;
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
      height = visualViewport.height;
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
    height,
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
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
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
    height
  } = getCssDimensions(element);
  return {
    width,
    height
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
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
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
var index = isClient ? useLayoutEffect : noop2;
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
  const ref = React18.useRef(value);
  index(() => {
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
    open
  } = options;
  const [data, setData] = React18.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React18.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React18.useState(null);
  const [_floating, _setFloating] = React18.useState(null);
  const setReference = React18.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React18.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React18.useRef(null);
  const floatingRef = React18.useRef(null);
  const dataRef = React18.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform3);
  const openRef = useLatestRef(open);
  const update2 = React18.useCallback(() => {
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
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React18.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
      }
      update2();
    }
  }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React18.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React18.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React18.useMemo(() => {
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
  return React18.useMemo(() => ({
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
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
    this.idMap = /* @__PURE__ */ new Map();
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function useFloatingRootContext(options) {
  const {
    open = false,
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
    open,
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
      open,
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
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
function useBaseUIFloating(options) {
  return useFloatingWithStore(options, options.rootContext);
}
function useFloatingWithStore(options, store) {
  const {
    nodeId,
    externalTree
  } = options;
  const referenceElement = store.useState("referenceElement");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const open = store.useState("open");
  const floatingId = store.useState("floatingId");
  const [positionReference, setPositionReferenceRaw] = React18.useState(null);
  const [localDomReference, setLocalDomReference] = React18.useState(void 0);
  const [localFloatingElement, setLocalFloatingElement] = React18.useState(void 0);
  const domReferenceRef = React18.useRef(null);
  const tree = useFloatingTree(externalTree);
  const storeElements = React18.useMemo(() => ({
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
  const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
  const syncedFloatingElement = localFloatingElement === void 0 ? store.state.floatingElement : localFloatingElement;
  store.useSyncedValue("referenceElement", localDomReference ?? null);
  store.useSyncedValue("domReferenceElement", localDomReference === void 0 ? domReferenceElement : localDomReferenceElement);
  store.useSyncedValue("floatingElement", syncedFloatingElement);
  const setPositionReference = React18.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React18.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setLocalDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs, setLocalDomReference]);
  const setFloating = React18.useCallback((node) => {
    setLocalFloatingElement(node);
    position.refs.setFloating(node);
  }, [position.refs]);
  const refs = React18.useMemo(() => ({
    ...position.refs,
    setReference,
    setFloating,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setFloating, setPositionReference]);
  const elements = React18.useMemo(() => ({
    ...position.elements,
    domReference: domReferenceElement
  }), [position.elements, domReferenceElement]);
  const context = React18.useMemo(() => ({
    ...position,
    dataRef: store.context.dataRef,
    open,
    onOpenChange: store.setOpen,
    events: store.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: store
  }), [position, refs, elements, nodeId, store, open, floatingId]);
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
  return React18.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: store
  }), [position, refs, elements, context, store]);
}
var DirectionContext = /* @__PURE__ */ React18.createContext(void 0);
if (process.env.NODE_ENV !== "production") DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React18.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
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
      padding = 0,
      offsetParent = "real"
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
    const arrowOffsetParent = offsetParent === "real" ? await platform3.getOffsetParent?.(element) : elements.floating;
    let clientSize = elements.floating[clientProp] || rects.floating[length];
    if (!clientSize || !await platform3.isElement?.(arrowOffsetParent)) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min2 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min2, center, max2);
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
var arrow4 = (options, deps) => ({
  ...baseArrow(options),
  options: [options, deps]
});

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/hideMiddleware.mjs
var hide4 = {
  name: "hide",
  async fn(state) {
    const {
      width,
      height,
      x,
      y
    } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
    const overflow = await state.platform.detectOverflow(state, {
      elementContext: "reference"
    });
    const referenceHidden = overflow.top - height >= 0 || overflow.right - width >= 0 || overflow.bottom - height >= 0 || overflow.left - width >= 0;
    return {
      data: {
        referenceHidden: referenceHidden || anchorHidden
      }
    };
  }
};

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
var AVAILABLE_WIDTH_VAR = "--available-width";
var AVAILABLE_HEIGHT_VAR = "--available-height";
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
  const [mountSide, setMountSide] = React18.useState(null);
  if (!mounted && mountSide !== null) {
    setMountSide(null);
  }
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
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placement = align === "center" ? side : `${side}-${align}`;
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
  const arrowRef = React18.useRef(null);
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
        height
      } = arrowRef.current.getBoundingClientRect();
      const sideAxis = getSideAxis(getSide(limitData.placement));
      const arrowSize = sideAxis === "y" ? width : height;
      const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
      return {
        offset: arrowSize / 2 + offsetAmount / 2
      };
    })
  }, [commonCollisionProps, sticky, shiftCrossAxis, shiftRootBoundary, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") {
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
      availableWidth,
      availableHeight,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth}px`);
      floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x2,
        y: y2,
        width,
        height
      } = rects.reference;
      const anchorWidth = (Math.round((x2 + width) * dpr) - Math.round(x2 * dpr)) / dpr;
      const anchorHeight = (Math.round((y2 + height) * dpr) - Math.round(y2 * dpr)) / dpr;
      floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
      floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
    }
  }), arrow4((state) => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
    padding: arrowPadding,
    offsetParent: "floating"
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      const {
        elements: elements2,
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        rects,
        y: y2
      } = state;
      const currentRenderedSide = getSide(renderedPlacement2);
      const currentRenderedAxis = getSideAxis(currentRenderedSide);
      const arrowEl = arrowRef.current;
      const arrowX = middlewareData2.arrow?.x || 0;
      const arrowY = middlewareData2.arrow?.y || 0;
      const arrowWidth = arrowEl?.clientWidth || 0;
      const arrowHeight = arrowEl?.clientHeight || 0;
      const transformX = arrowX + arrowWidth / 2;
      const transformY = arrowY + arrowHeight / 2;
      const shiftY = Math.abs(middlewareData2.shift?.y || 0);
      const halfAnchorHeight = rects.reference.height / 2;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      const isOverlappingAnchor = shiftY > sideOffsetValue;
      const adjacentTransformOrigin = {
        top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
        bottom: `${transformX}px ${-sideOffsetValue}px`,
        left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
        right: `${-sideOffsetValue}px ${transformY}px`
      }[currentRenderedSide];
      const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y2}px`;
      elements2.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
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
  const autoUpdateOptions = React18.useMemo(() => ({
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
  const floatingStyles = React18.useMemo(() => {
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
  const registeredPositionReferenceRef = React18.useRef(null);
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
  React18.useEffect(() => {
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
  React18.useEffect(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return autoUpdate(elements.reference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned && renderedSide !== side) {
      setMountSide(renderedSide);
    }
  }, [lazyFlip, mounted, isPositioned, renderedSide, side]);
  const arrowStyles = React18.useMemo(() => ({
    position: "absolute",
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React18.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}
var ToastPositionerContext = /* @__PURE__ */ React18.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToastPositionerContext.displayName = "ToastPositionerContext";
function useToastPositionerContext() {
  const context = React18.useContext(ToastPositionerContext);
  if (context === void 0) {
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ToastPositionerContext is missing. ToastPositioner parts must be placed within <Toast.Positioner>." : formatErrorMessage_default(84));
  }
  return context;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/popupStateMapping.mjs
((function(CommonPopupDataAttributes2) {
  CommonPopupDataAttributes2["open"] = "data-open";
  CommonPopupDataAttributes2["closed"] = "data-closed";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
  CommonPopupDataAttributes2["side"] = "data-side";
  CommonPopupDataAttributes2["align"] = "data-align";
  return CommonPopupDataAttributes2;
}))({});
var POPUP_OPEN_HOOK = {
  "data-open": ""
};
var POPUP_CLOSED_HOOK = {
  "data-closed": ""
};
var ANCHOR_HIDDEN_HOOK = {
  "data-anchor-hidden": ""
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

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/utils/usePositioner.mjs
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
var ToastPositioner = /* @__PURE__ */ React18.forwardRef(function ToastPositioner2(componentProps, forwardedRef) {
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
  const [positionerElement, setPositionerElement] = React18.useState(null);
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
      ["--toast-index"]: toast.transitionStatus === "ending" ? domIndex : visibleIndex
    },
    transitionStatus: toast.transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement]
  });
  return /* @__PURE__ */ jsx(ToastPositionerContext.Provider, {
    value: positioning,
    children: element
  });
});
if (process.env.NODE_ENV !== "production") ToastPositioner.displayName = "ToastPositioner";
var ToastArrow = /* @__PURE__ */ React18.forwardRef(function ToastArrow2(componentProps, forwardedRef) {
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
  return React18.useMemo(() => ({
    toasts,
    add: store.addToast,
    close: store.closeToast,
    update: store.updateToast,
    promise: store.promiseToast
  }), [toasts, store]);
}

// node_modules/.pnpm/@base-ui+react@1.7.0_@types+react@18.3.31_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@base-ui/react/toast/createToastManager.mjs
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
          ...updates,
          id
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
  success: CheckCircleRoundedIcon,
  error: ErrorRoundedIcon,
  warning: WarningAmberRoundedIcon,
  info: InfoRoundedIcon
};
var ToastViewport3 = styled(index_parts_exports.Viewport)(({ theme }) => ({
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
var ToastContent3 = styled(index_parts_exports.Content)(({ theme }) => ({
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
var ToastTitle3 = styled(index_parts_exports.Title)({
  margin: 0,
  color: "#f7faf9",
  fontSize: 14,
  fontWeight: 750,
  lineHeight: 1.35,
  letterSpacing: "-0.01em"
});
var ToastDescription3 = styled(index_parts_exports.Description)({
  display: "-webkit-box",
  overflow: "hidden",
  marginTop: 2,
  color: "#99a6a2",
  fontSize: 12.5,
  lineHeight: 1.45,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3
});
var ToastClose3 = styled(index_parts_exports.Close)({
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
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsx(index_parts_exports.Portal, { children: /* @__PURE__ */ jsx(ToastViewport3, { children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "popLayout", children: toasts.map((toast) => {
    const severity = getSeverity(toast.type);
    const Icon = TOAST_ICONS[severity];
    return /* @__PURE__ */ jsx(
      index_parts_exports.Root,
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
        children: /* @__PURE__ */ jsxs(ToastContent3, { children: [
          /* @__PURE__ */ jsx(ToastIcon, { "aria-hidden": "true", children: /* @__PURE__ */ jsx(Icon, { fontSize: "small" }) }),
          /* @__PURE__ */ jsxs(ToastText, { children: [
            /* @__PURE__ */ jsx(ToastTitle3, {}),
            /* @__PURE__ */ jsx(ToastDescription3, {})
          ] }),
          /* @__PURE__ */ jsx(ToastClose3, { "aria-label": "Dismiss notification", children: /* @__PURE__ */ jsx(CloseRoundedIcon, { fontSize: "small" }) })
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
  const toastManager = index_parts_exports.useToastManager();
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
var SnackbarProvider = ({ children }) => /* @__PURE__ */ jsx(index_parts_exports.Provider, { limit: 5, timeout: SNACKBAR_AUTOHIDE_MS, children: /* @__PURE__ */ jsx(SnackbarBridge, { children }) });
var useSnackbar = () => {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
};

export { ConfirmProvider, SnackbarProvider, useBoolean, useConfirm, useDebounce, useDebouncedCallback, useDialog, useIsMounted, useLocalStorage, usePagination, usePrevious, useSnackbar, useTableQuery, useToggle };
//# sourceMappingURL=chunk-CEFFQOCO.js.map
//# sourceMappingURL=chunk-CEFFQOCO.js.map