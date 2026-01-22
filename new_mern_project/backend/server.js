const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.mongo_uri)
    .then(()=> console.log("Connected Successfully"))
    .catch((err)=> console.log(err));

app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRouter'))

app.listen(4000,()=>{
    console.log("Server Running at port 4000");
});