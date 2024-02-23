'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.changeColumn('profiles', 'status', {
        type: Sequelize.DataTypes.STRING,
				defaultValue: '',
			}),
		])
	},

	async down(queryInterface, Sequelize) {
		return Promise.all([queryInterface.changeColumn('profiles', 'status')])
	},
}
