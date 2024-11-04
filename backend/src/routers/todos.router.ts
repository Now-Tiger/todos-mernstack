import { Router } from "express";
import { getTodos, getTodoById, updateTodoById, addTodo } from "../controllers/todos.controller";

const todosRouter = Router();

todosRouter.get("/todos", getTodos);
todosRouter.get("/todos/:id", getTodoById);
todosRouter.post("/todos/add", addTodo);
todosRouter.put("/completed", updateTodoById);

export default todosRouter;
