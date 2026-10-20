import type { ReactNode } from 'react';
export interface SectionCardProps {
    titleKey: string;
    titleParams?: Record<string, unknown>;
    /** Optional header action (button, menu). */
    action?: ReactNode;
    children: ReactNode;
    className?: string;
}
/** Titled card used for detail-view sections and dashboard panels powered by MotionUI. */
export declare const SectionCard: ({ titleKey, titleParams, action, children, className, }: SectionCardProps) => import("react").JSX.Element;
