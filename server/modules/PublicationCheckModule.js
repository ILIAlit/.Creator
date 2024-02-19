const favoriteRepository = require('../data/repositories/favoriteRepository')
const likeRepository = require('../data/repositories/likeRepository')
const PublicationDto = require('../dtos/punlicationDto')

class PublicationCheckIsLikely {
	async checkIsLike(publicationId, userId) {
		const like = await likeRepository.getOne(userId, publicationId)
		return { isLike: !!like }
	}

	async checkIsSave(publicationId, userId) {
		const favorite = await favoriteRepository.getOne(userId, publicationId)
		return { isSave: !!favorite }
	}
}

module.exports = new PublicationCheckIsLikely()
