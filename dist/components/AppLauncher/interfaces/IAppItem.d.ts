import type { ReactNode } from 'react';
export type AppCategory = 'operations' | 'food_beverage' | 'platform' | 'guest_experience' | 'marketing' | 'management';
export interface IAppItem {
    id: string;
    name: string;
    shortName?: string;
    tagline?: string;
    description?: string;
    icon?: ReactNode;
    iconSrc?: string;
    iconBg?: string;
    iconColor?: string;
    gradientBorder?: string;
    url?: string;
    path?: string;
    port?: number;
    devCommand?: string;
    category?: AppCategory | string;
    status?: 'OPERATIONAL' | 'DEGRADED' | 'MAINTENANCE' | 'BETA' | 'DEVELOPMENT' | string;
    badge?: string;
    badgeText?: string;
    badgeColor?: 'primary' | 'success' | 'warning' | 'info' | 'default';
    metrics?: {
        label: string;
        value: string;
    };
    roles?: string[];
    features?: string[];
    isFavorite?: boolean;
    docUrl?: string;
    lordIconSrc?: string;
    lordIconTrigger?: string;
    isExternal?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLocked?: boolean;
    isSubscribed?: boolean;
    lockReason?: string;
    shortcut?: string;
}
export interface AppLauncherProps {
    /** Title shown at the top of the expanded folder (e.g. "NamiOS Ecosystem" or "Apps"). */
    title?: string;
    /** Subtitle shown under the title. */
    subtitle?: string;
    /** List of apps to display. Defaults to NamiOS ecosystem apps if omitted. */
    apps?: IAppItem[];
    /** The currently active app's ID (e.g. "stay-os"). */
    currentAppId?: string;
    /** List of app IDs allowed for the logged in tenant. Defaults to tenant's accessibleAppIds. */
    allowedAppIds?: string[];
    /** Callback fired when an app tile is clicked. */
    onSelectApp?: (app: IAppItem) => void;
    /** Optional custom class name. */
    className?: string;
    /** Custom trigger tooltip. */
    tooltip?: string;
}
