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
/** App-wide Base UI toast host with Motion spring transitions. */
export declare const SnackbarProvider: ({ children }: SnackbarProviderProps) => import("react").JSX.Element;
export declare const useSnackbar: () => UseSnackbarReturn;
