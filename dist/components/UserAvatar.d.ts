import React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
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
export declare const getAvatarBgColor: (seed: string) => string;
export declare const UserAvatar: React.FC<UserAvatarProps>;
