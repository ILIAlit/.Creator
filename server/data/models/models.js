const Favorites = require('./favoritesModel');
const Like = require('./likeModel');
const Profile = require('./profileModel');
const Publication = require('./publicationModel');
const PublicationTag = require('./publicationTagModel');
const Tag = require('./tagModel');
const User = require('./userModel');

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Publication);
Publication.belongsTo(User);

User.hasMany(Favorites);
Favorites.belongsTo(User);

User.hasMany(Like);
Like.belongsTo(User);

Publication.belongsToMany(Tag, { through: PublicationTag });
Tag.belongsToMany(Publication, { through: PublicationTag });

Publication.hasMany(Favorites);
Favorites.belongsTo(Publication);

Publication.hasMany(Like);
Like.belongsTo(Publication);

module.exports = {
	User,
	Publication,
	Profile,
	Tag,
	PublicationTag,
	Favorites,
	Like,
};
