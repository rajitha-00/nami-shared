---
name: Multi-Tenant Security Hardening & Threat Prevention
description: Comprehensive security guidelines for the NamiOS multi-tenant hotel management platform. Covers tenant isolation, JWT token validation, file upload hardening, request-scoped data safety, response caching controls, SSRF prevention, and full-stack security checklists for Express + MongoDB + Firebase Auth architecture.
---

# Multi-Tenant Security Hardening & Threat Prevention

Enforce strict security boundaries across every layer of the NamiOS platform — backend API, middleware pipeline, file uploads, frontend clients, and data persistence — to prevent tenant data leakage, token forgery, malicious file injection, and privilege escalation.

---

## 1. Tenant Isolation — The #1 Priority

> **CRITICAL RULE**: A logged-in user must NEVER be able to see, modify, or infer the existence of another tenant's data by manipulating URLs, headers, query parameters, or API payloads.

### A. Middleware Chain Enforcement

Every tenant-scoped API route MUST apply the full authentication + tenant resolution middleware chain in this exact order:

```
requireAuth → requireActiveIdentity / resolvePortalOrg → resolvePropertyId (where applicable)
```

* **`requireAuth`** (`middleware/auth.middleware.ts`): Verifies the Firebase ID token and populates `req.user`.
* **`requireActiveIdentity`** (`middleware/portal-auth.middleware.ts`): Cross-checks JWT claims (`role`, `organizationId`) against active database membership. Rejects stale or tampered claims.
* **`resolvePortalOrg`** (`middleware/portal-auth.middleware.ts`): For portal routes — validates the requested organization belongs to the authenticated user. Super-admins must still pass an explicit `x-organization-id`.
* **`resolvePropertyId`** (`middleware/dine.middleware.ts`): Validates `x-property-id` belongs to the resolved organization AND the user's `allowedPropertyIds`.

```typescript
// ✅ CORRECT — full chain applied
router.get(
  '/bookings',
  requireAuth,
  requireActiveIdentity,
  resolvePropertyId,
  BookingController.list,
);

// ❌ WRONG — missing tenant resolution, any authenticated user sees all data
router.get(
  '/bookings',
  requireAuth,
  BookingController.list,
);
```

### B. Database Query Scoping (Mandatory Tenant Filter)

Every MongoDB query in a tenant-scoped controller MUST include the `organizationId` filter. Never rely on "the middleware already checked it" — defense in depth requires the query itself to be scoped.

```typescript
// ✅ CORRECT — query is tenant-scoped
const bookings = await Booking.find({
  organizationId: req.organizationId,  // ALWAYS include
  propertyId: req.propertyId,          // When property-scoped
  status: 'CONFIRMED',
});

// ❌ WRONG — missing tenant filter, returns ALL tenants' bookings
const bookings = await Booking.find({ status: 'CONFIRMED' });
```

**Aggregation Pipelines**: Always start with a `$match` stage that includes `organizationId`:
```typescript
const pipeline = [
  { $match: { organizationId: new Types.ObjectId(req.organizationId) } },
  // ... remaining stages
];
```

### C. URL Manipulation Protection

Users WILL attempt to change IDs in URLs (e.g., `/api/v1/bookings/:bookingId`). Every controller that fetches by ID must verify ownership:

```typescript
// ✅ CORRECT — verifies the booking belongs to the tenant
const booking = await Booking.findOne({
  _id: bookingId,
  organizationId: req.organizationId,
});
if (!booking) {
  return res.status(404).json({ status: 'fail', message: 'Booking not found.' });
}

// ❌ WRONG — any tenant can access any booking by guessing the ID
const booking = await Booking.findById(bookingId);
```

### D. Cross-Tenant Data Leak Audit Checklist

When reviewing or writing any controller, verify ALL of the following:

- [ ] `req.organizationId` is used in every database query
- [ ] `req.propertyId` is used for property-scoped resources
- [ ] Lookup endpoints (findById, findOne) include tenant filter
- [ ] List/search endpoints scope results to tenant
- [ ] Update/delete operations verify ownership before mutation
- [ ] Aggregation pipelines start with tenant-scoped `$match`
- [ ] No data from other tenants is ever included in error messages
- [ ] Pagination does not leak total counts from other tenants

---

## 2. JWT Token Security & Authentication

### A. JWT Payload Validation Rules

The Firebase ID token MUST contain valid tenant claims. The `requireActiveIdentity` middleware already enforces this, but every developer must understand the threat model:

