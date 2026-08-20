export type ConfirmDialogVariant = 'danger' | 'warning' | 'info';
export interface ConfirmDialogProps {
    open: boolean;
    titleKey: string;
    messageKey: string;
    messageParams?: Record<string, unknown>;
    variant?: ConfirmDialogVariant;
    confirmKey?: string;
    cancelKey?: string;
    onConfirm: () => void;
    onCancel: () => void;
}
/** The single confirm dialog rendered by ConfirmProvider (via useConfirm). */
export declare function ConfirmDialog({ open, titleKey, messageKey, messageParams, variant, confirmKey, cancelKey, onConfirm, onCancel, }: ConfirmDialogProps): any;
