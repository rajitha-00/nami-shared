import type { ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    titleKey: string;
    descriptionKey?: string;
    descriptionParams?: Record<string, unknown>;
    /** Optional CTA (e.g. an "Add client" button). */
    action?: ReactNode;
}
/** Matches the Figma empty-table placeholder. */
export declare function EmptyState({ icon, titleKey, descriptionKey, descriptionParams, action, }: EmptyStateProps): import("react").JSX.Element;
