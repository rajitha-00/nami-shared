import { useCallback, useState } from 'react';

export interface UseDialogReturn<TData> {
  isOpen: boolean;
  /** Payload passed to `open` — e.g. the row being edited. Undefined in create mode. */
  data: TData | undefined;
  open: (data?: TData) => void;
  close: () => void;
  toggle: () => void;
}

/**
 * THE standard way to control any dialog/drawer/modal in every Hotel OS app.
 *
 * @example
 * const dialog = useDialog<Client | undefined>();
 * dialog.open();        // create mode (data undefined)
 * dialog.open(client);  // edit mode
 */
export function useDialog<TData = undefined>(): UseDialogReturn<TData> {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<TData | undefined>(undefined);

  const open = useCallback((next?: TData) => {
    setData(next);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, data, open, close, toggle };
}
