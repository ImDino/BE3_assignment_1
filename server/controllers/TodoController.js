const User = require('../models/UserModel');
const Todo = require('../models/TodoModel');

exports.getTodos = async (req, res) => {
  const { email } = req.user;
  
  try {
    const data = await User
      .findOne({ email: email }, { _id: 0 })
      .populate({ path: 'todos' })
      .select('todos');

    if(!data) {
      throw new Error('User not found.');
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  };
};
exports.createTodo = async (req, res) => {
  const { todo } = req.body;
  
  try {
    const newTodo = await Todo.create(todo);
    const { _id } = newTodo;
    const { email } = req.user;
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        $push: {
          todos: _id
        }
      });
    if (!user) {
      throw new Error('User not found');
    } else {
      res.status(200).json('Success');
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  };
};
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  try {
    const data = await Todo.findByIdAndUpdate(id, todo);

    if(!data) {
      throw new Error('No document found.');
    }
    res.status(200).json('Success'); //message: success?
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  };
};
exports.deleteTodo = (req, res) => {
  res.end('deleteTodo');
};