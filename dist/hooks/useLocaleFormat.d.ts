export interface UseLocaleFormatReturn {
    formatDate: (value: string | number | Date) => string;
    formatDateTime: (value: string | number | Date) => string;
    formatMonthYear: (value: string | number | Date) => string;
    formatCurrency: (value: number, currency?: string) => string;
    formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
}
/** Intl-based formatters bound to the active i18next language. */
export declare function useLocaleFormat(): UseLocaleFormatReturn;
