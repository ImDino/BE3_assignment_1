const express = require('express')
const app = express()

const TodoRoute = require('./routes/TodoRoute');
const AuthRoute = require('./routes/AuthRoute');
 
app.use('/', TodoRoute);
app.use('/auth', AuthRoute);

module.exports = app;