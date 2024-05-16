import axios from "axios";
import { getLocalStorage } from "../helpers";
import { LOGIN_USER } from "../constants";

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    TokenCybersoft: import.meta.env.VITE_TOKEN,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibG9uZ2xlMjYwOTk4IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibG9uZ2xlQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJLaGFjaEhhbmciLCJsb25nbGVAZ21haWwuY29tIiwiR1AwMCJdLCJuYmYiOjE3MTU2OTMzNzYsImV4cCI6MTcxNTY5Njk3Nn0.z4RkcFlg8jsXnpb5y_Xx3zNOj0eHEksZHo-DmqFi2B0`,
  },
  timeout: 30000,
});

fetcher.interceptors.request.use((config) => {
  // console.log("config: ", config)
  const user = getLocalStorage(LOGIN_USER);

  //* Thêm Authorization vào header
  if (user) {
    config.headers["Authorization"] = user.accessToken;
  }

  // console.log("login-user: ", user)
  return config;
});

fetcher.interceptors.response.use((response) => {
  return response;
});

export default fetcher;
