export declare function truncate(value?: string | null, maxLength?: number, suffix?: string): string;
/** "Amaya Perera" → "AP"; single names take the first two characters. Safe against null/undefined/non-strings. */
export declare function initialsFromName(name?: string | null): string;
export declare function formatBytes(bytes: number, decimals?: number): string;
