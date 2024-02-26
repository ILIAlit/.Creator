const Profile = require('../data/repositories/profileRepository')
const User = require('../data/repositories/userRepository')
const ApiError = require('../error/ApiError')
const imageUploadService = require('./imageUploadService')

class ProfileService {
	async getProfile(user) {
		const userId = user.id
		const userProfile = await Profile.get(userId)
		if (!userProfile) {
			throw ApiError.badRequest('Профиль не найден!')
		}
		return {
			userProfile,
		}
	}

	async updateProfile(user, instagramLink, telegramLink, status, avatarFile) {
		const userId = user.id
		let avatar = null
		if (avatarFile) {
			avatar = await imageUploadService.uploadCloudImage(avatarFile)
		}
		const userProfile = await Profile.update(
			instagramLink,
			avatar,
			telegramLink,
			status,
			userId
		)
		if (!userProfile) {
			throw ApiError.badRequest('Ошибка обновления!')
		}
		return userProfile
	}

	async createProfile(name) {
		const user = await User.findOne(name)
		const isProfile = await Profile.get(user)
		if (isProfile) {
			throw ApiError.badRequest('Профиль существует!')
		}
		const userProfile = await Profile.create({
			userId: user.id,
		})
		return {
			userProfile,
		}
	}

	async getProfileAvatar(userId) {
		const profile = await Profile.get(userId)
		if (!profile) {
			return null
		}
		const profileAvatar = profile['avatar']
		if (!profileAvatar) {
			return null
		}
		return profileAvatar
	}
}

module.exports = new ProfileService()
