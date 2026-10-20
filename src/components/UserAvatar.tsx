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

const DETERMINISTIC_COLORS = [
  '#007AFF', // Blue
  '#5856D6', // Purple
  '#AF52DE', // Magenta
  '#FF2D55', // Pink
  '#FF9500', // Orange
  '#34C759', // Green
  '#00C7BE', // Teal
  '#32ADE6', // Light Blue
];

export const getAvatarBgColor = (seed: string): string => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DETERMINISTIC_COLORS.length;
  return DETERMINISTIC_COLORS[index] ?? '#007AFF';
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
  const bgColor = getAvatarBgColor(displayName);

  const sxStyle =
    sx && typeof sx === 'object' && !Array.isArray(sx)
      ? (sx as React.CSSProperties)
      : undefined;

  const combinedStyle: React.CSSProperties = {
    width: size,
    height: size,
    backgroundColor: bgColor,
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: fontSize ?? Math.max(12, Math.floor(size * 0.4)),
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
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
