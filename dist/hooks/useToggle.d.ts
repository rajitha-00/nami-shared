export interface UseBooleanReturn {
    value: boolean;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
    setValue: (value: boolean) => void;
}
export declare function useBoolean(initial?: boolean): UseBooleanReturn;
export interface UseToggleReturn {
    value: boolean;
    toggle: () => void;
    setValue: (value: boolean) => void;
}
export declare function useToggle(initial?: boolean): UseToggleReturn;
/** Returns the value from the previous render, or undefined on first render. */
export declare function usePrevious<T>(value: T): T | undefined;
/** Returns a stable getter that reports whether the component is still mounted. */
export declare function useIsMounted(): () => boolean;
