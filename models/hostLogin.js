const mongoose = require('mongoose');

let hostschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    departement:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    
},
{timestamps:true});

let host = module.exports = mongoose.model('host', hostSchema)