const express = require('express');
const { getTodos } = require('../controllers/TodoController');

const router = express.Router();

router.route('/').get(getTodos);

module.exports = router;