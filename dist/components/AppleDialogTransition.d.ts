import { type ReactElement } from 'react';
import type { TransitionProps } from '@mui/material/transitions';
export interface AppleDialogTransitionProps extends TransitionProps {
    children: ReactElement;
}
/**
 * Apple-like 3D perspective, blur, and scale dialog transition inspired by Motion Base UI Dialog.
 * Uses 3D rotation, blur filter, translateZ depth, and Apple cubic-bezier easing.
 */
export declare const AppleDialogTransition: import("react").ForwardRefExoticComponent<AppleDialogTransitionProps & import("react").RefAttributes<HTMLDivElement>>;
