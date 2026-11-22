export type ID = string;

export interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

export const UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  HOTEL_ADMIN: 'HOTEL_ADMIN',
  MANAGER: 'MANAGER',
  FRONT_DESK: 'FRONT_DESK',
  HOUSEKEEPING: 'HOUSEKEEPING',
  GUEST: 'GUEST',
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const Status = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  SUSPENDED: 'SUSPENDED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
} as const;
export type Status = (typeof Status)[keyof typeof Status];

export const SubscriptionPlanTier = {
  FREE: 'FREE',
  STARTER: 'STARTER',
  PROFESSIONAL: 'PROFESSIONAL',
  ENTERPRISE: 'ENTERPRISE',
} as const;
export type SubscriptionPlanTier = (typeof SubscriptionPlanTier)[keyof typeof SubscriptionPlanTier];

export const BillingCycle = {
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
  ANNUAL: 'ANNUAL',
  PRO_2YEAR: 'PRO_2YEAR',
} as const;
export type BillingCycle = (typeof BillingCycle)[keyof typeof BillingCycle];

/** The signed-in platform user. */
export interface AuthUser extends BaseEntity {
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Session {
  user: AuthUser;
  token: string;
  expiresAt: string;
}

/** A tenant hotel organization (a "client" of the platform). */
export interface Client extends BaseEntity {
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  roomsCount: number;
  status: Status;
  planTier: SubscriptionPlanTier;
  joinedAt: string;
  mrr: number;
  subscribedApps?: string[];
  billingCycle?: BillingCycle;
  hasFreeWebsite?: boolean;
  monthlyTotal?: number;
  billingTotal?: number;
}

export interface SubscriptionSummary {
  planTier: SubscriptionPlanTier;
  billingCycle: BillingCycle;
  amount: number;
  currency: string;
  status: Status;
  startedAt: string;
  renewsAt: string;
}
