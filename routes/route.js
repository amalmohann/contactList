//using express
const express = require('express')

//importing express Router
const router = express.Router()

router.get('/contacts',(req,res,next)=>{
    res.send('retrieving the contacts')
})

module.exports = router