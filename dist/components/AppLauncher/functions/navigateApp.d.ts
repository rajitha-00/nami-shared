import type { IAppItem } from '../interfaces/IAppItem';
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
export declare const navigateApp: ({ app, currentAppId, onSelectApp, isPwaMode, }: NavigateAppOptions) => void;
