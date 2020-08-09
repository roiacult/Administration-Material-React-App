import Axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

if (localStorage.token) headers.Authorization = `token ${localStorage.token}`;

const API = Axios.create({
  baseURL: "https://israfli.herokuapp.com/api/",
  timeout: 10000,
  headers,
});

export default API;
