import { $authApi } from '../http'

export default class ProfileService {
	static async updateProfile(profileData) {
		try {
			return $authApi.put('profile/', profileData)
		} catch (error) {
			console.log(error)
		}
	}

	static async getProfile() {
		try {
			return $authApi.get('profile/')
		} catch (error) {
			console.log(error)
		}
	}
}
