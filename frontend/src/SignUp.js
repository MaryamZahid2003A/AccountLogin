import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <form className='flex flex-col mx-4 sm:mt-20 sm:mx-30 md:mx-40 lg:mx-72 h-96 w-96 bg-white rounded-lg opacity-50'>
        <input
          id='name'
          name='name'
          type='text'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
          placeholder='Name'
          required
        />
        <input
          id='email'
          name='email'
          type='email'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
          placeholder='E-mail'
          required
        />
        <input
          id='password'
          name='password'
          type='password'
          className='border-b-2 w-72 ml-8 mr-8 py-1 px-3 border-slate-500 text-black mt-14'
          placeholder='Password'
          required
        />
        <div className='w-full ml-16 mr-16 py-2 px-3 rounded mt-6 h-11 flex flex-col'>
          <button className='w-48 rounded-2xl bg-red-600 hover:bg-red-900 text-white mt-2'>Sign Up</button>
          <Link to="/login">
            <div className='flex flex-row mt-4'>
              <h1 className='text-black'>Already have an account?</h1>
              <button className='ml-1 text-blue-900'>Login In</button>
            </div>
          </Link>
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
    </div>
  );
}
