import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

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
export function SearchField({
  value,
  onChange,
  placeholderKey = 'common:actions.search',
  fullWidth = false,
  autoFocus = false,
}: SearchFieldProps) {
  const { t } = useTranslation();
  return (
    <TextField
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={t(placeholderKey)}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      inputProps={{ 'aria-label': t(placeholderKey) }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton
              size="small"
              aria-label={t('common:actions.clear')}
              onClick={() => {
                onChange('');
              }}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
}
