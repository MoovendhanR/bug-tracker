const mongoose = require("mongoose");

const noteSchema3 = new mongoose.Schema({
    notes3:{
        type:String,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

const Notes3=mongoose.model("notes3",noteSchema3);


module.exports={
  
    Notes3
};