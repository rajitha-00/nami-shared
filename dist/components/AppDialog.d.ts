import type { ReactNode } from 'react';
import type { DialogSize } from '../types/ui';
export interface AppDialogProps {
    open: boolean;
    /** i18n key for the dialog title. */
    titleKey: string;
    titleParams?: Record<string, unknown>;
    size?: DialogSize;
    /** Rendered in the DialogActions bar. */
    actions?: ReactNode;
    /** Shows a loading overlay above the content. */
    loading?: boolean;
    /** When true (e.g. dirty form), backdrop/Escape close is blocked. */
    disableClose?: boolean;
    onClose: () => void;
    children: ReactNode;
}
/** Generic dialog wrapper every feature dialog composes. */
export declare const AppDialog: ({ open, titleKey, titleParams, size, actions, loading, disableClose, onClose, children, }: AppDialogProps) => import("react").JSX.Element;
