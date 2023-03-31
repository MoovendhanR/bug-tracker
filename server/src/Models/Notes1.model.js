const mongoose = require("mongoose");

const noteSchema1 = new mongoose.Schema({
    notes1:{
        type:String,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

const Notes1=mongoose.model("notes1",noteSchema1);


module.exports={
    Notes1,
};