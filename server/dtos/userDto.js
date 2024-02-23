module.exports = class UserDto {
	id
	name
	email
	avatar

	constructor(user, avatar = '') {
		this.avatar = avatar
		this.name = user.name
		this.email = user.email
		this.id = user.id
	}
}
