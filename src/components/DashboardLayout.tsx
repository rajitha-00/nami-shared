import { useState, type ReactNode } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useMediaBreakpoint } from '../hooks/useMediaBreakpoint';
import { AppSideNav, type SideNavItem } from './AppSideNav';
import { AppTopBar } from './AppTopBar';
import { AppLauncher } from './AppLauncher';

const LayoutRoot = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const ContentArea = styled('main')(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

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
export function DashboardLayout({
  navItems,
  activePath,
  onNavigate,
  appsLauncher = <AppLauncher />,
  logo,
  topBarActions,
  children,
}: DashboardLayoutProps) {
  const { isDesktop } = useMediaBreakpoint();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <LayoutRoot>
      <AppTopBar
        appsLauncher={appsLauncher}
        logo={logo}
        actions={topBarActions}
        onMenuClick={
          isDesktop
            ? undefined
            : () => {
                setMobileOpen((open) => !open);
              }
        }
      />
      <AppSideNav
        items={navItems}
        activePath={activePath}
        onNavigate={handleNavigate}
        temporary={!isDesktop}
        mobileOpen={mobileOpen}
        onMobileClose={() => {
          setMobileOpen(false);
        }}
      />
      <ContentArea>
        <Toolbar sx={(theme) => ({ minHeight: theme.custom.topBarHeight })} />
        {children}
      </ContentArea>
    </LayoutRoot>
  );
}
