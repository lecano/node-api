const Todo = require('../models/todo.model');

async function getTodos(req, res, next) {
    let todos;

    try {
        todos = await Todo.getTodos();
    } catch (error) {
        return next(error);
    }

    res.json({
        todos: todos
    });
}

async function addTodo(req, res, next) {
    const todoText = req.body.text;

    const todo = new Todo(todoText);

    let insertedId;

    try {
        const result = todo.save();
        insertedId = result.insertedId;
    } catch (error) {
        return next(error);
    }

    todo.id = insertedId.toString();

    res.json({
        message: 'Added successfully.',
        todo: todo
    });
}

async function updateTodo(req, res, next) {
    const randomQuote = await Quote.getRandomQuote();

    res.json({
        quote: randomQuote
    });
}

async function deleteTodo(req, res, next) {
    const randomQuote = await Quote.getRandomQuote();

    res.json({
        quote: randomQuote
    });
}

module.exports = {
    getTodos: getTodos,
    addTodo: addTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}