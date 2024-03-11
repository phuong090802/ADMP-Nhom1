import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { refreshTokenSv } from "./guest/author.sv";

const API = axios.create({
  //   baseURL: process.env.EXPO_PUBLIC_LOCAL_API_URL,
  baseURL: process.env.EXPO_PUBLIC_HOST_API_URL,
});

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.code !== 4008 &&
      !originalRequest._retry
    ) {
      console.log("get new Token");
      originalRequest._retry = true;
      try {
        const response = await refreshTokenSv();
        const token = response.token;
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.setItem("accessToken", token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return API(originalRequest);
      } catch (refreshError) {
        AsyncStorage.clear();
        console.log("get new Token Fail");
        return Promise.reject(refreshError.response.data);
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default API;
