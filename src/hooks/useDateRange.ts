import { useCallback, useMemo, useState } from 'react';
import { addDays, differenceInDays, isoDate, todayIso } from '../utils/date';

export const DateRangePreset = {
  LAST_7: 'last7',
  NEXT_7: 'next7',
  NEXT_14: 'next14',
  THIS_MONTH: 'thisMonth',
} as const;
export type DateRangePreset = (typeof DateRangePreset)[keyof typeof DateRangePreset];

export interface UseDateRangeReturn {
  /** Inclusive start (YYYY-MM-DD). */
  from: string;
  /** Inclusive end (YYYY-MM-DD). */
  to: string;
  setRange: (from: string, to: string) => void;
  /** The active preset, or null after a custom setRange. */
  preset: DateRangePreset | null;
  applyPreset: (preset: DateRangePreset) => void;
  /** Number of days in the range, inclusive. */
  days: number;
}

const presetRange = (preset: DateRangePreset): { from: string; to: string } => {
  const today = todayIso();
  switch (preset) {
    case DateRangePreset.LAST_7:
      return { from: addDays(today, -6), to: today };
    case DateRangePreset.NEXT_7:
      return { from: today, to: addDays(today, 6) };
    case DateRangePreset.NEXT_14:
      return { from: today, to: addDays(today, 13) };
    case DateRangePreset.THIS_MONTH: {
      const start = `${today.slice(0, 8)}01`;
      const monthEnd = new Date(
        Date.UTC(Number(today.slice(0, 4)), Number(today.slice(5, 7)), 0),
      );
      return { from: start, to: isoDate(monthEnd) };
    }
  }
};

/** From/to date-range state with presets (feeds DateRangeButton + list filters). */
export function useDateRange(initialPreset: DateRangePreset = DateRangePreset.NEXT_14): UseDateRangeReturn {
  const initial = presetRange(initialPreset);
  const [from, setFrom] = useState(initial.from);
  const [to, setTo] = useState(initial.to);
  const [preset, setPreset] = useState<DateRangePreset | null>(initialPreset);

  const setRange = useCallback((nextFrom: string, nextTo: string) => {
    setFrom(nextFrom);
    setTo(nextTo);
    setPreset(null);
  }, []);

  const applyPreset = useCallback((next: DateRangePreset) => {
    const range = presetRange(next);
    setFrom(range.from);
    setTo(range.to);
    setPreset(next);
  }, []);

  const days = useMemo(() => differenceInDays(from, to) + 1, [from, to]);

  return { from, to, setRange, preset, applyPreset, days };
}
