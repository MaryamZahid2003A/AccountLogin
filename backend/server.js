import express, { json } from 'express'
import dotenv from 'dotenv'
import { NotFound,handle } from './middleware/error.js';
import router from './router/UserRouter.js';
dotenv.config();


const app=express();
const port=process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(NotFound)
app.use(handle)
app.use('/api/users',router)
app.get('/',(req,res)=>{
    res.send('Server is ready ! ')
})

app.listen(port,()=>{
    console.log(`Server Running at port ${port}`)
})
