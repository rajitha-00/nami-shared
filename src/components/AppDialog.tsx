import type { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import type { DialogSize } from '../types/ui';
import { AppleDialogTransition } from './AppleDialogTransition';
import { LoadingOverlay } from './LoadingOverlay';

export interface AppDialogProps {
  open: boolean;
  /** i18n key for the dialog title. */
  titleKey: string;
  titleParams?: Record<string, unknown>;
  size?: DialogSize;
  /** Rendered in the DialogActions bar. */
  actions?: ReactNode;
  /** Shows a loading overlay above the content. */
  loading?: boolean;
  /** When true (e.g. dirty form), backdrop/Escape close is blocked. */
  disableClose?: boolean;
  onClose: () => void;
  children: ReactNode;
}

/** Generic dialog wrapper every feature dialog composes. */
export const AppDialog = ({
  open,
  titleKey,
  titleParams,
  size = 'sm',
  actions,
  loading = false,
  disableClose = false,
  onClose,
  children,
}: AppDialogProps) => {
  const { t } = useTranslation();

  const handleClose = (_event: unknown, reason?: string) => {
    if (disableClose && (reason === 'backdropClick' || reason === 'escapeKeyDown')) return;
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={size}
      TransitionComponent={AppleDialogTransition}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {t(titleKey, titleParams)}
        <IconButton
          aria-label={t('common:actions.close')}
          onClick={onClose}
          edge="end"
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ position: 'relative' }}>
        {children}
        <LoadingOverlay open={loading} />
      </DialogContent>
      {actions ? <DialogActions>{actions}</DialogActions> : null}
    </Dialog>
  );
}
