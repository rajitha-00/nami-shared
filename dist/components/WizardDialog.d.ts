import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
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
export declare const WizardDialog: ({ open, titleKey, steps, activeStep, canNext, onNext, onBack, onCancel, onFinish, submitting, nextKey, backKey, finishKey, maxWidth, paperSx, children, }: WizardDialogProps) => import("react").JSX.Element;
