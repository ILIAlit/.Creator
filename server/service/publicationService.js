const publicationRepository = require('../data/repositories/publicationRepository')
const tagRepository = require('../data/repositories/tagRepository')
const userRepository = require('../data/repositories/userRepository')
const ApiError = require('../error/ApiError')
const PaginationModule = require('../modules/PaginationModule')
const publicationCheckModule = require('../modules/PublicationCheckModule')
const publicationSorter = require('../modules/PublicationSorter')
const imageUploadService = require('./imageUploadService')

class PublicationService {
	async createPublication(userData, publImage, title, description, link, tags) {
		const user = await userRepository.findOne(userData.name)
		const image = await imageUploadService.uploadCloudImage(publImage)
		const publication = await publicationRepository.createPublication({
			userId: user.id,
			image,
			title,
			description,
			link,
			likeCount: 0,
		})
		tags = JSON.parse(tags)

		// TODO: вынести в сервис тегов

		tags.map(async itemTag => {
			let tag = await tagRepository.getOneTag(itemTag)
			if (!tag) {
				tag = await tagRepository.createTag(itemTag)
			}
			await publicationRepository.addPublicationTag(tag, publication)
			await tagRepository.incrementTagCount(tag)
		})
		return publication
	}

	async getPublications(tagId, orderBy, limit, page) {
		const { limit: limitVerify, offset } = new PaginationModule(limit, page)

		const publications = await publicationSorter.sort(
			tagId,
			orderBy,
			(limit = limitVerify),
			offset
		)

		return publications
	}

	async checkIsLike(publicationId, userId) {
		return await publicationCheckModule.checkIsLike(publicationId, userId)
	}

	async checkIsSave(publicationId, userId) {
		return await publicationCheckModule.checkIsSave(publicationId, userId)
	}

	async getOnePublication(publicationId) {
		const publication = await publicationRepository.getOnePublication(
			publicationId
		)
		if (!publication) {
			throw ApiError.badRequest('Публикация не найдена!')
		}
		return publication
	}

	async getUserPublications(user, limit, page) {
		const { limit: limitVerify, offset } = new PaginationModule(limit, page)
		const userId = user.id
		const publications = await publicationRepository.getUserPublications(
			userId,
			(limit = limitVerify),
			offset
		)
		return publications
	}
}

module.exports = new PublicationService()
