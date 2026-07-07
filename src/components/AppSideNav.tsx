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
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.25, 1),
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiListItemIcon-root': { color: theme.palette.primary.contrastText },
    '&:hover': { backgroundColor: theme.palette.primary.dark },
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
}

function NavList({
  items,
  activePath,
  onNavigate,
  depth = 0,
}: {
  items: SideNavItem[];
  activePath: string;
  onNavigate: (path: string) => void;
  depth?: number;
}) {
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
              sx={{ pl: 2 + depth * 2 }}
            >
              {item.icon ? <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon> : null}
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
                />
              </Collapse>
            ) : null}
          </div>
        );
      })}
    </List>
  );
}

/** Config-driven collapsible side navigation shared by all Hotel OS admin apps. */
export function AppSideNav({
  items,
  activePath,
  onNavigate,
  mobileOpen = false,
  onMobileClose,
  temporary = false,
}: AppSideNavProps) {
  const content = (
    <>
      <Toolbar sx={(theme) => ({ minHeight: theme.custom.topBarHeight })} />
      <NavList items={items} activePath={activePath} onNavigate={onNavigate} />
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
          '& .MuiDrawer-paper': { width: theme.custom.sidebarWidth },
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
        width: theme.custom.sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: theme.custom.sidebarWidth,
          boxSizing: 'border-box',
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      })}
    >
      {content}
    </Drawer>
  );
}
