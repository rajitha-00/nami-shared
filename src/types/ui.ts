import type { ReactNode } from 'react';
import type { SortDir } from './api';

export interface SelectOption<V = string> {
  value: V;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface TableColumn<T> {
  key: keyof T | string;
  /** i18n key for the column header. */
  labelKey: string;
  sortable?: boolean;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => ReactNode;
}

export const DialogSize = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;
export type DialogSize = (typeof DialogSize)[keyof typeof DialogSize];

export type SortDirection = SortDir;

export const LoadState = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;
export type LoadState = (typeof LoadState)[keyof typeof LoadState];
