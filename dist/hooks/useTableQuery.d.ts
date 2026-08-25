import type { QueryParams, SortDir } from '../types/api';
export type TableFilters = Record<string, string | string[]>;
export interface UseTableQueryDefaults<TFilters extends TableFilters> {
    pageSize?: number;
    sortBy?: string;
    sortDir?: SortDir;
    filters?: TFilters;
    /** Initial state override (e.g. hydrated from URL search params). */
    initial?: Partial<{
        page: number;
        search: string;
    }>;
}
export interface UseTableQueryReturn<TFilters extends TableFilters> {
    /** Ready-to-use RTK Query argument combining pagination + sort + search + filters. */
    params: QueryParams;
    page: number;
    pageSize: number;
    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    /** Raw (undebounced) search input value for the text field. */
    search: string;
    /** Debounced search value used by API calls and local filtering. */
    debouncedSearch: string;
    setSearch: (search: string) => void;
    sortBy: string | undefined;
    sortDir: SortDir;
    /** Toggles sort on a column: asc → desc → asc on a new column. */
    onSortChange: (key: string) => void;
    filters: TFilters;
    setFilter: (key: keyof TFilters & string, value: string | string[]) => void;
    clearFilters: () => void;
    reset: () => void;
}
/**
 * Combines pagination + sorting + debounced search + filters into a single
 * QueryParams object ready for RTK Query list endpoints.
 */
export declare function useTableQuery<TFilters extends TableFilters = TableFilters>(defaults?: UseTableQueryDefaults<TFilters>): UseTableQueryReturn<TFilters>;
