const express = require('express');

const visitorController = require('../controllers/visitor');

const router = express.Router();

// GET /visitor/posts
router.get('/posts', visitorController.getPosts);

// POST /visitor/post
router.post('/post', visitorController.createPost);

module.exports = router;