const User = require('./User');
const Likes = require('./Likes');
const Jokes = require('./Jokes');

User.hasMany(Jokes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Jokes.belongsTo(User, {
  foreignKey: 'user_id',
});

Jokes.hasMany(Likes, {
  foreignKey: 'jokes_id',
});

Likes.belongsTo(Jokes, {
  foreignKey: 'jokes_id',
});

module.exports = { User, Jokes, Likes };
