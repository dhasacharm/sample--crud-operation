'use strict'
const mongoose = require('mongoose');
const ViewSchema = mongoose.Schema({
    username: String, 
    name: String,    
    email: String,
    password: String 

})

const View = mongoose.model('View', ViewSchema);
module.exports =View;