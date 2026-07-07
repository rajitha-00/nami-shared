import { Status } from '../types/entities';

export type StatusColor = 'success' | 'default' | 'warning' | 'error' | 'info';

/** Maps every entity Status to a MUI palette color key (used by StatusChip). */
export const STATUS_COLORS = {
  [Status.ACTIVE]: 'success',
  [Status.INACTIVE]: 'default',
  [Status.PENDING]: 'info',
  [Status.SUSPENDED]: 'warning',
  [Status.EXPIRED]: 'error',
  [Status.CANCELLED]: 'error',
} as const satisfies Record<Status, StatusColor>;
