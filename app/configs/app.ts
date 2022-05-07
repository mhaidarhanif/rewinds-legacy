import type { ConfigApp } from '~/types';

/**
 * Config App
 *
 * Configuration for:
 * - Themes
 * - Components
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
  navigationBarStyle: 'complex',
};
