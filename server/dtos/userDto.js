module.exports = class UserDto {
	id
	name
	avatar

	constructor(user, avatar) {
		this.avatar = avatar
		this.name = user.name
		this.id = user.id
	}
}
