const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const PublicationTag = sequelize.define('publication_tag', {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
})

module.exports = PublicationTag
