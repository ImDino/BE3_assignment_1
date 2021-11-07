require('dotenv').config();
const mongoose = require('mongoose');

const db = {
  mongoose: mongoose,
  url: process.env.DB_URI,
  config: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};

module.exports = db;