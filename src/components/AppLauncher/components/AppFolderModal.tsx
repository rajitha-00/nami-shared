import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Chip } from '@namios/motionui-react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import type { IAppItem } from '../interfaces/IAppItem';
import { AppTile } from './AppTile';
import {
  BACKDROP_TRANSITION,
  CONTAINER_VARIANTS,
} from '../constants/animationConfig';

export interface AppFolderModalProps {
  title?: string;
  subtitle?: string;
  apps: IAppItem[];
  currentAppId?: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectApp: (app: IAppItem) => void;
}

export const AppFolderModal = ({
  title = 'NamiOS Ecosystem',
  subtitle = 'Switch between NamiOS modules & portals',
  apps,
  currentAppId,
  isOpen,
  onClose,
  onSelectApp,
}: AppFolderModalProps) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearch('');
      setSelectedCategory('all');
    }
  }, [isOpen]);

  // Keyboard handler for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Categories present in apps list
  const categories = useMemo(() => {
    const set = new Set<string>();
    apps.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [apps]);

  // Filtered apps based on search and category
  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchSearch =
        !search.trim() ||
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        (app.description && app.description.toLowerCase().includes(search.toLowerCase()));

      const matchCategory =
        selectedCategory === 'all' || app.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [apps, search, selectedCategory]);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'operations':
        return 'Operations';
      case 'food_beverage':
        return 'F&B';
      case 'platform':
        return 'Platform';
      case 'guest_experience':
        return 'Guest Hub';
      case 'management':
        return 'Management';
      case 'marketing':
        return 'Public Web';
      default:
        return cat.replace('_', ' ');
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            boxSizing: 'border-box',
          }}
        >
          {/* SUBTLE BACKDROP BLUR */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={BACKDROP_TRANSITION}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.18)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* EXPANDED IOS FOLDER CARD */}
          <motion.div
            ref={modalRef}
            key="folder-modal"
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 620,
              maxHeight: '88vh',
              borderRadius: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(28px) saturate(190%)',
              WebkitBackdropFilter: 'blur(28px) saturate(190%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow:
                '0 24px 60px -10px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
              padding: '24px 24px 18px 24px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
              overflow: 'hidden',
              boxSizing: 'border-box',
              margin: 'auto',
            }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* FOLDER HEADER */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ pr: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '-0.3px',
                    fontSize: '1.25rem',
                    color: '#0F172A',
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </Typography>
                {subtitle && (
                  <Typography
                    variant="caption"
                    sx={{ color: '#64748B', fontWeight: 500, display: 'block', mt: 0.5, fontSize: '0.8rem' }}
                  >
                    {subtitle}
                  </Typography>
                )}
              </Box>

              <IconButton
                size="small"
                onClick={onClose}
                aria-label="Close apps directory"
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.05)',
                  '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
                  color: '#475569',
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* SEARCH FIELD */}
            {apps.length > 4 && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                  borderRadius: '12px',
                  px: 1.5,
                  py: 0.75,
                  mb: 1.75,
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                }}
              >
                <SearchIcon sx={{ fontSize: 18, color: '#94A3B8', mr: 1 }} />
                <InputBase
                  placeholder="Search applications..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  fullWidth
                  autoFocus={false}
                  inputProps={{
                    'aria-label': 'Search apps',
                    style: { fontSize: '0.875rem', fontWeight: 500, padding: 0 },
                  }}
                />
                {search && (
                  <IconButton size="small" onClick={() => setSearch('')} sx={{ p: 0.25 }}>
                    <CloseIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                )}
              </Box>
            )}

            {/* CATEGORY CHIPS - WRAPPED WITHOUT SCROLLING */}
            {categories.length > 1 && !search && (
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 0.75,
                  mb: 2,
                  alignItems: 'center',
                }}
              >
                <Chip
                  label="All Apps"
                  size="small"
                  onClick={() => setSelectedCategory('all')}
                  variant={selectedCategory === 'all' ? 'filled' : 'outlined'}
                  color={selectedCategory === 'all' ? 'primary' : undefined}
                  style={{
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    height: 26,
                    cursor: 'pointer',
                    borderRadius: 8,
                  }}
                />
                {categories.map((cat) => (
                  <Chip
                    key={cat}
                    label={getCategoryLabel(cat)}
                    size="small"
                    onClick={() => setSelectedCategory(cat)}
                    variant={selectedCategory === cat ? 'filled' : 'outlined'}
                    color={selectedCategory === cat ? 'primary' : undefined}
                    style={{
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      height: 26,
                      cursor: 'pointer',
                      borderRadius: 8,
                    }}
                  />
                ))}
              </Box>
            )}

            {/* APPS GRID */}
            <Box
              sx={{
                flexGrow: 1,
                overflowY: 'auto',
                py: 0.5,
                pr: 0.5,
                minHeight: 180,
                '::-webkit-scrollbar': { width: 4 },
                '::-webkit-scrollbar-thumb': {
                  bgcolor: 'rgba(0, 0, 0, 0.12)',
                  borderRadius: 2,
                },
              }}
            >
              {filteredApps.length === 0 ? (
                <Box sx={{ py: 6, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    No apps found matching &ldquo;{search}&rdquo;
                  </Typography>
                </Box>
              ) : (
                <motion.div
                  variants={CONTAINER_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '14px 8px',
                    justifyItems: 'center',
                  }}
                >
                  {filteredApps.map((app) => (
                    <AppTile
                      key={app.id}
                      app={app}
                      isActive={currentAppId === app.id}
                      onSelect={(selected) => {
                        onSelectApp(selected);
                        onClose();
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </Box>

            {/* FOOTER HINT */}
            <Box
              sx={{
                pt: 1.5,
                mt: 1,
                borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 600 }}>
                NamiOS Suite
              </Typography>
              <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.7rem' }}>
                Press <kbd style={{ background: 'rgba(0,0,0,0.06)', padding: '2px 4px', borderRadius: 4, fontWeight: 700 }}>Esc</kbd> to close
              </Typography>
            </Box>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
