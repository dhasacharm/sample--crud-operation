'use strict'

const express = require('express');
const router = express.Router();
const View = require('../schema/signup');

router.post('/view', (req, res) => {
    const data = req.body;
    console.log(data)
    const view = new View(data);
    view.save()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            console.log(error)
        })
})


router.get('/view', (req, res) => {
View.find({})
.then((data)=>{
    res.status(200).send(data)
})
.catch(error =>{
    res.status(400).json(error)
})
})

router.get('/view/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    View.findById(id)
    .then((data)=>{
        console.log(data)
        res.status(200).send(data)
    })
    .catch(error =>{
        res.status(400).json(error)
    })
    })



router.put('/view/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    View.findOneAndUpdate({'_id': id}, data, {new: true})
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(error =>{
        res.status(400).json(error)
    })
    
})
router.delete('/view/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    View.findOneAndRemove({'_id': id}), data, {new: true}
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(error =>{
        res.status(400).json(error)
    }) 
})
module.exports = router
