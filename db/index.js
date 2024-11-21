const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://linusundaresan:HR1GiyjUNEhAhnXi@podnest.v9ntu.mongodb.net/?retryWrites=true&w=majority&appName=Podnest')
.then(()=>{ 
    console.log('DB Connected');
})
.catch((e)=> {
    console.log(e);
});

