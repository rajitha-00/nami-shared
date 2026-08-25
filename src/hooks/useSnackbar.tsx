import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import { Toast } from '@base-ui/react/toast';
import { useTranslation } from 'react-i18next';
import { SNACKBAR_AUTOHIDE_MS } from '../constants/app';
import { MotionToastViewport, type MotionToastSeverity } from '../components/MotionToast';

type SnackbarSeverity = MotionToastSeverity;

export interface UseSnackbarReturn {
  showSuccess: (message: string, params?: Record<string, unknown>) => void;
  showError: (message: string, params?: Record<string, unknown>) => void;
  showInfo: (message: string, params?: Record<string, unknown>) => void;
  showWarning: (message: string, params?: Record<string, unknown>) => void;
}

const SnackbarContext = createContext<UseSnackbarReturn | null>(null);

export interface SnackbarProviderProps {
  children: ReactNode;
}

const SEVERITY_TITLES: Record<SnackbarSeverity, string> = {
  success: 'Success',
  error: 'Something went wrong',
  warning: 'Attention needed',
  info: 'Notice',
};

const SnackbarBridge = ({ children }: SnackbarProviderProps) => {
  const { t } = useTranslation();
  const toastManager = Toast.useToastManager();

  const show = useCallback(
    (severity: SnackbarSeverity) => (message: string, params?: Record<string, unknown>) => {
      toastManager.add({
        title: SEVERITY_TITLES[severity],
        description: t(message, params),
        type: severity,
        priority: severity === 'error' ? 'high' : 'low',
      });
    },
    [t, toastManager],
  );

  const value = useMemo<UseSnackbarReturn>(
    () => ({
      showSuccess: show('success'),
      showError: show('error'),
      showInfo: show('info'),
      showWarning: show('warning'),
    }),
    [show],
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <MotionToastViewport />
    </SnackbarContext.Provider>
  );
};

/** App-wide Base UI toast host with Motion spring transitions. */
export const SnackbarProvider = ({ children }: SnackbarProviderProps) => (
  <Toast.Provider limit={5} timeout={SNACKBAR_AUTOHIDE_MS}>
    <SnackbarBridge>{children}</SnackbarBridge>
  </Toast.Provider>
);

export const useSnackbar = (): UseSnackbarReturn => {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return ctx;
};
