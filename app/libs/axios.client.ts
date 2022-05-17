import axios from "axios";

export const axiosClient = axios.create({
  baseURL: ENV.REST_ENDPOINT,
});
