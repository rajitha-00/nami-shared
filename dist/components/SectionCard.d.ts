import type { ReactNode } from 'react';
export interface SectionCardProps {
    titleKey: string;
    titleParams?: Record<string, unknown>;
    /** Optional header action (button, menu). */
    action?: ReactNode;
    children: ReactNode;
}
/** Titled card used for detail-view sections and dashboard panels. */
export declare function SectionCard({ titleKey, titleParams, action, children }: SectionCardProps): any;
