import { describe, expect, it } from 'vitest';
import commonDe from './locales/de/common.json';
import commonEn from './locales/en/common.json';
import commonEs from './locales/es/common.json';
import commonFr from './locales/fr/common.json';
import commonSi from './locales/si/common.json';
import commonTa from './locales/ta/common.json';
import commonZh from './locales/zh/common.json';
import { diffTranslationKeys } from './keyParity';

const LOCALES = {
  si: commonSi,
  ta: commonTa,
  es: commonEs,
  zh: commonZh,
  fr: commonFr,
  de: commonDe,
} as const;

describe('common namespace key parity', () => {
  it.each(Object.entries(LOCALES))('%s has the same key set as en', (_code, translations) => {
    const { missing, extra } = diffTranslationKeys(commonEn, translations);
    expect(missing).toEqual([]);
    expect(extra).toEqual([]);
  });
});
