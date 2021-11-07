const User = require('../models/UserModel');

exports.getTodos = async (req, res) => {
  const { email } = req.user;
  try {
    const data = await User
      .findOne({ email: email }, { _id: 0 })
      .populate({ path: 'todos' })
      .select('todos');

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "DB lookup fail.",
    });
  }
}
exports.createTodo = (req, res) => {
  res.end('createTodo')
}
exports.updateTodo = (req, res) => {
  res.end('updateTodo')
}
exports.deleteTodo = (req, res) => {
  res.end('deleteTodo')
}