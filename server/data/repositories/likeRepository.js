const Like = require('../models/likeModel')
const Publication = require('../models/publicationModel')
const User = require('../models/userModel')

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

	async getUserLikes(userId, limit, offset) {
		const likes = await Publication.findAndCountAll({
			include: [
				{ model: Like, where: { userId } },
				{ model: User, attributes: ['name'] },
			],
			limit,
			offset,
		})
		return likes
	}
}

module.exports = new LikeRepository()