**Attack Vector**: An attacker obtains a valid Firebase token (e.g., from a compromised account) but the token lacks `organizationId` or `role` claims. Without validation, they could access system-wide resources.

```typescript
// The middleware verifies these critical fields:
const tokenClaimsMatchIdentity = (
  user: Request['user'],
  identity: ActiveIdentity,
): boolean => {
  const tokenRole = normalizeRole(String(user.role || ''));
  if (!tokenRole || tokenRole !== identity.role) return false;       // Role must match DB
  if (identity.isSuperAdmin) return !identity.organizationId;        // Super admins have no org
  return Boolean(
    identity.organizationId &&
    user.organizationId &&
    String(user.organizationId) === identity.organizationId,         // Org must match DB
  );
};
```

**Rules for JWT handling**:

1. **Never trust JWT claims alone** — always cross-verify against the database (User, PortalUser, AdminUser collections).
2. **Reject tokens without `organizationId`** for tenant-scoped routes — a token without tenant context must not access tenant data.
3. **Reject tokens with stale claims** — if database role/org differs from token claims, force re-authentication with HTTP 401 and message `"Session tenant claims are missing or stale. Sign in again."`.
4. **Never expose token contents in API responses** — decoded token data is internal; return only business data.
5. **Token bypass is TEST-ONLY** — the `test-mock-token` / `test-super-admin-token` shortcuts must only work when `NODE_ENV === 'test'`. Verify this gate exists and is not weakened.

### B. Firebase Custom Claims Management

When setting custom claims on Firebase tokens (during login/role assignment):

```typescript
// ✅ CORRECT — set minimal, verified claims
await admin.auth().setCustomUserClaims(firebaseUid, {
  role: databaseUser.role,
  organizationId: String(databaseUser.organizationId),
});

// ❌ WRONG — including sensitive data in claims
await admin.auth().setCustomUserClaims(firebaseUid, {
  role: databaseUser.role,
  organizationId: String(databaseUser.organizationId),
  permissions: fullPermissionsArray,  // Too much data in token
  email: databaseUser.email,          // Already in the standard token
});
```

### C. Token Refresh & Session Invalidation

* Force token refresh after role changes (`admin.auth().revokeRefreshTokens(uid)`).
* Set reasonable token expiry (Firebase default is 1 hour — do not extend).
* On user deactivation, immediately revoke tokens.

---

## 3. File Upload Security — Preventing Malicious Injection

### A. Backend File Validation (Magic Bytes)

**NEVER trust file extensions or MIME types from the client** — they can be spoofed. The existing `common/security/image-upload.ts` validates files by reading magic bytes (file signatures):

```typescript
// Existing magic byte detection — ALWAYS use this pattern
export const detectSafeImageType = (buffer: Buffer): SafeImageType | null => {
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (hasPrefix(buffer, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) {
    return { extension: '.png', mimeType: 'image/png' };
  }
  // JPEG: FF D8 FF
  if (hasPrefix(buffer, [0xff, 0xd8, 0xff])) {
    return { extension: '.jpg', mimeType: 'image/jpeg' };
  }
  // WebP: RIFF....WEBP
  if (hasPrefix(buffer, [0x52, 0x49, 0x46, 0x46]) && buffer.subarray(8, 12).toString('ascii') === 'WEBP') {
    return { extension: '.webp', mimeType: 'image/webp' };
  }
  return null; // REJECT — unknown file type
};
```

**Rules for any new upload endpoint**:

1. Use `multer.memoryStorage()` — never write to disk before validation.
2. Validate magic bytes using `detectSafeImageType()` or `detectSafeVideoType()`.
3. Reject if magic bytes don't match — return HTTP 415.
4. Generate a new random filename with `randomUUID()` — never use the original filename.
5. Write with `{ flag: 'wx' }` (exclusive create) to prevent overwrites.

### B. File Size Limits (Mandatory)

Enforce size limits at BOTH the multer level AND the controller level to prevent system crashes from oversized uploads:

```typescript
// Constants from common/security/image-upload.ts
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;    // 5 MB for images
export const MAX_VIDEO_BYTES = 50 * 1024 * 1024;   // 50 MB for videos

// Multer configuration — ALWAYS set limits
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_IMAGE_BYTES,  // Hard limit at multer level
    files: 1,                   // Only 1 file per request
    fields: 2,                  // Limit form fields to prevent abuse
  },
  fileFilter: (_req, file, cb) => {
    if (['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, and WebP images are allowed'));
    }
  },
});

// Controller — DOUBLE-CHECK size after multer
if (!file.buffer || file.buffer.length === 0 || file.buffer.length > MAX_IMAGE_BYTES) {
  res.status(400).json({ status: 'fail', message: 'Invalid image file' });
  return;
}
```

