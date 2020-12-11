// Import the express.js module
const express = require('express');
// Make an instance of express.Router
const router = express.Router();
// Import built-in module path
const path = require('path');
// Import built-in module fs
const fs = require('fs');

// Routes
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API.'
  });
});

router.get('/pgm', (req, res) => {
  res.status(200).json({
    message: "Love Programming Like Graphics Make Cool Shit!"
  });
});

// Get all users
router.get('/users', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'data', 'users.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(501).json({
        message: 'Something went wrong',
        error: err.toString()
      });
    }
    res.status(200).json(JSON.parse(data).results);
  });
});

// Get a specific user by userId
router.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;

  const filePath = path.join(__dirname, '..', 'public', 'data', 'users.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(501).json({
        message: 'Something went wrong',
        error: err.toString()
      });
    }

    const user = JSON.parse(data).results.find(u => u.login.uuid === userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: `User with id ${userId} not found!`
      });
    }
  });
});

// Get all posts
router.get('/posts', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'data', 'posts.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(501).json({
        message: 'Something went wrong',
        error: err.toString()
      });
    }
    res.status(200).json(JSON.parse(data));
  });
});

// Get a specific post by postId
router.get('/posts/:postId', (req, res) => {
  const postId = req.params.postId;

  const filePath = path.join(__dirname, '..', 'public', 'data', 'posts.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(501).json({
        message: 'Something went wrong',
        error: err.toString()
      });
    }

    const post = JSON.parse(data).find(p => p.id === postId);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: `Post with id ${postId} not found!`
      });
    }
  });
});

// Export module
module.exports = router;