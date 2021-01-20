const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// GET /admin/posts
router.get('/posts', adminController.getPosts);

// POST /admin/post
router.post('/post', adminController.createPost);

module.exports = router;