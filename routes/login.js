const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
const Login = require('../schema/signup')
const jwt = require('jsonwebtoken');




function createToken(tokenData) {
    return new Promise((resolve, reject) => {
        jwt.sign(tokenData, 'dhasa', { expiresIn: 5 * 60 }, (error, token) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(token)
            }
        })
    })
}

router.post('/login', (req,res) => {
    const data = req.body;
    const email = data.email;
    const password = data.password;
    console.log(data);

   Login.findOne({ email})
    .then((doc) => {
        console.log(doc)
        if (!doc) {
            console.log(doc)
            throw new Error('invalid email');   
        }
        document = doc;
        return bcrypt.compare(password, doc.password)

    })
    .then((result) => {
        if (!result) {
            throw new Error('invalid password')
        }
        return createToken({ id: document._id })
    })
    .then((token) => {
        if (!token) {
            throw new Error('invalid token')
        }
        res.status(200).json({token:token})
    })
    .catch(error => {
        res.status(400).json({error: error.message})
    })
})
module.exports = router;

    

