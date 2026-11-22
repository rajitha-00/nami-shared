'use strict';

// src/utils/object.ts
function safeJsonParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return void 0;
  }
}
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}
function omit(obj, keys) {
  const excluded = new Set(keys);
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!excluded.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function isDefined(value) {
  return value !== null && value !== void 0;
}
function assertNever(x) {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}

// src/utils/array.ts
function groupBy(items, getKey) {
  const result = {};
  for (const item of items) {
    const key = getKey(item);
    (result[key] ?? (result[key] = [])).push(item);
  }
  return result;
}
function sortBy(items, getValue, dir = "asc") {
  const sorted = [...items].sort((a, b) => {
    const va = getValue(a);
    const vb = getValue(b);
    if (typeof va === "string" && typeof vb === "string") {
      return va.localeCompare(vb);
    }
    return Number(va) - Number(vb);
  });
  return dir === "desc" ? sorted.reverse() : sorted;
}
function uniqueBy(items, getKey) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const item of items) {
    const key = getKey(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

// src/utils/string.ts
function truncate(value, maxLength = 0, suffix = "\u2026") {
  if (!value || typeof value !== "string") return "";
  if (value.length <= maxLength) return value;
  return value.slice(0, Math.max(0, maxLength - suffix.length)).trimEnd() + suffix;
}
function initialsFromName(name) {
  if (!name || typeof name !== "string") return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const only = parts[0] ?? "";
    return only.slice(0, 2).toUpperCase();
  }
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts[parts.length - 1]?.charAt(0) ?? "";
  return (first + last).toUpperCase();
}
var BYTE_UNITS = ["B", "KB", "MB", "GB", "TB"];
function formatBytes(bytes, decimals = 1) {
  if (bytes <= 0) return "0 B";
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), BYTE_UNITS.length - 1);
  const value = bytes / 1024 ** exponent;
  const unit = BYTE_UNITS[exponent] ?? "B";
  return `${value.toFixed(exponent === 0 ? 0 : decimals)} ${unit}`;
}

// src/utils/misc.ts
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function buildQueryString(params) {
  const search = new URLSearchParams();
  if (params.page !== void 0) search.set("page", String(params.page));
  if (params.pageSize !== void 0) search.set("pageSize", String(params.pageSize));
  if (params.search) search.set("search", params.search);
  if (params.sortBy) search.set("sortBy", params.sortBy);
  if (params.sortDir) search.set("sortDir", params.sortDir);
  if (params.filters) {
    for (const [key, value] of Object.entries(params.filters)) {
      const values = Array.isArray(value) ? value : [value];
      for (const v of values) {
        search.append(key, v);
      }
    }
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

// src/utils/date.ts
var DAY_MS = 24 * 60 * 60 * 1e3;
function isoDate(value) {
  const iso = new Date(value).toISOString();
  return iso.slice(0, 10);
}
function todayIso() {
  const today = /* @__PURE__ */ new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function addDays(date, n) {
  return isoDate((/* @__PURE__ */ new Date(`${isoDate(date)}T00:00:00Z`)).getTime() + n * DAY_MS);
}
function differenceInDays(a, b) {
  const isoDayPattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDayPattern.test(a) || !isoDayPattern.test(b)) return 0;
  const start = (/* @__PURE__ */ new Date(`${a}T00:00:00Z`)).getTime();
  const end = (/* @__PURE__ */ new Date(`${b}T00:00:00Z`)).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 0;
  return Math.round((end - start) / DAY_MS);
}
function dateRangeDays(start, count) {
  return Array.from({ length: count }, (_, i) => addDays(start, i));
}

// src/utils/file-security.ts
var MAX_IMAGE_BYTES = 5 * 1024 * 1024;
var MAX_VIDEO_BYTES = 50 * 1024 * 1024;
var readHeader = async (file, length = 12) => new Uint8Array(await file.slice(0, length).arrayBuffer());
var validateImageFile = async (file, maxBytes = MAX_IMAGE_BYTES) => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const png = [137, 80, 78, 71, 13, 10, 26, 10].every(
    (value, index) => bytes[index] === value
  );
  const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  const webp = bytes.length >= 12 && String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
  return png || jpeg || webp;
};
var validateVideoFile = async (file, maxBytes = MAX_VIDEO_BYTES) => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const mp4 = bytes.length >= 8 && String.fromCharCode(...bytes.slice(4, 8)) === "ftyp";
  const webm = bytes.length >= 4 && bytes[0] === 26 && bytes[1] === 69 && bytes[2] === 223 && bytes[3] === 163;
  return mp4 || webm;
};

// src/constants/storage-keys.ts
var STORAGE_KEYS = {
  AUTH_TOKEN: "hotelos.authToken",
  LOCALE: "hotelos.locale",
  THEME_MODE: "hotelos.themeMode",
  SIDEBAR_STATE: "hotelos.sidebarState",
  LIST_VIEW_MODE: "hotelos.listViewMode"
};

