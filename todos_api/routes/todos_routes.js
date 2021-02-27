const express = require("express");
const router = express.Router();

const helpers = require("../helpers/todos_helpers.js");


router.route("/")
    .get(helpers.getTodos)
    .post(helpers.postTodo);


router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);



module.exports = router;