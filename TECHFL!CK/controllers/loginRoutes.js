const router = require('express').Router();
const { Likes, Jokes, User } = require('../models');
const validateUser = require('../utils/auth');
