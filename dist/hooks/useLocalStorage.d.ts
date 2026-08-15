import type { StorageKey } from '../constants/storage-keys';
export interface UseLocalStorageReturn<T> {
    value: T;
    setValue: (next: T | ((prev: T) => T)) => void;
    remove: () => void;
}
/** SSR-safe localStorage state, typed against the shared STORAGE_KEYS. */
export declare function useLocalStorage<T>(key: StorageKey, initial: T): UseLocalStorageReturn<T>;
