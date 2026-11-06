import { type ReactNode } from 'react';
export type TimelineColorKey = 'success' | 'info' | 'warning' | 'error' | 'neutral' | 'primary';
export type TimelineDensity = 'comfortable' | 'compact';
export interface TimelineDimensions {
    resourceColWidth: number;
    dayColWidth: number;
    rowHeight: number;
    spanInset: number;
}
export declare const TIMELINE_DIMENSIONS: Record<TimelineDensity, TimelineDimensions>;
export interface TimelineResource {
    id: string;
}
export interface TimelineSpan<TData = unknown> {
    id: string;
    resourceId: string;
    /** Inclusive start date (YYYY-MM-DD). */
    startDate: string;
    /** Exclusive end date (YYYY-MM-DD) — a hotel checkout day. */
    endDate: string;
    label?: string;
    labelKey?: string;
    colorKey: TimelineColorKey;
    data?: TData;
    code?: string;
    status?: string;
    totalAmount?: number | null;
    tooltip?: ReactNode;
}
export interface TimelineMatrixProps<TResource extends TimelineResource, TSpanData = unknown> {
    resources: TResource[];
    spans: TimelineSpan<TSpanData>[];
    /** First visible day (YYYY-MM-DD). */
    startDate: string;
    /** Number of day columns. */
    days: number;
    /** Renders the left resource column cell. */
    renderResource: (resource: TResource, density?: TimelineDensity) => ReactNode;
    /** i18n key for the resource column header. */
    resourceLabelKey: string;
    onSpanClick?: (span: TimelineSpan<TSpanData>) => void;
    /** Clicking an empty cell (resourceId + YYYY-MM-DD). */
    onCellClick?: (resourceId: string, date: string) => void;
    /** Legend rendered above the grid, right-aligned. */
    legend?: ReactNode;
    loading?: boolean;
    /** Highlighted "today"; defaults to the current date. */
    today?: string;
    /** Date positioned as the first visible day column when the matrix opens. */
    initialScrollDate?: string;
    /** Layout density: 'comfortable' (default) or 'compact' (dense rows and columns). */
    density?: TimelineDensity;
    /** Custom dimension overrides. */
    customDimensions?: Partial<TimelineDimensions>;
    /** Optional custom tooltip builder for spans. */
    renderSpanTooltip?: (span: TimelineSpan<TSpanData>) => ReactNode;
    /** Optional custom tooltip builder for empty cells. */
    renderCellTooltip?: (resourceId: string, date: string) => ReactNode;
    /** Disable border and border-radius (e.g. when nested inside a styled Paper). */
    disableBorder?: boolean;
}
/**
 * Generic resource-timeline grid (e.g. the Room Allocation Matrix): sticky
 * resource column, N-day header with today highlight, positioned span bars.
 * Supports compact mode and rich tooltips. Purely presentational.
 */
export declare const TimelineMatrix: <TResource extends TimelineResource, TSpanData = unknown>({ resources, spans, startDate, days, renderResource, resourceLabelKey, onSpanClick, onCellClick, legend, loading, today, initialScrollDate, density, customDimensions, renderSpanTooltip, renderCellTooltip, disableBorder, }: TimelineMatrixProps<TResource, TSpanData>) => import("react").JSX.Element;
