require('dotenv').config();
const server = require('./app');
const PORT = process.env.PORT || 5000;
const db = require('./config/db');

// Database
db.mongoose
.connect(db.url, db.config)
.then(() => {
  console.log('Connected to the database!');
})
.catch(err => {
  console.log('Cannot connect to the database!', err);
  process.exit();
});

//Schema registry
require('./models/TodoModel');
require('./models/UserModel');


server.listen(PORT);