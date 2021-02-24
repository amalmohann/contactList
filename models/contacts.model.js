//importing mangoose
const mongoose = require('mongoose')

//preparing schema
const ContactSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

//creating model
const Contact = module.exports = mongoose.model('Contact', ContactSchema)
