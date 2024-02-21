const { Profile, User } = require('../models/models')

class ProfileRepository {
	async get(userId) {
		const profile = await Profile.findOne({
			where: { userId },
			include: { model: User, attributes: ['email'] },
		})
		return profile
	}

	async create(profileData) {
		const profile = await Profile.create(profileData)
		return profile
	}
}

module.exports = new ProfileRepository()
