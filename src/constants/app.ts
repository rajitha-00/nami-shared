export const DATE_FORMATS = {
  DATE: { year: 'numeric', month: 'short', day: 'numeric' },
  DATE_TIME: { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' },
  TIME: { hour: '2-digit', minute: '2-digit' },
  MONTH_YEAR: { year: 'numeric', month: 'short' },
} as const satisfies Record<string, Intl.DateTimeFormatOptions>;

export const DEBOUNCE_MS = 300;
export const DEFAULT_PAGE_SIZE = 15;
export const PAGE_SIZE_OPTIONS = [15, 25, 50, 100] as const;
export const SNACKBAR_AUTOHIDE_MS = 4000;
