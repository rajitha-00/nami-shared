import { STORAGE_KEYS } from '../constants';

export interface SsoContext {
  token: string | null;
  orgId: string | null;
  propId: string | null;
  tenantName: string | null;
}

/**
 * Extracts SSO auth and tenant context from URL hash or query params,
 * persists it to local storage keys used across NamiOS apps,
 * and cleans the URL without reloading the page.
 */
export function extractSsoContext(): SsoContext | null {
  if (typeof window === 'undefined') return null;

  try {
    let token: string | null = null;
    let orgId: string | null = null;
    let propId: string | null = null;
    let tenantName: string | null = null;

    let logoBase64: string | null = null;
    let brandColor: string | null = null;

    // 1. Check hash fragment first (e.g. #sso_token=...&org_id=...&prop_id=...)
    if (window.location.hash && window.location.hash.length > 1) {
      const hashString = window.location.hash.substring(1);
      const hashParams = new URLSearchParams(hashString);
      token = hashParams.get('sso_token') || hashParams.get('token') || hashParams.get('auth_token');
      orgId = hashParams.get('org_id') || hashParams.get('organizationId') || hashParams.get('orgId');
      propId = hashParams.get('prop_id') || hashParams.get('propertyId') || hashParams.get('propId');
      tenantName = hashParams.get('tenant_name') || hashParams.get('tenantName');
      logoBase64 = hashParams.get('logo_base64') || hashParams.get('logoUrl') || hashParams.get('logo');
      brandColor = hashParams.get('brand_color') || hashParams.get('brandColor');
    }

    // 2. Fallback to query params if not found in hash
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      token = token || searchParams.get('sso_token') || searchParams.get('token') || searchParams.get('auth_token');
      orgId = orgId || searchParams.get('org_id') || searchParams.get('organizationId') || searchParams.get('orgId');
      propId = propId || searchParams.get('prop_id') || searchParams.get('propertyId') || searchParams.get('propId');
      tenantName = tenantName || searchParams.get('tenant_name') || searchParams.get('tenantName');
      logoBase64 = logoBase64 || searchParams.get('logo_base64') || searchParams.get('logoUrl') || searchParams.get('logo');
      brandColor = brandColor || searchParams.get('brand_color') || searchParams.get('brandColor');
    }

    if (token) {
      window.localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      window.localStorage.setItem('authToken', token);
      window.localStorage.setItem('hotelos_auth_token', token);
    }
    if (orgId) {
      window.localStorage.setItem('hotelos.org_id', orgId);
      window.localStorage.setItem('hotelos_org_id', orgId);
    }
    if (propId) {
      window.localStorage.setItem('hotelos.prop_id', propId);
      window.localStorage.setItem('hotelos_property_id', propId);
    }
    if (tenantName) {
      window.localStorage.setItem('hotelos.tenant_name', tenantName);
      window.localStorage.setItem('hotelos_tenant_name', tenantName);
    }
    if (logoBase64) {
      window.localStorage.setItem('hotelos.logo_base64', logoBase64);
      window.localStorage.setItem('hotelos_logo', logoBase64);
    }
    if (brandColor) {
      window.localStorage.setItem('hotelos.brand_color', brandColor);
    }

    if (token || orgId || propId || tenantName || logoBase64) {
      // Immediately clean hash and query from URL so credentials don't linger
      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, document.title, cleanUrl);

      return { token, orgId, propId, tenantName };
    }
  } catch {
    // Non-blocking fallback
  }

  return null;
}

/**
 * Builds a target URL with an in-browser SSO hash fragment so the recipient app
 * seamlessly inherits the current tenant session without requiring re-login.
 */
export function buildSsoUrl(targetUrl: string): string {
  if (!targetUrl || typeof window === 'undefined') return targetUrl;

  try {
    const token =
      window.localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) ||
      window.localStorage.getItem('authToken') ||
      window.localStorage.getItem('hotelos_auth_token') ||
      window.sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

    const orgId = window.localStorage.getItem('hotelos.org_id') || window.localStorage.getItem('hotelos_org_id');
    const propId = window.localStorage.getItem('hotelos.prop_id') || window.localStorage.getItem('hotelos_property_id');
    const tenantName = window.localStorage.getItem('hotelos.tenant_name') || window.localStorage.getItem('hotelos_tenant_name');
    const logoBase64 = window.localStorage.getItem('hotelos.logo_base64') || window.localStorage.getItem('hotelos_logo');
    const brandColor = window.localStorage.getItem('hotelos.brand_color');

    if (token || orgId || propId || tenantName || logoBase64) {
      const url = new URL(targetUrl, window.location.origin);
      const hashParams = new URLSearchParams(url.hash ? url.hash.substring(1) : '');

      if (token) hashParams.set('sso_token', token);
      if (orgId) hashParams.set('org_id', orgId);
      if (propId) hashParams.set('prop_id', propId);
      if (tenantName) hashParams.set('tenant_name', tenantName);
      if (logoBase64) hashParams.set('logo_base64', logoBase64);
      if (brandColor) hashParams.set('brand_color', brandColor);

      url.hash = hashParams.toString();
      return url.toString();
    }
  } catch {
    // Fallback to unmodified targetUrl
  }

  return targetUrl;
}
