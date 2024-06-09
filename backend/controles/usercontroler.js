import userModel from "../moddels/usermoddle.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user

const loginUser=async(req,res)=>{
  const{email,password}=req.body;
  try{
    const user=await userModel.findOne({email})
    if(!user){
       return res.json({success:false,message:"User Dodes not Exist"})
    }
    const isMatch=await bcrypt.compare(password,user.password);

   if (!isMatch) {
      return res.json({success:false,message:"Invalid Credentials"});

   }

   const token=createToken(user._id)
   res.json({success:true,token})

  }catch(error){
  console.log(error);
  res.json({success:false,message:"error"})
  }
}

const createToken =(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET)
}


//register
  const registerUser=async(req,res)=>{
      const {name,password,email}=req.body;

      try {
        //checking is user alredy exist
        const exists=await userModel.findOne({email})
        if(exists){
          return res.json({success:false,message:"User Alredy exists"})
        }
        //validating email format and strong password
        if(!validator.isEmail(email))
          {
                 return res.json({success:false,message:"Plaese Enter Valid Email"})
        }
        if(password.length<8){
          return res.json({success:false,message:"Password Enter A srong password"})
        }
        // hasing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt);

       const newUser=new userModel({
        name:name,
        email:email,
        password:hashedPassword
       })

      const user=await newUser.save()
      const token=createToken(user._id)
      res.json({success:true,token})



      } catch (error) {
           console.log(error);
           res.json({success:false,message:"Internal Server Error"})
      }
  }


  export {loginUser,registerUser}
