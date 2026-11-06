import type { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { LoadingOverlay } from './LoadingOverlay';

const DrawerHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

const DrawerContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  padding: theme.spacing(3),
  position: 'relative',
  maxHeight: '75vh',
}));

const DrawerFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  '& > *': { flexGrow: 1 },
}));

export interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  titleKey?: string;
  titleParams?: Record<string, unknown>;
  /** Plain-text title override (e.g. "Booking #BK-2841"). */
  title?: string;
  /** Status chip rendered next to the title. */
  statusChip?: ReactNode;
  /** Tabs row rendered under the header. */
  tabs?: ReactNode;
  /** Footer action buttons (stretched full-width). */
  footer?: ReactNode;
  width?: string | number;
  loading?: boolean;
  children: ReactNode;
}

/** Apple Large Dialog Modal twin of AppDrawer — all drawers present as modal dialogs with backdrop click lock. */
export const AppDrawer = ({
  open,
  onClose,
  titleKey,
  titleParams,
  title,
  statusChip,
  tabs,
  footer,
  width,
  loading = false,
  children,
}: AppDrawerProps) => {
  const { t } = useTranslation();

  const getMaxWidth = () => {
    if (width === 'full' || width === 'xl') return 'xl';
    if (width === 'lg') return 'lg';
    if (width === 'sm') return 'sm';
    if (width === 'xs') return 'xs';
    return 'md';
  };

  const getPaperWidthSx = () => {
    if (width === 'full') {
      return { maxWidth: '1380px', width: '95vw' };
    }
    if (width === 'xl') {
      return { maxWidth: '1440px', width: '95vw' };
    }
    if (width === 'lg') {
      return { maxWidth: '1200px', width: '92vw' };
    }
    if (typeof width === 'number') {
      return { maxWidth: `${width}px`, width: '95vw' };
    }
    return {};
  };

  return (
    <Dialog
      open={open}
      onClose={(_event, reason) => {
        if (reason !== 'backdropClick') onClose();
      }}
      maxWidth={getMaxWidth()}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '4px',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
          border: '0.5px solid rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          ...getPaperWidthSx(),
        },
      }}
    >
      <DrawerHeader>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h5" fontWeight={800} letterSpacing="-0.3px" noWrap>
            {title ?? (titleKey ? t(titleKey, titleParams) : null)}
          </Typography>
          {statusChip}
        </Stack>
        <IconButton aria-label={t('common:actions.close')} onClick={onClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DrawerHeader>
      {tabs}
      <DrawerContent>
        {children}
        <LoadingOverlay open={loading} />
      </DrawerContent>
      {footer ? <DrawerFooter>{footer}</DrawerFooter> : null}
    </Dialog>
  );
};
