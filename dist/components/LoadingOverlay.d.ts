export interface LoadingOverlayProps {
    open: boolean;
    label?: string;
    size?: number;
}
/** Absolute overlay spinner using Namios HashLoader; parent must be position: relative. */
export declare function LoadingOverlay({ open, label, size }: LoadingOverlayProps): any;
