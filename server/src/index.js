const express=require('express');
const mongoose=require('mongoose');
const connect = require('./config/db');
const cors=require("cors");
require('dotenv').config()

const userController = require("./Controllers/User.controller.js")
const noteController = require("./Controllers/Notes.controller.js");
const authenticate = require('./Middleware/Authenticate.middleware.js');
const app = express();

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/users",userController);
app.use(authenticate)
app.use("/notes",noteController);


const port = process.env.port || 5000;

app.listen(port , async()=>{
    try {
       await connect()
        console.log(`listening on port ${port}`)
    }catch(err){
        console.error(err);
    }
})