import type { ReactNode } from 'react';
import type { Paginated, SortDir } from '../types/api';
import type { ID } from '../types/entities';
import type { TableColumn } from '../types/ui';
import { type ContextMenuItem } from './ContextMenu';
export interface DataTableProps<T extends {
    id: ID;
}> {
    columns: TableColumn<T>[];
    data: Paginated<T> | undefined;
    isLoading?: boolean;
    isError?: boolean;
    onRetry?: () => void;
    page: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    sortBy?: string;
    sortDir?: SortDir;
    onSortChange?: (key: string) => void;
    selectable?: boolean;
    selected?: ID[];
    onSelectedChange?: (selected: ID[]) => void;
    /** Optional row context menu generator for right-click actions (Apple motion style) */
    getContextMenuItems?: (row: T) => ContextMenuItem[];
    /** Row actions cell renderer (icon buttons, menus). */
    rowActions?: (row: T) => ReactNode;
    onRowClick?: (row: T) => void;
    /** Sticky toolbar slot (search field, filters). */
    toolbar?: ReactNode;
    /** Custom empty state (defaults to a generic one). */
    emptyState?: ReactNode;
    /** Compact mode: hides pagination (dashboard mini-tables). */
    compact?: boolean;
}
/**
 * Server-side paginated table driven by TableColumn<T>[]. Pairs directly with
 * useTableQuery + a Paginated<T> RTK Query endpoint.
 */
export declare const DataTable: <T extends {
    id: ID;
}>({ columns, data, isLoading, isError, onRetry, page, pageSize, onPageChange, onPageSizeChange, sortBy, sortDir, onSortChange, selectable, selected, onSelectedChange, getContextMenuItems, rowActions, onRowClick, toolbar, emptyState, compact, }: DataTableProps<T>) => import("react").JSX.Element;
