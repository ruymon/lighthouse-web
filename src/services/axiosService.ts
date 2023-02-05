import axios from 'axios';
import { getLayersUserData } from './../services/layersService';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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