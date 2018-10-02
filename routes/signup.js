const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
const Signup = require('../schema/signup');

router.post('/signup', (req, res) => {
    const data = req.body;
    const email = data.email;
    const saltround = 7;
    const bcryptpassword = data.password;
    console.log(data)

    Signup.findOne({ email })
        .then((doc) => {
            if (!doc) {
                return bcrypt.hash(bcryptpassword, saltround);
            }
            throw new Error('same email');

        })

        .then((hash) => {
            data.password = hash;
            console.log(hash);
            const user = new Signup(data);
            if (hash) {
                console.log('hhhhk')
                return user.save();
            }
            throw new Error('cannot bcrypt')

        })
        .then((result) => {
            if(result){
            res.status(200).json('saved scucces')
            }
            throw new Error('cannot save')
        })
        .catch(error => {
            res.status(400).json({error: error.message})
        })

})

module.exports=router
