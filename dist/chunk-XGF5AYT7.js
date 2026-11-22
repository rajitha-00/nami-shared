import { STORAGE_KEYS } from './chunk-3XYH3GIR.js';

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

export { buildSsoUrl, extractSsoContext, formatBytes, initialsFromName, truncate };
//# sourceMappingURL=chunk-XGF5AYT7.js.map
//# sourceMappingURL=chunk-XGF5AYT7.js.map