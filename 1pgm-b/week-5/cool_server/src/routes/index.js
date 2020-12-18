/*
Import packages
*/
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

/*
Make a router
*/
const router = express.Router();

/*
Data files
*/
const newsJson = require('../data/news.json');

/*
File paths
*/
const filePathNews = path.join(__dirname, '..', 'data', 'news.json');

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

  // Read the news.json file
  const data = fs.readFileSync(filePathNews, { encoding: 'utf8', flag:'r' });
  const posts = JSON.parse(data);

  // Create a post
  post.id = uuidv4();
  post.createdAt = Date.now();
  post.publishedAt = Date.now();
  posts.push(post);

  // Write posts array to the news.json file
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  
  res.status(200).json(post);
});

router.delete('/posts/:postId', (req, res) => {
  const { postId } = req.params;

  // Read the news.json file
  const data = fs.readFileSync(filePathNews, { encoding: 'utf8', flag:'r' });
  const posts = JSON.parse(data);
  // Find the index of the post we want to remove
  const findIndex = posts.findIndex(post => post.id === postId);
  if (findIndex > -1) {
    posts.splice(findIndex, 1);  
  }

  // Write posts array to the news.json file
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  
  res.status(200).json({
    message: `Successful deleted the post with id ${postId}!`
  });
});

router.put('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = req.body;
  post.modifiedAt = Date.now();

  // Read the news.json file
  const data = fs.readFileSync(filePathNews, { encoding: 'utf8', flag:'r' });
  const posts = JSON.parse(data);
  // Find the index of the post we want to remove
  const findIndex = posts.findIndex(post => post.id === postId);
  if (findIndex > -1) {
     posts[findIndex] = {
       ...posts[findIndex],
       ...post
     }
  }

  // Write posts array to the news.json file
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  
  res.status(200).json(posts[findIndex]);
});

module.exports = router;