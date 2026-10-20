import { type ReactNode } from 'react';
import { type SideNavItem } from './AppSideNav';
export interface DashboardLayoutProps {
    navItems: SideNavItem[];
    activePath: string;
    onNavigate: (path: string) => void;
    appsLauncher?: ReactNode;
    logo?: ReactNode;
    /** Top bar right-hand actions (search, language, avatar menu). */
    topBarActions?: ReactNode;
    children: ReactNode;
}
/**
 * TopBar + SideNav + content shell. The side nav collapses to a temporary
 * drawer below the `md` breakpoint.
 */
export declare const DashboardLayout: ({ navItems, activePath, onNavigate, appsLauncher, logo, topBarActions, children, }: DashboardLayoutProps) => import("react").JSX.Element;
