/*
Import packages
*/
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

/*
File paths
*/
const filePathNews = path.join(__dirname, '..', 'data', 'news.json');

/*
Get all posts
*/
const getPosts = (req, res) => {
  // Read the news.json file
  const data = fs.readFileSync(filePathNews, { encoding: 'utf8', flag:'r' });
  const posts = JSON.parse(data);

  res.status(200).json(posts);
}

/*
Get a specific post
*/
const getPostById = (req, res) => {
  const { postId } = req.params;

  // Read the news.json file
  const data = fs.readFileSync(filePathNews, { encoding: 'utf8', flag:'r' });
  const posts = JSON.parse(data);

  const post = posts.find((article) => article.id === postId);

  res.status(200).json(post);
}

/*
Create a new post
*/
const createPost = (req, res) => {
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
}

/*
Delete a specific post
*/
const deletePost = (req, res) => {
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
}

/*
Update a specific post
*/
const updatePost = (req, res) => {
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
}

module.exports = {
  createPost,
  deletePost,
  getPosts,
  getPostById,
  updatePost,
}