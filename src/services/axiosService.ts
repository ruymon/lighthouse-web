import axios from 'axios';
import { getLayersUserData } from './../services/layersService';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "",
    "Access-Control-Allow-Headers": "*",
  }
});

export function initializeAxios() {
  api.interceptors.request.use((config) => {
    const user = getLayersUserData();

    config.params = {
      ...config.params,
      ...user,
    };
    
    return config;
  });
}