import expressAsyncHandler from "express-async-handler";

//register
const register=expressAsyncHandler(async(req,res)=>{
        console.log('REGISTER')
        res.status(500).json({ message: "You are in register"});
})

const Login=expressAsyncHandler(async(req,res)=>{
    console.log('REGISTER')
    console.log(req.body)
    res.status(200).json({ message: "You are in register"});
})

const logout=expressAsyncHandler(async(req,res)=>{
    console.log('Logout')
})

const getProfile=expressAsyncHandler(async(req,res)=>{
    console.log('get Profile')
})

const UpdateUser=expressAsyncHandler(async(req,res)=>{
    console.log('Update')
})



export {
    register,
    Login,
    logout,
    getProfile,
    UpdateUser
}