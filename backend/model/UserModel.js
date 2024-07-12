import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

UserSchema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,12)
})

UserSchema.methods.checkPassword= async function(Entered){
    return await bcrypt.compare(Entered,this.password)
}
const User=mongoose.model('User',UserSchema)

export default User;