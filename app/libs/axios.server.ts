import axios from "axios";

import { getEnvServer } from "~/utils";

export const axiosServer = axios.create({
  baseURL: getEnvServer("REST_ENDPOINT"),
});
