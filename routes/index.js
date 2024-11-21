const express = require('express');

const topicsRoutes = require('./topics-route.js');

const router = express.Router();

router.use('/topics' , topicsRoutes);

module.exports = router;