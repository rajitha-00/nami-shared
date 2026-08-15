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
export declare function usePagination(initial?: UsePaginationInitial): UsePaginationReturn;
