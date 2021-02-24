//importing modules
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var app = express()

//defining port
const port = 3000

//bind server with port
app.listen(port,()=>{
    console.log("server started at port: "+ port)
})

//testing server
app.get('/',(req,res)=>{
    res.send('The route is working')
})

//adding router
const route = require('./routes/route')
app.use('/api',route)

//adding middlewares
//cors
app.use(cors())

//body-parser
app.use(bodyParser.json())

//adding the static files
app.use(express.static(path.join(__dirname,'public')))
