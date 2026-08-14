import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes, useTheme } from '@mui/material/styles';

export interface NamiosLoaderProps {
  /** Size of HashLoader spinner in px (default: 50) */
  size?: number;
  /** Color of HashLoader spinner (defaults to primary.main or #2563EB) */
  color?: string;
  /** Optional caption label below spinner (e.g. "Loading Stay OS...") */
  label?: string;
  /** Whether to display the Namios logo header (default: true) */
  showLogo?: boolean;
}

export function NamiosMarkSvg({ size = 28, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="65.4 0 357 357" role="img" aria-label="Namios Logo">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M243.9 0C342.483 0 422.4 79.9172 422.4 178.5C422.4 277.083 342.483 357 243.9 357C145.317 357 65.4 277.083 65.4 178.5C65.4 79.9172 145.317 0 243.9 0ZM310.959 123.084C282.621 110.737 261.859 111.102 245.603 117.036C224.886 124.599 209.317 141.851 193.82 160.904C186.307 170.141 178.662 179.965 170.831 188.264C162.968 196.595 154.239 204.152 144.056 208.622C133.572 213.224 122.004 214.351 109.132 210.549C101.316 208.24 93.1868 204.165 84.6002 198.203C94.3132 277.55 161.929 339 243.9 339C323.826 339 390.103 280.577 402.365 204.107C383.535 221.966 364.908 230.599 347.532 231.866C324.416 233.552 305.636 222.043 294.281 206.255C283.077 190.676 278.393 169.948 284.417 151.887C288.56 139.462 297.435 129.246 310.959 123.084ZM243.9 18C156.6 18 85.5799 87.6993 83.4498 174.486C95.7717 185.135 105.871 190.816 114.232 193.286C122.972 195.868 130.174 195.059 136.822 192.141C143.772 189.09 150.539 183.54 157.741 175.909C164.974 168.245 171.961 159.252 179.855 149.547C195.17 130.717 213.508 109.591 239.431 100.128C266.056 90.4092 298.584 93.6021 340.923 118.22C344.325 120.197 346.047 124.155 345.176 127.992C344.305 131.829 341.043 134.655 337.122 134.971C315.166 136.736 305.095 146.78 301.493 157.582C297.626 169.176 300.411 183.949 308.894 195.745C317.227 207.331 330.354 215.072 346.222 213.914C361.815 212.776 382.028 18 243.9 18Z"
        fill={color || 'currentColor'}
      />
    </svg>
  );
}

const beforeKeyframes = (lat: number, thickness: number) => keyframes`
  0% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  35% { width: ${lat * 2}px; boxShadow: 0 ${-thickness}px 0 0, 0 ${thickness}px 0 0; }
  70% { width: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  100% { width: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
`;

const afterKeyframes = (lat: number, thickness: number) => keyframes`
  0% { height: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
  35% { height: ${lat * 2}px; boxShadow: ${-thickness}px 0 0 0, ${thickness}px 0 0 0; }
  70% { height: ${thickness}px; boxShadow: ${lat}px ${-thickness}px 0 0, ${-lat}px ${thickness}px 0 0; }
  100% { height: ${thickness}px; boxShadow: ${-thickness}px ${-lat}px 0 0, ${thickness}px ${lat}px 0 0; }
`;

/** Pure CSS HashLoader with Namios branding — zero external dependencies. */
export function NamiosLoader({
  size = 50,
  color,
  label,
  showLogo = true,
}: NamiosLoaderProps) {
  const theme = useTheme();
  const loaderColor = color || (theme.palette.mode === 'light' ? '#2563EB' : '#60A5FA');
  const thickness = Math.max(4, Math.round(size / 5));
  const lat = Math.round((size - thickness) / 2);

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 2,
      }}
    >
      {showLogo && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: loaderColor,
          }}
        >
          <NamiosMarkSvg size={26} color={loaderColor} />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              color: 'text.primary',
            }}
          >
            Namios
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          position: 'relative',
          width: size,
          height: size,
          transform: 'rotate(165deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            display: 'block',
            borderRadius: `${thickness / 2}px`,
            backgroundColor: loaderColor,
            transform: 'translate(-50%, -50%)',
          },
          '&::before': {
            height: `${thickness}px`,
            animation: `${beforeKeyframes(lat, thickness)} 2s infinite ease`,
          },
          '&::after': {
            width: `${thickness}px`,
            animation: `${afterKeyframes(lat, thickness)} 2s infinite ease`,
          },
        }}
      />
      {label && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontSize: '0.72rem',
            mt: 0.5,
          }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
}
