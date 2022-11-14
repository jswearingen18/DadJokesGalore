const router = require('express').Router();
const { Jokes, User } = require('../models');
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

    const jokes = jokeData.map((joke) => joke.get({ plain: true }));

    res.render('homepage', {
      jokes,
      logged_in: req.session.logged_in,
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

    const joke = jokeData.get({ plain: true });

    res.render('joke', {
      ...joke,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', validateUser, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Jokes,
          attributes: ['jokes'],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// router.get('/login', (req,res) => {
//   if (req.session.)
// })


module.exports = router;
