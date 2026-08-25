import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import type { IAppItem } from '../interfaces/IAppItem';
import { FOLDER_LAYOUT_SPRING } from '../constants/animationConfig';

export interface AppFolderMiniPreviewProps {
  apps: IAppItem[];
  isOpen: boolean;
  onClick: () => void;
  tooltip?: string;
  className?: string;
}

export const AppFolderMiniPreview = ({
  apps,
  isOpen,
  onClick,
  tooltip = 'NamiOS Apps',
  className,
}: AppFolderMiniPreviewProps) => {
  // Show up to 4 preview items in 2x2 grid (or 9 in 3x3)
  const previewApps = apps.slice(0, 4);

  return (
    <Tooltip title={tooltip} arrow placement="bottom">
      <motion.button
        type="button"
        layoutId="hotelos-app-folder-container"
        transition={FOLDER_LAYOUT_SPRING}
        onClick={onClick}
        aria-label={tooltip}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className={className}
        style={{
          width: 38,
          height: 38,
          borderRadius: 12,
          padding: 4,
          border: '1px solid rgba(229, 231, 235, 0.9)',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2.5,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {previewApps.map((app) => (
            <div
              key={app.id}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 3.5,
                background: app.iconBg || '#007AFF',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            />
          ))}
        </div>
      </motion.button>
    </Tooltip>
  );
};
