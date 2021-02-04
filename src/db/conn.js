const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/minatiswain', {
    useCreateIndex:true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful...!!!");
}).catch((error) => {
    console.log("no connection...!!!");
});