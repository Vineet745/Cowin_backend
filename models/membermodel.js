import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Birthyear:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    aadhar:{
           type:Number,
           required:true
    },
    user:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
 
}, {timestamps:true})

export default mongoose.model("member", memberSchema);