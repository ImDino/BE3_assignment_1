const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/TodoController');

const router = express.Router();

router.route('/')
  .get(getTodos)
  .post(createTodo);

router.route('/:id')
  .patch(updateTodo)
  .delete(deleteTodo);

module.exports = router;