import type { Status } from '../types/entities';
export interface StatusChipProps {
    status: Status;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
/** Colored chip for entity Status; label comes from the common namespace. Powered by MotionUI design tokens. */
export declare const StatusChip: ({ status, size, className }: StatusChipProps) => import("react").JSX.Element;
