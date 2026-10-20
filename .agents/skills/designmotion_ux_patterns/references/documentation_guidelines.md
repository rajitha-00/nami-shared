# Professional UI Library Documentation Guidelines (Nextra Standard)

This specification defines the documentation architecture, content structure, visual standards, and component sandbox conventions for **MotionUI**, modeled on **Nextra 3**, **Fumadocs**, and **Tailwind UI / Radix Docs**.

---

## 1. Documentation Information Architecture (IA)

Nextra uses file-system based routing with `_meta.json` configuring titles, navigation hierarchy, badges, and separators:

```
docs/
├── pages/
│   ├── _app.tsx                 # Custom App with MotionUI tokens import
│   ├── _meta.json               # Top-level nav: Docs, Components, Patterns, GitHub
│   ├── index.mdx                # Hero overview & feature badges
│   │
│   ├── get-started/
│   │   ├── _meta.json
│   │   ├── installation.mdx     # npm i @motionui/react, peerDeps
│   │   ├── quickstart.mdx       # ThemeProvider, CSS tokens, first component
│   │   └── typescript.mdx       # Types, declaration exports, autocomplete
│   │
│   ├── theming/
│   │   ├── _meta.json
│   │   ├── design-tokens.mdx    # CSS custom properties, spacing, radius
│   │   ├── dark-mode.mdx        # ThemeProvider, auto dark mode, data-theme
│   │   ├── dynamic-endpoints.mdx# AdaptiveThemeProvider, WCAG auto-contrast
│   │   └── mui-migration.mdx    # createMuiCompatiblePalette, coexistence
│   │
│   ├── components/
│   │   ├── _meta.json           # Categorized component list
│   │   ├── button.mdx
│   │   ├── card.mdx
│   │   ├── dialog.mdx
│   │   ├── textfield.mdx
│   │   ├── switch.mdx
│   │   └── ... (24+ components)
│   │
│   └── patterns/
│       ├── _meta.json
│       ├── perfect-card.mdx
│       ├── loading-matrix.mdx
│       └── form-validation.mdx
```

---

## 2. Standard Component Documentation Template (MDX)

Every component document in Nextra must follow this 7-section anatomy:

### Anatomy of `pages/components/[name].mdx`

```mdx
---
title: Card
description: Elevated surface container with 6-level depth layers and smooth spring hover physics.
---

import { Callout, Tabs, Tab } from 'nextra/components';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography, Avatar, Chip } from '@motionui/react';
import { ComponentPreview } from '@/components/ComponentPreview';
import { PropsTable } from '@/components/PropsTable';

# Card

Elevated surface container with compound anatomy, 6-level depth elevation, and spring hover lift.

<Callout type="info" emoji="📐">
  Implements the **Perfect Card** and **Card Hover Anatomy** patterns from designmotionhq.com.
</Callout>

## Interactive Preview

<ComponentPreview>
  <Card elevation={2} interactive style={{ maxWidth: 420 }}>
    <CardHeader
      avatar={<Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" />}
      title={<Typography variant="subtitle1" style={{ fontWeight: 700 }}>Telemetry Cluster</Typography>}
      subheader="v2.4.0 • Enterprise"
    />
    <CardMedia component="img" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600" style={{ height: 160, objectFit: 'cover' }} />
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        Real-time edge event ingestion with low-latency streaming.
      </Typography>
      <div style={{ marginTop: 12 }}>
        <Chip label="Online" size="small" color="success" />
      </div>
    </CardContent>
    <CardActions>
      <Button variant="text" size="small">Details</Button>
      <Button variant="contained" size="small" color="primary">Manage Node</Button>
    </CardActions>
  </Card>
</ComponentPreview>

## Installation

<Tabs items={['npm', 'pnpm', 'yarn']}>
  <Tab>`npm install @motionui/react`</Tab>
  <Tab>`pnpm add @motionui/react`</Tab>
  <Tab>`yarn add @motionui/react`</Tab>
</Tabs>

## Import

```tsx
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@motionui/react';
```

## Examples

### Elevation Levels (0 to 5)

```tsx
<Stack direction="row" spacing={2}>
  <Card elevation={0}>Elevation 0</Card>
  <Card elevation={1}>Elevation 1</Card>
  <Card elevation={2}>Elevation 2</Card>
  <Card elevation={3}>Elevation 3</Card>
</Stack>
```

### Outlined Variant

```tsx
<Card variant="outlined">
  <CardContent>Outlined with subtle 1px translucent border</CardContent>
</Card>
```

## Props API Reference

<PropsTable
  data={[
    { prop: 'elevation', type: '0 | 1 | 2 | 3 | 4 | 5', default: '1', description: 'Shadow depth layer elevation' },
    { prop: 'variant', type: "'elevation' | 'outlined'", default: "'elevation'", description: 'Surface outline style' },
    { prop: 'interactive', type: 'boolean', default: 'false', description: 'Enables spring hover lift & shadow expansion' },
    { prop: 'className', type: 'string', default: 'undefined', description: 'Custom CSS class names' },
  ]}
/>

## Design & Motion Patterns Applied

- **Compound Radius**: Child images use $R_{\text{child}} = R_{\text{parent}} - \text{padding}$.
- **Contact Shadow**: Combines a sharp 1px contact shadow with an ambient diffuse blur.
- **Micro-Hover Lift**: Smooth `translateY(-3px)` with `cubic-bezier(0.16, 1, 0.3, 1)`.
```

