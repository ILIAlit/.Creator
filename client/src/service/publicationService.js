import { $api, $authApi } from '../http'

export default class PublicationService {
	static async createPublication(publData) {
		try {
			return $authApi.post('publication/', publData)
		} catch (error) {
			console.log(error)
		}
	}
	static async getPublications(tagId, orderBy, limit, page) {
		try {
			return $api.get('publication/', {
				params: { tagId, orderBy, limit, page },
			})
		} catch (error) {
			console.log(error)
		}
	}

	static async getUserPublications(limit, page) {
		try {
			return $authApi.get('publication/getUserPublications', {
				params: { limit, page },
			})
		} catch (error) {
			console.log(error)
		}
	}

	static async getOnePublication(publicationId) {
		try {
			return $api.get('publication/getOnePublication', {
				params: { publicationId },
			})
		} catch (error) {
			console.log(error)
		}
	}
}
