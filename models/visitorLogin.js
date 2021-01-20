const mongoose = require('mongoose');

let vistorschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    visitorPhone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hostName:{
        type:String,
        required:true
    },
    hostRole:{
        type:String,
        required:true
    },
    
},{timestamps:true});

let visitor = module.exports = mongoose.model('visitor', visitorSchema)