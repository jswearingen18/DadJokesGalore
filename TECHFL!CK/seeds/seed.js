const sequelize = require('../config/connection');
const { User, Jokes } = require('../models');

const userData = require('./userData.json');
const jokesData = require('./jokesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const jokes of jokesData) {
    await Jokes.create({
      ...jokes,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
