const express = require('express');

const {  postTopic , getTopics  } = require('../controllers/topics-controller');

const router = express.Router();

// router.get('/' , checkToken(['Admin', 'Doctor']), getDepartments);

router.post('/',  postTopic);

router.get('/',  getTopics);


module.exports = router;