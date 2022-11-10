 //keeps nodemon from crashing//
process.on('uncaughtException', (error, origin) => {
  console.log('----- Uncaught exception -----')
  console.log(error)
  console.log('----- Exception origin -----')
  console.log(origin)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----')
  console.log(promise)
  console.log('----- Reason -----')
  console.log(reason)
})



const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 


//import routes
//const stuffRoutes = require('./routes/stuff');
//const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


const app = express();



//testing
app.get('/', (req, res) => res.send('Index')); 


//MIDDLEWARE  allows all requests from all origins to access the api
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// parsing the incoming request bodies (replace body-parser)
app.use(bodyParser.json());

//serving static resource images 
app.use('/images', express.static(path.join(__dirname, 'images')));
//using routes, setting the endpoint
//app.use('/api/stuff',stuffRoutes);
//app.use('/api/sauce', sauceRoutes);
app.use('/api/users', userRoutes); // This gives us the prefix of 3000 api for user, 
// app.use('/api/post', postRoutes);


  
module.exports = app;