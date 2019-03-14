const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = process.env.port || 1234;
const dbconnect = require('./DBConnect');
var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/users",express.static('Views'));
const loginroute = require('./routes/users/login');
app.use("/users", loginroute);
app.listen(port,(err)=>{
    if(err)
        throw err
    console.log(`Sever is started ${port}`);
});
