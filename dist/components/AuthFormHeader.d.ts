import type { ReactNode } from 'react';
export interface AuthFormHeaderProps {
    title: ReactNode;
    subtitle?: ReactNode;
    badge?: ReactNode;
}
/** Reusable header for auth views (login, forgot password, reset password). */
export declare const AuthFormHeader: ({ title, subtitle, badge }: AuthFormHeaderProps) => import("react").JSX.Element;
