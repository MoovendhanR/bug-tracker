const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    notes:{
        type:String,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

const Notes=mongoose.model("notes",noteSchema);
const Notes1=mongoose.model("notes1",noteSchema);
const Notes2=mongoose.model("notes2",noteSchema);
const Notes3=mongoose.model("notes3",noteSchema);


module.exports={
    Notes,
    Notes1,
    Notes2,
    Notes3,
};