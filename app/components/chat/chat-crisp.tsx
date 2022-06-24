/**
 * https://crisp.chat
 * https://help.crisp.chat/en/article/how-to-use-crisp-with-reactjs-fe0eyz
 * https://help.crisp.chat/en/article/how-to-install-crisp-live-chat-on-nextjs-xh9yse
 */

import { configFeatures } from "~/configs";
import { useEffect } from "~/hooks";
import { useSsr } from "~/libs";
import { isProductionAllowed } from "~/utils";

export const useCrispChat = () => {
  const { isBrowser } = useSsr();

  useEffect(() => {
    if (configFeatures.crisp && isBrowser && isProductionAllowed) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = window.ENV.CRISP_WEBSITE_ID as string;
      (() => {
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.getElementsByTagName("body")[0].appendChild(s);
      })();
    }
  });
};

export const CrispChat = () => {
  useCrispChat();

  return null;
};
