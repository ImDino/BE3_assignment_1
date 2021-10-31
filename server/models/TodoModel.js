const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  lastEditTime: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('Todo', TodoSchema);