const router = require('express').Router();
const { Jokes } = require('../../models');
const validateUser = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newComment = await Jokes.create({
      ...req.body,
      comment: req.session.comment,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', validateUser, async (req, res) => {
  try {
    const commentData = await Jokes.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.comment,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comments found with this id' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
