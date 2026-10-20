import { type ReactNode } from 'react';
import { type DefaultValues, type FieldValues, type UseFormReturn } from 'react-hook-form';
import type { ZodType } from 'zod';
import type { DialogSize } from '../types/ui';
export interface FormDialogProps<TValues extends FieldValues> {
    open: boolean;
    titleKey: string;
    titleParams?: Record<string, unknown>;
    size?: DialogSize;
    schema: ZodType<TValues>;
    defaultValues: DefaultValues<TValues>;
    onSubmit: (values: TValues) => Promise<void> | void;
    onClose: () => void;
    /** True while the mutation is in flight — disables submit and shows overlay. */
    submitting?: boolean;
    submitKey?: string;
    cancelKey?: string;
    /** Render-prop receiving the react-hook-form instance. */
    children: (form: UseFormReturn<TValues>) => ReactNode;
}
/**
 * react-hook-form + zod inside AppDialog. Every create/edit dialog in every
 * NamiOS app composes this — do not hand-roll form dialogs.
 */
export declare const FormDialog: <TValues extends FieldValues>({ open, titleKey, titleParams, size, schema, defaultValues, onSubmit, onClose, submitting, submitKey, cancelKey, children, }: FormDialogProps<TValues>) => import("react").JSX.Element;
