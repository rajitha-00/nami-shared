import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { SelectOption } from '../types/ui';
import { PasswordField } from './PasswordField';

interface FormFieldBaseProps<TValues extends FieldValues> {
  control: Control<TValues>;
  name: FieldPath<TValues>;
  labelKey: string;
}

export interface FormTextFieldProps<TValues extends FieldValues>
  extends FormFieldBaseProps<TValues> {
  type?: TextFieldProps['type'];
  multiline?: boolean;
  rows?: number;
  autoFocus?: boolean;
  autoComplete?: string;
  placeholderKey?: string;
  disabled?: boolean;
}

/** react-hook-form bound TextField with i18n label and zod error translation. */
export function FormTextField<TValues extends FieldValues>({
  control,
  name,
  labelKey,
  type,
  multiline,
  rows,
  autoFocus,
  autoComplete,
  placeholderKey,
  disabled,
}: FormTextFieldProps<TValues>) {
  const { t } = useTranslation();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...field }, fieldState }) => {
        const shared = {
          ...field,
          inputRef: ref,
          label: t(labelKey),
          placeholder: placeholderKey ? t(placeholderKey) : undefined,
          error: Boolean(fieldState.error),
          helperText: fieldState.error?.message ? t(fieldState.error.message) : undefined,
          fullWidth: true,
          margin: 'normal' as const,
          multiline,
          rows,
          autoFocus,
          autoComplete,
          disabled,
        };
        return type === 'password' ? <PasswordField {...shared} /> : <TextField {...shared} type={type} />;
      }}
    />
  );
}

export interface FormSelectProps<TValues extends FieldValues, V extends string | number = string>
  extends FormFieldBaseProps<TValues> {
  options: SelectOption<V>[];
}

/** react-hook-form bound select driven by SelectOption[]. */
export function FormSelect<TValues extends FieldValues, V extends string | number = string>({
  control,
  name,
  labelKey,
  options,
}: FormSelectProps<TValues, V>) {
  const { t } = useTranslation();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          select
          label={t(labelKey)}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message ? t(fieldState.error.message) : undefined}
          fullWidth
          margin="normal"
        >
          {options.map((option) => (
            <MenuItem key={String(option.value)} value={option.value} disabled={option.disabled}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

export type FormSwitchProps<TValues extends FieldValues> = FormFieldBaseProps<TValues>;

/** react-hook-form bound Switch with i18n label. */
export function FormSwitch<TValues extends FieldValues>({
  control,
  name,
  labelKey,
}: FormSwitchProps<TValues>) {
  const { t } = useTranslation();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch checked={Boolean(field.value)} onChange={field.onChange} />}
          label={t(labelKey)}
        />
      )}
    />
  );
}
