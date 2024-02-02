const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Publication = sequelize.define('publication', {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING },
	image: { type: DataTypes.STRING },
	link: { type: DataTypes.STRING },
	likeCount: { type: DataTypes.INTEGER },
});

module.exports = Publication;
