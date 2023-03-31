const mongoose = require("mongoose");

const noteSchema2 = new mongoose.Schema({
    notes2:{
        type:String,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});


const Notes2=mongoose.model("notes2",noteSchema2);


module.exports={
 
    Notes2,
};