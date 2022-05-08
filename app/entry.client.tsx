import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

import { configMeta } from '~/configs';
import { splitbee, ReactGA } from '~/libs';

hydrate(<RemixBrowser />, document);

if (
  ENV.NODE_ENV !== 'development' &&
  configMeta.url === window.location.hostname
) {
  // Splitbee Analytics
  splitbee.init();

  // Google Analytics
  ReactGA.initialize(String(ENV.GA_MEASUREMENT_ID));
}

// If the browser supports Service Worker API
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register after the page complete the load
    navigator.serviceWorker.register('/sw.js');
  });
}
