export const STORAGE_KEYS = {
  AUTH_TOKEN: 'hotelos.authToken',
  LOCALE: 'hotelos.locale',
  THEME_MODE: 'hotelos.themeMode',
  SIDEBAR_STATE: 'hotelos.sidebarState',
  LIST_VIEW_MODE: 'hotelos.listViewMode',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
