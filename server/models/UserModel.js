const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);