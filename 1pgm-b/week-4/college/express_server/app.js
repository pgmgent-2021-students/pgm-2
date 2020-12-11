// Import the express.js module
const express = require('express');
// Import built-in module path
const path = require('path');
// Import the nunjucks template egine
const nunjucks = require('nunjucks');
// Initalize the express server
const app = express();
// Custom modules
const apiRoutes = require('./routes');
// Settings
const PORT = 8080;
const HOSTNAME = '127.0.0.1';

// Connect nunjucks to the express server
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true,
});
app.set('view engine', 'html');

// Make End-points
// => Known as Routes
app.get('/', (req, res) => {
  res.render('index', {

  });
});

app.get('/about', (req, res) => {
  res.render('about', {

  });
});


app.get('/hello', (req, res) => {
  res.send('Greatings Earthlings :).');
});

app.get('/persons', (req, res) => {
  res.status(200).json([
    {
      firstName: 'Philippe'
    },
    {
      firstName: 'Evelien'
    }
  ]);
});

// Import the API routes
app.use('/api', apiRoutes);

// Serving static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Run the server
app.listen(PORT, HOSTNAME, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://${HOSTNAME}:${PORT}!`);
});