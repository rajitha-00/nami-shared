import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useLocaleFormat } from '../hooks/useLocaleFormat';

export interface MenuCardProps {
  name: string;
  price: string | number;
  description?: string;
  imageUrl?: string;
  badges?: ReactNode[];
  stockLabel?: string;
  stockColor?: 'success' | 'error' | 'warning' | 'default';
  actionOverlay?: ReactNode;
  activeBorderColor?: string;
  onClick?: () => void;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'activeBorderColor' && prop !== 'hasAction',
})<{ activeBorderColor?: string; hasAction?: boolean }>(({ theme, activeBorderColor, hasAction }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out',
  cursor: hasAction ? 'pointer' : 'default',
  border: activeBorderColor ? `2px solid ${activeBorderColor}` : `1px solid ${theme.palette.divider}`,
  '&:hover': hasAction
    ? {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[4],
        borderColor: activeBorderColor || theme.palette.text.secondary,
      }
    : {},
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  paddingTop: '60%', // 5:3 Aspect Ratio
  width: '100%',
  overflow: 'hidden',
});

const MediaOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
});


/**
 * MenuCard: A presentational card for items in the catalog or menu.
 */
export function MenuCard({
  name,
  price,
  description,
  imageUrl,
  badges,
  stockLabel,
  stockColor = 'default',
  actionOverlay,
  activeBorderColor,
  onClick,
}: MenuCardProps) {
  const { formatCurrency } = useLocaleFormat();
  const formattedPrice = typeof price === 'number' ? formatCurrency(price) : price;

  return (
    <StyledCard
      activeBorderColor={activeBorderColor}
      hasAction={Boolean(onClick)}
      onClick={onClick}
    >
      <ImageContainer>
        {imageUrl ? (
          <CardMedia
            component="img"
            image={imageUrl}
            alt={name}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'action.hover',
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
              No Image
            </Typography>
          </Box>
        )}
        {actionOverlay && <MediaOverlay>{actionOverlay}</MediaOverlay>}
      </ImageContainer>

      <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }} noWrap>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>
            {formattedPrice}
          </Typography>
        </Stack>

        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: 40,
              lineHeight: 1.4,
            }}
          >
            {description}
          </Typography>
        )}

        <Box sx={{ flexGrow: 1 }} />

        {/* Badges & Stock Row */}
        <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap alignItems="center" sx={{ mt: 1 }}>
          {badges?.map((badge, idx) => (
            <Box key={idx}>{badge}</Box>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          {stockLabel && (
            <Chip
              label={stockLabel}
              size="small"
              color={stockColor}
              sx={{ fontWeight: 700, fontSize: '0.65rem', height: 20 }}
            />
          )}
        </Stack>
      </CardContent>
    </StyledCard>
  );
}
