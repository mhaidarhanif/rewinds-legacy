import axios from "axios";

const convertKitformId = ENV.CONVERTKIT_FORM_ID;

export const axiosConvertKitClient = axios.create({
  baseURL: `https://api.convertkit.com/v3/forms/${convertKitformId}`,
});
