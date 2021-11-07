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
      res.status(404).send('User not found.');
    }
    res.status(200).json(data);
  } catch (error) {
    res.sendStatus(500);
  };
};

exports.createTodo = async (req, res) => {
  const { todo } = req.body;
  const { email } = req.user;
  
  try {
    const foundUser = await User.find({ email: email });

    if (!foundUser) {
      res.status(404).send('User not found');
    }

    const newTodo = await Todo.create(todo);
    const { _id } = newTodo;

    await User.findOneAndUpdate(
      { email: email },
      {
        $push: {
          todos: _id
        }
      });
    res.status(200).json({ todoId: _id });
  } catch (error) {
    res.sendStatus(500);
  };
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  try {
    const data = await Todo.findByIdAndUpdate(id, todo);

    if(!data) {
      res.status(404).send('No document found.');
    }
    res.status(200).send('Success');
  } catch (error) {
    res.sendStatus(500);
  };
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;

  try {
    const foundUser = await User.find({ email: email });
    const foundTodo = await Todo.findById(id);

    if (!foundUser) {
      res.status(404).send('User not found');
    } 
    else if (!foundTodo) {
      res.status(404).send('Todo document not found');
    }
    else {
      await Todo.findByIdAndRemove(id);
      await User.findOneAndUpdate(
        { email: email },
        {
          $pull: {
            todos: id
          }
        });
      res.status(200).send('Success');
    }
  } catch (error) {
    res.sendStatus(500);
  };
};