### C. Upload Directory Security — No Script Execution

The uploads directory MUST be treated as a hostile, untrusted zone. The existing `app.ts` enforces this:

```typescript
// 1. Whitelist allowed file extensions (reject everything else)
if (!/^\/[A-Za-z0-9_-]+\.(?:jpg|png|webp|mp4|webm)$/.test(req.path)) {
  res.status(404).end();
  return;
}

// 2. Set security headers to prevent script execution
res.setHeader('Content-Security-Policy', "default-src 'none'; sandbox");
res.setHeader('X-Content-Type-Options', 'nosniff');

// 3. Static file serving with safety options
express.static(uploadsDir, {
  fallthrough: false,    // Don't fall through to other routes
  dotfiles: 'deny',      // Block .htaccess, .env, etc.
  index: false,           // No directory listings
  redirect: false,        // No directory redirects
});
```

**Additional hardening rules**:

1. **Never serve uploads from the same domain as the API** in production — use a separate CDN or subdomain with restricted CSP.
2. **No server-side file execution** — the sandbox CSP header prevents JavaScript execution even if an HTML file is uploaded.
3. **No directory traversal** — the regex whitelist blocks `../` and subdirectory access.
4. **Rate limit uploads** — the existing `uploadRateLimit` (20 requests per 15 minutes) prevents abuse.

### D. Frontend File Validation (Defense in Depth)

The frontend MUST also validate before uploading:

```typescript
// constants/upload.constants.ts
export const MAX_IMAGE_SIZE_MB = 5;
export const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024;
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const ALLOWED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// hooks/useImageUpload.ts
export const validateImageFile = (file: File): string | null => {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return 'Only JPEG, PNG, and WebP images are allowed.';
  }
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return `File size must be under ${MAX_IMAGE_SIZE_MB}MB.`;
  }
  const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
  if (!ALLOWED_IMAGE_EXTENSIONS.includes(ext)) {
    return 'Invalid file extension.';
  }
  return null; // Valid
};
```

---

## 4. Request-Scoped Data — No Global State Leakage

### A. The Threat

If tenant data is stored in module-level variables, singleton caches, or global state, one tenant's request can pollute subsequent requests from other tenants.

**Attack Example**: Tenant A's data is cached in a module variable. Tenant B's next request reads the stale cache and sees Tenant A's data.

### B. Rules for Request-Scoped Data

```typescript
// ❌ DANGEROUS — module-level variable shared across ALL requests
let cachedTenantConfig: TenantConfig | null = null;

export const getTenantConfig = async (req: Request) => {
  if (!cachedTenantConfig) {
    cachedTenantConfig = await TenantConfig.findOne({ orgId: req.organizationId });
  }
  return cachedTenantConfig; // BUG: Returns Tenant A's config to Tenant B
};

// ✅ CORRECT — fresh query per request, no shared state
export const getTenantConfig = async (req: Request) => {
  return TenantConfig.findOne({ organizationId: req.organizationId }).lean();
};
```

**Absolute prohibitions**:

1. **No module-level `let`/`var` for tenant data** — use only `const` for static configuration (e.g., port numbers, feature flags that apply to ALL tenants).
2. **No singleton caches keyed by tenant** — if caching is needed, use a proper cache layer (Redis) with tenant-prefixed keys and TTL expiry.
3. **No `global` or `globalThis` for request data** — everything must flow through `req` object.
4. **No `app.locals` for tenant-specific data** — `app.locals` is shared across all requests.
5. **`res.locals` is safe** — it is request-scoped and dies after the response.

### C. Safe Caching Patterns (When Absolutely Necessary)

```typescript
// ✅ SAFE — cache with tenant-scoped key and TTL
import { LRUCache } from 'lru-cache';

const configCache = new LRUCache<string, TenantConfig>({
  max: 500,
  ttl: 5 * 60 * 1000, // 5 minutes
});

export const getCachedTenantConfig = async (organizationId: string) => {
  const cacheKey = `tenant-config:${organizationId}`;
  const cached = configCache.get(cacheKey);
  if (cached) return cached;

  const config = await TenantConfig.findOne({ organizationId }).lean();
  if (config) configCache.set(cacheKey, config);
  return config;
};
```

---

## 5. Response Caching & Data Leakage Prevention

