const cors = require('cors');
const express = require('express')
const app = express()

//Middleware
const TodoRoute = require('./routes/TodoRoute');
const AuthRoute = require('./routes/AuthRoute');

//Cors
app.use(cors({
  origin: 'http://localhost:3000',
  //methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  credentials: true,
}));

//Routes
app.use('/', TodoRoute);
app.use('/auth', AuthRoute);

module.exports = app;