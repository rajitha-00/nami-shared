import { type TextFieldProps } from '@mui/material/TextField';
export type PasswordFieldProps = Omit<TextFieldProps, 'type' | 'ref'>;
/** TextField with a show/hide password visibility toggle. Ref reaches the input. */
export declare const PasswordField: any;
