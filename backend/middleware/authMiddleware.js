import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../model/UserModel.js'

const protect=expressAsyncHandler(async(req,res,next)=>{
    try{
        let token;
        token=req.cookies.jwt;
        if (token){
            const decode=jwt.verify(token,process.env.SECRET_KEY)
            req.user=await User.findById(decode.userId).select('-password')
            next()
        }
        else{
                res.status(400).json({
                    message:"Unauthorized User : Invalid Token"
                })
        }
    }
    catch(error){
            res.status(400).json({
                    message: "Unauthorized User :No Token"
            })
    }
        
        
})
export {protect};