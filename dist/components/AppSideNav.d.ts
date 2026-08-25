import { type ReactNode } from 'react';
export interface SideNavItem {
    labelKey: string;
    icon?: ReactNode;
    path: string;
    /** Only highlight on an exact path match (e.g. a dashboard root like /admin). */
    exact?: boolean;
    children?: SideNavItem[];
}
export interface AppSideNavProps {
    items: SideNavItem[];
    /** Current route path used for active-item highlight. */
    activePath: string;
    onNavigate: (path: string) => void;
    /** Mobile (temporary drawer) open state. */
    mobileOpen?: boolean;
    onMobileClose?: () => void;
    /** Force temporary variant below this breakpoint — handled by the parent layout. */
    temporary?: boolean;
}
/** Config-driven collapsible side navigation shared by all NamiOS admin apps. */
export declare function AppSideNav({ items, activePath, onNavigate, mobileOpen, onMobileClose, temporary, }: AppSideNavProps): import("react").JSX.Element;
