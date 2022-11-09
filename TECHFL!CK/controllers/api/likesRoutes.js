const router = require('express').Router();
const { Likes } = require('../../models');

router.post('/jokes', async (req, res) => {
    try {
