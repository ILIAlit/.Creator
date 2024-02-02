const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const PublicationFavorites = sequelize.define('publicationFavorites', {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});

module.exports = PublicationFavorites;
