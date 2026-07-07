import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';
import { SNACKBAR_AUTOHIDE_MS } from '../constants/app';

type SnackbarSeverity = 'success' | 'error' | 'info' | 'warning';

interface SnackbarMessage {
  key: number;
  severity: SnackbarSeverity;
  /** i18n key (namespace:path) or a plain, already-translated string. */
  message: string;
  params?: Record<string, unknown>;
}

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

/** Lightweight app-wide snackbar host. Messages can be i18n keys or plain strings. */
export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [current, setCurrent] = useState<SnackbarMessage | null>(null);
  const { t } = useTranslation();

  const show = useCallback(
    (severity: SnackbarSeverity) => (message: string, params?: Record<string, unknown>) => {
      setCurrent({ key: Date.now(), severity, message, params });
    },
    [],
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

  const handleClose = useCallback((_event?: unknown, reason?: string) => {
    if (reason === 'clickaway') return;
    setCurrent(null);
  }, []);

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar
        key={current?.key}
        open={current !== null}
        autoHideDuration={SNACKBAR_AUTOHIDE_MS}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {current ? (
          <Alert severity={current.severity} variant="filled" onClose={handleClose}>
            {t(current.message, current.params)}
          </Alert>
        ) : undefined}
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar(): UseSnackbarReturn {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return ctx;
}
