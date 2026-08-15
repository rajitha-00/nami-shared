/** Returns the date part of an ISO string / Date as YYYY-MM-DD (UTC). */
export declare function isoDate(value: string | number | Date): string;
export declare function todayIso(): string;
/** Adds n days to a YYYY-MM-DD date, returning YYYY-MM-DD. */
export declare function addDays(date: string, n: number): string;
/** Whole days from `a` to `b` (positive when b is after a). */
export declare function differenceInDays(a: string, b: string): number;
/** Inclusive list of YYYY-MM-DD dates starting at `start`, `count` long. */
export declare function dateRangeDays(start: string, count: number): string[];
