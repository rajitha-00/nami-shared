export interface LoadingOverlayProps {
    open: boolean;
    label?: string;
    size?: number;
}
/** Absolute overlay spinner using Namios HashLoader; parent must be position: relative. */
export declare const LoadingOverlay: ({ open, label, size }: LoadingOverlayProps) => import("react").JSX.Element | null;
