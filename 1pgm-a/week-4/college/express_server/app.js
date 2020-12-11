// Import express package for usage
const express = require('express');
const path = require('path')
// Make an instance of the express class
const app = express();

const apiRoutes = require('./routes')

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

app.get('/persons',(req,res) => {
  res.status(200).json(
    [
      {
        name:"thibault",
        role :"teacher"
      },
      {
        name:"hendrik",
        role:"student"
      }
    ]
  )
})

//server static files
app.use('/static',express.static(path.join(__dirname,'public')))

app.use('/api',apiRoutes)

// Listen to incoming requests
app.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    // Do something
  }
  console.log(`Server is running on http://${HOSTNAME}:${PORT}.`);
});