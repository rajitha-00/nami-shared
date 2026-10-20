# Surfaces, Cards & Landing Heroes Guide

This guide covers all surface, card, and hero patterns from **designmotionhq.com/patterns** with complete code usage using `@motionui/react`.

---

## 1. The Perfect Card Pattern
*Pattern Reference: `perfect-card`, `depth-layers`, `border-radius`*

### The Problem
Most cards look cheap because they rely on:
- Thick dark borders (`1px solid #000`)
- Single muddy drop shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.3)`)
- Mismatched border radiuses between container and inner elements.

### The 4 Rules for a $1,000 Card
1. **Translucent Subtle Border**: Use `rgba(255, 255, 255, 0.08)` on dark mode, or `rgba(0, 0, 0, 0.06)` on light mode.
2. **Layered Ambient Shadows**: Combine a sharp 1px contact shadow with an ambient spread shadow:
   ```css
   box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 8px 16px -2px rgba(0,0,0,0.1);
   ```
3. **Compound Radius Formula**:
   $$R_{\text{child}} = R_{\text{parent}} - \text{padding}$$
   If card radius is `16px` and padding is `8px`, child images or buttons must use `8px` radius.
4. **Surface Color Shift**: Cards must be elevated 1-step lighter than the page background (`#1e293b` card on `#0f172a` canvas).

### Usage in MotionUI:
```tsx
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button, Avatar, Chip } from '@motionui/react';

export const FeatureCard = () => (
  <Card elevation={2} interactive>
    <CardHeader
      avatar={<Avatar src="/avatar.jpg" alt="Sarah Connor" />}
      title={<Typography variant="subtitle1" style={{ fontWeight: 700 }}>Telemetry Engine</Typography>}
      subheader="v2.4.0 • Enterprise"
    />
    <CardMedia component="img" src="/hero.jpg" alt="Visualization" style={{ height: 180, objectFit: 'cover' }} />
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        Real-time edge event ingestion with low-latency streaming and zero packet drops.
      </Typography>
      <div style={{ marginTop: 12 }}>
        <Chip label="Online" size="small" color="success" />
      </div>
    </CardContent>
    <CardActions>
      <Button variant="text" size="small">Details</Button>
      <Button variant="contained" size="small" color="primary">Manage Cluster</Button>
    </CardActions>
  </Card>
);
```

---

## 2. Card Hover Anatomy
*Pattern Reference: `card-hover-anatomy`*

### The Rules
1. **Vertical Float**: Elevate by `-2px` to `-4px` on hover. Never exceed `-6px` or it feels floaty/disconnected.
2. **Shadow Expansion**: Scale the blur from `12px` to `24px` while reducing shadow opacity by 15%.
3. **Duration**: `180ms – 220ms` with `cubic-bezier(0.16, 1, 0.3, 1)`.
4. **CSS Implementation**:
   ```css
   .mui-card--interactive {
     transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
                 box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1);
   }
   .mui-card--interactive:hover {
     transform: translateY(-3px);
     box-shadow: 0 16px 32px -4px rgba(0, 0, 0, 0.25);
   }
   ```

---

## 3. De-AI Landing Hero Pattern
*Pattern Reference: `de-ai-landing-hero`, `reverse-engineered-linear`*

### The Problem
AI-generated landing heroes share 5 generic "tells":
- Neon purple/cyan blobs everywhere
- Hollow generic slogans ("Unleash the Power of Next-Gen AI")
- Stock 3D glass spheres or robot illustrations
- Low-contrast typography without clear hierarchy
- Floating fake mockup screenshots with no real interaction.

### The Fix
1. **Concrete Value Proposition**: Say exactly what it does in 6 words.
2. **Proof-First Metric Banner**: Place an active stat, verified user count, or live uptime pill directly above the H1.
3. **High-Fidelity Product Canvas**: Show the actual functional software card or terminal, not an abstract illustration.
4. **Dual Explicit CTAs**:
   - Primary: High-contrast action (`"Start 14-Day Free Trial"`)
   - Secondary: Low-risk discovery (`"Live Interactive Demo ↗"`)

### Usage in MotionUI:
```tsx
import { Container, Stack, Typography, Button, Badge } from '@motionui/react';

export const LandingHero = () => (
  <Container maxWidth="lg" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 64 }}>
    <Badge color="primary" style={{ marginBottom: 16 }}>
      <span style={{ fontSize: '0.8rem', padding: '4px 12px', background: 'rgba(99,102,241,0.15)', borderRadius: 999 }}>
        ⚡ v2.0 Released — 76 Motion Patterns
      </span>
    </Badge>

    <Typography variant="h1" style={{ fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20 }}>
      Build Interfaces That Feel Expensive.
    </Typography>

    <Typography variant="body1" color="textSecondary" style={{ maxWidth: 640, margin: '0 auto 32px', fontSize: '1.25rem' }}>
      Zero Tailwind dependency. 100% Vanilla CSS design tokens, spring physics, and full MUI API compatibility.
    </Typography>

    <Stack direction="row" spacing={3} justifyContent="center">
      <Button variant="contained" size="large" color="primary">Get Started in 60s</Button>
      <Button variant="outlined" size="large">Explore Components</Button>
    </Stack>
  </Container>
);
```
