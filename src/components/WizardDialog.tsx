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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import type { SxProps, Theme } from '@mui/material/styles';
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
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  paperSx?: SxProps<Theme>;
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
  maxWidth = 'md',
  paperSx,
  children,
}: WizardDialogProps) {
  const { t } = useTranslation();
  const isLast = activeStep === steps.length - 1;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      fullWidth
      maxWidth={maxWidth}
      TransitionComponent={AppleDialogTransition}
      PaperProps={{
        sx: {
          maxWidth: { xs: 'calc(100vw - 32px)', sm: 780, md: 960 },
          width: '100%',
          borderRadius: '24px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08)',
          ...paperSx,
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2, pt: 2.5, px: 3 }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.01em' }}>
            {t(titleKey)}
          </Typography>
          <Chip
            label={`${activeStep + 1} / ${steps.length}`}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, fontSize: '0.75rem', height: 22 }}
          />
        </Stack>
        <IconButton aria-label={t('common:actions.close')} onClick={onCancel} size="small" edge="end">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <Stepper
        activeStep={activeStep}
        sx={{
          px: 3,
          pb: 2.5,
          '& .MuiStepLabel-label': {
            fontSize: '0.8125rem',
            fontWeight: 500,
            '&.Mui-active': {
              fontWeight: 700,
              color: 'primary.main',
            },
            '&.Mui-completed': {
              fontWeight: 600,
              color: 'text.primary',
            },
          },
          '& .MuiStepIcon-root': {
            width: 26,
            height: 26,
            '&.Mui-active': {
              color: 'primary.main',
            },
            '&.Mui-completed': {
              color: 'success.main',
            },
          },
        }}
      >
        {steps.map((step) => (
          <Step key={step.labelKey}>
            <StepLabel>{t(step.labelKey)}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <DialogContent dividers sx={{ position: 'relative', minHeight: 320, p: 3 }}>
        {children}
        <LoadingOverlay open={submitting} />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', px: 3, py: 2 }}>
        <Button onClick={onCancel} color="inherit" disabled={submitting} sx={{ borderRadius: '12px' }}>
          {t('common:actions.cancel')}
        </Button>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            onClick={onBack}
            color="inherit"
            disabled={activeStep === 0 || submitting}
            sx={{ borderRadius: '12px' }}
          >
            {t(backKey)}
          </Button>
          <Button
            variant="contained"
            onClick={isLast ? onFinish : onNext}
            disabled={!canNext || submitting}
            sx={{
              borderRadius: '12px',
              px: 3,
              fontWeight: 700,
            }}
          >
            {t(isLast ? finishKey : nextKey)}
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
