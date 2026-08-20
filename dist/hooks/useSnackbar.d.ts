import { type ReactNode } from 'react';
export interface UseSnackbarReturn {
    showSuccess: (message: string, params?: Record<string, unknown>) => void;
    showError: (message: string, params?: Record<string, unknown>) => void;
    showInfo: (message: string, params?: Record<string, unknown>) => void;
    showWarning: (message: string, params?: Record<string, unknown>) => void;
}
export interface SnackbarProviderProps {
    children: ReactNode;
}
/** Lightweight app-wide snackbar host. Messages can be i18n keys or plain strings. */
export declare function SnackbarProvider({ children }: SnackbarProviderProps): any;
export declare function useSnackbar(): UseSnackbarReturn;
