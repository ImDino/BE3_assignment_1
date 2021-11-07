const User = require('../models/UserModel');
const Todo = require('../models/TodoModel');

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
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  try {
    const data = await Todo.findByIdAndUpdate(id, todo);
    console.log(data)
    res.end('updateTodo')
  } catch (error) {
    console.log(error)
  }
}
exports.deleteTodo = (req, res) => {
  res.end('deleteTodo')
}