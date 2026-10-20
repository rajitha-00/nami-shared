export interface SearchFieldProps {
    value: string;
    onChange: (value: string) => void;
    placeholderKey?: string;
    fullWidth?: boolean;
    autoFocus?: boolean;
}
/**
 * Search input with clear button. Debouncing lives in useTableQuery, so this
 * stays a plain controlled input.
 */
export declare const SearchField: ({ value, onChange, placeholderKey, fullWidth, autoFocus, }: SearchFieldProps) => import("react").JSX.Element;
