import Axios from "axios";

const API = Axios.create({
  baseURL: "https://israfli.herokuapp.com/api/",
  timeout: 10000,
});

API.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  if (localStorage.token)
    config.headers.Authorization = `token ${localStorage.token}`;
  return config;
});

export default API;
