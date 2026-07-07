import { useCallback, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '../constants/app';

export interface UsePaginationInitial {
  page?: number;
  pageSize?: number;
}

export interface UsePaginationReturn {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  reset: () => void;
  /** Zero-based item offset for the current page. */
  offset: number;
}

export function usePagination(initial?: UsePaginationInitial): UsePaginationReturn {
  const initialPage = initial?.page ?? 1;
  const initialPageSize = initial?.pageSize ?? DEFAULT_PAGE_SIZE;
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSizeState] = useState(initialPageSize);

  const setPageSize = useCallback((next: number) => {
    setPageSizeState(next);
    setPage(1);
  }, []);

  const reset = useCallback(() => {
    setPage(initialPage);
    setPageSizeState(initialPageSize);
  }, [initialPage, initialPageSize]);

  return { page, pageSize, setPage, setPageSize, reset, offset: (page - 1) * pageSize };
}
