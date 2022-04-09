const express = require('express');

const todosController = require('../controllers/todos.controller');

const router = express.Router();

router.get('/', todosController.getTodos);

router.post('/', todosController.addTodo);

module.exports = router;