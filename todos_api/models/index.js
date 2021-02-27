const mongoose = require("mongoose");
mongoose.set("debug", true);
const uri = "mongodb+srv://bahar:todosPass@todolist.vojb1.mongodb.net/TodoList?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true  }, { useNewUrlParser: true })
.then(console.log("DB connected!"))
.catch(err => console.log("Error!",err));
mongoose.Promise = Promise;

module.exports.Todo = require("./todo.js");