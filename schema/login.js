'use strict'
const mongoose = require('mongoose');
const LoginSchema = mongoose.Schema({
    Email: String,
    password: String

})

const Login = mongoose.model('Login', LoginSchema);
module.exports = Login;