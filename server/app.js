const express = require('express')
const app = express()

const TodoRoute = require('./routes/TodoRoute');
 
app.use('/', TodoRoute);

module.exports = app;