---

## 3. Top-Level `_meta.json` Configuration

In Nextra, top-level navigation, sidebar labels, and external links are configured in `pages/_meta.json`:

```json
{
  "index": {
    "title": "Introduction",
    "type": "page"
  },
  "get-started": {
    "title": "Getting Started",
    "type": "page"
  },
  "theming": {
    "title": "Theming & Dynamic Colors",
    "type": "page"
  },
  "components": {
    "title": "Components",
    "type": "page"
  },
  "patterns": {
    "title": "DesignMotion Patterns",
    "type": "page"
  },
  "github_link": {
    "title": "GitHub ↗",
    "type": "page",
    "href": "https://github.com/motionui/react",
    "newWindow": true
  }
}
```

And for `pages/components/_meta.json`:

```json
{
  "-- Layout": {
    "type": "separator",
    "title": "Surfaces & Layout"
  },
  "box": "Box",
  "stack": "Stack",
  "grid": "Grid",
  "container": "Container",
  "card": "Card",
  "paper": "Paper",
  "divider": "Divider",

  "-- Inputs": {
    "type": "separator",
    "title": "Inputs & Forms"
  },
  "button": "Button",
  "icon-button": "IconButton",
  "textfield": "TextField",
  "select": "Select",
  "switch": "Switch",
  "slider": "Slider",
  "checkbox": "Checkbox",
  "radio": "Radio",

  "-- Feedback": {
    "type": "separator",
    "title": "Feedback & Overlays"
  },
  "alert": "Alert",
  "dialog": "Dialog (Modal)",
  "tooltip": "Tooltip",
  "progress": "Progress",
  "skeleton": "Skeleton",

  "-- Data": {
    "type": "separator",
    "title": "Data Display"
  },
  "chip": "Chip",
  "avatar": "Avatar",
  "badge": "Badge",
  "typography": "Typography"
}
```

---

## 4. Reusable Nextra Documentation Components

Create these 2 helper components in `docs/components/`:

### A. `<ComponentPreview>` (Live Interactive Card with Source Code Toggle)
```tsx
// docs/components/ComponentPreview.tsx
import React, { useState } from 'react';

export const ComponentPreview: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="my-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 p-8 flex items-center justify-center min-h-[160px] overflow-hidden">
      {children}
    </div>
  );
};
```

### B. `<PropsTable>` (Standardized API Parameter Grid)
```tsx
// docs/components/PropsTable.tsx
import React from 'react';

export interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

export const PropsTable: React.FC<{ data: PropItem[] }> = ({ data }) => (
  <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
    <table className="w-full text-left text-sm">
      <thead className="bg-neutral-100 dark:bg-neutral-800/60 text-xs uppercase tracking-wider font-semibold">
        <tr>
          <th className="py-3 px-4">Prop</th>
          <th className="py-3 px-4">Type</th>
          <th className="py-3 px-4">Default</th>
          <th className="py-3 px-4">Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono text-xs">
        {data.map((row) => (
          <tr key={row.prop} className="hover:bg-neutral-500/5">
            <td className="py-3 px-4 font-bold text-indigo-500">{row.prop}</td>
            <td className="py-3 px-4 text-purple-400">{row.type}</td>
            <td className="py-3 px-4 text-neutral-400">{row.default || '-'}</td>
            <td className="py-3 px-4 font-sans text-xs text-neutral-600 dark:text-neutral-300">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
```

---

## 5. Nextra Theme Configuration (`theme.config.jsx`)

```javascript
// docs/theme.config.jsx
export default {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
      ⚡ MotionUI
      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '9999px', background: '#6366f1', color: '#fff' }}>
        v1.0
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/motionui/react',
  },
  docsRepositoryBase: 'https://github.com/motionui/react/tree/main/docs',
  footer: {
    text: '© 2026 MotionUI. Inspired by DesignMotionHQ & Material UI.',
  },
  primaryHue: 245,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – MotionUI Docs',
    };
  },
};
```

---

## 6. Nextra Documentation Best Practices Checklist

1. **Self-Contained Previews**: Every component preview must be interactive and work directly inside the documentation without requiring external setup.
2. **Contrast Callouts**: Always highlight whether a component automatically adjusts text color based on background luminance.
3. **MUI Drop-in Equivalence**: Mention the exact MUI v5 equivalent prop to help developers transitioning from `@mui/material`.
4. **Copy-Code Snippets**: All code snippets must include single-click copy buttons and syntax highlighting.
5. **Zero Tailwind**: Ensure the documentation notes that the core library runs on 100% vanilla CSS custom properties.
