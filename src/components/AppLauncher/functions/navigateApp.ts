import type { IAppItem } from '../interfaces/IAppItem';

/**
 * Checks whether a resolved URL is a real reachable address (not a localhost
 * placeholder that leaked into a deployed build).
 */
const isReachableUrl = (url: string): boolean => {
  if (!url) return false;
  try {
    const { hostname } = new URL(url);
    return hostname !== 'localhost' && hostname !== '127.0.0.1';
  } catch {
    return false;
  }
};

export interface NavigateAppOptions {
  app: IAppItem;
  currentAppId?: string;
  onSelectApp?: (app: IAppItem) => void;
}

/**
 * Handles navigation when an app is selected in the AppLauncher.
 *
 * Rules:
 * - If a custom `onSelectApp` callback is provided, delegates to it.
 * - Clicking the currently active app does nothing (prevents duplicate windows).
 * - Apps with no reachable URL, or marked `disabled`, redirect the current page
 *   to `/404` so users see a themed error page instead of a broken navigation.
 * - All other apps always open in a new browser tab / window so the current
 *   app session is never replaced (works for both PWA and regular browser tabs).
 */
export const navigateApp = ({
  app,
  currentAppId,
  onSelectApp,
}: NavigateAppOptions): void => {
  if (onSelectApp) {
    onSelectApp(app);
    return;
  }

  const isCurrentApp = Boolean(currentAppId && app.id === currentAppId);

  // Do not open a new window for the currently active app
  if (isCurrentApp) return;

  const targetUrl = app.url;

  // Redirect to 404 for disabled apps, or apps whose URL is not reachable
  // (e.g. a localhost URL that wasn't replaced in production, or no URL at all)
  if (app.disabled || !isReachableUrl(targetUrl ?? '')) {
    window.location.href = '/404';
    return;
  }

  // Always open external / other apps in a new tab so the current session is preserved.
  // Use noopener,noreferrer for security. We intentionally avoid popup=yes so that
  // the browser treats it as a regular new tab rather than a popup window.
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
};

