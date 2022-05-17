import axios from "axios";

import { getEnvServer } from "~/utils";

const convertKitformId = getEnvServer("CONVERTKIT_FORM_ID");

export const axiosConvertKitServer = axios.create({
  baseURL: `https://api.convertkit.com/v3/forms/${convertKitformId}`,
});
