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
    let newContact = new Contact({
        firstName:req.body.firstName,
        LastName : req.body.LastName,
        phone : req.body.phone
    })

    newContact.save((err, contact)=>{
        if(err){
            res.json({
                status: "ERROR",
                msg: "Contact Creation Failed"
            })
        }
        else{
            res.json({
                status: "SUCCESS",
                msg: "Contact Creation Successful"
            })
        }
    })
})

router.delete('/contact/:id',(req,res,next)=>{
    //logic to delete data
})


module.exports = router