import type { IAppItem } from '../interfaces/IAppItem';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AppsIcon from '@mui/icons-material/Apps';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

export const DEFAULT_HOTELOS_APPS: IAppItem[] = [
  {
    id: 'stay-os',
    name: 'Stay OS',
    description: 'Hotel Property Management, Front Desk & Stays',
    category: 'operations',
    iconBg: 'linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)',
    icon: <HotelIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    url: 'http://localhost:5173',
    path: '/',
    badge: 'Core',
    badgeColor: 'primary',
    shortcut: '⌘1',
  },
  {
    id: 'dine-os',
    name: 'Dine OS',
    description: 'Restaurant POS, Table Service & Kitchen Display',
    category: 'food_beverage',
    iconBg: 'linear-gradient(135deg, #FF6B00 0%, #FFA800 100%)',
    icon: <RestaurantIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    url: 'http://localhost:5174',
    badge: 'Live',
    badgeColor: 'warning',
    shortcut: '⌘2',
  },
  {
    id: 'launchpad',
    name: 'Launchpad',
    description: 'Central Workspace, App Switcher & Organization Hub',
    category: 'platform',
    iconBg: 'linear-gradient(135deg, #5856D6 0%, #8E54E9 100%)',
    icon: <AppsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    url: 'http://localhost:5175',
    badge: 'Portal',
    badgeColor: 'default',
    shortcut: '⌘3',
  },
  {
    id: 'nami-ai',
    name: 'Nami AI',
    description: 'AI Guest Concierge, Assistant & Smart Messaging',
    category: 'guest_experience',
    iconBg: 'linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)',
    icon: <AutoAwesomeIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    url: 'http://localhost:5176',
    badge: 'AI Beta',
    badgeColor: 'info',
    shortcut: '⌘4',
  },
  {
    id: 'super-admin',
    name: 'Super Admin',
    description: 'Multi-Tenant Management, Licensing & Subscriptions',
    category: 'management',
    iconBg: 'linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)',
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    url: 'http://localhost:5177',
    badge: 'Admin',
    badgeColor: 'default',
  },
  {
    id: 'public-web',
    name: 'Booking Engine',
    description: 'Public Guest Direct Booking & Hotel Website',
    category: 'marketing',
    iconBg: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
    icon: <PublicIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    url: 'http://localhost:3000',
    isExternal: true,
  },
  {
    id: 'payments-hub',
    name: 'Payments & Billing',
    description: 'Omnichannel Invoicing, Payment Links & Terminals',
    category: 'operations',
    iconBg: 'linear-gradient(135deg, #00C7BE 0%, #30B0C7 100%)',
    icon: <PaymentsIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    path: '/payments',
  },
  {
    id: 'reports-insights',
    name: 'Insights & Reports',
    description: 'Revenue Metrics, Occupancy Trends & ADR Analytics',
    category: 'operations',
    iconBg: 'linear-gradient(135deg, #32ADE6 0%, #007AFF 100%)',
    icon: <AssessmentIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    path: '/reports',
  },
  {
    id: 'tourist-police',
    name: 'Tourist Police & TM30',
    description: 'Immigration Compliance, Guest Registration & Reporting',
    category: 'operations',
    iconBg: 'linear-gradient(135deg, #FF3B30 0%, #FF6259 100%)',
    icon: <LocalPoliceIcon sx={{ fontSize: 26, color: '#FFFFFF' }} />,
    path: '/tourist-police',
  },
];
