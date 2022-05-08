import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

import { configMeta } from '~/configs';
import { googleAnalyticsInit, posthogInit, splitbeeInit } from '~/libs';

hydrate(<RemixBrowser />, document);

const isProductionAllowed =
  ENV.NODE_ENV !== 'development' && configMeta.url === window.location.hostname;

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
