import i18n, { type Resource, type i18n as I18nInstance } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../constants/locales';
import { STORAGE_KEYS } from '../constants/storage-keys';
import commonDe from './locales/de/common.json';
import commonEn from './locales/en/common.json';
import commonEs from './locales/es/common.json';
import commonFr from './locales/fr/common.json';
import commonSi from './locales/si/common.json';
import commonTa from './locales/ta/common.json';
import commonZh from './locales/zh/common.json';

export const COMMON_NAMESPACE = 'common';

const COMMON_RESOURCES: Resource = {
  en: { common: commonEn },
  si: { common: commonSi },
  ta: { common: commonTa },
  es: { common: commonEs },
  zh: { common: commonZh },
  fr: { common: commonFr },
  de: { common: commonDe },
};

export interface InitI18nOptions {
  /** App-specific namespaces, merged on top of the shared common namespace. */
  resources?: Resource;
  defaultNS?: string;
  debug?: boolean;
}

const mergeResources = (base: Resource, extra?: Resource): Resource => {
  if (!extra) return base;
  const merged: Resource = { ...base };
  for (const [lng, namespaces] of Object.entries(extra)) {
    merged[lng] = { ...(merged[lng] ?? {}), ...namespaces };
  }
  return merged;
};

/**
 * Configures the shared i18next instance: language detection
 * (localStorage → navigator → 'en'), the 7 supported locales, and the
 * bundled common namespace. Apps add their own namespaces via `resources`
 * or later with `i18n.addResourceBundle`.
 */
export function initI18n(options: InitI18nOptions = {}): I18nInstance {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: mergeResources(COMMON_RESOURCES, options.resources),
      fallbackLng: DEFAULT_LOCALE,
      supportedLngs: SUPPORTED_LOCALES.map((locale) => locale.code),
      defaultNS: options.defaultNS ?? COMMON_NAMESPACE,
      fallbackNS: COMMON_NAMESPACE,
      debug: options.debug ?? false,
      interpolation: { escapeValue: false },
      detection: {
        order: ['localStorage', 'navigator'],
        lookupLocalStorage: STORAGE_KEYS.LOCALE,
        caches: ['localStorage'],
      },
      react: { useSuspense: false },
    });
  return i18n;
}
