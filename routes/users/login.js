const express = require('express');
const bodyparser = require('body-parser');
const User = require('../../models/user');
const router = express.Router();
const path=require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;
router.route('/login').get(async(req,res,next)=>{
res.sendFile(path.join(__dirname, '../../Views', 'index.html'));;

}).post(async(req,res,next)=>{

    const user = new User();
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
        user.email=req.body.email;
        user.password=hash;
        user.save().then(() => console.log('done'));
        res.json(req.body);
    });});

});


module.exports = router;
