const router = require('express').Router();
const { User } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const usersData = await User.findOne({ where: { email: req.body.email } });

    if (!usersData) {
      res.status(400).json({ message: 'Login failed, please try again' });
      return;
    }

    const correctPassword = await usersData.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json({ message: 'Login failed, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = usersData.id;
      req.session.logged_in = true;

      res.json({ user: usersData, message: 'Successfully logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
