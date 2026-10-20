import { type TextFieldProps } from '@mui/material/TextField';
import { type Control, type FieldPath, type FieldValues } from 'react-hook-form';
import type { SelectOption } from '../types/ui';
interface FormFieldBaseProps<TValues extends FieldValues> {
    control: Control<TValues>;
    name: FieldPath<TValues>;
    labelKey: string;
}
export interface FormTextFieldProps<TValues extends FieldValues> extends FormFieldBaseProps<TValues> {
    type?: TextFieldProps['type'];
    multiline?: boolean;
    rows?: number;
    autoFocus?: boolean;
    autoComplete?: string;
    placeholderKey?: string;
    disabled?: boolean;
}
/** react-hook-form bound TextField with i18n label and zod error translation. */
export declare const FormTextField: <TValues extends FieldValues>({ control, name, labelKey, type, multiline, rows, autoFocus, autoComplete, placeholderKey, disabled, }: FormTextFieldProps<TValues>) => import("react").JSX.Element;
export interface FormSelectProps<TValues extends FieldValues, V extends string | number = string> extends FormFieldBaseProps<TValues> {
    options: SelectOption<V>[];
}
/** react-hook-form bound select driven by SelectOption[]. */
export declare const FormSelect: <TValues extends FieldValues, V extends string | number = string>({ control, name, labelKey, options, }: FormSelectProps<TValues, V>) => import("react").JSX.Element;
export type FormSwitchProps<TValues extends FieldValues> = FormFieldBaseProps<TValues>;
/** react-hook-form bound Switch with i18n label. */
export declare const FormSwitch: <TValues extends FieldValues>({ control, name, labelKey, }: FormSwitchProps<TValues>) => import("react").JSX.Element;
export {};
