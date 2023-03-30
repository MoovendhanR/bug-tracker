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






module.exports = router;