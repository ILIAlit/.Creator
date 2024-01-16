import axios from 'axios';
import localStorageService from '../service/localStorageService';

const API_URL = process.env.REACT_APP_API_URL + 'api';

const $api = axios.create({
  baseURL: API_URL,
});

const $authApi = axios.create({
  baseURL: API_URL,
});

const authRequestInterceptor = function(config) {
  const accessToken = localStorageService.getAccessToken();
  if(accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
  }
  return config;
};

$authApi.interceptors.request.use(authRequestInterceptor);

export {
  $api,
  $authApi,
}

