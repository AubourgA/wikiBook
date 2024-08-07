import axios from 'axios';
import {  API_ENDPOINTS } from '../Constants'

export const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.BASE,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt-token');
  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

