const Topic = require('../db/models/topic-schema.js');

module.exports.postTopic = async (req, res)=> {
    try {
        const topics = await Topic.create(req.body);
        res.status(201).json(topics);
    } catch (e) {
        res.status(500).json({message : e.message , error:true})
    }

};

module.exports.getTopics = async (req, res)=> {
    try {
        const topics = await Topic.find();
        res.status(200).json(topics);
    } catch (e) {
        res.status(500).json({message : e.message , error:true})
    }

};