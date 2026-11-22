import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export interface BrandLogoProps {
  propertyName?: string;
  logoSrc?: string;
  fallbackSubtitle?: string;
  textColor?: string;
  subtitleColor?: string;
  onClick?: () => void;
  className?: string;
}

const LogoRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  userSelect: 'none',
}));

const LogoTile = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 36,
  maxWidth: 140,
  height: 36,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'transparent',
  padding: theme.spacing(0.25),
  overflow: 'hidden',
  flexShrink: 0,
}));

const LogoImage = styled('img')({
  width: 'auto',
  maxWidth: '100%',
  height: '100%',
  maxHeight: 36,
  objectFit: 'contain',
  display: 'block',
});

export function NamiosMarkSvg({ size = 28, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="65.4 0 357 357" role="img" aria-label="NamiOS">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M243.9 0C342.483 0 422.4 79.9172 422.4 178.5C422.4 277.083 342.483 357 243.9 357C145.317 357 65.4 277.083 65.4 178.5C65.4 79.9172 145.317 0 243.9 0ZM310.959 123.084C282.621 110.737 261.859 111.102 245.603 117.036C224.886 124.599 209.317 141.851 193.82 160.904C186.307 170.141 178.662 179.965 170.831 188.264C162.968 196.595 154.239 204.152 144.056 208.622C133.572 213.224 122.004 214.351 109.132 210.549C101.316 208.24 93.1868 204.165 84.6002 198.203C94.3132 277.55 161.929 339 243.9 339C323.826 339 390.103 280.577 402.365 204.107C383.535 221.966 364.908 230.599 347.532 231.866C324.416 233.552 305.636 222.043 294.281 206.255C283.077 190.676 278.393 169.948 284.417 151.887C288.56 139.462 297.435 129.246 310.959 123.084ZM243.9 18C156.6 18 85.5799 87.6993 83.4498 174.486C95.7717 185.135 105.871 190.816 114.232 193.286C122.972 195.868 130.174 195.059 136.822 192.141C143.772 189.09 150.539 183.54 157.741 175.909C164.974 168.245 171.961 159.252 179.855 149.547C195.17 130.717 213.508 109.591 239.431 100.128C266.056 90.4092 298.584 93.6021 340.923 118.22C344.325 120.197 346.047 124.155 345.176 127.992C344.305 131.829 341.043 134.655 337.122 134.971C315.166 136.736 305.095 146.78 301.493 157.582C297.626 169.176 300.411 183.949 308.894 195.745C317.227 207.331 330.354 215.072 346.222 213.914C361.815 212.776 382.028 202.893 404.367 175.385C402.707 88.1808 331.501 18 243.9 18Z"
        fill={color || '#0A384D'}
      />
    </svg>
  );
}

/**
 * Standard NamiOS BrandLogo component.
 * Ensures consistent squircle tile, resilient zero-broken-image fallback to /nami-mark.svg and NamiosMarkSvg,
 * bold 700 property title, and crisp 9px "POWERED BY NAMIOS" subtitle across all microfrontends.
 */
export function BrandLogo({
  propertyName,
  logoSrc,
  fallbackSubtitle = 'Powered by NamiOS',
  textColor,
  subtitleColor,
  onClick,
  className,
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [svgFallbackFailed, setSvgFallbackFailed] = useState(false);

  useEffect(() => {
    setImageError(false);
    setSvgFallbackFailed(false);
  }, [logoSrc]);

  // Priority: explicit prop -> localStorage tenant_name -> default Grand Lavender
  const storedTenantName =
    typeof window !== 'undefined'
      ? localStorage.getItem('hotelos.tenant_name') || localStorage.getItem('hotelos_tenant_name')
      : null;
  const displayName = propertyName || storedTenantName || 'Grand Lavender Hotel & Suites';

  // Check if we should render a custom uploaded image or fall back to official Nami mark
  const showCustomLogo = Boolean(logoSrc && !imageError);

  return (
    <LogoRoot
      onClick={onClick}
      sx={onClick ? { cursor: 'pointer' } : undefined}
      role={onClick ? 'button' : undefined}
      className={className}
      aria-label={displayName}
    >
      <LogoTile>
        {showCustomLogo ? (
          <LogoImage
            src={logoSrc!}
            alt={`${displayName} logo`}
            onError={() => setImageError(true)}
          />
        ) : !svgFallbackFailed ? (
          <LogoImage
            src="/nami-mark.svg"
            alt="NamiOS"
            sx={{ width: 32, height: 32 }}
            onError={() => setSvgFallbackFailed(true)}
          />
        ) : (
          <NamiosMarkSvg size={28} />
        )}
      </LogoTile>
      <div>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.1,
            color: textColor || 'text.primary',
            whiteSpace: 'nowrap',
          }}
        >
          {displayName}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: 9,
            display: 'block',
            color: subtitleColor || 'text.secondary',
            opacity: subtitleColor ? 0.85 : 1,
            whiteSpace: 'nowrap',
          }}
        >
          {displayName ? 'Powered by NamiOS' : fallbackSubtitle}
        </Typography>
      </div>
    </LogoRoot>
  );
}
