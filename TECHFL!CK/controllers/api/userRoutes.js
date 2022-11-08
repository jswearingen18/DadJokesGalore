const router = require('express').Router();
const { User } = require('../models');

router.post('/', async (req, res) => {
  try {
    const usersData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = usersData.id;
      req.session.logged_in = true;
      res.status(200).json(usersData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const usersData = await User.findOne({ where: { email: req.body.email } });

    if (!usersData) {
      res
        .status(400)
        .json({ message: 'Login failed, please try again' });
      return;
    }

    const correctPassword = await usersData.checkPassword(req.body.password);

    if (!correctPassword) {
      res
        .status(400)
        .json({ message: 'Login failed, please try again' });
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
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
