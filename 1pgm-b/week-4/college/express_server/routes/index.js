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
    res.status(200).json(JSON.parse(data).results);
  });
});

// Export module
module.exports = router;