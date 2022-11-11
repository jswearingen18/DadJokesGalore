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

  const jokes = await Jokes.bulkCreate(jokesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
