import express, { Request, Response } from "express";
import todosRouter from "./routers/todos.router";

const port = process.env.PORT ?? 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1", todosRouter);

app.get("/", async (_req: Request, res: Response) => {
  res.status(200).json({ message: "Root" });
})

app.listen(Number(port), "127.0.0.1", () => {
  console.log(`application started @ http://localhost:${port}`);
})
