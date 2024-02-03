import { $api } from '../http';

export default class TagService {
	static async getPopularTag(limit) {
		try {
			return await $api.get('tag/', { params: { limit } });
		} catch (error) {
			console.log(error);
		}
	}
}
