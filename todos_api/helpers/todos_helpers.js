const db = require("../models");

//Lists all todos
exports.getTodos = function(req,res){
    db.Todo.find()
    .then(todos => {
        res.json(todos);
    })
    .catch(err => res.send(err));
};


//Creates a new todo
exports.postTodo = (req,res) => {
    db.Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.send(err))
}


//Gets one todo by having the id
exports.getTodo = (req,res) => {
    db.Todo.findById(req.params.todoId)
    .then(foundTodo => res.json(foundTodo))
    .catch(err => res.send(err))
}

//Updates one todo by having the id
exports.updateTodo =  (req,res) => {
    db.Todo.findByIdAndUpdate(req.params.todoId,req.body, {new: true})
    .then(updatedTodo => res.json(updatedTodo))
    .catch(err => res.send(err))
}

//Removes one todo by having the id
exports.deleteTodo =  (req,res) => {
    db.Todo.findOneAndDelete({_id:req.params.todoId})
    .then(deletedTodo => res.json(deletedTodo))
    .catch(err => res.send(err))
}


module.exports = exports;