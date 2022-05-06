import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

import { splitbee, ReactGA } from '~/libs';

hydrate(<RemixBrowser />, document);

if (ENV.NODE_ENV !== 'development') {
  // Google Analytics
  ReactGA.initialize(String(ENV.GA_MEASUREMENT_ID));

  // Splitbee Analytics
  splitbee.init();
}

// if the browser supports SW (all modern browsers do it)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // we will register it after the page complete the load
    navigator.serviceWorker.register('/sw.js');
  });
}
