/** Route names shared across NamiOS apps (each app maps these to its own paths). */
export const SHARED_ROUTES = {
  LANDING: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  NOT_FOUND: '*',
} as const;

export type SharedRoute = (typeof SHARED_ROUTES)[keyof typeof SHARED_ROUTES];
