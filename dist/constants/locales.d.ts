export interface SupportedLocale {
    code: string;
    label: string;
    dir: 'ltr' | 'rtl';
}
export declare const SUPPORTED_LOCALES: readonly [{
    readonly code: "en";
    readonly label: "English";
    readonly dir: "ltr";
}, {
    readonly code: "si";
    readonly label: "සිංහල";
    readonly dir: "ltr";
}, {
    readonly code: "ta";
    readonly label: "தமிழ்";
    readonly dir: "ltr";
}, {
    readonly code: "es";
    readonly label: "Español";
    readonly dir: "ltr";
}, {
    readonly code: "zh";
    readonly label: "中文";
    readonly dir: "ltr";
}, {
    readonly code: "fr";
    readonly label: "Français";
    readonly dir: "ltr";
}, {
    readonly code: "de";
    readonly label: "Deutsch";
    readonly dir: "ltr";
}];
export type LocaleCode = (typeof SUPPORTED_LOCALES)[number]['code'];
export declare const DEFAULT_LOCALE: LocaleCode;
