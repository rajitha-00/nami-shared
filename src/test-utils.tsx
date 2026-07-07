import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import i18next, { type i18n as I18nInstance } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import commonEn from './i18n/locales/en/common.json';
import { createHotelOsTheme } from './theme/createHotelOsTheme';

/** Isolated i18n instance so tests never touch the app singleton. */
export function createTestI18n(extraResources?: Record<string, object>): I18nInstance {
  const instance = i18next.createInstance();
  void instance.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    resources: { en: { common: commonEn, ...(extraResources ?? {}) } },
    interpolation: { escapeValue: false },
  });
  return instance;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: RenderOptions & { extraResources?: Record<string, object> },
): RenderResult {
  const i18n = createTestI18n(options?.extraResources);
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={createHotelOsTheme('light')}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}
