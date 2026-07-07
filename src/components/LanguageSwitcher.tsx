import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import TranslateIcon from '@mui/icons-material/Translate';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LOCALES } from '../constants/locales';

export interface LanguageSwitcherProps {
  /** 'text' shows the current language label next to the icon. */
  variant?: 'icon' | 'text';
}

/** Menu of SUPPORTED_LOCALES; persists selection via the i18next detector cache. */
export function LanguageSwitcher({ variant = 'text' }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const current =
    SUPPORTED_LOCALES.find((locale) => i18n.language.startsWith(locale.code)) ??
    SUPPORTED_LOCALES[0];

  const handleSelect = (code: string) => {
    void i18n.changeLanguage(code);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        startIcon={<TranslateIcon />}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
        aria-label={t('common:actions.changeLanguage')}
        aria-haspopup="menu"
      >
        {variant === 'text' ? current.label : null}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        {SUPPORTED_LOCALES.map((locale) => (
          <MenuItem
            key={locale.code}
            selected={locale.code === current.code}
            onClick={() => {
              handleSelect(locale.code);
            }}
          >
            <ListItemIcon>
              {locale.code === current.code ? <CheckIcon fontSize="small" /> : null}
            </ListItemIcon>
            <ListItemText>{locale.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
