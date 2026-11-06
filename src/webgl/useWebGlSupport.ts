import { useEffect, useState } from 'react';

/**
 * Checks if the current browser environment supports hardware-accelerated WebGL.
 */
export function useWebGlSupport(): boolean {
  const [supported, setSupported] = useState<boolean>(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl') ||
        canvas.getContext('webgl2');
      setSupported(Boolean(gl && gl instanceof WebGLRenderingContext));
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
