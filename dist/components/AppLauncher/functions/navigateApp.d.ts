import type { IAppItem } from '../interfaces/IAppItem';
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
export declare const navigateApp: ({ app, currentAppId, onSelectApp, }: NavigateAppOptions) => void;
