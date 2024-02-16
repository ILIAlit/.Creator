const Like = require('../models/likeModel')

class LikeRepository {
	async createLike(userId, publicationId) {
		const like = await Like.create({ publicationId, userId })
		return like
	}

	async deleteLike(userId, publicationId) {
		await Like.destroy({ where: { userId, publicationId } })
	}

	async getOne(userId, publicationId) {
		return await Like.findOne({ where: { userId, publicationId } })
	}
}

module.exports = new LikeRepository()
