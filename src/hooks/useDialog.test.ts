import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useDialog } from './useDialog';

describe('useDialog', () => {
  it('opens with payload data and closes', () => {
    const { result } = renderHook(() => useDialog<{ id: string }>());
    expect(result.current.isOpen).toBe(false);
    expect(result.current.data).toBeUndefined();

    act(() => {
      result.current.open({ id: '42' });
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toEqual({ id: '42' });

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('opens without data (create mode)', () => {
    const { result } = renderHook(() => useDialog<{ id: string }>());
    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it('toggles', () => {
    const { result } = renderHook(() => useDialog());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
