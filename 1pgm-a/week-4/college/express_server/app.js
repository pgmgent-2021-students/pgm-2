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

<<<<<<< HEAD
app.get('/portfolio', (req, res) => {
  res.send('ROPES OF TARZANS!');
});


=======
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
>>>>>>> 4a7c8b49154e3c6bc78bf4c1e6bb7c9806021171

// Listen to incoming requests
app.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    // Do something
  }
  console.log(`Server is running on http://${HOSTNAME}:${PORT}.`);
});