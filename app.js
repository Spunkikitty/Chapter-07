//MongoDB Connection:mongodb+srv://Curious:<password>@cluster0.ywfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//MongoPass: PPAQlL0yhbtV37vC


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
const { Sequelize } = require('sequelize');


// get the client
const mysql = require('mysql2');
// create the connection to database
var connection;
function connectDb() {
  connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: '---',
    password: '----'
  });
  connection.on('error', connectDb()); // probably worth adding timeout / throttle / etc
}

  


/*try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
};*\





// just incase server closes connection or times out use pool below will be commented out for backup use
/*const pool = mysql.createPool({
  host: 'localhost',
  user: '--',
  database: '---',
  password: '----'
});

// ... later
pool.query('select 1 + 1', (err, rows) => { /* */;




//import routes
//const stuffRoutes = require('./routes/stuff');
//const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

const postRoutes = require('./routes/post');


const app = express();



//Connect the API to the MONGODB cluster
/*mongoose.connect('mongodb+srv://Curious:PPAQlL0yhbtV37vC@cluster0.ywfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } 
)

.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');


})
.catch((error) => {
  console.log('Unable to connect to MongoDB Atlas!');
  console.error(error);
});*/

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
app.use('/api/auth', userRoutes); // This gives us the prefix of 3000 api for user, 
//app.use('/api/post', postRoutes);


  
module.exports = app;