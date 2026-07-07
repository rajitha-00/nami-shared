const DAY_MS = 24 * 60 * 60 * 1000;

/** Returns the date part of an ISO string / Date as YYYY-MM-DD (UTC). */
export function isoDate(value: string | number | Date): string {
  const iso = new Date(value).toISOString();
  return iso.slice(0, 10);
}

export function todayIso(): string {
  return isoDate(Date.now());
}

/** Adds n days to a YYYY-MM-DD date, returning YYYY-MM-DD. */
export function addDays(date: string, n: number): string {
  return isoDate(new Date(`${isoDate(date)}T00:00:00Z`).getTime() + n * DAY_MS);
}

/** Whole days from `a` to `b` (positive when b is after a). */
export function differenceInDays(a: string, b: string): number {
  const start = new Date(`${isoDate(a)}T00:00:00Z`).getTime();
  const end = new Date(`${isoDate(b)}T00:00:00Z`).getTime();
  return Math.round((end - start) / DAY_MS);
}

/** Inclusive list of YYYY-MM-DD dates starting at `start`, `count` long. */
export function dateRangeDays(start: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => addDays(start, i));
}
