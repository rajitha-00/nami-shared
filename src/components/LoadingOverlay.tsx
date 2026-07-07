import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const OverlayRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:
    theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.7)',
  zIndex: theme.zIndex.modal,
}));

export interface LoadingOverlayProps {
  open: boolean;
}

/** Absolute overlay spinner; parent must be position: relative. */
export function LoadingOverlay({ open }: LoadingOverlayProps) {
  if (!open) return null;
  return (
    <OverlayRoot>
      <CircularProgress size={32} />
    </OverlayRoot>
  );
}
