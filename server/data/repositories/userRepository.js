const { User } = require('../../data/models/models');

class UserRepository {
	async findOne(userName) {
		const user = await User.findOne({ where: { name: userName } });
		return user;
	}

	async findOneByEmail(email) {
		const user = await User.findOne({ where: { email } });
		return user;
	}

	async update(userData, userName) {
		const updateUser = await User.update(userData, {
			where: { name: userName },
		});
		return updateUser;
	}

	async create(name, email, hashPassword) {
		const user = await User.create({ name, email, password: hashPassword });
		return user;
	}

	async delete() {}
}

module.exports = new UserRepository();
