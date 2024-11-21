const {Schema , model} = require('mongoose');

const topicSchema = Schema({
    topicName : {
        type : String,
        required : true,
        trim :  true,
    },
    image : {
        type : String,
        default : 'http://localhost:3001/images/no-image.jpg'
    },

},
{
    timestamps : true,
});

const Topic = model('topics' , topicSchema);

module.exports = Topic;