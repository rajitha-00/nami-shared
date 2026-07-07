import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export interface KanbanColumn<TId extends string> {
  id: TId;
  title: string;
  color?: string; // Optional accent color for column header indicator
}

export interface KanbanBoardProps<TId extends string, TItem> {
  columns: KanbanColumn<TId>[];
  items: TItem[];
  getItemId: (item: TItem) => string;
  getItemColumnId: (item: TItem) => TId;
  renderItem: (item: TItem) => ReactNode;
}

const LaneContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 280,
  maxWidth: 360,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'light' ? '#F1F5F9' : '#0F172A',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  height: '100%',
  minHeight: 500,
  border: `1px solid ${theme.palette.mode === 'light' ? '#E2E8F0' : '#1E293B'}`,
}));

const ColumnHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(1.5),
  borderBottom: `2px solid ${theme.palette.divider}`,
}));

const ItemsScrollArea = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingRight: theme.spacing(0.5),
  '&::-webkit-scrollbar': {
    width: 6,
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.mode === 'light' ? '#CBD5E1' : '#475569',
    borderRadius: 3,
  },
}));

/**
 * KanbanBoard: A generic step-progression workflow board.
 * Purely presentational; delegates item rendering and column selection.
 */
export function KanbanBoard<TId extends string, TItem>({
  columns,
  items,
  getItemId,
  getItemColumnId,
  renderItem,
}: KanbanBoardProps<TId, TItem>) {
  return (
    <Stack
      direction="row"
      spacing={2.5}
      sx={{
        overflowX: 'auto',
        pb: 2,
        height: '100%',
        alignItems: 'stretch',
        minHeight: 550,
      }}
    >
      {columns.map((column) => {
        const laneItems = items.filter((item) => getItemColumnId(item) === column.id);

        return (
          <LaneContainer key={column.id}>
            <ColumnHeader>
              <Stack direction="row" spacing={1.5} alignItems="center">
                {column.color && (
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: column.color,
                    }}
                  />
                )}
                <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.05em' }}>
                  {column.title}
                </Typography>
              </Stack>
              <Card
                variant="outlined"
                sx={{
                  px: 1,
                  py: 0.25,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  borderColor: 'divider',
                  boxShadow: 'none',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  {laneItems.length}
                </Typography>
              </Card>
            </ColumnHeader>

            <ItemsScrollArea>
              {laneItems.map((item) => (
                <Box key={getItemId(item)} sx={{ position: 'relative' }}>
                  {renderItem(item)}
                </Box>
              ))}
            </ItemsScrollArea>
          </LaneContainer>
        );
      })}
    </Stack>
  );
}
