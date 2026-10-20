# Inputs, Forms & Controls Guide

This guide covers all input and form patterns from **designmotionhq.com/patterns**: `form-field-states`, `form-validation-timing`, `toggle-anatomy`, `range-sliders`, `password-field-ux`, `otp-input`, `date-pickers`, and `file-upload-ux`.

---

## 1. The 6 Form Field States
*Pattern Reference: `form-field-states`*

Every text field must support six distinct states without layout jitter:

```mermaid
stateDiagram-v2
    Default --> Hover : Cursor enters
    Hover --> Focus : Click or Tab
    Focus --> Validating : Blur event
    Validating --> Valid : Meets constraints
    Validating --> Error : Fails constraints
    Default --> Disabled : System lock
```

1. **Default**: Clear placeholder or resting label, subtle border (`1px solid var(--mui-color-divider)`).
2. **Hover**: Border darkens/lightens 1 step, signaling interactive readiness.
3. **Focus**: Label floats to top, 3px translucent outer glow (`0 0 0 3px rgba(99, 102, 241, 0.2)`), inner border takes `--mui-color-primary`.
4. **Validating / Error**: Border turns `--mui-color-error`, helper text shows actionable fix instruction.
5. **Success**: Subtle green checkmark icon, reassuring user.
6. **Disabled**: Reduced opacity (48%), cursor changed to `not-allowed`, zero pointer events.

---

## 2. Form Validation Timing: The "Reward Early, Punish Late" Law
*Pattern Reference: `form-validation-timing`*

### The Mistake
Validating on `onChange` as the user types their first 3 characters:
❌ *"Email is invalid"* while they are still typing `"sarah@"`! This stresses users and slows them down.

### The Standard
- **On First Entry**: Validate on `onBlur` (when the user leaves the field).
- **After Error Exists**: Clear or validate on `onChange` as soon as the user corrects the mistake (immediate positive reward).

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { TextField } from '@motionui/react';

export const SmartValidatedInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validate = (val: string) => {
    if (!val.includes('@') || !val.includes('.')) {
      return 'Please provide a valid work email address';
    }
    return null;
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(email));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (touched) {
      // Clear error immediately when user fixes it
      setError(validate(val));
    }
  };

  return (
    <TextField
      label="Work Email"
      variant="outlined"
      fullWidth
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={Boolean(error)}
      helperText={error || 'We will send a magic verification link'}
    />
  );
};
```

---

## 3. Toggle Anatomy: Snap vs. Morph
*Pattern Reference: `toggle-anatomy`*

### The Rules
1. **Never Snap**: Simple binary translation without easing looks rigid and cheap.
2. **Spring Morph**: As the toggle moves across, scale its width from `18px` to `22px` during the middle 50% of the movement, then snap back to circular `18px`:
   ```css
   .mui-switch__thumb {
     transition: transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1),
                 width 120ms ease;
   }
   ```
3. **Color Track Handshake**: The track background color transitions concurrently with the thumb slide.

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { Switch, Stack } from '@motionui/react';

export const ToggleSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <Stack spacing={2}>
      <Switch
        label="Push Notifications"
        checked={notifications}
        onChange={(e) => setNotifications(e.target.checked)}
        color="primary"
      />
      <Switch
        label="Anonymous Telemetry"
        checked={analytics}
        onChange={(e) => setAnalytics(e.target.checked)}
        color="secondary"
      />
    </Stack>
  );
};
```

---

## 4. Range Sliders: Touch Targets & Value Feedback
*Pattern Reference: `range-sliders`*

### The Rules
1. **Never Rely on 12px Thumb for Touch**: Desktop cursor needs 16px, but mobile finger needs at least a 44px hit-box (`touch-action: none`).
2. **Floating Value Tooltip**: Display the live value bubble directly above the thumb while dragging (`valueLabelDisplay="on"`).
3. **Step Mark Clamping**: For discrete values (0, 25, 50, 75, 100), snap thumb with spring easing.

### Usage in MotionUI:
```tsx
import React, { useState } from 'react';
import { Slider, Typography } from '@motionui/react';

export const VolumeSlider = () => {
  const [volume, setVolume] = useState(65);

  return (
    <div style={{ maxWidth: 360, padding: 16 }}>
      <Typography variant="body2" style={{ marginBottom: 8 }}>
        Sound Effects Volume: {volume}%
      </Typography>
      <Slider
        value={volume}
        min={0}
        max={100}
        valueLabelDisplay="on"
        onChange={(val) => setVolume(val)}
        color="primary"
      />
    </div>
  );
};
```
