import { $authApi } from '../http';

export default class PublicationService {
	static async createPublication(publData) {
		try {
			return $authApi.post('publication/', publData);
		} catch (error) {
			console.log(error);
		}
	}
	static async getPublications(tagId, orderBy, limit, page) {
		try {
			return $authApi.get('publication/', {
				params: { tagId, orderBy, limit, page },
			});
		} catch (error) {
			console.log(error);
		}
	}
}
