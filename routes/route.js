//using express
const express = require('express')

//importing express Router
const router = express.Router()

//importing the contact model
const Contact = require('../models/contacts.model')

//for retrieving data
router.get('/contacts',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        res.json(contacts)
    })
})

//for adding data
router.post('/contact',(req,res,next)=>{
    //logic to add data(contacts)
})

router.delete('/contact/:id',(req,res,next)=>{
    //logic to delete data
})


module.exports = router