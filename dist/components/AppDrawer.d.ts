import type { ReactNode } from 'react';
declare const DRAWER_WIDTHS: {
    readonly sm: 400;
    readonly md: 520;
    readonly lg: 680;
    readonly xl: 900;
    readonly full: "100vw";
};
export type AppDrawerWidth = keyof typeof DRAWER_WIDTHS;
export interface AppDrawerProps {
    open: boolean;
    onClose: () => void;
    titleKey?: string;
    titleParams?: Record<string, unknown>;
    /** Plain-text title override (e.g. "Booking #BK-2841"). */
    title?: string;
    /** Status chip rendered next to the title. */
    statusChip?: ReactNode;
    /** Tabs row rendered under the header. */
    tabs?: ReactNode;
    /** Footer action buttons (stretched full-width). */
    footer?: ReactNode;
    width?: AppDrawerWidth | string | number;
    loading?: boolean;
    children: ReactNode;
}
/** Right-side drawer twin of AppDialog — detail views, editors, task panels. */
export declare function AppDrawer({ open, onClose, titleKey, titleParams, title, statusChip, tabs, footer, width, loading, children, }: AppDrawerProps): any;
export {};
