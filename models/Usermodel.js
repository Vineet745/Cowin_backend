import mongoose from "mongoose"
const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
      type:String,
      required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    member:[{type:mongoose.Schema.Types.ObjectId, ref:"member"}]
},{timestamps:true})

export default mongoose.model("user", Userschema)