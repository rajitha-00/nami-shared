import type { IAppItem } from '../interfaces/IAppItem';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';

export const PRODUCTION_APP_URLS: Record<string, string> = {
  'stay-os': 'https://stay.namios.app',
  'dine-os': 'https://dine.namios.app',
  'people-hr': 'https://people.namios.app',
  'super-admin': 'https://admin.namios.app',
  'payments-os': 'https://payments.namios.app',
  'inventory-os': 'https://inventory.namios.app',
  'nami-ai': 'https://ai.namios.app',
  'public-web': 'https://booking.namios.app',
};

export const VERCEL_APP_URLS: Record<string, string> = {
  'stay-os': 'https://hotelos-stay-os.vercel.app',
  'dine-os': 'https://hotelos-dine-os.vercel.app',
  'super-admin': 'https://hotelos-super-admin.vercel.app',
};

/**
 * Resolves an app's URL depending on the current environment.
 * Prevents deployed environments (e.g. *.namios.app or *.vercel.app) from redirecting to localhost.
 */
export function resolveAppUrl(app: { id: string; url?: string }): string {
  if (typeof window === 'undefined') {
    return app.url || PRODUCTION_APP_URLS[app.id] || '';
  }

  const hostname = window.location.hostname;
  const isLocalhost =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.local');

  if (isLocalhost && app.url) {
    return app.url;
  }

  const isLocalhostUrl =
    !app.url ||
    app.url.includes('localhost') ||
    app.url.includes('127.0.0.1');

  if (isLocalhostUrl) {
    const vercelUrl = VERCEL_APP_URLS[app.id];
    if (hostname.endsWith('.vercel.app') && vercelUrl) {
      return vercelUrl;
    }
    return PRODUCTION_APP_URLS[app.id] || app.url || '';
  }

  return app.url || '';
}

