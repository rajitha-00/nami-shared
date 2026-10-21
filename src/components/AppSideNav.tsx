import { useState, type ReactNode } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export interface SideNavItem {
  labelKey: string;
  icon?: ReactNode;
  path: string;
  /** Only highlight on an exact path match (e.g. a dashboard root like /admin). */
  exact?: boolean;
  children?: SideNavItem[];
}

/** Figma "Link - Active Tab" treatment: tinted background + primary text. */
const NavItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '4px',
  margin: theme.spacing(0.35, 1.25),
  paddingTop: 8,
  paddingBottom: 8,
  transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&.Mui-selected': {
    backgroundColor: theme.palette.mode === 'light'
      ? 'rgba(0, 122, 255, 0.10)'
      : 'rgba(10, 132, 255, 0.18)',
    color: theme.palette.mode === 'light' ? '#0A2540' : '#E8F0FE',
    fontWeight: 700,
    boxShadow: theme.palette.mode === 'light'
      ? '0 2px 8px rgba(0, 122, 255, 0.12), inset 0 0 0 1px rgba(0, 122, 255, 0.15)'
      : '0 2px 8px rgba(10, 132, 255, 0.20)',
    '& .MuiListItemIcon-root': {
      color: theme.palette.mode === 'light' ? '#005EC4' : '#90CAFF',
    },
    '& .MuiTypography-root': { fontWeight: 700 },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light'
        ? 'rgba(0, 122, 255, 0.15)'
        : 'rgba(10, 132, 255, 0.25)',
    },
  },
}));

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
  /** Compact density for information-dense operational products. */
  compact?: boolean;
  /** Optional app-specific navigation width. */
  width?: number;
}

const NavList = ({
  items,
  activePath,
  onNavigate,
  depth = 0,
  compact = false,
}: {
  items: SideNavItem[];
  activePath: string;
  onNavigate: (path: string) => void;
  depth?: number;
  compact?: boolean;
}) => {
  const { t } = useTranslation();
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  return (
    <List component={depth === 0 ? 'nav' : 'div'} disablePadding={depth > 0}>
      {items.map((item) => {
        const isActive =
          activePath === item.path ||
          (!item.exact && item.path !== '/' && activePath.startsWith(`${item.path}/`));
        const hasChildren = Boolean(item.children?.length);
        const isOpen = openMap[item.path] ?? isActive;

        return (
          <div key={item.path}>
            <NavItemButton
              selected={isActive && !hasChildren}
              onClick={() => {
                if (hasChildren) {
                  setOpenMap((prev) => ({ ...prev, [item.path]: !isOpen }));
                } else {
                  onNavigate(item.path);
                }
              }}
              sx={{
                pl: (compact ? 1.25 : 2) + depth * 2,
                py: compact ? 0.55 : 1,
                minHeight: compact ? 38 : 48,
                borderRadius: '4px',
                mx: compact ? 0.75 : 1.25,
                my: compact ? 0.2 : 0.35,
                '& .MuiListItemIcon-root': { minWidth: compact ? 32 : 40 },
                '& .MuiTypography-root': { fontSize: compact ? '0.78rem' : '0.875rem', lineHeight: 1.2 },
              }}
            >
              {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
              <ListItemText primary={t(item.labelKey)} />
              {hasChildren ? (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />) : null}
            </NavItemButton>
            {hasChildren && item.children ? (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <NavList
                  items={item.children}
                  activePath={activePath}
                  onNavigate={onNavigate}
                  depth={depth + 1}
                  compact={compact}
                />
              </Collapse>
            ) : null}
          </div>
        );
      })}
    </List>
  );
};

/** Config-driven collapsible side navigation shared by all NamiOS admin apps. */
export const AppSideNav = ({
  items,
  activePath,
  onNavigate,
  mobileOpen = false,
  onMobileClose,
  temporary = false,
  compact = false,
  width,
}: AppSideNavProps) => {
  const drawerWidth = width;
  const content = (
    <>
      <Toolbar sx={(theme) => ({ minHeight: theme.custom.topBarHeight })} />
      <NavList items={items} activePath={activePath} onNavigate={onNavigate} compact={compact} />
    </>
  );

  if (temporary) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={(theme) => ({
          '& .MuiDrawer-paper': { width: drawerWidth ?? theme.custom.sidebarWidth },
        })}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={(theme) => ({
        width: drawerWidth ?? theme.custom.sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth ?? theme.custom.sidebarWidth,
          boxSizing: 'border-box',
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      })}
    >
      {content}
    </Drawer>
  );
};
