import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

// Interceptor for sending token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || localStorage.getItem("access_token");
  console.log(token, "token");

  if (token) {
    console.log("Token found and being sent:", token.substring(0, 10) + "...");
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No token found in localStorage");
  }

  return config;
}, (error) => {
  console.error("Request interceptor error:", error);
  return Promise.reject(error);
});

export default api;
