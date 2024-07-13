import React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col mt-10 mx-4 sm:mt-20 sm:mx-30 md:mx-40 lg:mx-72 h-96 w-96 bg-white opacity-50 rounded-lg'>
        <div>
          <h1 className='text-center text-2xl mt-6'>Authentication</h1>
          <p className='text-center mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum, eligendi id eveniet distinctio minus iure dolorem.
          </p>
        </div>
        <div className='w-full ml-20 mr-16 py-2 px-3 rounded mt-8 h-11 flex flex-col'>
          <Link to="/login">
            <button
              className='w-48 h-12 rounded-3xl bg-black text-white mt-2 hover:bg-pink-300 hover:text-black transition duration-300 ease-in-out'
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              className='w-48 h-12 rounded-3xl bg-black mt-2 text-white hover:bg-pink-300 hover:text-black transition duration-300 ease-in-out'
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
