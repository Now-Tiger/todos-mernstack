import { Request, Response } from "express"
import { todo } from "../../src/models/todo.model";
import { createTodo, updateTodo } from "../types/todos.zodtypes";


/** GET - a single todo from database table / collection */
export const getTodoById = async (req: Request, res: Response) => {
  try {
    const id = req?.params?.id;
    const singleTodo = await todo.findById(id);
    res.status(200).json({ data: singleTodo });
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
}

/** GET - all todos */
export const getTodos = async (_req: Request, res: Response) => {
  try {
    const data = await todo.find();
    res.status(200).json({ todos: data });
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
}

/** UPDATE - a single todo by given id */
export const updateTodoById = async (req: Request, res: Response) => {
  try {
    const id = req.body;
    const result = updateTodo.safeParse(id);
    if (result.error) {
      res.status(411).json({ message: "Error parsing request body", error: result.error.flatten() });
    } else {
      await todo.updateOne({ _id: id["id"] }, { completed: true });
      res.status(201).json({ message: "Todo updated successfully!" });
    }
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
}

/** POST - add/create single create in the todos table/collection */
export const addTodo = async (req: Request, res: Response) => {
  try {
    const payload = req?.body;
    const result = createTodo.safeParse(payload);
    if (result.error) {
      res.status(411).json({ message: "Error parsing request body", error: result.error.flatten() });
    } else {
      await todo.create({
        title: payload["title"],
        description: payload["description"],
        completed: false
      })
      res.status(201).json({ message: "Todo created successfully" });
    }
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
}
