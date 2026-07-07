import Chip, { type ChipProps } from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import { STATUS_COLORS } from '../constants/status-colors';
import type { Status } from '../types/entities';

export interface StatusChipProps {
  status: Status;
  size?: ChipProps['size'];
}

/** Colored chip for entity Status; label comes from the common namespace. */
export function StatusChip({ status, size = 'small' }: StatusChipProps) {
  const { t } = useTranslation();
  const color = STATUS_COLORS[status];
  return (
    <Chip
      label={t(`common:status.${status}`)}
      size={size}
      color={color === 'default' ? undefined : color}
      variant={color === 'default' ? 'outlined' : 'filled'}
      sx={color === 'default' ? undefined : { color: '#fff' }}
    />
  );
}
