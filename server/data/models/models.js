const Profile = require('./profileModel');
const Publication = require('./publicationModel');
const PublicationTag = require('./publicationTagModel');
const Tag = require('./tagModel');
const User = require('./userModel');


User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Publication)
Publication.belongsTo(User)

Publication.belongsToMany(Tag, {through: PublicationTag})
Tag.belongsToMany(Publication, {through: PublicationTag})


module.exports = {
  User,
  Publication,
  Profile,
  Tag,
  PublicationTag
};