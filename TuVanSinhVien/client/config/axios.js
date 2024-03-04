import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PROTECTED_RESOURCE from '../constants/auth';

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  // withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    if (PROTECTED_RESOURCE.includes(config.url)) {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        config.headers.Authorization = `Bearer ${storedToken}`;
        config.withCredentials = true;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (PROTECTED_RESOURCE.includes(originalRequest.url)) {
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await instance.post('/api/auth/refresh-token', {});
          const { token } = response.data;
          AsyncStorage.setItem('token', token);
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return instance(originalRequest);
        } catch (refreshError) {
          AsyncStorage.removeItem('token');
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
