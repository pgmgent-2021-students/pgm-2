/*
Import modules
*/
const express = require('express');

/*
Create a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/projects', (req, res) => {
  res.json({
    "msg": "hello"
  });
});

module.exports = router;