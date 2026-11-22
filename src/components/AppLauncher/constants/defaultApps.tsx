import type { IAppItem } from '../interfaces/IAppItem';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from '@mui/icons-material/People';

export const PRODUCTION_APP_URLS: Record<string, string> = {
  'stay-os': 'https://stay.namios.app',
  'dine-os': 'https://dine.namios.app',
  'event-os': 'https://event.namios.app',
  'inventory-os': 'https://inventory.namios.app',
  'people-hr': 'https://people.namios.app',
  'super-admin': 'https://admin.namios.app',
  'payments-os': 'https://payments.namios.app',
  'nami-ai': 'https://ai.namios.app',
  'public-web': 'https://booking.namios.app',
  'docs': 'https://docs.namios.app',
};

export const VERCEL_APP_URLS: Record<string, string> = {
  'stay-os': 'https://hotelos-stay-os.vercel.app',
  'dine-os': 'https://hotelos-dine-os.vercel.app',
  'event-os': 'https://nami-event.vercel.app',
  'inventory-os': 'https://nami-inventory.vercel.app',
  'super-admin': 'https://hotelos-super-admin.vercel.app',
  'docs': 'https://nami-docs.vercel.app',
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
    devCommand: 'cd nami-stay && pnpm dev',
    iconBg: 'linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)',
    iconColor: '#007AFF',
    gradientBorder: 'from-blue-500/20 via-indigo-500/20 to-sky-500/20',
    icon: <HotelIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Core',
    badgeText: 'Port 5174',
    badgeColor: 'primary',
    shortcut: '⌘1',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/stay-os',
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
    devCommand: 'cd nami-dine && pnpm dev',
    iconBg: 'linear-gradient(135deg, #FF6B00 0%, #FFA800 100%)',
    iconColor: '#FF6B00',
    gradientBorder: 'from-rose-500/20 via-orange-500/20 to-amber-500/20',
    icon: <RestaurantIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Live',
    badgeText: 'Port 5175',
    badgeColor: 'warning',
    shortcut: '⌘2',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/dine-os',
    lordIconSrc: '/icons/dine.gif',
  },
  {
    id: 'event-os',
    name: 'Event OS',
    shortName: 'Events & Banquets',
    tagline: 'Banquet Booking, Weddings & Royal Certificates',
    description: 'End-to-end banquet hall allocations, multi-course catering menus, upfront deposit folios, and royal Liquid certificates.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 5176,
    url: 'http://localhost:5176',
    devCommand: 'cd nami-event && pnpm dev',
    iconBg: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)',
    iconColor: '#8B5CF6',
    gradientBorder: 'from-purple-500/20 via-fuchsia-500/20 to-pink-500/20',
    icon: <CelebrationIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Events',
    badgeText: 'Port 5176',
    badgeColor: 'primary',
    shortcut: '⌘3',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/event-os',
    lordIconSrc: '/icons/event.gif',
  },
  {
    id: 'inventory-os',
    name: 'Inventory OS',
    shortName: 'Inventory & Stock',
    tagline: 'F&B Stock & Kitchen Recipe BOM Engine',
    description: 'Real-time stock audits, automated recipe BOM deductions, room essentials par-levels, and purchase order creation.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 5178,
    url: 'http://localhost:5178',
    devCommand: 'cd nami-inventory && pnpm dev',
    iconBg: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    iconColor: '#0891B2',
    gradientBorder: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20',
    icon: <InventoryIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Stock',
    badgeText: 'Port 5178',
    badgeColor: 'default',
    shortcut: '⌘4',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/inventory-os',
    lordIconSrc: '/icons/inventory.gif',
  },
  {
    id: 'docs',
    name: 'Nami Docs',
    shortName: 'Docs & Cloud',
    tagline: 'Document Cloud & Developer Manuals',
    description: 'Centralized hotel document storage, guest identity cards, invoices, contracts, and platform API reference.',
    category: 'platform',
    status: 'OPERATIONAL',
    port: 5179,
    url: 'http://localhost:5179',
    devCommand: 'cd nami-docs && pnpm dev',
    iconBg: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
    iconColor: '#6366F1',
    gradientBorder: 'from-indigo-500/20 via-blue-500/20 to-purple-500/20',
    icon: <MenuBookIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Docs',
    badgeText: 'Port 5179',
    badgeColor: 'info',
    shortcut: '⌘5',
    isFavorite: true,
    docUrl: 'https://docs.namios.app',
    lordIconSrc: '/icons/admin.gif',
  },
  {
    id: 'people-hr',
    name: 'People (HR)',
    shortName: 'Staff & HR',
    tagline: 'Staff Roster, Attendance & Payroll',
    description: 'Shift scheduling, employee attendance tracking, payroll processing, leave management, and staff performance metrics.',
    category: 'operations',
    status: 'OPERATIONAL',
    port: 5177,
    url: 'http://localhost:5177',
    devCommand: 'cd nami-people && pnpm dev',
    iconBg: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
    iconColor: '#9333EA',
    gradientBorder: 'from-purple-500/20 via-fuchsia-500/20 to-violet-500/20',
    icon: <PeopleIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'HR',
    badgeText: 'Staff & HR',
    badgeColor: 'info',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/people-hr',
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
    devCommand: 'cd nami-admin && pnpm dev',
    iconBg: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
    iconColor: '#16A34A',
    gradientBorder: 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Admin',
    badgeText: 'Port 5173',
    badgeColor: 'default',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/super-admin',
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
    devCommand: 'cd be/nami-be && npm run dev',
    iconBg: 'linear-gradient(135deg, #00C7BE 0%, #30B0C7 100%)',
    iconColor: '#EA580C',
    gradientBorder: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    icon: <PaymentsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'Gateway',
    badgeText: 'Gateway',
    badgeColor: 'info',
    isFavorite: true,
    docUrl: 'https://docs.namios.app/payments-os',
    lordIconSrc: '/icons/payments.gif',
  },
  {
    id: 'nami-ai',
    name: 'Nami AI',
    shortName: 'AI Concierge',
    tagline: 'Smart Assistant & Messaging',
    description: 'AI Guest Concierge, Assistant & Smart Messaging across Guest Portals and Front Desk.',
    category: 'guest_experience',
    status: 'BETA',
    url: 'https://ai.namios.app',
    iconBg: 'linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)',
    iconColor: '#AF52DE',
    icon: <AutoAwesomeIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    badge: 'AI Beta',
    badgeText: 'Beta',
    badgeColor: 'info',
    docUrl: 'https://docs.namios.app/nami-ai',
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
    docUrl: 'https://docs.namios.app/guest-portal',
  },
];
