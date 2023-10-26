import express from "express";
import { createTodo,getAllTodos,getSingleTodo,updateTodo,deleteTodo } from "../controllers/todoController.js";

const router =express.Router();

router.post("/",createTodo);
router.get("/",getAllTodos);
router.get("/:id",getSingleTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router