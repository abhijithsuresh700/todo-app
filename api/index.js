import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"
import todoRoute from "./routes/todoRoute.js"

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from  server!'
    })
  })

  app.use("/api/auth", authRoute)
  app.use("/api/todo", todoRoute)


const connect = async()=>{
    try {
       await mongoose.connect(process.env.MONGODB);
       console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
}



app.listen(4000, ()=>{
    connect();
    console.log("Server is running on port 4000")
})