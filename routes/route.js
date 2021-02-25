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
router.post('/contact',(req, res, next)=>{
    let newContact = new Contact({
        firstName: req.body.firstName,
        LastName : req.body.lastName,
        phone : req.body.phone
    })
    
    newContact.save((err, contact)=>{
        if(err){
            console.log(err);
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
    Contact.remove({_id: req.params.id},(err,result)=>{
        if(err){
            res.json({
                status: "ERROR",
                msg: "Contact Deletion Failed",
            })
        }
        else{
            if(result.deletedCount>0){
                res.json({
                    status: "SUCCESS",
                    msg:"Contact Deletion Successful",
                })
            }
            else{
                res.json({
                    status: "ERROR",
                    msg: "Contact Deletion Failed",
                })
            }
            
        }
    })
})


module.exports = router