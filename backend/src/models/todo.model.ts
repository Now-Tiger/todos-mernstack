import * as dotenv from "dotenv";
import { Schema, connect, model } from "mongoose";
import { ITodo } from "./todo.schema";

dotenv.config();

const uri = process.env.MONGODB_URI ?? "NaN";
connect(uri);

const todoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
})

export const todo = model('todos', todoSchema);
