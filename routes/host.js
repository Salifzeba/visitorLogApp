const express = require('express');

const hostController = require('../controllers/host');

const router = express.Router();

// GET /host/posts
router.get('/posts', hostController.getPosts);

// POST /host/post
router.post('/post', hostController.createPost);

module.exports = router;