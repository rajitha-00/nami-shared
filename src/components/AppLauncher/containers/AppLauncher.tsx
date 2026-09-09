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
  onSelectApp,
  className,
  tooltip = 'NamiOS Apps',
}: AppLauncherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically resolve app URLs so deployed environments never point to localhost
  const resolvedApps = useMemo(() => {
    return apps.map((app) => ({
      ...app,
      url: resolveAppUrl(app),
    }));
  }, [apps]);

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
