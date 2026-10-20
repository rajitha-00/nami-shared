import type { ReactNode } from 'react';
export interface AuthLayoutFeatureItem {
    text: string;
    icon?: ReactNode;
}
export interface AuthLayoutProps {
    children: ReactNode;
    /** Brand/logo slot rendered above the form or on mobile top bar. */
    logo?: ReactNode;
    /** Slot pinned top-right (e.g. LanguageSwitcher). */
    topRight?: ReactNode;
    /** Application branding name (e.g., "Nami Stay", "Nami Dine", "Nami Super Admin"). */
    appName?: string;
    /** Product category/tagline (e.g., "Property Management System", "Food & Beverage Operations"). */
    tagline?: string;
    /** Hero headline on the brand panel. */
    headline?: string;
    /** Hero description below headline. */
    description?: string;
    /** Value proposition bullet points with checkmark icons. */
    features?: (AuthLayoutFeatureItem | string)[];
    /** Brand panel footer text. */
    footer?: string;
    /** Optional custom gradient for brand panel. */
    brandGradient?: string;
    /** Force single centered card mode instead of split screen. */
    centeredOnly?: boolean;
}
import type { PaperProps } from '@mui/material/Paper';
export interface AuthFormShellProps extends PaperProps {
    children: ReactNode;
}
export declare const AuthFormShell: ({ children, sx, ...props }: AuthFormShellProps) => import("react").JSX.Element;
/**
 * Standard NamiOS Auth Layout with responsive split brand panel
 * and elevated form shell.
 */
export declare const AuthLayout: ({ children, logo, topRight, appName, tagline, headline, description, features, footer, brandGradient, centeredOnly, }: AuthLayoutProps) => import("react").JSX.Element;
