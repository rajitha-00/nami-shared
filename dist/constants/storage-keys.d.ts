export declare const STORAGE_KEYS: {
    readonly AUTH_TOKEN: "hotelos.authToken";
    readonly LOCALE: "hotelos.locale";
    readonly THEME_MODE: "hotelos.themeMode";
    readonly SIDEBAR_STATE: "hotelos.sidebarState";
    readonly LIST_VIEW_MODE: "hotelos.listViewMode";
};
export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
