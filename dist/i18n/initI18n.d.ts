import { type Resource, type i18n as I18nInstance } from 'i18next';
export declare const COMMON_NAMESPACE = "common";
export interface InitI18nOptions {
    /** App-specific namespaces, merged on top of the shared common namespace. */
    resources?: Resource;
    defaultNS?: string;
    debug?: boolean;
}
/**
 * Configures the shared i18next instance: language detection
 * (localStorage → navigator → 'en'), the 7 supported locales, and the
 * bundled common namespace. Apps add their own namespaces via `resources`
 * or later with `i18n.addResourceBundle`.
 */
export declare function initI18n(options?: InitI18nOptions): I18nInstance;
