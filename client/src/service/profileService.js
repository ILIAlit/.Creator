import { $authApi } from "../http";


export default class ProfileService {
  static async createProfile(profileData) {
    try {
      return $authApi.post('profile/', profileData)
    } catch(error) {
      console.log(error);
    }
  }

  static async getProfile() {
    try {
      return $authApi.get('profile/')
    } catch(error) {
      console.log(error)
    }
  }
}