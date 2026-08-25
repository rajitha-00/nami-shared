import type { ReactNode } from 'react';

export type AppCategory =
  | 'operations'
  | 'food_beverage'
  | 'platform'
  | 'guest_experience'
  | 'marketing'
  | 'management';

export interface IAppItem {
  id: string;
  name: string;
  description?: string;
  icon?: ReactNode;
  iconSrc?: string;
  iconBg?: string;
  url?: string;
  path?: string;
  category?: AppCategory;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'warning' | 'info' | 'default';
  isExternal?: boolean;
  active?: boolean;
  disabled?: boolean;
  shortcut?: string;
}

export interface AppLauncherProps {
  /** Title shown at the top of the expanded folder (e.g. "Hotel OS Ecosystem" or "Apps"). */
  title?: string;
  /** Subtitle shown under the title. */
  subtitle?: string;
  /** List of apps to display. Defaults to Hotel OS ecosystem apps if omitted. */
  apps?: IAppItem[];
  /** The currently active app's ID (e.g. "stay-os"). */
  currentAppId?: string;
  /** Callback fired when an app tile is clicked. */
  onSelectApp?: (app: IAppItem) => void;
  /** Optional custom class name. */
  className?: string;
  /** Custom trigger tooltip. */
  tooltip?: string;
}
