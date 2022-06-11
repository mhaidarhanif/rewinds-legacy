/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

import type { getEnv } from "~/utils";

declare global {
  const ENV: ReturnType<typeof getEnv>;
  interface Window {
    ENV: ReturnType<typeof getEnv>;
  }
}

export default global;
