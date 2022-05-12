import splitbee from "@splitbee/web";

import { configFeatures } from "~/configs";

export { splitbee };

export const splitbeeInit = () => {
  if (configFeatures.splitbee) {
    splitbee.init();
  }
};
