const express = require('express');
const { Notes3 } = require('../Models/Notes3.model');

const router = express.Router();

//notes 1
router.post('/',async(req,res)=>{
    try{
     const note=await Notes3.create(req.body);
     res.status(201).send({note:note});

    }catch(err){
         res.status(501).send({message:err.message});
    }
})
router.get('/',async(req,res)=>{
    try{
     const notes=await Notes3.find().lean().exec();
     res.status(201).send({notes:notes});

    }catch(err){
         res.status(501).send({message:err.message});
    }
})


router.patch('/:id',async(req,res)=>{
    try{
     const note=await Notes3.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
     res.status(201).send({note:note});

    }catch(err){
         res.status(501).send({message:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
     const notes=await Notes3.findByIdAndDelete(req.params.id).lean().exec();
     res.status(201).send("item deleted");

    }catch(err){
         res.status(501).send({message:err.message});
    }
})





module.exports=router;