// Import the express.js module
const express = require('express');
// Initalize the express server
const app = express();
// Settings
const PORT = 8080;
const HOSTNAME = '127.0.0.1';

// Make End-points
// => Known as Routes
app.get('/', (req, res) => {
  res.send('WELCOME TO ASSOCIATE DEGREE IN COMPUTER PROGRAMMING.');
});

app.get('/hello', (req, res) => {
  res.send('Greatings Earthlings :).');
});

// Run the server
app.listen(PORT, HOSTNAME, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://${HOSTNAME}:${PORT}!`);
});