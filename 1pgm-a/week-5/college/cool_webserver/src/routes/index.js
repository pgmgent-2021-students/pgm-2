/*
Import packages
*/
const express = require('express');
const postController = require('../controllers/postController');

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/posts', postController.getPosts);
router.get('/posts/:postId', postController.getPostById);
router.post('/posts', postController.createPost);
router.delete('/posts/:postId', postController.deletePost);
router.put('/posts/:postId', postController.updatePost);

module.exports = router;
