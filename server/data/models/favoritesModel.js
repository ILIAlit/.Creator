const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Favorites = sequelize.define('favorites', {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
})

module.exports = Favorites
