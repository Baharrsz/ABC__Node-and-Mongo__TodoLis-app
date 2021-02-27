/* global $ */

$("document").ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(err => console.log(err));
    
    $("#todoInput").keypress(event => {
        if (event.which == 13) createTodo();
    });
});

function addTodos(todos){
    todos.forEach(todo => addTodo(todo));
}

function addTodo(todo) {
    const newTodo = $('<li>'+todo.name+'</li>');
    newTodo.addClass("task");
    if (todo.completed) newTodo.addClass("done");
    $('.list').append(newTodo);
}

function createTodo() {
    const newTodo = $("#todoInput").val();
    $.post("/api/todos",{name: newTodo})
    .then(postedTodo => {
        addTodo(postedTodo);
        $("#todoInput").val("");
    })
    .catch(err => console.log(err));
}