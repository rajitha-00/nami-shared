export type ID = string;
export interface BaseEntity {
    id: ID;
    createdAt: string;
    updatedAt: string;
}
export declare const UserRole: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly HOTEL_ADMIN: "HOTEL_ADMIN";
    readonly MANAGER: "MANAGER";
    readonly FRONT_DESK: "FRONT_DESK";
    readonly HOUSEKEEPING: "HOUSEKEEPING";
    readonly GUEST: "GUEST";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const Status: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly PENDING: "PENDING";
    readonly SUSPENDED: "SUSPENDED";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELLED: "CANCELLED";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const SubscriptionPlanTier: {
    readonly FREE: "FREE";
    readonly STARTER: "STARTER";
    readonly PROFESSIONAL: "PROFESSIONAL";
    readonly ENTERPRISE: "ENTERPRISE";
};
export type SubscriptionPlanTier = (typeof SubscriptionPlanTier)[keyof typeof SubscriptionPlanTier];
export declare const BillingCycle: {
    readonly MONTHLY: "MONTHLY";
    readonly YEARLY: "YEARLY";
};
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
