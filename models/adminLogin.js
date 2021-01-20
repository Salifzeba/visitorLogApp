const mongoose = require('mongoose');

let adminschema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
    {timestamps:true});

let visitor = module.exports = mongoose.model('admin', adminSchema)