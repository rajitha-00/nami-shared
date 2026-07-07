import type { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { LoadingOverlay } from './LoadingOverlay';

const DRAWER_WIDTHS = { sm: 400, md: 520, lg: 680 } as const;
export type AppDrawerWidth = keyof typeof DRAWER_WIDTHS;

const DrawerHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DrawerContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  padding: theme.spacing(3),
  position: 'relative',
}));

const DrawerFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
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
  width?: AppDrawerWidth;
  loading?: boolean;
  children: ReactNode;
}

/** Right-side drawer twin of AppDialog — detail views, editors, task panels. */
export function AppDrawer({
  open,
  onClose,
  titleKey,
  titleParams,
  title,
  statusChip,
  tabs,
  footer,
  width = 'md',
  loading = false,
  children,
}: AppDrawerProps) {
  const { t } = useTranslation();
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: DRAWER_WIDTHS[width] }, display: 'flex' },
      }}
    >
      <DrawerHeader>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h6" noWrap>
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
    </Drawer>
  );
}
