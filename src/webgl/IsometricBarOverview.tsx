import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ThreeOverviewCanvas } from './ThreeOverviewCanvas';

export interface IsometricBarItem {
  label: string;
  value: number;
  color?: string;
  formattedValue?: string;
}

export interface IsometricBarOverviewProps {
  data: IsometricBarItem[];
  title?: string;
  subtitle?: string;
  height?: number | string;
  fallback?: React.ReactNode;
}

/**
 * 3D Isometric Bar Volume Overview
 *
 * Renders spatial volumetric bars in 3D isometric perspective.
 * Used for multi-property revenue volumes, occupancy rates, and sales trends.
 */
export function IsometricBarOverview({
  data,
  title,
  subtitle,
  height = 280,
  fallback,
}: IsometricBarOverviewProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const maxValue = useMemo(() => {
    return Math.max(...data.map((d) => d.value), 1);
  }, [data]);

  // Shader program and buffers cached in memory
  const renderScene = React.useCallback(
    (gl: WebGLRenderingContext, width: number, heightPx: number, rotation: { x: number; y: number }) => {
      // Vertex shader with 3D projection & directional illumination
      const vsSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        uniform mat4 uMatrix;
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_Position = uMatrix * vec4(aPosition, 1.0);
          vec3 lightDir = normalize(vec3(0.5, 1.0, 0.7));
          float diffuse = max(dot(aNormal, lightDir), 0.0);
          vLight = 0.55 + 0.45 * diffuse;
          vColor = uColor;
        }
      `;

      // Fragment shader
      const fsSource = `
        precision mediump float;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_FragColor = vec4(vColor * vLight, 1.0);
        }
      `;

      const createShader = (type: number, src: string) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };

      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;

      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);

      const aPos = gl.getAttribLocation(program, 'aPosition');
      const aNorm = gl.getAttribLocation(program, 'aNormal');
      const uMatrix = gl.getUniformLocation(program, 'uMatrix');
      const uColor = gl.getUniformLocation(program, 'uColor');

      // Generate Cube vertices & normals for a unit bar: [-0.5, 0, -0.5] to [0.5, 1, 0.5]
      const vertices = new Float32Array([
        // Front face
        -0.5, 0,  0.5,   0.5, 0,  0.5,   0.5, 1,  0.5,
        -0.5, 0,  0.5,   0.5, 1,  0.5,  -0.5, 1,  0.5,
        // Back face
        -0.5, 0, -0.5,  -0.5, 1, -0.5,   0.5, 1, -0.5,
        -0.5, 0, -0.5,   0.5, 1, -0.5,   0.5, 0, -0.5,
        // Top face
        -0.5, 1, -0.5,  -0.5, 1,  0.5,   0.5, 1,  0.5,
        -0.5, 1, -0.5,   0.5, 1,  0.5,   0.5, 1, -0.5,
        // Left face
        -0.5, 0, -0.5,  -0.5, 0,  0.5,  -0.5, 1,  0.5,
        -0.5, 0, -0.5,  -0.5, 1,  0.5,  -0.5, 1, -0.5,
        // Right face
         0.5, 0, -0.5,   0.5, 1, -0.5,   0.5, 1,  0.5,
         0.5, 0, -0.5,   0.5, 1,  0.5,   0.5, 0,  0.5,
      ]);

      const normals = new Float32Array([
        // Front
        0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,
        // Back
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        // Top
        0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,
        // Left
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        // Right
        1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,
      ]);

      const vBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);

      const nBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, nBuf);
      gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(aNorm);
      gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);

      // Simple 4x4 matrix helpers
      const aspect = width / heightPx;
      const count = data.length;
      const spacing = 1.3;

      // Draw each bar in the 3D grid
      data.forEach((item, index) => {
        const heightNorm = Math.max(0.08, (item.value / maxValue) * 2.2);
        const xPos = (index - count / 2 + 0.5) * spacing;

        // View/Projection matrix combining isometric angles + item transform
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);

        // 3D Isometric Projection
        const scale = 0.38;
        const mat = new Float32Array([
          (cosY * scale) / aspect,  sinX * sinY * scale, -cosX * sinY * scale, 0,
          0,                         cosX * scale * heightNorm, sinX * scale,     0,
          (sinY * scale) / aspect, -sinX * cosY * scale,  cosX * cosY * scale, 0,
          (xPos * scale * 0.9) / aspect, -0.45,           0,                   1,
        ]);

        gl.uniformMatrix4fv(uMatrix, false, mat);

        // Hex color parse
        const hex = item.color || '#007AFF';
        const r = parseInt(hex.slice(1, 3), 16) / 255 || 0;
        const g = parseInt(hex.slice(3, 5), 16) / 255 || 0.48;
        const b = parseInt(hex.slice(5, 7), 16) / 255 || 1.0;

        gl.uniform3f(uColor, r, g, b);
        gl.drawArrays(gl.TRIANGLES, 0, 30);
      });
    },
    [data, maxValue],
  );

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <ThreeOverviewCanvas
        height={height}
        title={title}
        subtitle={subtitle}
        fallback={fallback}
        onRenderScene={renderScene}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            bgcolor: isDark ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            px: 1.25,
            py: 0.5,
            borderRadius: '3px',
            border: `0.5px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
          }}
        >
          {data.slice(0, 4).map((d) => (
            <Box key={d.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '1.5px',
                  bgcolor: d.color || '#007AFF',
                }}
              />
              <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 600, color: 'text.secondary' }}>
                {d.label}: <strong>{d.formattedValue || d.value}</strong>
              </Typography>
            </Box>
          ))}
        </Box>
      </ThreeOverviewCanvas>
    </Box>
  );
}
