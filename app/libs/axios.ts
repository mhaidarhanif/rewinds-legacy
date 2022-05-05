import axios from 'axios';

import { getEnvServer } from '~/utils';

const convertKitformId = getEnvServer('CONVERTKIT_FORM_ID');

export const axiosClient = axios.create({
  baseURL: getEnvServer('REST_ENDPOINT'),
});

export const axiosConvertKitClient = axios.create({
  baseURL: `https://api.convertkit.com/v3/forms/${convertKitformId}`,
});
