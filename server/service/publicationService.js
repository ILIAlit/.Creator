const publicationRepository = require('../data/repositories/publicationRepository')
const tagRepository = require('../data/repositories/tagRepository')
const userRepository = require('../data/repositories/userRepository')
const publicationCheckIsLikely = require('../modules/PublicationCheckIsLikely')
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

	async getPublications(tagId, orderBy, limit, page, user) {
		limit = limit || 9
		page = page || 1

		let offset = page * limit - limit

		const publications = await publicationSorter.sort(
			tagId,
			orderBy,
			limit,
			offset
		)

		return publications
	}

	async checkIsLike(publicationId, userId) {
		return await publicationCheckIsLikely.checkIsLike(publicationId, userId)
	}

	async getOnePublication() {
		try {
			return res.json('publ getOne')
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new PublicationService()
