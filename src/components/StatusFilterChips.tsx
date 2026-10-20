import { Chip, Stack } from '@namios/motionui-react';
import { useTranslation } from 'react-i18next';

export interface StatusFilterOption<TValue extends string> {
  value: TValue;
  labelKey: string;
  count?: number;
}

export interface StatusFilterChipsProps<TValue extends string> {
  options: StatusFilterOption<TValue>[];
  value: TValue;
  onChange: (value: TValue) => void;
  className?: string;
}

/** "All (47) / Confirmed (23) / …" chip filter row; active chip is filled dark. Powered by MotionUI design tokens. */
export const StatusFilterChips = <TValue extends string>({
  options,
  value,
  onChange,
  className,
}: StatusFilterChipsProps<TValue>) => {
  const { t } = useTranslation();
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" className={className} role="tablist">
      {options.map((option) => {
        const active = option.value === value;
        const label =
          option.count !== undefined ? `${t(option.labelKey)} (${option.count})` : t(option.labelKey);
        return (
          <Chip
            key={option.value}
            label={label}
            color={active ? 'primary' : undefined}
            variant={active ? 'filled' : 'outlined'}
            clickable
            onClick={() => {
              onChange(option.value);
            }}
            role="tab"
            aria-selected={active}
          />
        );
      })}
    </Stack>
  );
};
