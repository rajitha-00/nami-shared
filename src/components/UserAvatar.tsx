import React, { useState, useEffect } from 'react';
import { Avatar } from '@namios/motionui-react';
import type { SxProps, Theme } from '@mui/material/styles';
import { initialsFromName } from '../utils/string';

export interface UserAvatarProps {
  name?: string;
  email?: string;
  avatarUrl?: string;
  size?: number;
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
  fontSize?: number | string;
  className?: string;
}

/** Dark vibrant colors used as the text/border color (light pastel bg derived from these). */
const DETERMINISTIC_COLORS = [
  '#1565C0', // Blue
  '#4527A0', // Deep Purple
  '#7B1FA2', // Purple
  '#C62828', // Red
  '#E65100', // Deep Orange
  '#2E7D32', // Green
  '#00695C', // Teal
  '#0277BD', // Light Blue
];

/** Approximate alpha at ~15% to get a light pastel bg for use inline. */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1] ?? '0', 16),
        g: parseInt(result[2] ?? '0', 16),
        b: parseInt(result[3] ?? '0', 16),
      }
    : { r: 25, g: 118, d: 210 } as any;
}

export const getAvatarBgColor = (seed: string): string => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DETERMINISTIC_COLORS.length;
  return DETERMINISTIC_COLORS[index] ?? '#1565C0';
};

/** Returns light pastel background and dark text color for given seed */
export const getAvatarColors = (seed: string): { bg: string; text: string } => {
  const textColor = getAvatarBgColor(seed);
  const { r, g, b } = hexToRgb(textColor);
  const bg = `rgba(${r}, ${g}, ${b}, 0.14)`;
  return { bg, text: textColor };
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name = '',
  email = '',
  avatarUrl,
  size = 36,
  sx,
  style,
  fontSize,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(avatarUrl);

  useEffect(() => {
    if (avatarUrl) {
      setImageSrc(avatarUrl);
      return;
    }

    try {
      const stored = window.localStorage.getItem('hotelos.avatar');
      if (stored) {
        setImageSrc(stored);
      }
    } catch {
      // localStorage read failed or sandboxed
    }
  }, [avatarUrl]);

  const displayName = name.trim() || email.trim() || 'User';
  const initials = initialsFromName(displayName);
  const { bg, text } = getAvatarColors(displayName);

  const sxStyle =
    sx && typeof sx === 'object' && !Array.isArray(sx)
      ? (sx as React.CSSProperties)
      : undefined;

  const combinedStyle: React.CSSProperties = {
    width: size,
    height: size,
    backgroundColor: bg,
    color: text,
    fontWeight: 800,
    fontSize: fontSize ?? Math.max(12, Math.floor(size * 0.4)),
    boxShadow: 'none',
    border: `1.5px solid ${text}26`, // ~15% opacity border
    ...sxStyle,
    ...style,
  };

  return (
    <Avatar
      src={imageSrc}
      alt={displayName}
      size={size}
      variant="circular"
      className={className}
      style={combinedStyle}
    >
      {initials}
    </Avatar>
  );
};
