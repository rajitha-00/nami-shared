import type { QueryParams } from '../types/api';
export declare function sleep(ms: number): Promise<void>;
export declare function clamp(value: number, min: number, max: number): number;
/** Serializes QueryParams into a URL query string (filters flattened as repeats). */
export declare function buildQueryString(params: QueryParams): string;
