import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from './store/Slice/UserApiSlice.js';
import { logout } from './store/Slice/UserSlice.js';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar() {
  const { userInfo } = useSelector((state) => state.auth1); // Ensure the correct slice name is used here
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  const SubmitLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      toast.success("Logout Successfully!");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="w-full h-24 bg-white opacity-60 flex items-center px-4">
        <h1 className="text-black text-3xl ml-10">Login Authentication</h1>
        {userInfo ? (
          <div className="ml-auto flex flex-col items-end">
            <h1 className="text-2xl mr-10">{userInfo.name}</h1>
            <div className="flex mr-10">
              <Link to="/profile" className="text-1xl mr-3 text-blue-700 hover:underline-offset-auto">Profile</Link>
              <button className="text-1xl text-red-700 hover:underline-offset-auto" onClick={SubmitLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="ml-auto flex items-center">
            <Link to="/login" className="text-1xl mr-3 text-blue-700 hover:underline-offset-auto">Sign In</Link>
            <Link to="/signup" className="text-1xl text-blue-700 hover:underline-offset-auto">Sign Up</Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}
