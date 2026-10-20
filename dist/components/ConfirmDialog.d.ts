export type ConfirmDialogVariant = 'danger' | 'warning' | 'info';
export interface ConfirmDialogProps {
    open: boolean;
    titleKey: string;
    messageKey: string;
    messageParams?: Record<string, unknown>;
    variant?: ConfirmDialogVariant;
    confirmKey?: string;
    cancelKey?: string;
    loading?: boolean;
    /** Anchor element to position the popover directly below the trigger button */
    anchorEl?: HTMLElement | null;
    /** When true, backdrop is completely transparent */
    disableBackdrop?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
/** The single confirm dialog rendered by ConfirmProvider (via useConfirm) with Family-style motion and aesthetics. */
export declare const ConfirmDialog: ({ open, titleKey, messageKey, messageParams, variant, confirmKey, cancelKey, loading, anchorEl, disableBackdrop, onConfirm, onCancel, }: ConfirmDialogProps) => import("react").JSX.Element;
