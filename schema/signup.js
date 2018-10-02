'use strict'
const mongoose = require('mongoose');
const SignupSchema = mongoose.Schema({
    username: String, 
    name: String,    
    email: String,
    password: String 

})

const Signup = mongoose.model('Signup', SignupSchema);
module.exports =Signup;