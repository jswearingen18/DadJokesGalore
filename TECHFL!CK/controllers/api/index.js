const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokesRoutes = require('./jokesRoutes');

// const app = express();
// app.use(express.json());

router.use('/users', userRoutes);
router.use('/jokes', jokesRoutes);

// app.use(router),

module.exports = router;
