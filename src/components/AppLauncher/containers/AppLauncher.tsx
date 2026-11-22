import { useState, useCallback, useMemo } from 'react';
import { MotionConfig } from 'framer-motion';
import type { AppLauncherProps, IAppItem } from '../interfaces/IAppItem';
import { DEFAULT_HOTELOS_APPS, resolveAppUrl } from '../constants/defaultApps';
import { FOLDER_LAYOUT_SPRING } from '../constants/animationConfig';
import { AppFolderMiniPreview } from '../components/AppFolderMiniPreview';
import { AppFolderModal } from '../components/AppFolderModal';
import { navigateApp } from '../functions/navigateApp';

export const AppLauncher = ({
  title = 'NamiOS Ecosystem',
  subtitle = 'Switch between NamiOS modules & portals',
  apps = DEFAULT_HOTELOS_APPS,
  currentAppId = 'stay-os',
  allowedAppIds,
  onSelectApp,
  className,
  tooltip = 'NamiOS Apps',
}: AppLauncherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically resolve app URLs and allowed status for current tenant
  const resolvedApps = useMemo(() => {
    let allowedSet: Set<string> | null = null;
    let isSuperAdmin = false;

    if (allowedAppIds && allowedAppIds.length > 0) {
      allowedSet = new Set(allowedAppIds);
    } else if (typeof window !== 'undefined') {
      try {
        const storedRole = window.localStorage.getItem('hotelos.user_role');
        if (storedRole && storedRole.toLowerCase() === 'super_admin') {
          isSuperAdmin = true;
        }

        const storedApps = window.localStorage.getItem('hotelos.accessible_apps');
        if (storedApps) {
          const parsed = JSON.parse(storedApps);
          if (Array.isArray(parsed) && parsed.length > 0) {
            allowedSet = new Set(parsed);
          }
        }
      } catch {
        // Fallback gracefully
      }
    }

    // Platform utilities and docs are universally accessible
    const alwaysAllowed = new Set(['payments-os', 'public-web', 'docs']);

    return apps
      .filter((app) => {
        // Hide super-admin portal from regular tenant staff if not super admin
        if (app.id === 'super-admin' && !isSuperAdmin && currentAppId !== 'super-admin') {
          return false;
        }
        return true;
      })
      .map((app) => {
        const isAllowed = isSuperAdmin || (allowedSet ? allowedSet.has(app.id) || alwaysAllowed.has(app.id) : true);
        const isLocked = !isAllowed;

        return {
          ...app,
          url: resolveAppUrl(app),
          isLocked,
          isSubscribed: isAllowed,
          badge: isLocked ? 'Locked' : app.badge,
          badgeColor: isLocked ? ('warning' as const) : app.badgeColor,
        };
      });
  }, [apps, allowedAppIds, currentAppId]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelectApp = useCallback(
    (app: IAppItem) => {
      const resolvedApp = {
        ...app,
        url: resolveAppUrl(app),
      };

      navigateApp({
        app: resolvedApp,
        currentAppId,
        onSelectApp,
      });
    },
    [currentAppId, onSelectApp],
  );

  return (
    <MotionConfig transition={FOLDER_LAYOUT_SPRING}>
      <AppFolderMiniPreview
        apps={resolvedApps}
        isOpen={isOpen}
        onClick={handleOpen}
        tooltip={tooltip}
        className={className}
      />
      <AppFolderModal
        title={title}
        subtitle={subtitle}
        apps={resolvedApps}
        currentAppId={currentAppId}
        isOpen={isOpen}
        onClose={handleClose}
        onSelectApp={handleSelectApp}
      />
    </MotionConfig>
  );
};
