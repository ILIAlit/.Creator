import { $authApi } from '../http';

export default class PublicationService {
	static async createPublication(publData) {
		try {
			return $authApi.post('publication/', publData);
		} catch (error) {
			console.log(error);
		}
	}
}
