const router = require('express').Router();
const { Likes, Jokes, User } = require('../models');
const validateUser = require('../utils/auth');

router.get('/userPage', validateUser, async (req, res) => {
  try {
    const jokeData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: User }],
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
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
