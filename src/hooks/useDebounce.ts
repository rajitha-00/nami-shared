import { useEffect, useMemo, useRef, useState } from 'react';
import { DEBOUNCE_MS } from '../constants/app';

/** Returns `value` after it has stayed unchanged for `delay` ms. */
export function useDebounce<T>(value: T, delay: number = DEBOUNCE_MS): T {
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

/** Returns a stable callback that defers invocation until `delay` ms of silence. */
export function useDebouncedCallback<TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delay: number = DEBOUNCE_MS,
): (...args: TArgs) => void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(timerRef.current);
    },
    [],
  );

  return useMemo(
    () =>
      (...args: TArgs) => {
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          callbackRef.current(...args);
        }, delay);
      },
    [delay],
  );
}
