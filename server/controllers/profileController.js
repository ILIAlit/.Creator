const profileService = require('../service/profileService')

class ProfileController {
	async getProfile(req, res, next) {
		try {
			const user = req.user
			const profile = await profileService.getProfile(user)
			return res.json(profile)
		} catch (error) {
			next(error)
		}
	}
	async updateProfile(req, res, next) {
		try {
			const { instagramLink, telegramLink, status } = req.body
			const user = req.user
			const avatarFile = req?.files?.avatar
			const profile = await profileService.updateProfile(
				user,
				instagramLink,
				telegramLink,
				status,
				avatarFile
			)
			return res.json(profile)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new ProfileController()
