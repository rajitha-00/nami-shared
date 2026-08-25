import type { ReactNode } from 'react';
export interface KanbanColumn<TId extends string> {
    id: TId;
    title: string;
    color?: string;
}
export interface KanbanBoardProps<TId extends string, TItem> {
    columns: KanbanColumn<TId>[];
    items: TItem[];
    getItemId: (item: TItem) => string;
    getItemColumnId: (item: TItem) => TId;
    renderItem: (item: TItem) => ReactNode;
}
/**
 * KanbanBoard: A generic step-progression workflow board.
 * Purely presentational; delegates item rendering and column selection.
 */
export declare function KanbanBoard<TId extends string, TItem>({ columns, items, getItemId, getItemColumnId, renderItem, }: KanbanBoardProps<TId, TItem>): import("react").JSX.Element;
