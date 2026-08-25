import type { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const TopBarSlot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const TopBarNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexGrow: 1,
  justifyContent: 'center',
}));

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
export function AppTopBar({ appsLauncher, logo, nav, actions, onMenuClick }: AppTopBarProps) {
  const { t } = useTranslation();
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <Toolbar sx={(theme) => ({ minHeight: theme.custom.topBarHeight })}>
        <TopBarSlot>
          {onMenuClick ? (
            <IconButton
              aria-label={t('common:actions.openMenu')}
              onClick={onMenuClick}
              edge="start"
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          {appsLauncher}
          {logo}
        </TopBarSlot>
        <TopBarNav>{nav}</TopBarNav>
        <TopBarSlot>{actions}</TopBarSlot>
      </Toolbar>
    </AppBar>
  );
}
