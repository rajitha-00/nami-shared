import type { ReactNode } from 'react';
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
    width?: string | number;
    loading?: boolean;
    children: ReactNode;
}
/** Apple Large Dialog Modal twin of AppDrawer — all drawers present as modal dialogs with backdrop click lock. */
export declare function AppDrawer({ open, onClose, titleKey, titleParams, title, statusChip, tabs, footer, width, loading, children, }: AppDrawerProps): import("react").JSX.Element;
