const likeRepository = require('../data/repositories/likeRepository')
const publicationService = require('./publicationService')
const ApiError = require('../error/ApiError')
const publicationRepository = require('../data/repositories/publicationRepository')

class LikeService {
	async createLike(user, publicationId) {
		const userId = user.id
		const isLikeObject = await publicationService.checkIsLike(
			publicationId,
			userId
		)
		if (isLikeObject.isLike) {
			throw ApiError.badRequest('Лайк существует')
		}
		const like = await likeRepository.createLike(userId, publicationId)
		const publication = await publicationRepository.getOnePublication(
			publicationId
		)
		await publicationRepository.incrementLikeCount(publication)
		return like
	}

	async deleteLike(user, publicationId) {
		const userId = user.id
		const like = await likeRepository.deleteLike(userId, publicationId)
		const publication = await publicationRepository.getOnePublication(
			publicationId
		)
		await publicationRepository.decrementLikeCount(publication)
		return like
	}
}

module.exports = new LikeService()
