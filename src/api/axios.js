import axios from "axios";
import NProgress from "nprogress";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/admin",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    NProgress.start();

    if (
      config.url.includes("/login") ||
      config.url.includes("/forgot-password")
    )
      return config;

    const token = localStorage.getItem("token_admin");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

apiClient.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});
