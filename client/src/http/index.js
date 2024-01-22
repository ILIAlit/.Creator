import axios from 'axios';
import localStorageService from '../service/tokenService';
import { API_URL, LOGIN_ROUTE } from '../utils/consts';






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

const authResponseInterceptorSuccess = function(config) {
  return config
}

const authResponseInterceptorError = function(error) {
  if(error.response.status === 401) {
    try {
      localStorageService.removeToken()
      window.location.href = LOGIN_ROUTE
      // Сделать тут запрос 
      // на обносление токена через реФрэш
      return Promise.reject(error)
    } catch(error) {
      console.log("Не авторизован")
    }
  }
  throw error
}



$authApi.interceptors.request.use(authRequestInterceptor);
$authApi.interceptors.response.use(authResponseInterceptorSuccess,  authResponseInterceptorError)

export {
  $api,
  $authApi,
}

