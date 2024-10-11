import axios from "axios";

const api = axios.create({
  baseURL: "https://integration.sandbox.destaxa.com/api",
  headers: {
    Authorization: process.env.token,
  },
});

export const localApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default api;
