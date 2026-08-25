export interface UseDialogReturn<TData> {
    isOpen: boolean;
    /** Payload passed to `open` — e.g. the row being edited. Undefined in create mode. */
    data: TData | undefined;
    open: (data?: TData) => void;
    close: () => void;
    toggle: () => void;
}
/**
 * THE standard way to control any dialog/drawer/modal in every NamiOS app.
 *
 * @example
 * const dialog = useDialog<Client | undefined>();
 * dialog.open();        // create mode (data undefined)
 * dialog.open(client);  // edit mode
 */
export declare function useDialog<TData = undefined>(): UseDialogReturn<TData>;
