import axios from 'axios'
import localStorageService from '../service/tokenService'
import { API_URL, LOGIN_ROUTE } from '../utils/consts'

const $api = axios.create({
	baseURL: API_URL,
})

const $authApi = axios.create({
	baseURL: API_URL,
})

const authRequestInterceptor = function (config) {
	const accessToken = localStorageService.getAccessToken()
	if (accessToken) {
		config.headers['Authorization'] = `Bearer ${accessToken}`
	}
	return config
}

const authResponseInterceptorSuccess = function (config) {
	return config
}

const authResponseInterceptorError = function (error) {
	const token = localStorageService.getAccessToken()
	if (error.response.status === 401 && token) {
		try {
			window.location.href = LOGIN_ROUTE
			localStorageService.removeToken()
			return Promise.reject(error)
		} catch (error) {
			console.log('Не авторизован')
		}
	}
	throw error
}

$authApi.interceptors.request.use(authRequestInterceptor)
$authApi.interceptors.response.use(
	authResponseInterceptorSuccess,
	authResponseInterceptorError
)

export { $api, $authApi }
