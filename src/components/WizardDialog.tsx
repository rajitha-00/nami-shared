import type { ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { AppleDialogTransition } from './AppleDialogTransition';
import { LoadingOverlay } from './LoadingOverlay';

export interface WizardStep {
  labelKey: string;
}

export interface WizardDialogProps {
  open: boolean;
  titleKey: string;
  steps: WizardStep[];
  /** Zero-based active step, controlled by the parent. */
  activeStep: number;
  /** Gate for the Next/Finish button (per-step validation). */
  canNext: boolean;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  /** Called by Next on the last step. */
  onFinish: () => void;
  submitting?: boolean;
  nextKey?: string;
  backKey?: string;
  finishKey?: string;
  children: ReactNode;
}

/** Numbered-stepper dialog for multi-step flows (e.g. the booking wizard). */
export function WizardDialog({
  open,
  titleKey,
  steps,
  activeStep,
  canNext,
  onNext,
  onBack,
  onCancel,
  onFinish,
  submitting = false,
  nextKey = 'common:actions.next',
  backKey = 'common:actions.back',
  finishKey = 'common:wizard.finish',
  children,
}: WizardDialogProps) {
  const { t } = useTranslation();
  const isLast = activeStep === steps.length - 1;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      fullWidth
      maxWidth="lg"
      TransitionComponent={AppleDialogTransition}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {t(titleKey)}
        <IconButton aria-label={t('common:actions.close')} onClick={onCancel} size="small" edge="end">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <Stepper activeStep={activeStep} sx={{ px: 3, pb: 2 }}>
        {steps.map((step) => (
          <Step key={step.labelKey}>
            <StepLabel>{t(step.labelKey)}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <DialogContent dividers sx={{ position: 'relative', minHeight: 320 }}>
        {children}
        <LoadingOverlay open={submitting} />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', px: 3 }}>
        <Button onClick={onCancel} color="inherit" disabled={submitting}>
          {t('common:actions.cancel')}
        </Button>
        <span>
          <Button onClick={onBack} color="inherit" disabled={activeStep === 0 || submitting} sx={{ mr: 1 }}>
            {t(backKey)}
          </Button>
          <Button
            variant="contained"
            onClick={isLast ? onFinish : onNext}
            disabled={!canNext || submitting}
          >
            {t(isLast ? finishKey : nextKey)}
          </Button>
        </span>
      </DialogActions>
    </Dialog>
  );
}
