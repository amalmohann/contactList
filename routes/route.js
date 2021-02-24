//using express
const express = require('express')

//importing express Router
const router = express.Router()

//for retrieving data
router.get('/contacts',(req,res,next)=>{
    res.send('retrieving the contacts')
    //logic to retrieve data
})

//for adding data
router.post('/contact',(req,res,next)=>{
    //logic to add data(contacts)
})

router.delete('/contact/:id',(req,res,next)=>{
    //logic to delete data
})

module.exports = router