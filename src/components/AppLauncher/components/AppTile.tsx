import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import type { IAppItem } from '../interfaces/IAppItem';
import { APP_TILE_VARIANTS } from '../constants/animationConfig';

export interface AppTileProps {
  app: IAppItem;
  isActive?: boolean;
  onSelect: (app: IAppItem) => void;
}

export const AppTile = ({
  app,
  isActive = false,
  onSelect,
}: AppTileProps) => {
  const [imgError, setImgError] = useState(false);
  const iconSrcToUse = app.lordIconSrc || app.iconSrc;

  const handleClick = () => {
    if (app.disabled) return;
    onSelect(app);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.div
      variants={APP_TILE_VARIANTS}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 380, damping: 20 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={app.disabled ? -1 : 0}
      role="button"
      aria-label={`${app.name}${app.description ? `: ${app.description}` : ''}`}
      aria-disabled={app.disabled}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6px 4px',
        borderRadius: 16,
        cursor: app.disabled ? 'not-allowed' : 'pointer',
        opacity: app.disabled ? 0.5 : 1,
        position: 'relative',
        userSelect: 'none',
        outline: 'none',
      }}
    >
      {/* SQUIRCLE APP ICON */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 15,
          background: app.iconBg || 'linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)',
          boxShadow: isActive
            ? '0 6px 18px rgba(0, 122, 255, 0.45), 0 0 0 2.5px #007AFF'
            : '0 6px 16px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 6,
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Subtle glass reflection gradient at the top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '45%',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
            pointerEvents: 'none',
          }}
        />

        {iconSrcToUse && !imgError ? (
          <img
            src={iconSrcToUse}
            alt={app.name}
            onError={() => setImgError(true)}
            style={{ width: 32, height: 32, objectFit: 'contain' }}
            draggable={false}
          />
        ) : (
          app.icon
        )}

        {/* ACTIVE INDICATOR DOT */}
        {isActive && (
          <div
            style={{
              position: 'absolute',
              bottom: 3.5,
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.9)',
            }}
          />
        )}
      </div>

      {/* APP NAME */}
      <Typography
        variant="caption"
        sx={{
          fontWeight: 700,
          fontSize: '0.76rem',
          lineHeight: 1.2,
          color: '#0F172A',
          maxWidth: 86,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.2px',
        }}
      >
        {app.name}
      </Typography>

      {/* BADGE (IF ANY) */}
      {app.badge && (
        <Chip
          label={app.badge}
          size="small"
          color={app.badgeColor || 'default'}
          sx={{
            mt: 0.4,
            height: 16,
            fontSize: '0.6rem',
            fontWeight: 800,
            borderRadius: '5px',
            '& .MuiChip-label': { px: 0.6 },
          }}
        />
      )}
    </motion.div>
  );
};