// src/utils/sso.ts
function extractSsoContext() {
  if (typeof window === "undefined") return null;
  try {
    let token = null;
    let orgId = null;
    let propId = null;
    let tenantName = null;
    let logoBase64 = null;
    let brandColor = null;
    if (window.location.hash && window.location.hash.length > 1) {
      const hashString = window.location.hash.substring(1);
      const hashParams = new URLSearchParams(hashString);
      token = hashParams.get("sso_token") || hashParams.get("token") || hashParams.get("auth_token");
      orgId = hashParams.get("org_id") || hashParams.get("organizationId") || hashParams.get("orgId");
      propId = hashParams.get("prop_id") || hashParams.get("propertyId") || hashParams.get("propId");
      tenantName = hashParams.get("tenant_name") || hashParams.get("tenantName");
      logoBase64 = hashParams.get("logo_base64") || hashParams.get("logoUrl") || hashParams.get("logo");
      brandColor = hashParams.get("brand_color") || hashParams.get("brandColor");
    }
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      token = token || searchParams.get("sso_token") || searchParams.get("token") || searchParams.get("auth_token");
      orgId = orgId || searchParams.get("org_id") || searchParams.get("organizationId") || searchParams.get("orgId");
      propId = propId || searchParams.get("prop_id") || searchParams.get("propertyId") || searchParams.get("propId");
      tenantName = tenantName || searchParams.get("tenant_name") || searchParams.get("tenantName");
      logoBase64 = logoBase64 || searchParams.get("logo_base64") || searchParams.get("logoUrl") || searchParams.get("logo");
      brandColor = brandColor || searchParams.get("brand_color") || searchParams.get("brandColor");
    }
    if (token) {
      window.localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      window.localStorage.setItem("authToken", token);
      window.localStorage.setItem("hotelos_auth_token", token);
    }
    if (orgId) {
      window.localStorage.setItem("hotelos.org_id", orgId);
      window.localStorage.setItem("hotelos_org_id", orgId);
    }
    if (propId) {
      window.localStorage.setItem("hotelos.prop_id", propId);
      window.localStorage.setItem("hotelos_property_id", propId);
    }
    if (tenantName) {
      window.localStorage.setItem("hotelos.tenant_name", tenantName);
      window.localStorage.setItem("hotelos_tenant_name", tenantName);
    }
    if (logoBase64) {
      window.localStorage.setItem("hotelos.logo_base64", logoBase64);
      window.localStorage.setItem("hotelos_logo", logoBase64);
    }
    if (brandColor) {
      window.localStorage.setItem("hotelos.brand_color", brandColor);
    }
    if (token || orgId || propId || tenantName || logoBase64) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, document.title, cleanUrl);
      return { token, orgId, propId, tenantName };
    }
  } catch {
  }
  return null;
}
function buildSsoUrl(targetUrl) {
  if (!targetUrl || typeof window === "undefined") return targetUrl;
  try {
    const token = window.localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || window.localStorage.getItem("authToken") || window.localStorage.getItem("hotelos_auth_token") || window.sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    const orgId = window.localStorage.getItem("hotelos.org_id") || window.localStorage.getItem("hotelos_org_id");
    const propId = window.localStorage.getItem("hotelos.prop_id") || window.localStorage.getItem("hotelos_property_id");
    const tenantName = window.localStorage.getItem("hotelos.tenant_name") || window.localStorage.getItem("hotelos_tenant_name");
    const logoBase64 = window.localStorage.getItem("hotelos.logo_base64") || window.localStorage.getItem("hotelos_logo");
    const brandColor = window.localStorage.getItem("hotelos.brand_color");
    if (token || orgId || propId || tenantName || logoBase64) {
      const url = new URL(targetUrl, window.location.origin);
      const hashParams = new URLSearchParams(url.hash ? url.hash.substring(1) : "");
      if (token) hashParams.set("sso_token", token);
      if (orgId) hashParams.set("org_id", orgId);
      if (propId) hashParams.set("prop_id", propId);
      if (tenantName) hashParams.set("tenant_name", tenantName);
      if (logoBase64) hashParams.set("logo_base64", logoBase64);
      if (brandColor) hashParams.set("brand_color", brandColor);
      url.hash = hashParams.toString();
      return url.toString();
    }
  } catch {
  }
  return targetUrl;
}

exports.MAX_IMAGE_BYTES = MAX_IMAGE_BYTES;
exports.MAX_VIDEO_BYTES = MAX_VIDEO_BYTES;
exports.addDays = addDays;
exports.assertNever = assertNever;
exports.buildQueryString = buildQueryString;
exports.buildSsoUrl = buildSsoUrl;
exports.clamp = clamp;
exports.dateRangeDays = dateRangeDays;
exports.differenceInDays = differenceInDays;
exports.extractSsoContext = extractSsoContext;
exports.formatBytes = formatBytes;
exports.groupBy = groupBy;
exports.initialsFromName = initialsFromName;
exports.isDefined = isDefined;
exports.isoDate = isoDate;
exports.omit = omit;
exports.pick = pick;
exports.safeJsonParse = safeJsonParse;
exports.sleep = sleep;
exports.sortBy = sortBy;
exports.todayIso = todayIso;
exports.truncate = truncate;
exports.uniqueBy = uniqueBy;
exports.validateImageFile = validateImageFile;
exports.validateVideoFile = validateVideoFile;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map