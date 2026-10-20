---
name: React Component Structure and Best Practices
description: Guidelines for structuring React components, folder layouts (components, containers, hooks, interfaces, functions, constants), and arrow function exports.
---

# React Component Structure and Best Practices

Ensure the codebase remains highly modular, strictly typed, and structured consistently by adhering to the following architectural design patterns:

## 1. Feature Page Folder Layout
Each feature module or page view (e.g., `Bookings`, `Rooms`, `Payments`) must be placed in its own directory and structured into the following subfolders based on role:

*   **`components/`**: Presentation-only (dumb) components specific to the feature (e.g., `BookingDetailsDrawer`, `StatusChip`). These must rely primarily on props and should avoid triggering direct RTK query hooks or maintaining complex global states.
*   **`containers/`**: State coordinators, React Context providers, multi-step wizards, or logic wrappers (e.g., `BookingDetailsProvider`, `NewReservationProvider`). Use containers when you need to share state or manage complex workflows across multiple subcomponents.
*   **`hooks/`**: Custom React hooks (e.g., `useBookingsPage.ts`, `useBookingActions.ts`) that orchestrate feature page state, visibility toggles, modal control, and RTK query triggers.
*   **`functions/`**: Pure helper functions, formatting utilities, and table column mapping configs (e.g., `getBookingColumns.tsx`).
*   **`interfaces/`**: TypeScript interface and type declarations specific to the feature's states, forms, and custom payloads.
*   **`constants/`**: Static lookup mappings, lookup arrays, styling color maps, and initial form defaults.

Every folder (including `components`, `containers`, `hooks`, `functions`) should contain an `index.ts` barrel file that cleanly re-exports the assets to simplify import syntax.

---

## 2. Component Definition Style
*   All functional components must be defined using arrow functions:
    ```typescript
    export const MyComponent = ({ prop1, prop2 }: MyComponentProps) => {
      return <div>...</div>;
    };
    ```
*   Do not use standard `function MyComponent() { ... }` declarations.

---

## 3. Logic Separation (Custom Hooks)
*   Isolate all complex logic, pagination states, URL synced search parameters, modal triggers, and form submission handoffs into custom hooks.
*   Custom hooks must be named using the `use` prefix in camelCase format, and exported as arrow functions:
    ```typescript
    export const useFeatureActions = (id: string): IFeatureActions => {
      ...
    };
    ```

---

## 4. Table Columns & Data Definition
*   Never inline table columns inside the main view files.
*   Always extract column setups to `functions/get[Feature]Columns.tsx`.
*   Column setups must implement the generic `IColumn<T>` interface, where `T` extends `ITableRow` (containing at least an `id` field).

---

## 5. Type Safety & Casing Rules
*   **No `any` types**: Declare strict TypeScript interfaces for all payloads, forms, API queries, and parameters.
*   **Prop Typings**: Always type props for presentational components, preferring descriptive interfaces (e.g., `interface BookingDetailProps`).
*   **File Naming**: Keep component filenames PascalCase matching their component name (e.g., `BookingDetailDrawer.tsx`), and hooks camelCase (e.g., `useBookingsPage.ts`).
