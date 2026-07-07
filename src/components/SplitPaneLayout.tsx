import type { ReactNode } from 'react';
import Box from '@mui/material/Box';


export interface SplitPaneLayoutProps {
  leftPane: ReactNode;
  rightPane: ReactNode;
  rightWidth?: number | string; // defaults to 400
}

/**
 * SplitPaneLayout: A master-detail framework split panel.
 * Designed for POS screen or split grids. Left side scrollable, right side sticky panel.
 */
export function SplitPaneLayout({
  leftPane,
  rightPane,
  rightWidth = 400,
}: SplitPaneLayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      {/* Left panel (scrollable catalog or list) */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {leftPane}
      </Box>

      {/* Right panel (sticky cart or details drawer) */}
      <Box
        sx={{
          width: { xs: '100%', md: rightWidth },
          flexShrink: 0,
          position: { md: 'sticky' },
          top: { md: 88 }, // Adjust based on TopBar height (topBarHeight is 64, offset by spacing)
          height: { md: 'calc(100vh - 120px)' },
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {rightPane}
      </Box>
    </Box>
  );
}
