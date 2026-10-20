import type { ReactNode } from 'react';
export interface PageBreadcrumb {
    labelKey: string;
    path?: string;
}
export interface PageHeaderProps {
    titleKey: string;
    titleParams?: Record<string, unknown>;
    /** Optional plain-text title override (e.g. an entity name). */
    title?: string;
    subtitleKey?: string;
    subtitleParams?: Record<string, unknown>;
    breadcrumbs?: PageBreadcrumb[];
    onNavigate?: (path: string) => void;
    /** Right-aligned actions (buttons). */
    actions?: ReactNode;
}
/** Standard admin page header: breadcrumbs, title, subtitle, actions. */
export declare const PageHeader: ({ titleKey, titleParams, title, subtitleKey, subtitleParams, breadcrumbs, onNavigate, actions, }: PageHeaderProps) => import("react").JSX.Element;
