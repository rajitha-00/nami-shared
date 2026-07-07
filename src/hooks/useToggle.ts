import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseBooleanReturn {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  setValue: (value: boolean) => void;
}

export function useBoolean(initial = false): UseBooleanReturn {
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

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setValue: (value: boolean) => void;
}

export function useToggle(initial = false): UseToggleReturn {
  const { value, toggle, setValue } = useBoolean(initial);
  return { value, toggle, setValue };
}

/** Returns the value from the previous render, or undefined on first render. */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/** Returns a stable getter that reports whether the component is still mounted. */
export function useIsMounted(): () => boolean {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return useCallback(() => mountedRef.current, []);
}
