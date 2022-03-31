/**
 * This will expose all variables within global ENV
 * Only for client-side env
 */

const processEnv = {
  NODE_ENV: process.env.NODE_ENV /* development | production */,
  APP_ENV: process.env.APP_ENV /* local | development | staging | production */,
  API_URL: process.env.API_URL /* localhost | api.domain.com */,
  VERCEL: process.env.VERCEL,
  SPLITBEE_ID: process.env.SPLITBEE_ID,
};

export function getEnv() {
  return processEnv;
}

/**
 * Only use for server-side env
 */
export function getEnvServer(key: string, devValue?: string) {
  return getEnvRequired(process.env, key, devValue);
}

export function getEnvRequired(
  obj: Record<string, string | undefined>,
  key: string,
  devValue: string = `${key}-dev-value`
) {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === 'production') {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
}

declare global {
  interface Window {
    ENV: ReturnType<typeof getEnv>;
  }
}
