import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ThreeOverviewCanvas } from './ThreeOverviewCanvas';

export interface RoomUnit3D {
  id: string;
  roomNumber: string;
  floor: number;
  status: 'available' | 'occupied' | 'reserved' | 'cleaning';
  guestName?: string;
}

export interface PropertyDigitalTwinProps {
  rooms: RoomUnit3D[];
  title?: string;
  subtitle?: string;
  height?: number | string;
  fallback?: React.ReactNode;
}

const STATUS_HEX: Record<RoomUnit3D['status'], string> = {
  available: '#34C759', // Apple Green
  occupied: '#007AFF',  // Blue
  reserved: '#FF9500',  // Amber
  cleaning: '#AF52DE',  // Purple
};

/**
 * PropertyDigitalTwin
 *
 * 3D Real-Time Spatial Overview of Property Floors & Room Blocks.
 * Features 3D stacked floor plates with micro-block room units.
 */
export function PropertyDigitalTwin({
  rooms,
  title,
  subtitle,
  height = 300,
  fallback,
}: PropertyDigitalTwinProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const floors = useMemo(() => {
    const map = new Map<number, RoomUnit3D[]>();
    rooms.forEach((r) => {
      const list = map.get(r.floor) || [];
      list.push(r);
      map.set(r.floor, list);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [rooms]);

  const renderScene = React.useCallback(
    (gl: WebGLRenderingContext, width: number, heightPx: number, rotation: { x: number; y: number }) => {
      const vsSource = `
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        uniform mat4 uMatrix;
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vLight;

        void main() {
          gl_Position = uMatrix * vec4(aPosition, 1.0);
          vec3 lightDir = normalize(vec3(0.6, 1.0, 0.5));
          float diffuse = max(dot(aNormal, lightDir), 0.0);
          vLight = 0.6 + 0.4 * diffuse;
          vColor = uColor;
        }
      `;

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

      // Unit Cube [-0.5 to 0.5]
      const vertices = new Float32Array([
        // Front
        -0.5, -0.5,  0.5,   0.5, -0.5,  0.5,   0.5,  0.5,  0.5,
        -0.5, -0.5,  0.5,   0.5,  0.5,  0.5,  -0.5,  0.5,  0.5,
        // Back
        -0.5, -0.5, -0.5,  -0.5,  0.5, -0.5,   0.5,  0.5, -0.5,
        -0.5, -0.5, -0.5,   0.5,  0.5, -0.5,   0.5, -0.5, -0.5,
        // Top
        -0.5,  0.5, -0.5,  -0.5,  0.5,  0.5,   0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5,   0.5,  0.5,  0.5,   0.5,  0.5, -0.5,
        // Left
        -0.5, -0.5, -0.5,  -0.5, -0.5,  0.5,  -0.5,  0.5,  0.5,
        -0.5, -0.5, -0.5,  -0.5,  0.5,  0.5,  -0.5,  0.5, -0.5,
        // Right
         0.5, -0.5, -0.5,   0.5,  0.5, -0.5,   0.5,  0.5,  0.5,
         0.5, -0.5, -0.5,   0.5,  0.5,  0.5,   0.5, -0.5,  0.5,
      ]);

      const normals = new Float32Array([
        0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
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

      const aspect = width / heightPx;
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);
      const scale = 0.22;

      // Render floor plates and room blocks
      floors.forEach(([, floorRooms], fIdx) => {
        const floorY = (fIdx - floors.length / 2) * 1.1;

        floorRooms.forEach((rm, rIdx) => {
          const row = Math.floor(rIdx / 4);
          const col = rIdx % 4;
          const xPos = (col - 1.5) * 1.1;
          const zPos = (row - 0.5) * 1.1;

          const mat = new Float32Array([
            (cosY * scale) / aspect,  sinX * sinY * scale, -cosX * sinY * scale, 0,
            0,                         cosX * scale,        sinX * scale,        0,
            (sinY * scale) / aspect, -sinX * cosY * scale,  cosX * cosY * scale, 0,
            ((xPos * cosY + zPos * sinY) * scale) / aspect,
            floorY * scale + (-xPos * sinX * sinY + zPos * sinX * cosY) * scale,
            0,
            1,
          ]);

          gl.uniformMatrix4fv(uMatrix, false, mat);

          const hex = STATUS_HEX[rm.status] || '#007AFF';
          const r = parseInt(hex.slice(1, 3), 16) / 255 || 0;
          const g = parseInt(hex.slice(3, 5), 16) / 255 || 0.48;
          const b = parseInt(hex.slice(5, 7), 16) / 255 || 1.0;

          gl.uniform3f(uColor, r, g, b);
          gl.drawArrays(gl.TRIANGLES, 0, 30);
        });
      });
    },
    [floors],
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
          {Object.entries(STATUS_HEX).map(([status, color]) => (
            <Box key={status} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '1.5px', bgcolor: color }} />
              <Typography variant="caption" sx={{ fontSize: '0.68rem', fontWeight: 600, color: 'text.secondary', textTransform: 'capitalize' }}>
                {status}
              </Typography>
            </Box>
          ))}
        </Box>
      </ThreeOverviewCanvas>
    </Box>
  );
}
