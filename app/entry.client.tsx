import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';

import { splitbee, ReactGA } from '~/libs';

hydrate(<RemixBrowser />, document);

if (ENV.NODE_ENV !== 'development') {
  // Google Analytics
  ReactGA.initialize(String(ENV.GA_MEASUREMENT_ID));

  // Splitbee Analytics
  splitbee.init();
}
