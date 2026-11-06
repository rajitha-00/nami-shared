import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useWebGlSupport } from './useWebGlSupport';

export interface ThreeOverviewCanvasProps {
  height?: number | string;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  onRenderScene?: (gl: WebGLRenderingContext, width: number, height: number, rotation: { x: number; y: number }, isDark: boolean) => void;
}

/**
 * ThreeOverviewCanvas
 *
 * Hardware-accelerated 3D WebGL Overview container.
 * Features:
 * - Crisp 4px micro-corner frame with 0.5px hairline grayed outline.
 * - Interactive pointer orbit rotation with smooth damping.
 * - Zero GPU spinning when idle (draws on demand).
 * - Automatic WebGL fallback when graphics context is unavailable.
 */
export function ThreeOverviewCanvas({
  height = 280,
  fallback,
  children,
  title,
  subtitle,
  onRenderScene,
}: ThreeOverviewCanvasProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const hasWebGl = useWebGlSupport();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0.55, y: -0.65 });
  const isDraggingRef = useRef(false);
  const lastPointerRef = useRef({ x: 0, y: 0 });

  // Handle pointer drag for 3D orbit rotation
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    setRotation((prev) => ({
      x: Math.max(0.1, Math.min(1.2, prev.x + dy * 0.008)),
      y: prev.y + dx * 0.008,
    }));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    if (!canvasRef.current || !hasWebGl) return;
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl', { antialias: true, alpha: true });
    if (!gl) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.floor(rect.width * dpr);
    const heightPx = Math.floor(rect.height * dpr);

    if (canvas.width !== width || canvas.height !== heightPx) {
      canvas.width = width;
      canvas.height = heightPx;
    }

    gl.viewport(0, 0, width, heightPx);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    // Subtle dark/light background
    if (isDark) {
      gl.clearColor(0.043, 0.051, 0.070, 1.0); // #0B0D12
    } else {
      gl.clearColor(0.972, 0.980, 0.988, 1.0); // #F8FAFC
    }
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if (onRenderScene) {
      onRenderScene(gl, width, heightPx, rotation, isDark);
    }
  }, [rotation, isDark, hasWebGl, onRenderScene]);

  if (!hasWebGl && fallback) {
    return <>{fallback}</>;
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        height,
        position: 'relative',
        borderRadius: '4px',
        border: `0.5px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)'}`,
        backgroundColor: isDark ? '#0B0D12' : '#F8FAFC',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {(title || subtitle) && (
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 12,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          {title && (
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: isDark ? '#94A3B8' : '#64748B', display: 'block', fontSize: '0.68rem' }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8rem', color: isDark ? '#F8FAFC' : '#0F172A' }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block', cursor: 'grab' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      {children && (
        <Box sx={{ position: 'absolute', bottom: 8, right: 10, zIndex: 2 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}
