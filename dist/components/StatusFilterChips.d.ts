export interface StatusFilterOption<TValue extends string> {
    value: TValue;
    labelKey: string;
    count?: number;
}
export interface StatusFilterChipsProps<TValue extends string> {
    options: StatusFilterOption<TValue>[];
    value: TValue;
    onChange: (value: TValue) => void;
}
/** "All (47) / Confirmed (23) / …" chip filter row; active chip is filled dark. */
export declare function StatusFilterChips<TValue extends string>({ options, value, onChange, }: StatusFilterChipsProps<TValue>): any;
