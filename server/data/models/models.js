const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  email: {type:DataTypes.STRING, allowNull: false},
  password: {type:DataTypes.STRING},
});

const Profile = sequelize.define('profile', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
  avatar: {type: DataTypes.STRING},
  instagramLink: {type: DataTypes.STRING},
  telegramLink: {type: DataTypes.STRING},
  status: {type: DataTypes.STRING},
});

User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = {
  User,
  Profile
};