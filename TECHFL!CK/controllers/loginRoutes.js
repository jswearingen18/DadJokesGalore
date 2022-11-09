const router = require('express').Router();
const { Likes, Jokes, User } = require('../models');
const validateUser = require('../utils/auth');

router.get('/login', validateUser, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: User }],
    });

    const user = userData.get({ plain: true });

    res.render('login', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
