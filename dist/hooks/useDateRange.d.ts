export declare const DateRangePreset: {
    readonly LAST_7: "last7";
    readonly NEXT_7: "next7";
    readonly NEXT_14: "next14";
    readonly THIS_MONTH: "thisMonth";
};
export type DateRangePreset = (typeof DateRangePreset)[keyof typeof DateRangePreset];
export interface UseDateRangeReturn {
    /** Inclusive start (YYYY-MM-DD). */
    from: string;
    /** Inclusive end (YYYY-MM-DD). */
    to: string;
    setRange: (from: string, to: string) => void;
    /** The active preset, or null after a custom setRange. */
    preset: DateRangePreset | null;
    applyPreset: (preset: DateRangePreset) => void;
    /** Number of days in the range, inclusive. */
    days: number;
}
/** From/to date-range state with presets (feeds DateRangeButton + list filters). */
export declare function useDateRange(initialPreset?: DateRangePreset): UseDateRangeReturn;
