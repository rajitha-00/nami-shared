import { useCallback, useMemo, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '../constants/app';
import type { QueryParams, SortDir } from '../types/api';
import { useDebounce } from './useDebounce';

export type TableFilters = Record<string, string | string[]>;

export interface UseTableQueryDefaults<TFilters extends TableFilters> {
  pageSize?: number;
  sortBy?: string;
  sortDir?: SortDir;
  filters?: TFilters;
  /** Initial state override (e.g. hydrated from URL search params). */
  initial?: Partial<{ page: number; search: string }>;
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
export function useTableQuery<TFilters extends TableFilters = TableFilters>(
  defaults?: UseTableQueryDefaults<TFilters>,
): UseTableQueryReturn<TFilters> {
  const defaultFilters = useMemo(() => defaults?.filters ?? ({} as TFilters), [defaults?.filters]);
  const [page, setPage] = useState(defaults?.initial?.page ?? 1);
  const [pageSize, setPageSizeState] = useState(defaults?.pageSize ?? DEFAULT_PAGE_SIZE);
  const [search, setSearchState] = useState(defaults?.initial?.search ?? '');
  const [sortBy, setSortBy] = useState<string | undefined>(defaults?.sortBy);
  const [sortDir, setSortDir] = useState<SortDir>(defaults?.sortDir ?? 'asc');
  const [filters, setFilters] = useState<TFilters>(defaultFilters);

  const debouncedSearch = useDebounce(search);

  const setSearch = useCallback((next: string) => {
    setSearchState(next);
    setPage(1);
  }, []);

  const setPageSize = useCallback((next: number) => {
    setPageSizeState(next);
    setPage(1);
  }, []);

  const onSortChange = useCallback((key: string) => {
    setSortBy((prevKey) => {
      setSortDir((prevDir) => (prevKey === key && prevDir === 'asc' ? 'desc' : 'asc'));
      return key;
    });
  }, []);

  const setFilter = useCallback((key: keyof TFilters & string, value: string | string[]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
    setSearchState('');
    setPage(1);
  }, [defaultFilters]);

  const reset = useCallback(() => {
    setPage(1);
    setSearchState('');
    setSortBy(defaults?.sortBy);
    setSortDir(defaults?.sortDir ?? 'asc');
    setFilters(defaultFilters);
  }, [defaultFilters, defaults?.sortBy, defaults?.sortDir]);

  const params = useMemo<QueryParams>(() => {
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([, v]) => (Array.isArray(v) ? v.length > 0 : v !== '')),
    );
    return {
      page,
      pageSize,
      search: debouncedSearch || undefined,
      sortBy,
      sortDir: sortBy ? sortDir : undefined,
      filters: Object.keys(activeFilters).length > 0 ? activeFilters : undefined,
    };
  }, [page, pageSize, debouncedSearch, sortBy, sortDir, filters]);

  return {
    params,
    page,
    pageSize,
    setPage,
    setPageSize,
    search,
    debouncedSearch,
    setSearch,
    sortBy,
    sortDir,
    onSortChange,
    filters,
    setFilter,
    clearFilters,
    reset,
  };
}
