import Usermodel from "../models/Usermodel.js";
import { comparePassword, hashpassword } from "../helpers/hashpassword.js";
import JWT from "jsonwebtoken"


// User Register
export const UserRegister = async (req,res) => {
  try {
    const { name, phone, password, email, gender ,age } = req.body;
    const hashedPassword = await hashpassword(password);
    const register = await new Usermodel({
      name,
      phone,
      password:hashedPassword,
      email,
      gender,
      age,
    }).save();
    res.status(200).send({
      status: true,
      message: "User registration Successfull",
      register,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error in Registration",
      error,
    });
  }
};

// Login User
export const Login = async (req,res)=>{
  const {email,password} = req.body;
  // check user
  const user = await Usermodel.findOne({email});
  if(!user){
    return res.status(404).send({
      success:false,
      message:"Email is not registered"
    })
  }
  const match = await comparePassword(password, user.password);
  if(!match){
    return res.status(404).send({
      success:false,
      message:"Password is not matched"
    })
  }
  // Token Created

  const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn:"7d"});
  res.status(500).send({
    success:true,
    message : "Login Successfully",
    user:{
      name:user.name,
      email:user.email,
      phone:user.phone,
      age:user.age
    },
    token

  })
}

// Get Single User
export const getsingle = async(req,res)=>{
  try {
    const id = req.params.id
    const getsingle = await Usermodel.findById(id).populate("member")
    res.status(200).send({
      message:"Single Products",
      getsingle

    })
  } catch (error) {
    console.log(error)
  }
}

// Get all user
export const getall = async(req,res)=>{
  try {
    const findall = await Usermodel.find().populate("member")
    res.status(200).send({
      status:true,
      findall
    })
  } catch (error) {
    console.log(error)
  }
  
}
