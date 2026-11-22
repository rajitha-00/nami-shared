import type { IAppItem } from '../interfaces/IAppItem';
/**
 * Checks whether a resolved URL is a real reachable address.
 * In local development (localhost / 127.0.0.1 / .local), localhost target URLs are valid.
 * In deployed/production builds, localhost placeholders are rejected to prevent broken navigation.
 */
export declare const isReachableUrl: (url: string) => boolean;
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
export declare const navigateApp: ({ app, currentAppId, onSelectApp, }: NavigateAppOptions) => void;
