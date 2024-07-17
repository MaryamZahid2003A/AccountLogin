import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUpdateMutation } from './store/Slice/UserApiSlice';
import { setCredentials } from './store/Slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Profile() {
  const { userInfo } = useSelector((state) => state.auth1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateApi] = useUpdateMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPassword(userInfo.password)
    
  }, [userInfo]);

  const SignUpHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await updateApi({ _id: userInfo._id, name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      setName("");  // Resetting the name field
      setEmail("");  // Resetting the email field
      setPassword("");  // Resetting the password field
      toast.success("Update Successfully!");
      navigate('/');
    } catch (err) {
      console.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <form className='flex flex-col mx-4 sm:mt-20 sm:mx-30 md:mx-40 lg:mx-72 h-96 w-96 bg-white rounded-lg opacity-50' onSubmit={SignUpHandle}>
        <input
          id='name'
          name='name'
          type='text'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
          placeholder='Name'
        
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id='email'
          name='email'
          type='email'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
          placeholder='E-mail'
        
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id='password'
          name='password'
          type='password'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
          placeholder='Password'
         
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='w-full ml-16 mr-16 py-2 px-3 rounded mt-6 h-11 flex flex-col'>
          <button className='w-48 rounded-2xl bg-red-600 hover:bg-red-900 text-white mt-2'>Update</button>
         
        </div>
      </form>
      <div className='w-full ml-30 mr-16 py-2 px-3 rounded mt-8 h-11 flex justify-center'>
        <Link to="/">
          <button
            className='w-48 h-12 rounded-3xl bg-blue-200 text-black mt-2 hover:bg-pink-400 hover:text-black transition duration-300 ease-in-out'
          >
            Home Page
          </button>
        </Link>
      </div>
      <ToastContainer/>
    </div>
  );
}
