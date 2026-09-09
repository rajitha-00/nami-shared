import type { IAppItem } from '../interfaces/IAppItem';
export declare const PRODUCTION_APP_URLS: Record<string, string>;
export declare const VERCEL_APP_URLS: Record<string, string>;
/**
 * Resolves an app's URL depending on the current environment.
 * Prevents deployed environments (e.g. *.namios.app or *.vercel.app) from redirecting to localhost.
 */
export declare function resolveAppUrl(app: {
    id: string;
    url?: string;
}): string;
export declare const DEFAULT_HOTELOS_APPS: IAppItem[];
