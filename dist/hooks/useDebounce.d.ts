/** Returns `value` after it has stayed unchanged for `delay` ms. */
export declare function useDebounce<T>(value: T, delay?: number): T;
/** Returns a stable callback that defers invocation until `delay` ms of silence. */
export declare function useDebouncedCallback<TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay?: number): (...args: TArgs) => void;
