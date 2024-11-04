import { z } from "zod";

export const createTodo = z.object({
  title: z.string().trim().min(3, { message: "title length should be more than 3" }),
  description: z.string().trim().min(3, { message: "description length should be more than 3" })
})

export const updateTodo = z.object({
  id: z.string().trim().min(5, { message: "ID length should not be less than 5" }).max(30)
})
