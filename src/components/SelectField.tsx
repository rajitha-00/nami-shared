import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
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
export const SelectField = <V extends string | number = string>({
  value,
  onChange,
  options,
  labelKey,
  emptyOptionKey,
  fullWidth = false,
  minWidth = 160,
  disabled = false,
}: SelectFieldProps<V>) => {
  const { t } = useTranslation();
  return (
    <TextField
      select
      value={value}
      onChange={(e) => {
        onChange(e.target.value as V | '');
      }}
      label={labelKey ? t(labelKey) : undefined}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{ minWidth: fullWidth ? undefined : minWidth }}
    >
      {emptyOptionKey ? <MenuItem value="">{t(emptyOptionKey)}</MenuItem> : null}
      {options.map((option) => (
        <MenuItem key={String(option.value)} value={option.value} disabled={option.disabled}>
          {option.icon}
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