### A. No-Store Headers (Already Implemented)

The `preventSensitiveResponseCaching` middleware in `no-store.middleware.ts` sets critical headers on ALL `/api/v1` responses:

```typescript
Cache-Control: no-store, no-cache, must-revalidate, private, max-age=0
Pragma: no-cache
Expires: 0
Surrogate-Control: no-store
Vary: Authorization, Origin, x-organization-id, x-property-id
```

**Rules**:

1. **Never remove these headers** — they prevent shared proxies, CDNs, and browsers from caching tenant-specific API responses.
2. **The `Vary` headers are critical** — they ensure that cached responses are differentiated by authentication and tenant context.
3. **Static asset uploads also use `no-store`** — the `/uploads` route sets `Cache-Control: no-store` to prevent cross-tenant image caching.

### B. Frontend Cache Safety

```typescript
// ✅ CORRECT — RTK Query tag invalidation clears stale data on logout/tenant switch
const handleLogout = () => {
  dispatch(api.util.resetApiState());     // Clears ALL cached API data
  localStorage.removeItem('authToken');
  sessionStorage.clear();
  navigate('/login');
};

// ✅ CORRECT — on tenant/property switch, invalidate all cached data
const handlePropertySwitch = (newPropertyId: string) => {
  dispatch(api.util.resetApiState());     // Force re-fetch for new context
  dispatch(setActiveProperty(newPropertyId));
};

// ❌ WRONG — switching tenant without clearing cache
const handlePropertySwitch = (newPropertyId: string) => {
  dispatch(setActiveProperty(newPropertyId));
  // Previous tenant's data still visible in cached queries!
};
```

---

## 6. CORS & Origin Security

### A. Origin Validation

The existing `config/cors.ts` implements a strict allowlist. Follow these rules:

1. **Never use `origin: '*'`** — wildcard CORS allows any website to make authenticated requests.
2. **Production origins are explicit** — only `*.namios.app` and specific Vercel deployments.
3. **Development localhost access is environment-gated** — only enabled when `NODE_ENV !== 'production'`.
4. **Vercel preview deployments use regex patterns** — validates the hostname pattern, not a wildcard.

### B. When Adding New Origins

```typescript
// ✅ CORRECT — add to applicationOrigins with full URL
const applicationOrigins = [
  // ... existing origins
  'https://new-app.namios.app',    // Explicit, HTTPS only
];

// ❌ WRONG — wildcard subdomain
// 'https://*.namios.app'  // Too broad, allows any subdomain
```

---

## 7. Rate Limiting & Abuse Prevention

### A. Existing Rate Limits

| Limiter | Max Requests | Window | Purpose |
|:---|:---|:---|:---|
| `apiRateLimit` | 300 | 1 minute | General API protection |
| `passwordResetRateLimit` | 5 | 15 minutes | Brute-force prevention |
| `uploadRateLimit` | 20 | 15 minutes | Upload abuse prevention |
| `expensiveOperationRateLimit` | 10 | 15 minutes | Heavy computation throttling |
| `mailServiceRateLimit` | 120 | 1 minute | Email spam prevention |

### B. Rules for New Endpoints

1. Apply `apiRateLimit` to all new route groups by default.
2. Apply `uploadRateLimit` to any file upload endpoint.
3. Apply `expensiveOperationRateLimit` to report generation, bulk exports, and aggregation endpoints.
4. Create a dedicated limiter for any new auth-related endpoint (login, password reset, OTP).

---

## 8. SSRF Prevention (Server-Side Request Forgery)

The existing `common/security/safe-fetch.ts` implements SSRF protection for outbound HTTP requests (e.g., iCal imports). Follow these rules for any feature that fetches external URLs:

1. **Always use `fetchExternalText()`** — never use raw `fetch()` or `axios` for user-provided URLs.
2. **Block private/internal IPs** — the `isBlockedNetworkAddress()` function rejects `10.x.x.x`, `172.16-31.x.x`, `192.168.x.x`, `127.x.x.x`, link-local, and IPv6 equivalents.
3. **Limit redirects** — max 3 redirects with re-validation at each hop.
4. **Limit response size** — max 2 MB to prevent memory exhaustion.
5. **DNS pinning** — resolve DNS once and pin the IP to prevent DNS rebinding attacks.

```typescript
// ✅ CORRECT — use the safe fetch utility
import { fetchExternalText } from '../../common/security/safe-fetch';
const icalData = await fetchExternalText(userProvidedUrl);

// ❌ WRONG — raw fetch with user input enables SSRF
const response = await fetch(userProvidedUrl);
```

