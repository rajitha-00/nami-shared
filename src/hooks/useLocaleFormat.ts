import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DATE_FORMATS } from '../constants/app';

export interface UseLocaleFormatReturn {
  formatDate: (value: string | number | Date) => string;
  formatDateTime: (value: string | number | Date) => string;
  formatMonthYear: (value: string | number | Date) => string;
  formatCurrency: (value: number, currency?: string) => string;
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
}

const DEFAULT_CURRENCY = 'LKR';

/** Intl-based formatters bound to the active i18next language. */
export function useLocaleFormat(): UseLocaleFormatReturn {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return useMemo(
    () => ({
      formatDate: (value) => new Intl.DateTimeFormat(locale, DATE_FORMATS.DATE).format(new Date(value)),
      formatDateTime: (value) =>
        new Intl.DateTimeFormat(locale, DATE_FORMATS.DATE_TIME).format(new Date(value)),
      formatMonthYear: (value) =>
        new Intl.DateTimeFormat(locale, DATE_FORMATS.MONTH_YEAR).format(new Date(value)),
      formatCurrency: (value, currency = DEFAULT_CURRENCY) =>
        new Intl.NumberFormat(locale, {
          style: 'currency',
          currency,
          maximumFractionDigits: value % 1 === 0 ? 0 : 2,
        }).format(value),
      formatNumber: (value, options) => new Intl.NumberFormat(locale, options).format(value),
    }),
    [locale],
  );
}
