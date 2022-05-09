import type { IToast } from '~/types';

/**
 * Config Style
 * Used for themes and components
 */

export const configStyle: ConfigStyle = {
  theme: {
    colorScheme: 'day',
    density: 'comfortable',
    radius: '0.375rem',
    cursorPointer: true,
  },
  toast: {
    position: 'bottom-right',
  },
  notification: {
    position: 'bottom-right',
  },
  navigationBar: 'complex',
};

export type Theme = {
  colorScheme: string;
  density: 'compact' | 'comfortable' | 'unset';
  radius: string;
  cursorPointer: boolean;
};

export type ConfigStyle = {
  theme: Theme;
  toast: IToast;
  notification: IToast;
  navigationBar: 'simple' | 'complex';
};
