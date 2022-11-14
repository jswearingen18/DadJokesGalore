const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokesRoutes = require('./jokesRoutes');

router.use('/users', userRoutes);
router.use('/jokes', jokesRoutes);


module.exports = router;
