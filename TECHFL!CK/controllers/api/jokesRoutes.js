const router = require('express').Router();
const { Jokes } = require('../../models');
const validateUser = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newJoke = await Jokes.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJoke);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const likesData = await Jokes.update(
      {
        // TODO: Retrieve the data  from the req.body
        likes: +1,
      },
      {
        where: {
          likes: req.params.id,
        },
      }
    );
    res.status(200).json(likesData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', validateUser, async (req, res) => {
  try {
    const jokeData = await Jokes.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!jokeData) {
      res.status(404).json({ message: 'No jokes found with this id' });
      return;
    }

    res.status(200).json(jokeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
