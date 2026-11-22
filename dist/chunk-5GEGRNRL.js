import { Status } from './chunk-FPVWWQJM.js';

// src/constants/regex.ts
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;
var PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// src/constants/status-colors.ts
var STATUS_COLORS = {
  [Status.ACTIVE]: "success",
  [Status.INACTIVE]: "default",
  [Status.PENDING]: "info",
  [Status.SUSPENDED]: "warning",
  [Status.EXPIRED]: "error",
  [Status.CANCELLED]: "error"
};

// src/constants/routes.ts
var SHARED_ROUTES = {
  LANDING: "/",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  NOT_FOUND: "*"
};

export { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX, SHARED_ROUTES, STATUS_COLORS };
//# sourceMappingURL=chunk-5GEGRNRL.js.map
//# sourceMappingURL=chunk-5GEGRNRL.js.map