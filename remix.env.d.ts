/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

import type { getEnv } from "~/utils";

declare global {
  const ENV: ReturnType<typeof getEnv>;
  interface Window {
    ENV: ReturnType<typeof getEnv>;

    // Remove these if you don't use Crisp chat
    $crisp: Array<any>;
    CRISP_WEBSITE_ID: string;
  }
}

export default global;
