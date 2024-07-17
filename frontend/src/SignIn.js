import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { useLoginMutation } from './store/Slice/UserApiSlice'
import { setCredentials } from './store/Slice/UserSlice'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function SignIn() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [login , {isLoading}]=useLoginMutation();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

      const SubmitHandle=async(e)=>{
        e.preventDefault();
        try{
          const res= await login({email,password}).unwrap();
          dispatch(setCredentials({...res}))
          toast.success("Login SucessFully ! ");
          navigate('/')
        }catch(err){
          toast.error(err?.data?.message || err.error);
        }
    }
  return (
    <div className='flex justify-center items-center flex-col '>
      <form className='flex flex-col mt-10 mx-4 sm:mt-20 sm:mx-30 md:mx-40 lg:mx-72 h-96 w-96  bg-white opacity-50 rounded-lg' onSubmit={SubmitHandle}>
      <input
              id='title'
              name='title'
              type='email'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
              placeholder='Email'
             required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}            
            />
        <input
              id='title'
              name='title'
              type='password'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
              placeholder='Password'
           required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
             
              
            />
            <div className='w-full ml-16 mr-16  py-2 px-3 rounded mt-10  h-11 flex flex-col'>
                <button  className='w-48 h-8 rounded-2xl bg-red-600 hover:bg-red-900 text-white mt-2' >Sign In</button>
                <Link to="/signup">
                    <div className='flex flex-row mt-6'>
                        <h1 className='text-black '>New Registration ?  </h1>
                        <button className=' ml-1 text-blue-900'> Sign Up</button>
                    </div>
                </Link>
            </div>
      </form>
      <div className='w-full ml-30 mr-16 py-2 px-3 rounded mt-8 h-11 flex justify-center'>
          <Link to="/">
            <button
              className='w-48 h-12 rounded-3xl bg-blue-200 ml-30 text-black mt-2 hover:bg-pink-400 hover:text-black transition duration-300 ease-in-out'
            >
              Home Page
            </button>
          </Link>
         
        </div>
     <ToastContainer/>
    </div>
  )
}
