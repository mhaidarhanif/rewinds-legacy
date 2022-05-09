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
    colorScheme: 'night',
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

/**
 * Config App Features
 */

export const configAppFeatures = {
  googleAnalytics: true,
  splitbee: true,
  posthog: true,
};
