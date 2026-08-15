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
export declare const DialogSize: {
    readonly XS: "xs";
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
};
export type DialogSize = (typeof DialogSize)[keyof typeof DialogSize];
export type SortDirection = SortDir;
export declare const LoadState: {
    readonly IDLE: "idle";
    readonly LOADING: "loading";
    readonly SUCCESS: "success";
    readonly ERROR: "error";
};
export type LoadState = (typeof LoadState)[keyof typeof LoadState];
