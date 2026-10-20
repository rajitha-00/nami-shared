import type { ReactNode } from 'react';
export interface AppTopBarProps {
    /** Apps directory launcher / iOS folder slot (placed before logo). */
    appsLauncher?: ReactNode;
    /** Logo / brand slot (left). */
    logo?: ReactNode;
    /** Center navigation slot. */
    nav?: ReactNode;
    /** Actions slot (right): search, language switcher, avatar menu. */
    actions?: ReactNode;
    /** Shows the hamburger button (mobile drawer toggle). */
    onMenuClick?: () => void;
}
/** Fixed top app bar with logo / nav / actions slots. */
export declare const AppTopBar: ({ appsLauncher, logo, nav, actions, onMenuClick }: AppTopBarProps) => import("react").JSX.Element;
