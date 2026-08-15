/** JSON.parse that returns undefined instead of throwing on invalid input. */
export declare function safeJsonParse<T>(raw: string): T | undefined;
export declare function pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K>;
export declare function omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K>;
export declare function isDefined<T>(value: T | null | undefined): value is T;
/** Exhaustiveness guard for switch statements over union types. */
export declare function assertNever(x: never): never;
