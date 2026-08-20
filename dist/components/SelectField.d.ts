import type { SelectOption } from '../types/ui';
export interface SelectFieldProps<V extends string | number = string> {
    value: V | '';
    onChange: (value: V | '') => void;
    options: SelectOption<V>[];
    labelKey?: string;
    /** When set, prepends an "all/none" option mapped to ''. */
    emptyOptionKey?: string;
    fullWidth?: boolean;
    minWidth?: number;
    disabled?: boolean;
}
/** SelectOption-driven dropdown (used for table filters and simple selects). */
export declare function SelectField<V extends string | number = string>({ value, onChange, options, labelKey, emptyOptionKey, fullWidth, minWidth, disabled, }: SelectFieldProps<V>): any;
