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
export declare function extractSsoContext(): SsoContext | null;
/**
 * Builds a target URL with an in-browser SSO hash fragment so the recipient app
 * seamlessly inherits the current tenant session without requiring re-login.
 */
export declare function buildSsoUrl(targetUrl: string): string;
