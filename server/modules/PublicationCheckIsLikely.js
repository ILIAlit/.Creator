const likeRepository = require('../data/repositories/likeRepository')
const PublicationDto = require('../dtos/punlicationDto')

class PublicationCheckIsLikely {
	async checkIsLike(publicationId, userId) {
		const like = await likeRepository.getOne(userId, publicationId)
		return { isLike: !!like }
	}
}

module.exports = new PublicationCheckIsLikely()
