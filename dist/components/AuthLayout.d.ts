import type { ReactNode } from 'react';
export interface AuthLayoutProps {
    children: ReactNode;
    /** Brand/logo slot rendered above the card. */
    logo?: ReactNode;
    /** Slot pinned top-right (language switcher). */
    topRight?: ReactNode;
}
/** Centered card page for login / forgot-password screens. */
export declare function AuthLayout({ children, logo, topRight }: AuthLayoutProps): import("react").JSX.Element;
