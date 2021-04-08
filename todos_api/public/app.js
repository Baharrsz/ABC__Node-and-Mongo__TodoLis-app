/* global $ */

$("document").ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(err => console.log(err));
    
    $("#todoInput").keypress(event => {
        if (event.which == 13) createTodo();
    });
    
    $('.list').on('click', 'span', (e) => {
        deleteTodo($(e.target.parentElement));
    });
});

function addTodos(todos){
    todos.forEach(todo => addTodo(todo));
}

function addTodo(todo) {
    const newTodo = $('<li>'+todo.name+'<span>X<span></li>');
    newTodo.addClass("task");
    newTodo.data('id', todo._id);
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

function deleteTodo(todo) {
    let id = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: `/api/todos/${id}`
    })
    .then(() => todo.remove())
    .catch(err => console.log(err));
}