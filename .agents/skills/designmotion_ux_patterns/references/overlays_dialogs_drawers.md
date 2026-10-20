# Overlays, Dialogs & Drawers Guide

This guide covers all overlay patterns from **designmotionhq.com/patterns**: `modal-hierarchy`, `bottom-sheets`, `animation-timing`, `context-menu`, `tooltip-design`, and `z-index-mastery`.

---

## 1. Modal Hierarchy: 5 Overlay Types
*Pattern Reference: `modal-hierarchy`*

Most applications pick the wrong overlay. Choose according to user intent and interruption level:

| Level | Overlay Type | MotionUI Component | When to Use | Interaction Cost |
|---|---|---|---|---|
| **1** | **Tooltip** | `<Tooltip>` | Contextual hint, 1-line label | Zero (Hover only) |
| **2** | **Popover / Menu** | `<Menu>` / `<Select>` | Dropdown actions, picking one option | Low (Click opens, click closes) |
| **3** | **Drawer / Sheet** | `<Drawer>` / `<BottomSheet>` | Inspecting details without losing context | Medium (Side/bottom slide) |
| **4** | **Modal Dialog** | `<Dialog>` | Critical decisions, multi-step confirmations | High (Blocks page completely) |
| **5** | **Alert / Toast** | `<Alert>` | Asynchronous system notification | Low (Auto-dismisses or passive) |

---

## 2. Dialog / Modal Anatomy
*Pattern Reference: `modal-hierarchy`, `animation-timing`*

### The Rules
1. **Backdrop Blur**: Use `backdrop-filter: blur(4px)` with `rgba(0, 0, 0, 0.5)`. Pure black dimming feels dated; subtle blur preserves spatial depth.
2. **Spring Scale-In**: Modal enters with `scale(0.95) translateY(8px)` $\rightarrow$ `scale(1) translateY(0)` over `200ms – 250ms` using `cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Keyboard & Focus Traps**:
   - Pressing `Escape` must close the modal immediately.
   - Clicking the backdrop must trigger `onClose`.
4. **Action Ordering (Platform Law)**:
   - Destructive or primary action on the right.
   - Cancel / neutral action on the left.

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@motionui/react';

export const DeleteConfirmModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete Database
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Delete Production Database?</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This action cannot be undone. All 1.4M records across <strong>prod-cluster-01</strong> will be permanently purged.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={() => setOpen(false)}>
            Yes, Delete Permanently
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
```

---

## 3. Tooltip Design: 5 Rules
*Pattern Reference: `tooltip-design`*

### The Rules
1. **Enter Delay (150ms)**: Never show tooltips immediately on mouseenter. A 150ms delay prevents tooltips from flickering as the mouse passes over the screen.
2. **Leave Delay (100ms)**: Keep tooltip visible for 100ms so moving slightly doesn't abruptly kill the hint.
3. **Arrow Indicator**: Always include a directional arrow anchored to the trigger center.
4. **No Interactive Content**: Never put links or buttons inside a standard tooltip (use a Popover for interactive content).
5. **Micro Scale Animation**: Animate from `scale(0.92)` to `scale(1)` with `120ms` duration.

### Usage in MotionUI:
```tsx
import { Tooltip, IconButton } from '@motionui/react';

export const TooltipDemo = () => (
  <Tooltip title="Copy API Key to Clipboard" placement="top" arrow enterDelay={150}>
    <IconButton color="primary">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    </IconButton>
  </Tooltip>
);
```

---

## 4. Z-Index Mastery Layering
*Pattern Reference: `z-index-mastery`*

Never use arbitrary numbers like `z-index: 99999`. Use tokenized elevation slots:

```css
:root {
  --mui-z-base: 0;
  --mui-z-card: 1;
  --mui-z-header: 1100;
  --mui-z-drawer: 1200;
  --mui-z-backdrop: 1250;
  --mui-z-modal: 1300;
  --mui-z-popover: 1400;
  --mui-z-tooltip: 1500;
  --mui-z-toast: 1600;
}
```
