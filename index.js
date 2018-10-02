'use strict'
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const PORT = 8080;
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const db= require('./connection');
const signup = require('./routes/signup');
const login = require('./routes/login');
const view = require('./routes/view')

app.use(signup);
app.use(login);
app.use(view)






app.listen(PORT, () => {
    console.log(`Server Started At port ${PORT}`)
})

