import axios from "axios";

export const client = axios.create({
  baseURL: "https://api-free.deepl.com",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  if (!config.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }

  return config;
});
