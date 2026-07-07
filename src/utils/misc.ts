import type { QueryParams } from '../types/api';

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Serializes QueryParams into a URL query string (filters flattened as repeats). */
export function buildQueryString(params: QueryParams): string {
  const search = new URLSearchParams();
  if (params.page !== undefined) search.set('page', String(params.page));
  if (params.pageSize !== undefined) search.set('pageSize', String(params.pageSize));
  if (params.search) search.set('search', params.search);
  if (params.sortBy) search.set('sortBy', params.sortBy);
  if (params.sortDir) search.set('sortDir', params.sortDir);
  if (params.filters) {
    for (const [key, value] of Object.entries(params.filters)) {
      const values = Array.isArray(value) ? value : [value];
      for (const v of values) {
        search.append(key, v);
      }
    }
  }
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}