export const DEFAULT_HOTELOS_APPS: IAppItem[] = [
  {
    id: 'stay-os',
    name: 'Stay OS',
    shortName: 'PMS & Desk',
    tagline: 'Property Management System',
    description: 'Front desk operations, room allocation matrix grid, reservation wizard, housekeeping kanban, and folio engines.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 5174,
    url: 'http://localhost:5174',
    devCommand: 'cd hotelos-stay-os && pnpm dev',
    iconBg: 'linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)',
    iconColor: '#007AFF',
    gradientBorder: 'from-blue-500/20 via-indigo-500/20 to-sky-500/20',
    icon: <HotelIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Core',
    badgeText: 'Port 5174',
    badgeColor: 'primary',
    shortcut: '⌘1',
    isFavorite: true,
    docUrl: 'https://docs.stay.namios.app/',
    lordIconSrc: '/icons/stay.gif',
  },
  {
    id: 'dine-os',
    name: 'Dine OS',
    shortName: 'F&B & POS',
    tagline: 'Restaurant & Kitchen Workspace',
    description: 'Interactive floor seating canvas, live dual-pane POS order cart, kitchen queue kanban with rush indicators, and room bill transfers.',
    category: 'food_beverage',
    status: 'OPERATIONAL',
    port: 5175,
    url: 'http://localhost:5175',
    devCommand: 'cd hotelos-dine-os && pnpm dev',
    iconBg: 'linear-gradient(135deg, #FF6B00 0%, #FFA800 100%)',
    iconColor: '#FF6B00',
    gradientBorder: 'from-rose-500/20 via-orange-500/20 to-amber-500/20',
    icon: <RestaurantIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Live',
    badgeText: 'Port 5175',
    badgeColor: 'warning',
    shortcut: '⌘2',
    isFavorite: true,
    docUrl: 'https://docs.dine.namios.app/',
    lordIconSrc: '/icons/dine.gif',
  },
  {
    id: 'people-hr',
    name: 'People (HR)',
    shortName: 'Staff & HR',
    tagline: 'Staff Roster, Attendance & Payroll',
    description: 'Shift scheduling, employee attendance tracking, payroll processing, leave management, and staff performance metrics.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 5176,
    url: 'http://localhost:5176',
    devCommand: 'cd hotelos-stay-os && pnpm dev',
    iconBg: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
    iconColor: '#9333EA',
    gradientBorder: 'from-purple-500/20 via-fuchsia-500/20 to-violet-500/20',
    icon: <PeopleIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'HR',
    badgeText: 'HR Module',
    badgeColor: 'info',
    isFavorite: true,
    docUrl: 'https://docs.people.namios.app/',
    lordIconSrc: '/icons/people.gif',
  },
  {
    id: 'super-admin',
    name: 'Super Admin',
    shortName: 'Platform Control',
    tagline: 'Tenant & Subscription Control',
    description: 'Platform management dashboard tracking tenant onboarding, subscription tiers, MRR analytics, and system audit logs.',
    category: 'management',
    status: 'OPERATIONAL',
    port: 5173,
    url: 'http://localhost:5173',
    devCommand: 'cd hotelos-super-admin && pnpm dev',
    iconBg: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
    iconColor: '#16A34A',
    gradientBorder: 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Admin',
    badgeText: 'Port 5173',
    badgeColor: 'default',
    isFavorite: true,
    docUrl: 'https://docs.admin.namios.app/',
    lordIconSrc: '/icons/admin.gif',
  },
  {
    id: 'payments-os',
    name: 'Payments OS',
    shortName: 'Billing & Gateway',
    tagline: 'Multi-Currency Terminal & Invoicing',
    description: 'Payment gateway integrations, card terminal processing, room folio billing, cash drawer reconciliations, and tax calculations.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 4000,
    url: 'http://localhost:4000',
    devCommand: 'cd hotel-os-be && npm run dev',
    iconBg: 'linear-gradient(135deg, #00C7BE 0%, #30B0C7 100%)',
    iconColor: '#EA580C',
    gradientBorder: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    icon: <PaymentsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Gateway',
    badgeText: 'Gateway',
    badgeColor: 'info',
    isFavorite: true,
    docUrl: 'https://docs.payments.namios.app/',
    lordIconSrc: '/icons/payments.gif',
  },
  {
    id: 'inventory-os',
    name: 'Inventory OS',
    shortName: 'Stock & POs',
    tagline: 'F&B Stock & Supplies Control',
    description: 'Real-time stock level tracking, kitchen ingredient usage, linen inventories, low-stock alerts, and purchase order creation.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 5175,
    url: 'http://localhost:5175',
    devCommand: 'cd hotelos-dine-os && pnpm dev',
    iconBg: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    iconColor: '#0891B2',
    gradientBorder: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20',
    icon: <InventoryIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Stock',
    badgeText: 'Stock Engine',
    badgeColor: 'default',
    isFavorite: true,
    docUrl: 'https://docs.inventory.namios.app/',
    lordIconSrc: '/icons/inventory.gif',
  },
  {
    id: 'nami-ai',
    name: 'Nami AI',
    shortName: 'AI Concierge',
    tagline: 'Smart Assistant & Messaging',
    description: 'AI Guest Concierge, Assistant & Smart Messaging across Guest Portals and Front Desk.',
    category: 'guest_experience',
    status: 'BETA',
    port: 5176,
    url: 'http://localhost:5176',
    iconBg: 'linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)',
    iconColor: '#AF52DE',
    icon: <AutoAwesomeIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'AI Beta',
    badgeText: 'Beta',
    badgeColor: 'info',
    shortcut: '⌘4',
    isFavorite: false,
  },
  {
    id: 'public-web',
    name: 'Booking Engine',
    shortName: 'Guest Portal',
    tagline: 'Public Guest Direct Booking',
    description: 'Public Guest Direct Booking & Hotel Web Portal for direct room reservations.',
    category: 'marketing',
    status: 'OPERATIONAL',
    port: 3000,
    url: 'http://localhost:3000',
    iconBg: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
    iconColor: '#34C759',
    icon: <PublicIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Public',
    badgeText: 'Guest Web',
    badgeColor: 'success',
    isExternal: true,
  },
];
