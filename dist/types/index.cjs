'use strict';

// src/types/entities.ts
var UserRole = {
  SUPER_ADMIN: "SUPER_ADMIN",
  HOTEL_ADMIN: "HOTEL_ADMIN",
  MANAGER: "MANAGER",
  FRONT_DESK: "FRONT_DESK",
  HOUSEKEEPING: "HOUSEKEEPING",
  GUEST: "GUEST"
};
var Status = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  SUSPENDED: "SUSPENDED",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED"
};
var SubscriptionPlanTier = {
  FREE: "FREE",
  STARTER: "STARTER",
  PROFESSIONAL: "PROFESSIONAL",
  ENTERPRISE: "ENTERPRISE"
};
var BillingCycle = {
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  ANNUAL: "ANNUAL",
  PRO_2YEAR: "PRO_2YEAR"
};

// src/types/ui.ts
var DialogSize = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl"
};
var LoadState = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

exports.BillingCycle = BillingCycle;
exports.DialogSize = DialogSize;
exports.LoadState = LoadState;
exports.Status = Status;
exports.SubscriptionPlanTier = SubscriptionPlanTier;
exports.UserRole = UserRole;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map