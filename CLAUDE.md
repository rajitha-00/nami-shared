# Hotel OS — Project Context

Hotel OS is a multi-tenant hotel management platform. Multiple frontend apps exist
(Super Admin, Hotel Admin, Front Desk, Housekeeping, Guest Portal). All apps share a
private library `@hotelos/shared` (components, hooks, theme, i18n, types, constants).

## Stack & rules
- Vite + React 18 + TypeScript (strict: true, noUncheckedIndexedAccess: true)
- MUI v6 — styling via `sx` prop and `styled()`; NEVER inline `style={}`; no CSS files except index.css resets
- Redux Toolkit: RTK Query for all server state, slices only for UI/client state
- react-i18next: 7 locales — en, si, ta, es, zh, fr, de. NO hardcoded user-facing strings, ever. Every string goes through t('namespace:key').
- react-router-dom v6 with lazy-loaded route modules
- react-hook-form + zod for all forms
- Path aliases: `@/` → src/, `@hotelos/shared` → shared lib

## Conventions
- Feature-folder structure: src/features/<feature>/{components,hooks,api,types.ts,constants.ts,index.ts}
- Components: PascalCase.tsx, one component per file, typed Props interface exported
- Hooks: useX.ts, always return typed objects (not tuples) when >2 values
- All enums as `const` objects + union types (no TS enum keyword)
- Constants in UPPER_SNAKE, grouped in constants.ts files; magic numbers/strings forbidden in components
- All API responses typed with generics: ApiResponse<T>, Paginated<T>
- Barrel exports (index.ts) per feature and per shared package folder
- Generic reusable primitives over one-off components (e.g., one ConfirmDialog used everywhere via useDialog hook)
- Dummy data lives in src/mocks/, served through RTK Query baseQuery fake handlers — components never import mocks directly

## RTK best practices (enforced)
- One `baseApi` created with createApi, features inject endpoints via baseApi.injectEndpoints
- Tag-based cache invalidation (tagTypes per entity: 'Client', 'Subscription', 'AdminUser', 'Plan', 'AuditLog')
- Selectors via createSelector; typed hooks useAppDispatch/useAppSelector only (never raw useDispatch/useSelector)
- No data fetching in useEffect. Ever.
- Mutations use optimistic updates where UX benefits (status toggles), invalidation elsewhere

## i18n
- Namespaces: common, auth, landing, dashboard, clients, subscriptions, users, settings, errors, validation
- Keys: camelCase dot paths (clients.table.columns.name)
- Language detector: localStorage → navigator; fallback en
- Interpolation for counts/dates; use i18next plurals; format dates via Intl through a useLocaleFormat hook

## Definition of done for every prompt
- pnpm typecheck, pnpm lint, pnpm build all pass
- No hardcoded strings, no `any`, no unused exports
- New shared-worthy code goes to @hotelos/shared, app-specific stays in the app
