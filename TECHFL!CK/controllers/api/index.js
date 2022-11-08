const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokesRoutes = require('./jokesRoutes');
const likesRoutes = require('./likesRoutes');

router.use('/users', userRoutes);
router.use('/jokes', jokesRoutes);
router.use('/likes', likesRoutes);

module.exports = router;
