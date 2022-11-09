const User = require('./User');
const Jokes = require('./Jokes');

User.hasMany(Jokes, {
  onDelete: 'CASCADE',
});

Jokes.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Jokes };
