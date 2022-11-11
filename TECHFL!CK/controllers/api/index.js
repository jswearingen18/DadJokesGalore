const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokesRoutes = require('./jokesRoutes');
const commentRoutes = require('./jokesRoutes');

router.use('/users', userRoutes);
router.use('/jokes', jokesRoutes);
router.use('/jokes', commentRoutes);


module.exports = router;
