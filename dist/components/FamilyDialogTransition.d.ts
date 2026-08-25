import { type ReactElement } from 'react';
import type { TransitionProps } from '@mui/material/transitions';
export interface FamilyDialogTransitionProps extends TransitionProps {
    children: ReactElement;
}
/**
 * Family-style spring confirmation dialog transition inspired by Motion Family Dialog.
 * Uses high-fidelity spring physics (damping, stiffness), scale morphing, smooth translation, and subtle blur.
 */
export declare const FamilyDialogTransition: import("react").ForwardRefExoticComponent<FamilyDialogTransitionProps & import("react").RefAttributes<HTMLDivElement>>;
