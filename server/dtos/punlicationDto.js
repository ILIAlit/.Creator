module.exports = class PublicationDto {
	publication
	isLiked

	constructor(publication, isLiked) {
		this.publication = publication
		this.isLiked = isLiked
	}
}