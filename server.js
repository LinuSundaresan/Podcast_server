const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

const app = express();

const port = 3001;

const db = require('./db/index.js');
const Topics = require('./db/models/topic-schema.js');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const routes = require('./routes');

dotenv.config({path: './.env'});

app.use(routes);

app.use('*' , (req, res) => {
    res.status(404).json({message : "No route found for this path"});
});


// app.get('/' , (req , res) => {
//     res.status(404).json({message : "succcess"});
// });

app.listen(port , ( req,res )=> {
    console.log(`listening on port port ${port}`);
});