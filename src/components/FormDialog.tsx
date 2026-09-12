import { useEffect, type ReactNode } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  type DefaultValues,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { ZodType } from 'zod';
import type { DialogSize } from '../types/ui';
import { AppDialog } from './AppDialog';

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
export function FormDialog<TValues extends FieldValues>({
  open,
  titleKey,
  titleParams,
  size = 'sm',
  schema,
  defaultValues,
  onSubmit,
  onClose,
  submitting = false,
  submitKey = 'common:actions.save',
  cancelKey = 'common:actions.cancel',
  children,
}: FormDialogProps<TValues>) {
  const { t } = useTranslation();
  const form = useForm<TValues>({
    resolver: zodResolver(schema as any),
    defaultValues,
    mode: 'onBlur',
  });

  // Re-seed the form each time the dialog opens with fresh data (create vs edit).
  const { reset } = form;
  useEffect(() => {
    if (open) reset(defaultValues);
  }, [open, defaultValues, reset]);

  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
  });

  return (
    <AppDialog
      open={open}
      titleKey={titleKey}
      titleParams={titleParams}
      size={size}
      loading={submitting}
      disableClose={form.formState.isDirty}
      onClose={onClose}
      actions={
        <>
          <Button onClick={onClose} color="inherit" disabled={submitting}>
            {t(cancelKey)}
          </Button>
          <Button
            onClick={() => {
              void handleSubmit();
            }}
            variant="contained"
            disabled={submitting}
            startIcon={submitting ? <CircularProgress size={16} color="inherit" /> : undefined}
          >
            {submitting ? t('common:actions.saving', { defaultValue: 'Saving...' }) : t(submitKey)}
          </Button>
        </>
      }
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        noValidate
      >
        {children(form)}
      </form>
    </AppDialog>
  );
}
