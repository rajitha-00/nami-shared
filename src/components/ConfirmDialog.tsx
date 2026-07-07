import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';

export type ConfirmDialogVariant = 'danger' | 'warning' | 'info';

export interface ConfirmDialogProps {
  open: boolean;
  titleKey: string;
  messageKey: string;
  messageParams?: Record<string, unknown>;
  variant?: ConfirmDialogVariant;
  confirmKey?: string;
  cancelKey?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const VARIANT_COLOR = {
  danger: 'error',
  warning: 'warning',
  info: 'primary',
} as const;

/** The single confirm dialog rendered by ConfirmProvider (via useConfirm). */
export function ConfirmDialog({
  open,
  titleKey,
  messageKey,
  messageParams,
  variant = 'info',
  confirmKey = 'common:actions.confirm',
  cancelKey = 'common:actions.cancel',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{t(titleKey)}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t(messageKey, messageParams)}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit">
          {t(cancelKey)}
        </Button>
        <Button onClick={onConfirm} variant="contained" color={VARIANT_COLOR[variant]} autoFocus>
          {t(confirmKey)}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