---

## 9. Input Validation & Injection Prevention

### A. Zod Schema Validation

All request inputs (body, query, params) MUST be validated using Zod schemas via the `validate()` middleware:

```typescript
import { z } from 'zod';
import { validate } from '../../middleware/validation.middleware';

const createBookingSchema = z.object({
  body: z.object({
    guestName: z.string().min(1).max(200).trim(),
    email: z.string().email().max(254),
    roomId: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid room ID'),
    checkIn: z.string().datetime(),
    checkOut: z.string().datetime(),
  }),
});

router.post(
  '/bookings',
  requireAuth,
  requireActiveIdentity,
  validate(createBookingSchema),
  BookingController.create,
);
```

### B. MongoDB Injection Prevention

```typescript
// ❌ VULNERABLE — user input directly in query operators
const results = await Collection.find(req.body.filter);

// ✅ SAFE — explicitly construct query with validated fields
const results = await Collection.find({
  organizationId: req.organizationId,
  status: validatedStatus,  // From Zod-validated enum
  name: { $regex: escapeRegex(validatedSearchTerm), $options: 'i' },
});
```

### C. No Query Operator Injection

Never pass raw user input into MongoDB query operator positions (`$gt`, `$ne`, `$regex`, etc.). Always validate and explicitly construct queries.

---

## 10. Error Handling Security

### A. Production Error Responses

The existing `error.middleware.ts` correctly strips stack traces and error details in production:

```typescript
// ✅ CORRECT — stack traces only in non-production
if (process.env.NODE_ENV !== 'production') {
  responsePayload.stack = err.stack;
  responsePayload.errorDetails = err;
}
```

**Rules**:

1. **Never expose internal error details in production** — stack traces reveal file paths, dependency versions, and internal logic.
2. **Never include tenant data in error messages** — `"Booking 507f1f77 not found"` is safe; `"Booking for Hotel ABC not found"` leaks tenant names.
3. **Use generic messages for auth failures** — `"Unauthorized"` not `"User admin@tenant-x.com not found"`.
4. **Log detailed errors server-side** — Winston logs capture full error context for debugging.

---

## 11. Security Headers (Helmet + Custom)

The existing `app.ts` uses Helmet with custom configuration. Ensure these headers are always present:

| Header | Value | Purpose |
|:---|:---|:---|
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `Strict-Transport-Security` | `max-age=31536000` | Forces HTTPS |
| `Content-Security-Policy` | `default-src 'none'; sandbox` | On upload files only |
| `Cross-Origin-Resource-Policy` | `cross-origin` | For uploaded assets |

---

## 12. Frontend Security Checklist

### A. Token Storage

```typescript
// ✅ PREFERRED — use Firebase SDK's built-in token management
const token = await currentUser.getIdToken();
// Token is managed in memory by Firebase SDK, auto-refreshes

// ⚠️ ACCEPTABLE — localStorage for non-sensitive session state
localStorage.setItem('activePropertyId', propertyId);

// ❌ NEVER — store full JWT tokens in localStorage
localStorage.setItem('authToken', jwtToken);  // Vulnerable to XSS
```

### B. Route Protection

Every tenant-scoped route must be wrapped with an auth guard that:

1. Verifies the user is authenticated (Firebase auth state).
2. Verifies the user has an active organization context.
3. Redirects to login on auth failure.
4. Clears all cached data on logout.

### C. API Request Interceptors

All API calls must include tenant context headers:

```typescript
// RTK Query baseQuery should always include:
headers.set('Authorization', `Bearer ${token}`);
headers.set('x-organization-id', organizationId);
headers.set('x-property-id', propertyId);  // When applicable
```

### D. Sensitive Data Display

1. Never log JWT tokens to the browser console in production.
2. Mask sensitive fields (passport numbers, credit cards) in UI displays.
3. Clear form data after submission to prevent autofill leakage.

---

## 13. Security Review Checklist for New Features

When adding any new feature, module, or endpoint, verify ALL items:

### Authentication & Authorization
- [ ] Route applies `requireAuth` middleware
- [ ] Route applies `requireActiveIdentity` or `resolvePortalOrg`
- [ ] Route applies `requirePortalRole(...)` or `requireStayPermission(...)` for role/permission gating
- [ ] Route applies `resolvePropertyId` for property-scoped resources
- [ ] JWT claims are cross-verified against database — never trusted alone

