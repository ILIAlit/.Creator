const likeRepository = require('../data/repositories/likeRepository')
const publicationService = require('./publicationService')
const ApiError = require('../error/ApiError')
const publicationRepository = require('../data/repositories/publicationRepository')
const PaginationModule = require('../modules/PaginationModule')

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

	async getUserLikes(user, limit, page) {
        const userId = user.id
		const { limit: limitVerify, offset } = new PaginationModule(limit, page)
        const likes = await likeRepository.getUserLikes(userId, limit, offset)
        return likes
    }
}

module.exports = new LikeService()
