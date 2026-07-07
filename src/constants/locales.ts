export interface SupportedLocale {
  code: string;
  label: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'si', label: 'සිංහල', dir: 'ltr' },
  { code: 'ta', label: 'தமிழ்', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'zh', label: '中文', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
] as const satisfies readonly SupportedLocale[];

export type LocaleCode = (typeof SUPPORTED_LOCALES)[number]['code'];

export const DEFAULT_LOCALE: LocaleCode = 'en';
