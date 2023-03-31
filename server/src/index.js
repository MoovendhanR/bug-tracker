const express=require('express');
const mongoose=require('mongoose');
const connect = require('./config/db');
const cors=require("cors");
require('dotenv').config()

const userController = require("./Controllers/User.controller.js")
const noteController = require("./Controllers/Notes.controller.js");
const noteController1 = require("./Controllers/Notes1.controller.js");
const noteController2 = require("./Controllers/Notes2.controller.js");
const noteController3 = require("./Controllers/Notes3.controller.js");

const authenticate = require('./Middleware/Authenticate.middleware.js');
const app = express();

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/notes1",noteController1);
app.use("/users",userController);
app.use(authenticate)
app.use("/notes",noteController);
app.use("/notes2",noteController2);
app.use("/notes3",noteController3);



const port = process.env.port || 5000;

app.listen(port , async()=>{
    try {
       await connect()
        console.log(`listening on port ${port}`)
    }catch(err){
        console.error(err);
    }
})