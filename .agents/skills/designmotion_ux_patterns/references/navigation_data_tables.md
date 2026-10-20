# Navigation, Data & Search Guide

This guide covers navigation, data tables, and search patterns from **designmotionhq.com/patterns**: `tabs-system`, `pagination`, `command-palette`, `data-table`, `filter-chips`, `bulk-actions`, `search-experience-system`, and `drag-and-drop`.

---

## 1. Tabs System: Eliminating the Jump
*Pattern Reference: `tabs-system`*

### The Problem
When users switch tabs, most tab implementations cause:
- Layout shift / vertical jumping when content heights differ.
- Instant border flickers instead of smooth spatial movement.

### The Standard
1. **Sliding Indicator / Pill**: Animate an absolute underline or background pill (`transform: translateX(...)`) to connect tab clicks.
2. **Smooth Crossfade**: Crossfade content tabs over `180ms` (`opacity 0 -> 1` and `translateY(4px) -> 0`).
3. **Keyboard Accessibility**: ArrowLeft / ArrowRight navigation between tabs.

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { Stack, Button, Typography, Paper } from '@motionui/react';

export const MotionTabs = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'security'>('overview');

  return (
    <div>
      <Stack direction="row" spacing={1} style={{ borderBottom: '1px solid var(--mui-color-divider)', paddingBottom: 8 }}>
        <Button
          variant={activeTab === 'overview' ? 'contained' : 'ghost'}
          size="small"
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </Button>
        <Button
          variant={activeTab === 'telemetry' ? 'contained' : 'ghost'}
          size="small"
          onClick={() => setActiveTab('telemetry')}
        >
          Telemetry
        </Button>
        <Button
          variant={activeTab === 'security' ? 'contained' : 'ghost'}
          size="small"
          onClick={() => setActiveTab('security')}
        >
          Security & Access
        </Button>
      </Stack>

      <div style={{ paddingTop: 16 }}>
        {activeTab === 'overview' && <Typography variant="body1">System status is operational.</Typography>}
        {activeTab === 'telemetry' && <Typography variant="body1">99.98% uptime across 12 pods.</Typography>}
        {activeTab === 'security' && <Typography variant="body1">2FA enforced for all team members.</Typography>}
      </div>
    </div>
  );
};
```

---

## 2. Filter Chips & Instant Faceting
*Pattern Reference: `filter-chips`, `search-experience-system`*

### The Rules
1. **Pill Anatomy**: Compact height (`28px–32px`), full border radius (`9999px`), optional count badge.
2. **Active vs Inactive**:
   - Inactive: Outlined or ghost style (`rgba(255, 255, 255, 0.08)`).
   - Active: Filled with `--mui-color-primary` and contrast text.
3. **Instant Deletion / Clear**: Click `×` icon to remove facet with scale-down animation (`transform: scale(0.8); opacity: 0`).

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { Chip, Stack } from '@motionui/react';

export const InteractiveFilters = () => {
  const [filters, setFilters] = useState(['Production', 'Kubernetes', 'High Priority', 'Europe']);

  const handleRemove = (filterToRemove: string) => {
    setFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {filters.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          color="primary"
          onDelete={() => handleRemove(tag)}
        />
      ))}
      <Chip label="+ Add Filter" variant="outlined" />
    </Stack>
  );
};
```

---

## 3. Data Tables & Bulk Actions
*Pattern Reference: `data-table`, `bulk-actions`, `css-has-selector`*

### The Rules
1. **Never Just a Div Grid**: Use semantic HTML (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) for screen reader row announcements.
2. **Sticky Column Headers**: Freeze headers on vertical scroll with subtle background opacity and border separator.
3. **Reactive Row Selection**: When a row checkbox is selected, tint the entire row background. With modern CSS `:has()`:
   ```css
   tr:has(input[type="checkbox"]:checked) {
     background-color: rgba(var(--mui-color-primary-rgb), 0.08);
   }
   ```
4. **Floating Action Bar**: When $\ge 1$ rows are checked, animate a floating bottom action pill (`"4 items selected" | [Export] [Delete]`).

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { Checkbox, Button, Paper, Stack, Typography } from '@motionui/react';

export const DataTableDemo = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([1]);

  const rows = [
    { id: 1, name: 'api-service-prod', cluster: 'us-east-1', status: 'Healthy' },
    { id: 2, name: 'worker-node-04', cluster: 'eu-west-1', status: 'Running' },
    { id: 3, name: 'billing-cron-job', cluster: 'us-west-2', status: 'Completed' },
  ];

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Paper elevation={1} style={{ overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ background: 'var(--mui-color-background-paper)', borderBottom: '1px solid var(--mui-color-divider)' }}>
          <tr>
            <th style={{ padding: 12, width: 48 }}><Checkbox /></th>
            <th style={{ padding: 12 }}>Service Name</th>
            <th style={{ padding: 12 }}>Region</th>
            <th style={{ padding: 12 }}>Health</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              style={{
                borderBottom: '1px solid var(--mui-color-divider)',
                background: selectedIds.includes(row.id) ? 'rgba(99, 102, 241, 0.08)' : undefined,
              }}
            >
              <td style={{ padding: 12 }}>
                <Checkbox
                  checked={selectedIds.includes(row.id)}
                  onChange={() => toggleSelect(row.id)}
                />
              </td>
              <td style={{ padding: 12, fontWeight: 600 }}>{row.name}</td>
              <td style={{ padding: 12 }}>{row.cluster}</td>
              <td style={{ padding: 12 }}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIds.length > 0 && (
        <div style={{ padding: '12px 16px', background: 'var(--mui-color-primary)', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{selectedIds.length} service(s) selected</span>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="outlined" style={{ color: '#fff', borderColor: '#fff' }}>Restart</Button>
            <Button size="small" variant="contained" color="error">Drain</Button>
          </Stack>
        </div>
      )}
    </Paper>
  );
};
```
