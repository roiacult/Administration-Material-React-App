import Axios from "axios";
import { getLoggedInUser } from "./helpers/authUtils";

const API = Axios.create({
  baseURL: "https://israfli.herokuapp.com/api/",
  timeout: 10000,
});

API.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  let user = getLoggedInUser();
  if (user && user.token) config.headers.Authorization = `token ${user.token}`;
  return config;
});

export default API;
