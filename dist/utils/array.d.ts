export declare function groupBy<T, K extends PropertyKey>(items: readonly T[], getKey: (item: T) => K): Record<K, T[]>;
export declare function sortBy<T>(items: readonly T[], getValue: (item: T) => string | number, dir?: 'asc' | 'desc'): T[];
export declare function uniqueBy<T, K>(items: readonly T[], getKey: (item: T) => K): T[];
