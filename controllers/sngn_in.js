const Admin = require('../models/adminLogin');
const Visitor = require('../models/visitorLogin');
const host = require('../models/hostLogin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { adminValidation, adminLogin } = require('../validation/admin');

//VALIDATION
const Joi = require('@hapi/joi');

exports.postRegister = async(req, res, next) => {
    // LET'S VALIDATE THE DATA BEFORE WE MAKE A USER
    const { error } = adminValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // CHECKING IF USER IS ALREADY IN THE DATABASE
    const emailExists = await Admin.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');

    // HASH THE PASSWORD
    const salt = await bcrypt.gentSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // CREATE A NEW USER
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        telephone: req.body.telephone,
        position: req.body.position,
        department: req.body.department
    });
    try {
        const savedAdmin = await admin.save();
        res.send({ admin: admin._id });
    } catch (err) {
        res.status(400).send({ message: err });
    }
};

// LOGIN
exports.postLogin = async(req, res, next) => {
    // LET'S VALIDATE THE DATA BEFORE WE MAKE A USER
    const { error } = adminLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // CHECKING IF EMAIL EXISTS
    const admin = await Admin.findOne({ email: req.body.email });
    if (!employee) return res.status(400).send('Email is not found');

    // CHECKING IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, visitor.password);
    if (!validPass) return res.status(400).send('Invalid password');

    res.send('Logged-In Successful!');

    // CREATE AND ASSIGN A TOKEN
    // const token = jwt.sign({ _id: admin._id }, process.env.ADMIN_TOKEN_SECRET);
    // res.header('auth-token', token).send(token);
};

