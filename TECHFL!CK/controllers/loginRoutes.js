const router = require('express').Router();
const { Likes, Jokes, User } = require('../models');
const validateUser = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const jokeData = await Jokes.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const userJokes = jokeData.map((jokes) => jokes.get({ plain: true }));

    res.render('loginPage', {
      userJokes,
      logged_in: req.sessions.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/jokes/:id', async (req, res) => {
  try {
    const jokeData = await Jokes.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const userJokes = await jokeData.get({ plain: true });

    res.render('jokes', {
      ...userJokes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userPage', validateUser, async (req, res) => {
  try {
    const jokeData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Jokes }],
    });

    const user = userData.get({ plain: true });

    res.render('userPage', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/userPage');
    return;
  }

  res.render('login');
});

module.exports = router;
