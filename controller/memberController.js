import Usermodel from "../models/Usermodel.js"
import membermodel from "../models/membermodel.js"

// Register Member
export const registermember = async (req,res,next)=>{
    try{
        const {name,Birthyear,gender,aadhar,user} = req.body
        const existinguser = await Usermodel.findById(user)
        if(!existinguser){
            return res.status(400).json({
                message:"User not found"
            })
        }
        const addmember = await new membermodel({
            name,
            Birthyear,
            gender,
            aadhar,
            user
        })
        await addmember.save()
        existinguser.member.push(addmember)
        await existinguser.save()
        res.status(200).send({
            message:"Member added Successfully",
            addmember,
        })

    }catch(error){
     console.log(error) 
    }

}

