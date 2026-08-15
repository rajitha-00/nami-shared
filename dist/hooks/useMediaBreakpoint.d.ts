export interface UseMediaBreakpointReturn {
    /** Below `sm`. */
    isMobile: boolean;
    /** Between `sm` and `md`. */
    isTablet: boolean;
    /** `md` and up. */
    isDesktop: boolean;
    /** `lg` and up. */
    isLargeDesktop: boolean;
}
/** Wraps useMediaQuery with the Hotel OS theme breakpoints. */
export declare function useMediaBreakpoint(): UseMediaBreakpointReturn;
