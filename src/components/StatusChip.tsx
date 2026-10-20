import { Chip } from '@namios/motionui-react';
import { useTranslation } from 'react-i18next';
import { STATUS_COLORS } from '../constants/status-colors';
import type { Status } from '../types/entities';

export interface StatusChipProps {
  status: Status;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/** Colored chip for entity Status; label comes from the common namespace. Powered by MotionUI design tokens. */
export const StatusChip = ({ status, size = 'small', className }: StatusChipProps) => {
  const { t } = useTranslation();
  const color = STATUS_COLORS[status];
  const muiColor =
    color === 'default'
      ? undefined
      : (color as 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info');

  return (
    <Chip
      label={t(`common:status.${status}`)}
      size={size}
      color={muiColor}
      variant={color === 'default' ? 'outlined' : 'filled'}
      className={className}
    />
  );
};
