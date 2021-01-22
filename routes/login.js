const express = require('express');

const loginController = require('./controllers/login');

const router = express.Router();

// GET /login/posts
router.get('/posts', loginController.getPosts);

// POST /login/post
router.post('/post', loginController.createPost);

module.exports = router;