class PaginationModule {
	limit
	page
	offset

	constructor(limit, page) {
		this.limit = limit || 9
		this.page = page || 1
		this.offset = this.calculateOffset(this.limit, this.page)
	}
	calculateOffset(limit, page) {
		return page * limit - limit
	}

	get limit() {
		return this.limit
	}
}

module.exports = PaginationModule
