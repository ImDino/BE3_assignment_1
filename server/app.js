const cors = require('cors');
const express = require('express')
const app = express()

//Middleware
const TodoRoute = require('./routes/TodoRoute');
const AuthRoute = require('./routes/AuthRoute');
const UserRoute = require('./routes/UserRoute');
const { authenticateToken } = require('./middleware/authentication');

//Cors
app.use(cors({
  origin: process.env.CLIENT,
  credentials: true,
}));

app.use(express.json());

//Routes
app.use('/auth', AuthRoute);
app.use('/todo', authenticateToken, TodoRoute);
app.use('/user', authenticateToken, UserRoute);

module.exports = app;