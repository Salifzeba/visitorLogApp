const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');
const visitorRoutes = require('./routes/visitor')
const hostRoutes = require('./routes/host')
const adminRoutes = require('./routes/admin')

const app = express();
const url =
mongoose.connect('mongodb+srv://salifu:tilyvan2011@cluster0.chugx.mongodb.net/MINIProject?retryWrites=true&w=majority',{ useNewUrlParser: true }, () => console.log('connected to database')
);
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.use('/visitor' , visitorRoutes);
app.use('/host' , hostRoutes);
app.use('/admin' , adminRoutes)

app.listen(5000);


