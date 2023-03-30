const express=require('express');
const mongoose=require('mongoose');
const connect = require('./config/db');
const userController = require("./Controllers/User.controller.js")
require('dotenv').config()

const app = express();

app.use(express.json())

app.use("/",userController);

const port = process.env.port || 5000;

app.listen(port , async()=>{
    try {
       await connect()
        console.log(`listening on port ${port}`)
    }catch(err){
        console.error(err);
    }
})