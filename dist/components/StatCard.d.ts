import type { ReactNode } from 'react';
export type StatCardIconColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
export type StatCardTrend = 'up' | 'down' | 'flat';
export type StatCardSize = 'medium' | 'small' | 'mini';
export interface StatCardProps {
    labelKey: string;
    value: ReactNode;
    /** Formatted delta text, e.g. "+12.4%". */
    delta?: string;
    trend?: StatCardTrend;
    icon?: ReactNode;
    loading?: boolean;
    /**
     * 'stat' — label above value with inline icon (Super Admin dashboard).
     * 'kpi' — icon tile right-aligned, label and value compact on left (Stay OS property overview / revenue KPIs).
     */
    layout?: 'stat' | 'kpi';
    /** Small line under or beside the value ("4 floors · 3 categories", "Due before 14:00"). */
    subtitleKey?: string;
    subtitleParams?: Record<string, unknown>;
    /** Free-form badge rendered in kpi layout (delta chip). */
    badge?: ReactNode;
    /** Tint of the kpi icon tile. */
    iconColor?: StatCardIconColor;
    /** Card sizing: 'medium' (default), 'small', or 'mini'. */
    size?: StatCardSize;
    /** Backward compatibility with compactSize flag */
    compactSize?: boolean;
}
/** Dashboard KPI card with loading skeleton, trend indicator and two layouts. */
export declare const StatCard: ({ labelKey, value, delta, trend, icon, loading, layout, subtitleKey, subtitleParams, badge, iconColor, size, compactSize, }: StatCardProps) => import("react").JSX.Element;
