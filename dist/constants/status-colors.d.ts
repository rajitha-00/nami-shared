export type StatusColor = 'success' | 'default' | 'warning' | 'error' | 'info';
/** Maps every entity Status to a MUI palette color key (used by StatusChip). */
export declare const STATUS_COLORS: {
    readonly ACTIVE: "success";
    readonly INACTIVE: "default";
    readonly PENDING: "info";
    readonly SUSPENDED: "warning";
    readonly EXPIRED: "error";
    readonly CANCELLED: "error";
};
