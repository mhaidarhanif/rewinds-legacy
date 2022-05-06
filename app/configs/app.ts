import type { ConfigApp } from '~/types';

/**
 * Config App
 *
 * Theme
 * Component configuration
 */

export const configApp: ConfigApp = {
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
};
