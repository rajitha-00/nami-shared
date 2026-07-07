import { forwardRef, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

export type PasswordFieldProps = Omit<TextFieldProps, 'type' | 'ref'>;

/** TextField with a show/hide password visibility toggle. Ref reaches the input. */
export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField(props, ref) {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    return (
      <TextField
        {...props}
        inputRef={ref ?? props.inputRef}
        type={visible ? 'text' : 'password'}
        InputProps={{
          ...props.InputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={t(
                  visible ? 'common:actions.hidePassword' : 'common:actions.showPassword',
                )}
                onClick={() => {
                  setVisible((v) => !v);
                }}
                edge="end"
                size="small"
              >
                {visible ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
);
