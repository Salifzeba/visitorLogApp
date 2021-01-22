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

let admin= module.exports = mongoose.model('admin', adminSchema)