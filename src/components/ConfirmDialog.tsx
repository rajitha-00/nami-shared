import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Popover from '@mui/material/Popover';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { FamilyDialogTransition } from './FamilyDialogTransition';

export type ConfirmDialogVariant = 'danger' | 'warning' | 'info';

export interface ConfirmDialogProps {
  open: boolean;
  titleKey: string;
  messageKey: string;
  messageParams?: Record<string, unknown>;
  variant?: ConfirmDialogVariant;
  confirmKey?: string;
  cancelKey?: string;
  loading?: boolean;
  /** Anchor element to position the popover directly below the trigger button */
  anchorEl?: HTMLElement | null;
  /** When true, backdrop is completely transparent */
  disableBackdrop?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

/** The single confirm dialog rendered by ConfirmProvider (via useConfirm) with Family-style motion and aesthetics. */
export const ConfirmDialog = ({
  open,
  titleKey,
  messageKey,
  messageParams,
  variant = 'info',
  confirmKey = 'common:actions.confirm',
  cancelKey = 'common:actions.cancel',
  loading = false,
  anchorEl,
  disableBackdrop = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const { t } = useTranslation();

  const content = (
    <Box sx={{ width: '100%', maxWidth: '380px' }}>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: 2.5,
          px: 3,
          pb: 0.5,
          fontWeight: 800,
          fontSize: '1.15rem',
          letterSpacing: '-0.02em',
        }}
      >
        {t(titleKey)}
        <IconButton
          aria-label={t('common:actions.close')}
          onClick={onCancel}
          size="small"
          edge="end"
          sx={{
            p: 0.6,
            color: 'text.secondary',
            borderRadius: '50%',
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.06)',
            '&:hover': {
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)',
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ px: 3, py: 1 }}>
        <DialogContentText
          sx={{
            color: 'text.secondary',
            fontSize: '0.9375rem',
            lineHeight: 1.5,
          }}
        >
          {t(messageKey, messageParams)}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, pt: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button
          onClick={onCancel}
          color="inherit"
          disabled={loading}
          sx={{
            borderRadius: '9999px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            px: 2.5,
            py: 0.8,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)',
              color: 'text.primary',
            },
          }}
        >
          {t(cancelKey)}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          autoFocus
          disabled={loading}
          startIcon={loading ? <CircularProgress size={16} color="inherit" /> : undefined}
          color={variant === 'danger' ? 'error' : variant === 'warning' ? 'warning' : 'primary'}
          sx={{
            borderRadius: '9999px',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
            px: 3,
            py: 0.8,
            ...(variant === 'info' && {
              backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#0F172A' : '#F8FAFC'),
              color: (theme) => (theme.palette.mode === 'light' ? '#FFFFFF' : '#0F172A'),
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#000000' : '#E2E8F0'),
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
              },
            }),
            ...(variant === 'danger' && {
              backgroundColor: '#DC2626',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)',
              '&:hover': {
                backgroundColor: '#B91C1C',
                boxShadow: '0 6px 16px rgba(220, 38, 38, 0.35)',
              },
            }),
            ...(variant === 'warning' && {
              backgroundColor: '#D97706',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
              '&:hover': {
                backgroundColor: '#B45309',
                boxShadow: '0 6px 16px rgba(217, 119, 6, 0.35)',
              },
            }),
          }}
        >
          {t(confirmKey)}
        </Button>
      </DialogActions>
    </Box>
  );

  const isAnchorValid = Boolean(
    anchorEl &&
      typeof window !== 'undefined' &&
      document.body.contains(anchorEl) &&
      anchorEl.getBoundingClientRect().width > 0 &&
      anchorEl.getBoundingClientRect().height > 0 &&
      (anchorEl.getBoundingClientRect().top > 0 || anchorEl.getBoundingClientRect().left > 0)
  );

  if (isAnchorValid && anchorEl) {
    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onCancel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={FamilyDialogTransition}
        slotProps={{
          paper: {
            sx: {
              borderRadius: '28px',
              maxWidth: '380px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)',
              p: 0.5,
              mt: 1,
              overflow: 'hidden',
            },
          },
          root: {
            sx: {
              zIndex: (theme) => theme.zIndex.modal + 200,
              '& .MuiBackdrop-root': {
                backgroundColor: 'transparent',
              },
            },
          },
        }}
      >
        {content}
      </Popover>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="xs"
      fullWidth
      TransitionComponent={FamilyDialogTransition}
      PaperProps={{
        sx: {
          borderRadius: '28px',
          maxWidth: '380px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          p: 0.5,
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 200,
        '& .MuiBackdrop-root': {
          backgroundColor: disableBackdrop ? 'transparent' : 'rgba(0, 0, 0, 0.15)',
          backdropFilter: disableBackdrop ? 'none' : 'blur(2px)',
          WebkitBackdropFilter: disableBackdrop ? 'none' : 'blur(2px)',
        },
      }}
    >
      {content}
    </Dialog>
  );
};
