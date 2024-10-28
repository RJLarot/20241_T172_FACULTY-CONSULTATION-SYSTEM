import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemon from 'nodemon'
import studentRoutes from "./routes/studentRoutes.js"
import React from 'react';
import studentLogin from './controller/studentLogin.js';


dotenv.config()
const app = express()
const port = process.env.Port
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB)
    
    }catch{
        console.log("Error Connecting to MONGDB")
    }
}

mongoose.connection.on("connected", ()=>{
    console.log("Connected to MONGODB");
    
})

mongoose.connection.on("disconnected", ()=>{
    console.log("Disconneced from MONGODB");
    
})


//GET
app.use("/api/student", studentRoutes)

const corsOption = {
    origin: ["http://localhost:3000"],
    credentials: true,
}
app.use(cors(corsOption))

app.listen(port, () => {
    connect();
    console.log(`Listening to Port ${port}` );
    
})

function App() {
    return (
      <div className="App">
        <h1>Faculty Consultation Management System</h1>
        <StudentLogin />
      </div>
    );
  }

  export default App;  