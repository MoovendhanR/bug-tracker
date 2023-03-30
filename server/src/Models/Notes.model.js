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

module.exports={
    Notes
};