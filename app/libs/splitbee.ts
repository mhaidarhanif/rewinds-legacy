import splitbee from '@splitbee/web';

import { configAppFeatures } from '~/configs';

export { splitbee };

export const splitbeeInit = () => {
  if (configAppFeatures.splitbee) {
    splitbee.init();
  }
};
