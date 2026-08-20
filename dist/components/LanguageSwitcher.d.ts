export interface LanguageSwitcherProps {
    /** 'text' shows the current language label next to the icon. */
    variant?: 'icon' | 'text';
}
/** Menu of SUPPORTED_LOCALES; persists selection via the i18next detector cache. */
export declare function LanguageSwitcher({ variant }: LanguageSwitcherProps): any;
