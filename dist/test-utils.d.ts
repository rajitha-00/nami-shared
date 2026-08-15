import type { ReactElement } from 'react';
import { type RenderOptions, type RenderResult } from '@testing-library/react';
import { type i18n as I18nInstance } from 'i18next';
/** Isolated i18n instance so tests never touch the app singleton. */
export declare function createTestI18n(extraResources?: Record<string, object>): I18nInstance;
export declare function renderWithProviders(ui: ReactElement, options?: RenderOptions & {
    extraResources?: Record<string, object>;
}): RenderResult;
