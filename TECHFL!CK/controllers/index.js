const router = require('express').Router();
const express = require('express')

const app = express();
app.use(express.json());

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

app.use(router);

module.exports = router;
