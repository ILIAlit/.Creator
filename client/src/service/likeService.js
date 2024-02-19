import { $authApi } from '../http'

export default class LikeService {
	static async checkIsLike(publicationId) {
		try {
			return $authApi.get('publication/checkIsLike', { params: { publicationId } })
		} catch (error) {
			console.log(error)
		}
	}

	static async createLike(publicationId) {
		try {
			return $authApi.post('like/', { publicationId })
		} catch (error) {
			console.log(error)
		}
	}

	static async deleteLike(publicationId) {
		try {
			return $authApi.delete('like/', { params: { publicationId } })
		} catch (error) {
			console.log(error)
		}
	}

	static async getUserLiked() {
		try {
            return $authApi.get('publication/getUserLiked')
        } catch (error) {
            console.log(error)
        }
	}
}
