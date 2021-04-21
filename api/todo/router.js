const express = require("express");
const controller = require("./controller");

const todoRouter = express.Router();

todoRouter.get("/", controller.getTodos);

todoRouter.post("/", controller.addTodo);

todoRouter.put("/:id", controller.updateTodo);

todoRouter.patch("/:id", controller.patchTodo);

todoRouter.delete("/:id", controller.deleteTodo);

module.exports = todoRouter;
