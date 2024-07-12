import expressAsyncHandler from "express-async-handler";


//register
const register=expressAsyncHandler(async(req,res)=>{
        console.log('REGISTER')
})

const Login=expressAsyncHandler(async(req,res)=>{
    console.log('LogIn')
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