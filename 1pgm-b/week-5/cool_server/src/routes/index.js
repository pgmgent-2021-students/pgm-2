/*
Import packages
*/
const express = require('express');
const router = express.Router();

/*
Data files
*/
const newsJson = require('../data/news.json');

/*
Routes
*/
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Greatings....'
  })
});

router.get('/posts', (req, res) => {
  res.status(200).json(newsJson);
});

router.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = newsJson.find((article) => article.id === postId);
  res.status(200).json(post);
});

router.post('/posts', (req, res) => {
  const post = req.body;
  console.log(post);
  //const post = newsJson.find((article) => article.id === postId);
  res.status(200).json(post);
});

module.exports = router;