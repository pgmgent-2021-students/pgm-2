// Import express package for usage
const express = require('express');
// Make an instance of the express class
const app = express();

// Settings of the server
const PORT = 8080;
const HOSTNAME = '127.0.0.1';

// Make resources = route
app.get('/', (req, res) => {
  res.send('WELCOME TO THE JUNGLE!');
});

app.get('/about', (req, res) => {
  res.send('ABOUT TARZAN!');
});

// Listen to incoming requests
app.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    // Do something
  }
  console.log(`Server is running on http://${HOSTNAME}:${PORT}.`);
});