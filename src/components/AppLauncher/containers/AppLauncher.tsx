import { useState, useCallback } from 'react';
import { MotionConfig } from 'framer-motion';
import type { AppLauncherProps, IAppItem } from '../interfaces/IAppItem';
import { DEFAULT_HOTELOS_APPS } from '../constants/defaultApps';
import { FOLDER_LAYOUT_SPRING } from '../constants/animationConfig';
import { AppFolderMiniPreview } from '../components/AppFolderMiniPreview';
import { AppFolderModal } from '../components/AppFolderModal';

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

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelectApp = useCallback(
    (app: IAppItem) => {
      if (onSelectApp) {
        onSelectApp(app);
        return;
      }

      // Default navigation logic if no custom handler is passed
      if (app.url) {
        if (app.isExternal) {
          window.open(app.url, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = app.url;
        }
      } else if (app.path) {
        window.location.href = app.path;
      }
    },
    [onSelectApp],
  );

  return (
    <MotionConfig transition={FOLDER_LAYOUT_SPRING}>
      <AppFolderMiniPreview
        apps={apps}
        isOpen={isOpen}
        onClick={handleOpen}
        tooltip={tooltip}
        className={className}
      />
      <AppFolderModal
        title={title}
        subtitle={subtitle}
        apps={apps}
        currentAppId={currentAppId}
        isOpen={isOpen}
        onClose={handleClose}
        onSelectApp={handleSelectApp}
      />
    </MotionConfig>
  );
};
