import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

import { configMeta } from '~/configs';
import { googleAnalyticsInit, posthogInit, splitbeeInit } from '~/libs';
import { isEnvProduction } from '~/utils';

hydrate(<RemixBrowser />, document);

const isProductionAllowed =
  isEnvProduction && configMeta.url === window.location.hostname;

if (isProductionAllowed) {
  googleAnalyticsInit(); // Google Analytics
  splitbeeInit(); // Splitbee Analytics
  posthogInit(); // PostHog Product Analytics
}

// If the browser supports Service Worker API
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register after the page complete the load
    navigator.serviceWorker.register('/sw.js');
  });
}
