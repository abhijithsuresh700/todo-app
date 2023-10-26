import mongoose from "mongoose";

const {Schema} = mongoose;

const todoSchema = new Schema({
    todoItem:{
        type:String,
        required:true
    },
    userId: {
        type: String,
        required: true,
      },
},{timestamps:true})

export default mongoose.model("Todo", todoSchema);