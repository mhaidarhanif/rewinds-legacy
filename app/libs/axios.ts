import axios from 'axios';

import { getEnvServer } from '~/utils';

export const axiosClient = axios.create({
  baseURL: getEnvServer('REST_ENDPOINT'),
});

export const axiosConvertKitClient = axios.create({
  baseURL: getEnvServer('CONVERTKIT_SUBSCRIBE_URL'),
});
