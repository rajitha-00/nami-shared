import type { IAppItem } from '../interfaces/IAppItem';
import { buildSsoUrl } from '../../../utils/sso';
import { resolveAppUrl } from '../constants/defaultApps';

/**
 * Checks whether a resolved URL is a real reachable address.
 * In local development (localhost / 127.0.0.1 / .local), localhost target URLs are valid.
 * In deployed/production builds, localhost placeholders are rejected to prevent broken navigation.
 */
export const isReachableUrl = (url: string): boolean => {
  if (!url) return false;
  try {
    const { hostname } = new URL(url);
    if (!hostname) return false;

    if (typeof window !== 'undefined') {
      let currentHost = '';
      try {
        if (window.location.href) {
          currentHost = new URL(window.location.href).hostname;
        }
      } catch {
        currentHost = window.location.hostname || '';
      }

      const isCurrentHostLocal =
        currentHost === 'localhost' ||
        currentHost === '127.0.0.1' ||
        currentHost.endsWith('.local');

      if (isCurrentHostLocal) {
        return true;
      }
    }

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
 * - If an app is locked (tenant has not subscribed), prompt user about upgrade.
 * - Apps with no reachable URL redirect the current page to `/404` or show an alert.
 * - All allowed apps open in a new browser tab with SSO context passed securely via URL hash,
 *   so the target app seamlessly inherits the tenant session without requiring re-login.
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

  // Handle locked apps (unsubscribed by the tenant)
  if (app.isLocked) {
    if (typeof window !== 'undefined') {
      const adminUrl = resolveAppUrl({ id: 'super-admin' });
      const wantsUpgrade = window.confirm(
        `"${app.name}" is not included in your organization's current subscription.\n\n` +
        (app.lockReason ? `${app.lockReason}\n\n` : '') +
        `Would you like to open the NamiOS Admin Console to upgrade your subscription plan?`
      );
      if (wantsUpgrade && adminUrl) {
        window.open(adminUrl, '_blank', 'noopener,noreferrer');
      }
    }
    return;
  }

  const targetUrl = app.url;

  // Prevent navigating to disabled or unreachable apps
  if (app.disabled || !isReachableUrl(targetUrl ?? '')) {
    if (typeof window !== 'undefined') {
      window.location.href = '/404';
    }
    return;
  }

  // Pass active tenant auth context via in-browser SSO hash so recipient app starts authenticated
  const ssoUrl = !app.isExternal && targetUrl ? buildSsoUrl(targetUrl) : (targetUrl || '');

  // Always open external / other apps in a new tab so current session is preserved.
  window.open(ssoUrl, '_blank', 'noopener,noreferrer');
};
