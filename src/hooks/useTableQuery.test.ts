import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useTableQuery } from './useTableQuery';

describe('useTableQuery', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('combines pagination, sort, debounced search and filters into params', () => {
    const { result } = renderHook(() => useTableQuery<{ status: string }>());

    expect(result.current.params).toEqual({
      page: 1,
      pageSize: 15,
      search: undefined,
      sortBy: undefined,
      sortDir: undefined,
      filters: undefined,
    });

    act(() => {
      result.current.setSearch('colombo');
    });
    // still debouncing
    expect(result.current.params.search).toBeUndefined();
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current.params.search).toBe('colombo');

    act(() => {
      result.current.setFilter('status', 'ACTIVE');
      result.current.onSortChange('name');
    });
    expect(result.current.params.filters).toEqual({ status: 'ACTIVE' });
    expect(result.current.params.sortBy).toBe('name');
    expect(result.current.params.sortDir).toBe('asc');
  });

  it('toggles sort direction on repeated column clicks', () => {
    const { result } = renderHook(() => useTableQuery());
    act(() => {
      result.current.onSortChange('name');
    });
    expect(result.current.sortDir).toBe('asc');
    act(() => {
      result.current.onSortChange('name');
    });
    expect(result.current.sortDir).toBe('desc');
    act(() => {
      result.current.onSortChange('city');
    });
    expect(result.current.sortDir).toBe('asc');
  });

  it('resets to page 1 when search or filters change', () => {
    const { result } = renderHook(() => useTableQuery<{ status: string }>());
    act(() => {
      result.current.setPage(4);
    });
    expect(result.current.page).toBe(4);
    act(() => {
      result.current.setFilter('status', 'ACTIVE');
    });
    expect(result.current.page).toBe(1);

    act(() => {
      result.current.setPage(3);
      result.current.setSearch('x');
    });
    expect(result.current.page).toBe(1);
  });
});
