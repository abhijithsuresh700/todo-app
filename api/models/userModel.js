import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  number:{
    type: Number,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
},{timestamps: true});

export default mongoose.model("Users", userSchema)
