import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { ConfirmDialog } from '../components/ConfirmDialog';

export type ConfirmVariant = 'danger' | 'warning' | 'info';

export interface ConfirmOptions {
  titleKey: string;
  messageKey: string;
  /** Interpolation values for the message, e.g. { name: client.name }. */
  messageParams?: Record<string, unknown>;
  variant?: ConfirmVariant;
  confirmKey?: string;
  cancelKey?: string;
  /** Optional anchor element to open confirmation right below the clicked button */
  anchorEl?: HTMLElement | null;
  /** When true, removes blocking dark backdrop */
  disableBackdrop?: boolean;
}

type ConfirmFn = (options: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

export interface ConfirmProviderProps {
  children: ReactNode;
}

/** Renders ONE shared ConfirmDialog and exposes a promise-based confirm(). */
export function ConfirmProvider({ children }: ConfirmProviderProps) {
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const resolverRef = useRef<((confirmed: boolean) => void) | null>(null);

  const confirm = useCallback<ConfirmFn>((next) => {
    setOptions(next);
    return new Promise<boolean>((resolve) => {
      resolverRef.current = resolve;
    });
  }, []);

  const settle = useCallback((confirmed: boolean) => {
    resolverRef.current?.(confirmed);
    resolverRef.current = null;
    setOptions(null);
  }, []);

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <ConfirmDialog
        open={options !== null}
        anchorEl={options?.anchorEl}
        disableBackdrop={options?.disableBackdrop}
        titleKey={options?.titleKey ?? ''}
        messageKey={options?.messageKey ?? ''}
        messageParams={options?.messageParams}
        variant={options?.variant ?? 'info'}
        confirmKey={options?.confirmKey}
        cancelKey={options?.cancelKey}
        onConfirm={() => {
          settle(true);
        }}
        onCancel={() => {
          settle(false);
        }}
      />
    </ConfirmContext.Provider>
  );
}

/**
 * Promise-based confirmation:
 * `const ok = await confirm({ titleKey, messageKey, variant: 'danger' });`
 */
export function useConfirm(): ConfirmFn {
  const ctx = useContext(ConfirmContext);
  if (!ctx) {
    throw new Error('useConfirm must be used within a ConfirmProvider');
  }
  return ctx;
}
