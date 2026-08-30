import type { ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    titleKey?: string;
    title?: string;
    descriptionKey?: string;
    description?: string;
    descriptionParams?: Record<string, unknown>;
    /** Optional CTA (e.g. an "Add Room" button). */
    action?: ReactNode;
    compact?: boolean;
}
/**
 * Modern Empty State with Lucide-Animated icon, soft glassmorphism & optional CTA.
 */
export declare const EmptyState: ({ icon, titleKey, title, descriptionKey, description, descriptionParams, action, compact, }: EmptyStateProps) => import("react").JSX.Element;
