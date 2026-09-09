import type { IAppItem } from '../interfaces/IAppItem';
import { isPwa } from './isPwa';

export interface NavigateAppOptions {
  app: IAppItem;
  currentAppId?: string;
  onSelectApp?: (app: IAppItem) => void;
  isPwaMode?: boolean;
}

/**
 * Handles navigation when an app is selected in the AppLauncher.
 * In PWA mode (standalone), apps other than the active one open in a separate window
 * so the user's active PWA session is not overwritten.
 */
export const navigateApp = ({
  app,
  currentAppId,
  onSelectApp,
  isPwaMode = isPwa(),
}: NavigateAppOptions): void => {
  if (onSelectApp) {
    onSelectApp(app);
    return;
  }

  const targetUrl = app.url || app.path;
  if (!targetUrl) return;

  const isCurrentApp = Boolean(currentAppId && app.id === currentAppId);

  // If already inside the current app, avoid opening a duplicate window
  if (isCurrentApp) {
    if (app.path && typeof window !== 'undefined' && window.location.pathname !== app.path) {
      window.location.href = app.path;
    }
    return;
  }

  // In PWA mode or when external, open in a new window instead of navigating in-place
  if (isPwaMode || app.isExternal) {
    const windowFeatures = 'popup=yes,noopener,noreferrer';
    const newWindow = window.open(targetUrl, '_blank', windowFeatures);
    if (!newWindow) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
    return;
  }

  // Standard in-place navigation for regular browser tabs
  window.location.href = targetUrl;
};
