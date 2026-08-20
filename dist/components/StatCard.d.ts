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
     * 'stat' — label above value (Super Admin dashboard).
     * 'kpi' — icon tile top-left, right-aligned uppercase label, badge slot
     * top-right (Stay OS property overview / revenue KPIs).
     */
    layout?: 'stat' | 'kpi';
    /** Small line under the value ("4 floors · 3 categories", "Due before 14:00"). */
    subtitleKey?: string;
    subtitleParams?: Record<string, unknown>;
    /** Free-form badge rendered top-right in kpi layout (delta chip). */
    badge?: ReactNode;
    /** Tint of the kpi icon tile. */
    iconColor?: StatCardIconColor;
    /** Card sizing: 'medium' (default), 'small', or 'mini'. */
    size?: StatCardSize;
}
/** Dashboard KPI card with loading skeleton, trend indicator and two layouts. */
export declare function StatCard({ labelKey, value, delta, trend, icon, loading, layout, subtitleKey, subtitleParams, badge, iconColor, size, }: StatCardProps): any;
