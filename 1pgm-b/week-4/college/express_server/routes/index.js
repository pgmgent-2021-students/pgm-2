// Import the express.js module
const express = require('express');
// Make an instance of express.Router
const router = express.Router();
// Routes
router.get('/', (req, res) => {
  res.send('Welcome to the API.');
});
router.get('/pgm', (req, res) => {
  res.status(200).json({
    message: "Love Programming Like Graphics Make Cool Shit!"
  });
});
// Export module
module.exports = router;