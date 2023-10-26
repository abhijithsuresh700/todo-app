import Todo from "../models/todoModel.js";

export const createTodo = async(req,res)=>{
    console.log("hitted here",req.body)
    const todo = new Todo({
        todoItem:req.body.todoItem,
        userId:req.body.userId
    })
    try {
        await todo.save();
        res.status(200).json(todo)
    } catch (error) {
        console.log(error)
    }
}

export const getAllTodos = async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
    }
}

export const getSingleUserTodos = async(req,res)=>{
    console.log(req.params.id,"id check")
    try {
        const todos = await Todo.find({userId:req.params.id});
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
    }
}

export const getSingleTodo = async(req,res)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo)
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(todo)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = async(req,res)=>{
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Todo has been deleted")
    } catch (error) {
        console.log(error)
    }
}