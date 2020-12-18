/*
Import modules
*/
const express = require('express');
const apiRouter = require('./routes');

/*
Setting
*/
const HOSTNAME = '127.0.0.1';
const PORT = 8080;

/*
Initialize the express application
*/
const app = express();

/*
Routes
*/
app.use('/api', apiRouter);

/*
Listen to incoming requests
*/
app.listen(PORT, HOSTNAME, (err) => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}!`)
});