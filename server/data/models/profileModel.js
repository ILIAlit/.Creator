const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Profile = sequelize.define('profile', {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
	avatar: { type: DataTypes.STRING },
	instagramLink: { type: DataTypes.STRING },
	telegramLink: { type: DataTypes.STRING },
	status: { type: DataTypes.STRING },
})

module.exports = Profile
