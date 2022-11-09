const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokesRoutes = require('./jokesRoutes');
const homeRoutes = require('./homeRoutes');
//const likesRoutes = require('./likesRoutes');

router.use('/users', userRoutes);
router.use('/jokes', jokesRoutes);
router.use('/home', homeRoutes);
//router.use('/likes', likesRoutes);

module.exports = router;
