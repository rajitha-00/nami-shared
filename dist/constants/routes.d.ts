/** Route names shared across Hotel OS apps (each app maps these to its own paths). */
export declare const SHARED_ROUTES: {
    readonly LANDING: "/";
    readonly LOGIN: "/login";
    readonly FORGOT_PASSWORD: "/forgot-password";
    readonly NOT_FOUND: "*";
};
export type SharedRoute = (typeof SHARED_ROUTES)[keyof typeof SHARED_ROUTES];
