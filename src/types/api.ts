/** Standard envelope every Hotel OS API response is wrapped in. */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/** Normalized API error shape returned by all backends (and the mock layer). */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string[]>;
}

/** Server-side paginated collection. */
export interface Paginated<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export type SortDir = 'asc' | 'desc';

/** Query arguments accepted by every list endpoint. */
export interface QueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortDir?: SortDir;
  filters?: Record<string, string | string[]>;
}
