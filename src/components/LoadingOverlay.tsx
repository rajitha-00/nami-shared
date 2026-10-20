import { styled } from '@mui/material/styles';
import { NamiosLoader } from './NamiosLoader';

const OverlayRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:
    theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 23, 34, 0.85)',
  backdropFilter: 'blur(4px)',
  zIndex: theme.zIndex.modal,
}));

export interface LoadingOverlayProps {
  open: boolean;
  label?: string;
  size?: number;
}

/** Absolute overlay spinner using Namios HashLoader; parent must be position: relative. */
export const LoadingOverlay = ({ open, label, size = 48 }: LoadingOverlayProps) => {
  if (!open) return null;
  return (
    <OverlayRoot>
      <NamiosLoader size={size} label={label} />
    </OverlayRoot>
  );
};
