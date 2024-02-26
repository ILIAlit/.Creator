const { Profile, User } = require('../models/models.js')

class ProfileRepository {
	async get(userId) {
		const profile = await Profile.findOne({
			where: { userId },
			include: { model: User, attributes: ['email'] },
		})
		return profile
	}

	async create(userId) {
		const profile = await Profile.create({ userId })
		return profile
	}

	async update(instagramLink, avatar, telegramLink, status, userId) {
		const profile = await Profile.update(
			{ instagramLink, avatar, telegramLink, status },
			{
				where: { userId },
				returning: true,
				plain: true,
			}
		)
		return profile
	}
}

module.exports = new ProfileRepository()
