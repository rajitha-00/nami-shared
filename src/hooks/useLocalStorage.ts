import { useCallback, useState } from 'react';
import type { StorageKey } from '../constants/storage-keys';
import { safeJsonParse } from '../utils/object';

export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (next: T | ((prev: T) => T)) => void;
  remove: () => void;
}

/** SSR-safe localStorage state, typed against the shared STORAGE_KEYS. */
export function useLocalStorage<T>(key: StorageKey, initial: T): UseLocalStorageReturn<T> {
  const [value, setValueState] = useState<T>(() => {
    if (typeof window === 'undefined') return initial;
    const raw = window.localStorage.getItem(key);
    if (raw === null) return initial;
    return safeJsonParse<T>(raw) ?? initial;
  });

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValueState((prev) => {
        const resolved = typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        window.localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key],
  );

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);

  return { value, setValue, remove };
}
