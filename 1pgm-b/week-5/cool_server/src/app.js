/*
Import packages
*/
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

/*
Settings
*/
const HOSTNAME = '127.0.0.1';
const PORT = 8080;

// Make an instance of an Express object
const app = express();
app.use(bodyParser.json());

/*
Define the API-routes
*/
app.use('/api', apiRoutes);

/*
Listen to incoming requests
*/
app.listen(PORT, HOSTNAME, (err) => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}!`);
});
