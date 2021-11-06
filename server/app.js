const cors = require('cors');
const express = require('express')
const app = express()

//Middleware
const TodoRoute = require('./routes/TodoRoute');
const AuthRoute = require('./routes/AuthRoute');
const UserRoute = require('./routes/UserRoute');

//Cors
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

//Routes
app.use('/', TodoRoute);
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);

module.exports = app;