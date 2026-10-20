---
name: Modern UI UX & Frontend Design System
description: Standards for modern UI/UX design, visual aesthetics, color systems, micro-animations, glassmorphism, responsive patterns, and layout practices matching the React feature architecture.
---

# Modern UI/UX & Frontend Design System Guidelines

Deliver premium, state-of-the-art visual design, exceptional user experience (UX), and accessible frontend components while strictly adhering to the modular feature page folder architecture.

---

## 1. Feature Architecture Integration for UI/UX Assets

All design system elements must align directly with the standardized feature module folder layout:

* **`constants/`**: Store design tokens, HSL color palettes, standard shadow definitions, theme maps, animation curve presets, and status lookup maps.
* **`components/`**: Houses presentation-only visual components (e.g., glassmorphic cards, skeleton loaders, status badges, metric displays) using defined design tokens.
* **`containers/`**: Wraps complex layouts, theme providers, responsive view switchers, multi-step wizards, and drawer/modal managers.
* **`hooks/`**: Manages UI interactive states (e.g., `useTheme`, `useMediaQuery`, `useScrollPosition`, `useDisclosure`, hover/focus states).
* **`functions/`**: Formats visual values, dynamic class builders (`cn` utilities), dynamic contrast calculators, and UI table column formatters.
* **`interfaces/`**: Declares strong TypeScript types for design system component props, variant definitions, theme objects, and layout configs.

---

## 2. Design Aesthetics & Visual Tokens

### A. Color Palette & Dark Mode Support
* Avoid basic raw hex colors (e.g., `#ff0000` or plain `blue`). Utilize HSL color variables or Tailwind semantic scales (`default-50` through `default-900`, `primary`, `secondary`, `success`, `warning`, `danger`).
* Implement full dark-mode compatibility across all components with subtle background opacity and translucent border highlights:
  ```tsx
  // Example glassmorphic container style constant inside constants/
  export const GLASS_CARD_STYLES = "bg-background/70 dark:bg-default-100/40 backdrop-blur-lg border border-default-200/50 dark:border-default-100/20 shadow-lg shadow-black/5 rounded-2xl";
  ```

### B. Typography & Visual Hierarchy
* Use modern, clean font stacks (e.g., `Inter`, `Plus Jakarta Sans`, or `Outfit`).
* Maintain clear hierarchy: Section headings (`text-2xl font-bold tracking-tight text-foreground`), subtitles (`text-sm font-medium text-default-500`), and data labels (`text-xs uppercase font-semibold text-default-400 tracking-wider`).

---

## 3. Micro-Animations & Dynamic States

* **State Feedback**: Every interactive element must provide visual feedback for hover, active/pressed, focused, loading, and disabled states.
* **Smooth Transitions**: Apply subtle transition durations (`transition-all duration-200 ease-out` or `duration-300`). Avoid abrupt visual pop-ins.
* **Loading & Skeleton States**: Never leave screens blank while loading. Use skeleton placeholders that mirror exact component shapes (`Skeleton` components from HeroUI).

```typescript
// components/MetricCardSkeleton.tsx
import { Card, CardBody, Skeleton } from "@heroui/react";

export const MetricCardSkeleton = () => {
  return (
    <Card className="w-full p-4 border border-default-200/50">
      <CardBody className="gap-3">
        <Skeleton className="w-1/3 h-3 rounded-lg" />
        <Skeleton className="w-2/3 h-8 rounded-lg" />
      </CardBody>
    </Card>
  );
};
```

---

## 4. Responsive & Mobile-First Layout Rules

* Build mobile-first using responsive grid and flexbox utility classes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
* Ensure tables horizontally scroll gracefully on small screens or transform into card stacks for touch devices.
* Touch Targets: Interactive elements (buttons, chips, icons) must have a minimum tap target size of 44x44px on mobile viewports.

---

## 5. Accessibility (a11y) & Usability Standards

* **Keyboard Navigation**: All interactive elements (Modals, Dropdowns, Drawers) must respond to `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape` keys.
* **ARIA & Labels**: Provide explicit `aria-label`, `aria-expanded`, `aria-describedby`, and descriptive tooltips for icon-only buttons.
* **Contrast Ratios**: Ensure text against background colors meets WCAG AA standards (minimum 4.5:1 contrast ratio for standard body text).

---

## 6. Strict Iconography & Visual Asset Standards (No Emojis)

* **Strict Prohibition of Emojis**: NEVER use raw Unicode emojis (e.g., 👑, 🌍, 🎯, 🏨, 🍽️, ⚪, 🟡, 🔴, ⚡, ✨) as UI icons, in button text, in select dropdown options, in chip labels, or in table columns.
* **Always Use Dedicated SVG Icon Components**:
  - Prefer Lucide icons (`lucide-react`) or Material-UI SVG icons (`@mui/icons-material`).
  - Size icons consistently (typically `size={16}` or `size={18}` / `fontSize="small"`).
  - Provide proper spacing (`gap-1.5` / `spacing={1}`) and vertical alignment with adjacent text.
* **Component-Specific Icon Integration**:
  - **Chips / Badges**: Use the component's `icon` or `startContent` prop with a dedicated SVG component (e.g., `icon={<Crown size={14} />}`).
  - **Dropdowns / Select Items**: Wrap menu items with an icon container and label:
    ```tsx
    <MenuItem value="VIP_ONLY">
      <Stack direction="row" spacing={1} alignItems="center">
        <Crown size={16} className="text-amber-500" />
        <Typography variant="body2">VIP & Loyalty Only</Typography>
      </Stack>
    </MenuItem>
    ```
  - **Buttons**: Use `startContent={<IconComponent />}` or `startIcon={<IconComponent />}`.
  - **Status Indicators**: Use SVG circle badges, dot components, or semantic color chips rather than colored emoji circles.

---

## 7. Strict Code Implementation Rules

1. **Arrow Functions**: Component implementations must be exported using arrow functions (`export const ComponentName = ...`).
2. **Prop Interfaces**: Define interfaces for all presentational components in `interfaces/` or at the top of the file, extending standard HTML/HeroUI element attributes where appropriate.
3. **No Inlined Magic Strings**: Extract recurring styles, status themes, and lookup values into `constants/`.
4. **Barrel Export Index**: Ensure all subdirectories feature an `index.ts` barrel file for clean, modular imports.
5. **No Unicode Emojis**: Enforce SVG icon components across all UI layers without exception.

