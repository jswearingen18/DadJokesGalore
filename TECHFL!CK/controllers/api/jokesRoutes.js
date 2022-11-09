const router = require('express').Router();
const { Jokes } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const jokeData = await Jokes.findAll({
      include: [
        {
          model: Jokes,
          attributes: ['jokes'],
        },
      ],
    });

    const userJokes = jokeData.map((jokes) => jokes.get({ plain: true }));

    res.render('homepage', {
      userJokes,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const jokeData = await Jokes.findByPk(req.params.id, {
      include: [
        {
          model: Jokes,
          attributes: ['jokes'],
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

// router.put('/:id', async (req, res) => {
//   try {
//     const likesData = await Jokes.update({
//       where: {
//         // id: req.params.id,
//         likes: + 1
//       }
//     })
//   }
// })

router.post('/', async (req, res) => {
  try {
    const newJokes = await Jokes.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJokes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const jokesData = await Jokes.destroy({
      where: {
        id: req.params.id,
        jokes: req.params.jokes,
        user_id: req.session.user_id,
      },
    });

    if (!jokesData) {
      res.status(404).json({ message: 'No jokes found with this id!' });
      return;
    }

    res.status(200).json(jokesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
