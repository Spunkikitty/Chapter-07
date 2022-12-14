const http = require('http');
const app = require('./app');
// const Sequelize = require('Sequelize');
// get the client// 

//const mysql = require('mysql2');
// const sequelize = new Sequelize( 
  // 'database_development_db',
  // 'GroupmaninaDev', 
  // 'Test1234!', 
  // {
    // host:'localhost:3306', 
    // dialect: 'mysql2',
  // }

// ); 

//sequelize.authenticate().then(() => {
  //console.log('Connection has been established successfully.');
//}).catch((error) => {
  //console.error('Unable to connect to the database: ', error);
//});


const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  
  const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

//server.listen(port);



app.set('port', process.env.PORT || '3000');

//const server = http.createServer(app);

server.listen(process.env.PORT || '3000');