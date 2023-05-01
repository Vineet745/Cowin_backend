import mongoose from "mongoose"
const Centerschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    state:{
      type:String, 
      required:true
    },
    city:{  
        type:String,
        required:true
    },
    slots:{
        type:String,
        required:true
    },
    dates:{
        type:Array,
        required:true
    },
    timing:{
        type:Array,
        required:true
    }
    
}, {timestamps:true})

export default mongoose.model("center", Centerschema)