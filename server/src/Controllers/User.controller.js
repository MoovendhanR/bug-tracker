const express = require('express');
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken");

const User = require('../Models/User.model.js');


const router = express.Router();


router.post("/register",async(req,res) => {
  const {email,password} = req.body;
    try{
      bcrypt.hash(password, 5, async(err, secure_password) => {
        // Store hash in your password DB.
        if(err) {
            console.log(err);
        }else {
          const user = await User.create({email,password:secure_password});
          res.status(201).send({user: user});

        }
    });
    }catch(err){
      res.status(500).send({err: err.message});
    }
})



router.post("/login",async(req,res) => {
     const {email,password} = req.body;
    try{
      const user = await User.find({email});
      const hashed_password=user[0].password
      if(user.length>0){     
      bcrypt.compare(password,hashed_password, async(err, result)=>{
          // result == true
          if(result){
            const token = jwt.sign({course:"backend"},"masai")          
            res.status(201).send({"msg":"login successfull!","token":token});
          }else{
            res.status(501).send("Wrong credentials")

          }
      });
    }else{
      res.status(501).send("Wrong credentials")
    }
      
    }catch(err){
      res.status(501).send({err: err.message});
    }
})





module.exports = router;