import expressAsyncHandler from "express-async-handler";
import generateToken from "../utilis/generateToken.js";
import User from "../model/UserModel.js";

// Login

const Login=expressAsyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email})
    if (user && (await user.checkPassword(password))){
        console.log('Sucessfully Login')
        generateToken(res,user._id)
        res.status(200).json({
            message: "Sucessfully login",
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password
        })
    }
    else{
        res.status(400).json({
            message:" Invalid Email or Password"
        })
    }
})
// Register

const register=expressAsyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const UserExist=await User.findOne({email})
        console.log('User Already exist')
        if (UserExist){
            res.status(400);
            throw new Error('Already Exist')
        }

       const user= await User.create({
            name,
            email,
            password
       })
       if (user){
            generateToken(res,user._id)
            res.status(200).json({
                _id:user._id,
                name:user.name,
                password:user.password,
                email:user.email
            })
       }
       else{
        res.status(400)
        throw new Error('Invalid Email or Password')
       }
    }
    catch(error){
        console.log(`error occured ${error}`)
        res.status(400).json({message: error.message})
    }
})

// Logout
const logout=expressAsyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)

    })
    res.status(400).json({
        message:"Sucessfully Logout ! ",
        name:req.body,
    })
})


//Get Profile
const getProfile=expressAsyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id)

    if (user){
        res.status(201).json({
            message: "Sucessfully Shown the data",
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }
    else{
        res.status(400);
        throw new Error('User Does Not Exist')
    }
})

//Get Update User 
const UpdateUser=expressAsyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id)

    if (user){
        user.name=req.body.name || user.name;
        user.email=req.body.email || user.email;
    
        if(req.body.password){
            user.password=req.body.password;
        }
        const UpdateUser= await user.save();
        res.status(201).json({
            message:"User Updated Sucessfully",
            _id:UpdateUser._id,
            name:UpdateUser.name,
            email:UpdateUser.email
        })
    }
    else{
        res.status(400);
        throw new Error('User Does Not Exist')
    }

})



export {
    register,
    Login,
    logout,
    getProfile,
    UpdateUser
}