import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to Mongo ${connect.connection.host}`)
    }
    catch(error){
        console.error(`Error message ${error.message}`)
        process.exit(1);
    }
}

export default connectDb;