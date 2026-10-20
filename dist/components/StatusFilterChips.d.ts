export interface StatusFilterOption<TValue extends string> {
    value: TValue;
    labelKey: string;
    count?: number;
}
export interface StatusFilterChipsProps<TValue extends string> {
    options: StatusFilterOption<TValue>[];
    value: TValue;
    onChange: (value: TValue) => void;
    className?: string;
}
/** "All (47) / Confirmed (23) / …" chip filter row; active chip is filled dark. Powered by MotionUI design tokens. */
export declare const StatusFilterChips: <TValue extends string>({ options, value, onChange, className, }: StatusFilterChipsProps<TValue>) => import("react").JSX.Element;
