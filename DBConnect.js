const mongoose = require("mongoose");
const password=require('./Authentication/password')
connection = mongoose.connect(password,{ useNewUrlParser: true },(err)=>{
    if(err){
        throw err;
    }
    console.log("Connected to Database");
});

module.exports = connection;