### Tenant Isolation
- [ ] Every database query includes `organizationId` filter
- [ ] Every property-scoped query includes `propertyId` filter
- [ ] FindById operations verify tenant ownership
- [ ] Aggregation pipelines start with tenant-scoped `$match`
- [ ] Error messages don't leak other tenants' data
- [ ] List endpoints don't expose cross-tenant counts or metadata

### Input Validation
- [ ] Zod schema validates all body, query, and param inputs
- [ ] MongoDB ObjectId params are validated with regex
- [ ] String inputs are trimmed and length-limited
- [ ] No raw user input in MongoDB query operators
- [ ] Search/filter inputs are escaped for regex usage

### File Uploads
- [ ] Multer uses memory storage (not disk)
- [ ] File size limit is set at multer level (`MAX_IMAGE_BYTES` / `MAX_VIDEO_BYTES`)
- [ ] Magic byte validation via `detectSafeImageType()` / `detectSafeVideoType()`
- [ ] Random UUID filename generation (no user-provided filenames)
- [ ] Upload rate limit applied
- [ ] Frontend validates file type and size before upload

### Data Scoping
- [ ] No module-level `let`/`var` storing tenant data
- [ ] No singleton caches with tenant data (use tenant-keyed TTL cache if needed)
- [ ] No `global`/`globalThis` for request-specific data
- [ ] Response cache headers are `no-store` for tenant data

### Error Handling
- [ ] Production errors don't include stack traces
- [ ] Error messages don't reveal internal system details
- [ ] Auth failure messages are generic

### Rate Limiting
- [ ] Appropriate rate limiter applied to the route group
- [ ] Auth-related endpoints have strict rate limits

---

## 14. Existing Security Architecture Reference

The following files form the core security layer. Reference them when building new features:

| File | Purpose |
|:---|:---|
| `middleware/auth.middleware.ts` | Firebase token verification, `req.user` population |
| `middleware/portal-auth.middleware.ts` | Tenant identity resolution, JWT↔DB cross-validation, role-based access |
| `middleware/admin-auth.middleware.ts` | Admin-specific auth with DB cross-check |
| `middleware/organization.middleware.ts` | Backward-compatible org resolution export |
| `middleware/dine.middleware.ts` | Property ID resolution and ownership verification |
| `middleware/stay-permission.middleware.ts` | Granular per-module permission enforcement |
| `middleware/no-store.middleware.ts` | Anti-caching headers for all API responses |
| `middleware/rate-limit.middleware.ts` | MongoDB-backed rate limiting with in-memory fallback |
| `middleware/validation.middleware.ts` | Zod-based request validation |
| `middleware/error.middleware.ts` | Centralized error handling with production safety |
| `common/security/image-upload.ts` | Magic byte file validation, size limits, base64 decoding |
| `common/security/safe-fetch.ts` | SSRF-safe external HTTP client with DNS pinning |
| `config/cors.ts` | Origin allowlist with pattern-based Vercel preview support |
| `modules/upload/upload.routes.ts` | Upload endpoint with full middleware chain |
| `modules/upload/upload.controller.ts` | Upload handler with double-validation (multer + magic bytes) |

---

## 15. Threat Model Summary

| Threat | Mitigation | Implemented In |
|:---|:---|:---|
| Cross-tenant data access via URL manipulation | Tenant-scoped DB queries + ownership checks | All controllers |
| JWT token forgery / claim tampering | Firebase verification + DB cross-validation | `auth.middleware.ts`, `portal-auth.middleware.ts` |
| Malicious file upload (script injection) | Magic byte validation + CSP sandbox + extension whitelist | `image-upload.ts`, `app.ts` |
| Oversized file upload (DoS) | 5MB image / 50MB video limits at multer + controller | `upload.routes.ts`, `upload.controller.ts` |
| Global variable tenant data leakage | Request-scoped data only, no module-level tenant state | Architecture rule |
| Response cache serving stale tenant data | `no-store` headers + RTK Query cache reset on switch | `no-store.middleware.ts`, Frontend |
| SSRF via user-provided URLs | IP blocklist + DNS pinning + redirect limits | `safe-fetch.ts` |
| MongoDB injection | Zod validation + explicit query construction | `validation.middleware.ts` |
| Brute force attacks | Rate limiting (per-endpoint tiers) | `rate-limit.middleware.ts` |
| CORS bypass | Strict origin allowlist with environment gating | `config/cors.ts` |
| Clickjacking / XSS | Helmet security headers | `app.ts` |
| Error information disclosure | Production error stripping | `error.middleware.ts` |
